import React, { useEffect, useRef, useState } from 'react';

type CursorVariant = 'default' | 'hover' | 'view' | 'drag' | 'magnetic';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Smooth lerp coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device has coarse pointer or touch screen
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Direct update for the sharp center dot (zero latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element data attributes or tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setVariant('view');
        setCursorText('VIEW');
      } else if (cursorAttr === 'drag') {
        setVariant('drag');
        setCursorText('DRAG ↔');
      } else if (cursorAttr === 'magnetic') {
        setVariant('magnetic');
        setCursorText('');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('.interactive-card')
      ) {
        setVariant('hover');
        setCursorText('');
      } else {
        setVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics loop for the trailing outer ring
    const render = () => {
      // Lerp ring towards mouse with smooth damping factor
      const ease = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Precision Center Pointer */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            variant === 'hover'
              ? 'w-2 h-2 bg-[#FF2A4D] shadow-[0_0_12px_#FF2A4D]'
              : variant === 'view' || variant === 'drag'
              ? 'w-1 h-1 bg-white opacity-40'
              : 'w-2 h-2 bg-[#FF2A4D] shadow-[0_0_10px_rgba(255,42,77,0.9)]'
          }`}
        />
      </div>

      {/* Outer Easing Ring with Adaptive States */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            variant === 'default'
              ? 'w-8 h-8 border border-[#FF2A4D]/40 bg-[#FF2A4D]/5 backdrop-blur-[0.5px]'
              : variant === 'hover'
              ? 'w-12 h-12 border border-[#FF2A4D] bg-[#FF2A4D]/15 shadow-[0_0_24px_rgba(255,42,77,0.4)] scale-110'
              : variant === 'magnetic'
              ? 'w-14 h-14 border-2 border-[#FF2A4D] bg-[#FF2A4D]/25 shadow-[0_0_30px_rgba(255,42,77,0.5)]'
              : variant === 'view'
              ? 'w-20 h-20 border border-[#FF2A4D] bg-[#050608]/95 shadow-[0_0_30px_rgba(255,42,77,0.5)] text-[11px] font-mono font-bold tracking-wider text-[#FF2A4D]'
              : variant === 'drag'
              ? 'w-24 h-10 rounded-full border border-[#FF2A4D] bg-[#050608]/95 shadow-[0_0_30px_rgba(255,42,77,0.4)] text-[10px] font-mono font-bold tracking-widest text-[#FF2A4D]'
              : 'w-8 h-8 border border-[#FF2A4D]/40'
          }`}
        >
          {cursorText && (
            <span ref={textRef} className="select-none animate-pulse">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { SafeImage } from './SafeImage';
import { 
  Sliders, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  CheckCircle2, 
  AlertTriangle,
  Wrench,
  PoundSterling
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMode, setLightboxMode] = useState<'split' | 'before' | 'after'>('split');

  const containerRef = useRef<HTMLDivElement>(null);
  const currentProject = BEFORE_AFTER_PROJECTS[activeProjectIndex];

  // Calculate mouse/touch slider position percentage
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation for slider
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  // Lightbox keyboard controls (Esc, Arrow keys)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') {
        setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : BEFORE_AFTER_PROJECTS.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveProjectIndex((prev) => (prev < BEFORE_AFTER_PROJECTS.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <section id="before-after" className="py-24 bg-[#08090C] relative overflow-hidden border-t border-white/[0.06]">
      {/* Decorative background grid and lighting in crimson */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Interactive Bench Showcase"
          badgeIcon={<Sliders className="w-3.5 h-3.5" />}
          titlePrefix="See the Difference."
          titleHighlight="Understand the Process."
          description="Compare damaged and restored automotive electronic assemblies. Drag the slider to reveal component-level micro-soldering, chemical cleaning, and track reconstruction."
          align="center"
        />

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => {
            const isActive = idx === activeProjectIndex;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white font-bold shadow-[0_0_20px_rgba(255,30,39,0.5)] scale-105'
                    : 'bg-[#0E1015] text-[#9CA3AF] hover:text-white hover:bg-[#161820] border border-white/5'
                }`}
              >
                <span>{proj.category}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Comparison Slider Box (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              data-cursor="drag"
              tabIndex={0}
              role="slider"
              aria-label="Before and after image comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderPosition}
              onKeyDown={handleKeyDown}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-red-500/30 bg-[#090A0E] select-none shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-ew-resize group outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {/* "AFTER" Image (Full background layer) with SafeImage */}
              <div className="absolute inset-0 w-full h-full">
                <SafeImage
                  src={currentProject.afterImage}
                  fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt={currentProject.afterLabel}
                  className="w-full h-full object-cover filter contrast-105"
                  draggable={false}
                />
              </div>
              
              {/* "AFTER" Floating Label */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5 z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>RESTORED / VERIFIED</span>
              </div>

              {/* "BEFORE" Image (Clipped layer on the left) with SafeImage */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <SafeImage
                    src={currentProject.beforeImage}
                    fallbackSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
                    alt={currentProject.beforeLabel}
                    className="w-full h-full object-cover filter grayscale contrast-110"
                    draggable={false}
                  />
                </div>
                
                {/* "BEFORE" Floating Label */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-red-500/50 text-[11px] font-mono font-semibold text-red-400 flex items-center gap-1.5 z-10">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>DAMAGED / ARRIVAL</span>
                </div>
              </div>

              {/* Draggable Vertical Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_#FF1E27] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#090A0E] border-2 border-red-500 shadow-[0_0_20px_#FF1E27] flex items-center justify-center text-white text-xs font-mono">
                  <span className="text-[10px] tracking-tighter text-red-400">◀ ▶</span>
                </div>
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
                className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/80 hover:bg-red-600 text-white border border-white/20 transition-all z-20 cursor-pointer"
                aria-label="Open fullscreen image lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Help hint */}
              <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#9CA3AF] z-10 pointer-events-none">
                DRAG OR USE ◀ / ▶ KEYS
              </div>
            </div>
          </div>

          {/* Project Details Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090A0E] border border-white/10 shadow-xl">
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-[11px] font-mono text-red-400 font-semibold uppercase">
                  {currentProject.vehicle}
                </span>
                
                {/* Previous / Next buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : BEFORE_AFTER_PROJECTS.length - 1));
                      setSliderPosition(50);
                    }}
                    className="p-1.5 rounded-lg bg-[#0E1015] hover:bg-[#161820] text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveProjectIndex((prev) => (prev < BEFORE_AFTER_PROJECTS.length - 1 ? prev + 1 : 0));
                      setSliderPosition(50);
                    }}
                    className="p-1.5 rounded-lg bg-[#0E1015] hover:bg-[#161820] text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight">
                {currentProject.title}
              </h3>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 mb-6 bg-red-950/30 px-2.5 py-1 rounded border border-red-500/20">
                <Wrench className="w-3.5 h-3.5" />
                <span>{currentProject.faultCode}</span>
              </div>

              {/* Diagnosis breakdown */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5">
                  <div className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Arrival Condition</span>
                  </div>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {currentProject.issueDescription}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1015] border border-white/5">
                  <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Bench Resolution</span>
                  </div>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {currentProject.resolutionDescription}
                  </p>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#9CA3AF]">
                  Customer Benefit:
                </span>
                <span className="text-xs font-mono font-bold text-white bg-red-950/40 px-3 py-1 rounded-full border border-red-500/30">
                  {currentProject.savingsEstimate}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 text-white">
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  {currentProject.title}
                </h3>
                <span className="text-xs font-mono text-red-400">
                  {currentProject.vehicle} &bull; {currentProject.faultCode}
                </span>
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxMode('before')}
                  className={`px-3 py-1 rounded text-xs font-mono cursor-pointer ${
                    lightboxMode === 'before' ? 'bg-red-600 text-white font-bold' : 'bg-[#161820] text-[#9CA3AF]'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setLightboxMode('after')}
                  className={`px-3 py-1 rounded text-xs font-mono cursor-pointer ${
                    lightboxMode === 'after' ? 'bg-emerald-600 text-white font-bold' : 'bg-[#161820] text-[#9CA3AF]'
                  }`}
                >
                  After
                </button>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-[#161820] hover:bg-white/20 text-white ml-3 cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image View with SafeImage */}
            <div className="relative w-full my-4 flex items-center justify-center max-h-[70vh] overflow-hidden rounded-xl bg-black">
              <SafeImage
                src={lightboxMode === 'before' ? currentProject.beforeImage : currentProject.afterImage}
                fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt={lightboxMode === 'before' ? currentProject.beforeLabel : currentProject.afterLabel}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="w-full text-center text-xs font-mono text-[#9CA3AF]">
              {lightboxMode === 'before' ? currentProject.issueDescription : currentProject.resolutionDescription}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

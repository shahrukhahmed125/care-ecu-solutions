import React, { useState } from 'react';
import { Cpu, Wrench } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  aspectRatioClass?: string;
}

// Collection of ultra-reliable automotive & electronics images
const RELIABLE_FALLBACKS = [
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80'
];

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  aspectRatioClass = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (fallbackAttempt === 0 && fallbackSrc && fallbackSrc !== currentSrc) {
      setFallbackAttempt(1);
      setCurrentSrc(fallbackSrc);
    } else if (fallbackAttempt < RELIABLE_FALLBACKS.length) {
      const nextFallback = RELIABLE_FALLBACKS[fallbackAttempt];
      setFallbackAttempt((prev) => prev + 1);
      setCurrentSrc(nextFallback);
    } else {
      setHasFailedAll(true);
    }
  };

  if (hasFailedAll) {
    // High-tech Red & Black SVG Circuit Diagnostic Fallback Card
    return (
      <div
        className={`relative w-full h-full min-h-[160px] bg-gradient-to-br from-[#0F1117] via-[#090A0E] to-[#050507] border border-red-500/30 flex flex-col items-center justify-center p-6 select-none overflow-hidden ${aspectRatioClass} ${className}`}
      >
        {/* Animated Cyber Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#FF1E27_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-red-950/20 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-950/40 border border-red-500/50 shadow-[0_0_25px_rgba(255,30,39,0.35)] flex items-center justify-center text-red-500 mb-3">
            <Cpu className="w-7 h-7 animate-pulse" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase mb-1">
            CARE ECU DIAGNOSTICS
          </span>
          <span className="text-[11px] font-mono text-neutral-400 max-w-[200px] truncate">
            {alt || 'Vehicle Circuitry Diagnostics'}
          </span>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-500/30 text-[9px] font-mono text-red-300">
            <Wrench className="w-2.5 h-2.5" />
            <span>BENCH RIG CERTIFIED</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {/* Skeleton / Shimmer background while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0C0D12] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

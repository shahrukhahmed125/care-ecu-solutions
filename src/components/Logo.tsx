import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon-only';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  showSubtitle = true 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Automotive ECU Chip & Pulse Emblem in Crimson Red */}
      <div className="relative flex items-center justify-center shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#1C080B] via-[#10131A] to-[#050608] border border-[#E51937]/50 shadow-[0_0_15px_rgba(229,25,55,0.35)] group-hover:border-[#FF2A4D] group-hover:shadow-[0_0_22px_rgba(255,42,77,0.5)] transition-all duration-300">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          {/* Outer ECU Pins */}
          <line x1="8" y1="2" x2="8" y2="7" stroke="#E51937" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="16" y1="2" x2="16" y2="7" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="24" y1="2" x2="24" y2="7" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="32" y1="2" x2="32" y2="7" stroke="#E51937" strokeWidth="1.6" strokeLinecap="round" />

          <line x1="8" y1="37" x2="8" y2="42" stroke="#E51937" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="16" y1="37" x2="16" y2="42" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="24" y1="37" x2="24" y2="42" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="32" y1="37" x2="32" y2="42" stroke="#E51937" strokeWidth="1.6" strokeLinecap="round" />

          {/* Lateral Pins */}
          <line x1="2" y1="12" x2="7" y2="12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="2" y1="22" x2="7" y2="22" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="2" y1="32" x2="7" y2="32" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

          <line x1="37" y1="12" x2="42" y2="12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="37" y1="22" x2="42" y2="22" stroke="#FF2A4D" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="37" y1="32" x2="42" y2="32" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

          {/* Main ECU Chip Carrier */}
          <rect x="7" y="7" width="30" height="30" rx="4" fill="#0B0D12" stroke="#E51937" strokeWidth="1.4" />

          {/* Internal Die / Circuit Pathways */}
          <path
            d="M12 16H18L21 21H27L30 16H32"
            stroke="#FF2A4D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 28H17L20 23H26L29 28H32"
            stroke="#E51937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Center Diagnostic Pulse / Core Node */}
          <circle cx="22" cy="22" r="3.2" fill="#FF2A4D" />
          <circle cx="22" cy="22" r="5.5" stroke="#E51937" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>

        {/* Ambient Crimson Glow */}
        <div className="absolute inset-0 rounded-lg bg-[#E51937]/15 blur-sm pointer-events-none" />
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white uppercase">
              Care<span className="text-[#FF2A4D]">ECU</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#1C080B] text-[#FF2A4D] border border-[#E51937]/40 uppercase tracking-wider">
              Solutions
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[9px] font-mono tracking-widest text-[#9CA3AF] uppercase mt-1">
              Automotive Electronics &bull; Romford
            </span>
          )}
        </div>
      )}
    </div>
  );
};

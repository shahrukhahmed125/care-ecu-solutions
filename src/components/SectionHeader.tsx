import React from 'react';

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  align?: 'center' | 'left';
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeIcon,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  align = 'center',
  className = '',
  children
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl text-left'
      } ${className}`}
    >
      {/* Eyebrow Pill Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18080B] border border-red-500/40 text-red-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,30,39,0.2)] ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        {badgeIcon && <span className="text-red-500">{badgeIcon}</span>}
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#FF1E27]" />
        <span>{badgeText}</span>
      </div>

      {/* Unified Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-display font-extrabold text-white tracking-tight leading-tight">
        {titlePrefix}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A4D] via-[#FF1E27] to-[#FF6B82] drop-shadow-[0_0_20px_rgba(255,30,39,0.35)]">
          {titleHighlight}
        </span>
        {titleSuffix && ` ${titleSuffix}`}
      </h2>

      {/* Unified Subtitle Description */}
      <p
        className={`mt-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed ${
          isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        }`}
      >
        {description}
      </p>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

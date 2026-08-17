import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = alignment === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <div className={`inline-block ${isCenter ? 'mx-auto' : ''}`}>
        <h2 className={`heading-lg font-display ${dark ? 'text-white' : 'text-[#1C4466]'}`}>
          {title}
        </h2>
        <div className={`h-[2px] bg-[#D98E20] mt-3 ${isCenter ? 'w-16 mx-auto' : 'w-14'}`} />
      </div>
      {subtitle && (
        <p className={`font-body text-base md:text-lg max-w-2xl font-light ${isCenter ? 'mx-auto' : ''} ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

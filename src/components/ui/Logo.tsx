import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
  height?: number | string;
}

export function Logo({ className = '', variant = 'color', height = 50 }: LogoProps) {
  const gold = variant === 'white' ? '#FFFFFF' : '#D98E20';
  const navy = variant === 'white' ? '#F7F4EF' : '#1C4466';

  return (
    <div className={`inline-flex items-center ${className}`} style={{ height: typeof height === 'number' ? `${height}px` : height }}>
      <svg
        viewBox="0 0 340 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full"
        aria-label="Billion Themes Private Limited Logo"
      >
        {/* LAYER 1 (BACKGROUND): Giant 'B' (Gold) & Giant 'T' (Navy) */}
        <text
          x="12"
          y="182"
          fontFamily="Cinzel, 'Times New Roman', serif"
          fontSize="215"
          fontWeight="700"
          fill={gold}
          fillOpacity="0.85"
        >
          B
        </text>

        <text
          x="176"
          y="182"
          fontFamily="Cinzel, 'Times New Roman', serif"
          fontSize="215"
          fontWeight="700"
          fill={navy}
          fillOpacity="0.85"
        >
          T
        </text>

        {/* LAYER 2 (MIDDLE): Horizontal Split Lines */}
        <line x1="10" y1="88" x2="165" y2="88" stroke={gold} strokeWidth="5" strokeLinecap="square" />
        <line x1="165" y1="88" x2="330" y2="88" stroke={navy} strokeWidth="5" strokeLinecap="square" />

        <line x1="10" y1="140" x2="165" y2="140" stroke={gold} strokeWidth="5" strokeLinecap="square" />
        <line x1="165" y1="140" x2="330" y2="140" stroke={navy} strokeWidth="5" strokeLinecap="square" />

        {/* LAYER 3 (FOREGROUND - OVER BT): Company Name BILLION (Gold) & THEMES (Navy) */}
        <text
          x="32"
          y="126"
          fontFamily="Cinzel, sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="1.5"
          fill={gold}
        >
          BILLION
        </text>
        
        <text
          x="178"
          y="126"
          fontFamily="Cinzel, sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="1.5"
          fill={navy}
        >
          THEMES
        </text>

        {/* Subtitle FOREGROUND: INTERIO & EXTERIO */}
        <text
          x="55"
          y="238"
          fontFamily="Cinzel, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="2"
          fill={navy}
        >
          INTERIO
        </text>

        <text
          x="152"
          y="248"
          fontFamily="'Playfair Display', 'Brush Script MT', cursive, serif"
          fontSize="38"
          fontStyle="italic"
          fontWeight="600"
          fill={navy}
        >
          &amp;
        </text>

        <text
          x="204"
          y="238"
          fontFamily="Cinzel, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="2"
          fill={gold}
        >
          EXTERIO
        </text>
      </svg>
    </div>
  );
}

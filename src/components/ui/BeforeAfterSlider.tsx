import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  aspectRatio?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'RAW CIVIL SITE (BEFORE)',
  afterLabel = 'BILLION THEMES WORK (AFTER)',
  title,
  aspectRatio = '16/9',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <div className={`w-full relative ${className}`}>
      {title && (
        <h4 className="font-display font-medium text-[#121417] text-lg mb-3">
          {title}
        </h4>
      )}

      {/* Main Image Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden select-none cursor-ew-resize rounded-sm shadow-md border border-slate-200"
        style={{ aspectRatio }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Underneath Layer: Finished AFTER Image */}
        <img
          src={afterImage}
          alt="Finished Billion Themes Architecture Project"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Top Layer: Clipped RAW BEFORE Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Raw Civil Site Before Work"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
            loading="lazy"
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="bg-[#121417]/85 backdrop-blur-xs text-[#D98E20] text-[10px] font-body uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs font-semibold shadow-xs">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="bg-[#1C4466]/90 backdrop-blur-xs text-white text-[10px] font-body uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs font-semibold shadow-xs">
            {afterLabel}
          </span>
        </div>

        {/* Vertical Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-[#1C4466] border border-[#D98E20] rounded-full shadow-lg flex items-center justify-center font-bold text-xs">
            ↔
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 text-[11px] font-body text-slate-500 uppercase tracking-widest">
        <span>← Drag handle to compare transformation</span>
        <span className="text-[#D98E20] font-semibold">{Math.round(sliderPosition)}% Before</span>
      </div>
    </div>
  );
}

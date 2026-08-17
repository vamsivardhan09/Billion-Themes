import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { COMPANY } from '@/data/company';

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setCount(currentCount);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function TrustSection() {
  return (
    <section id="trust" className="bg-[#FDFBF7] py-16 border-y border-slate-200/60">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center justify-between text-left lg:divide-x divide-slate-200/80">
          
          {/* Stat 1 */}
          <div className="lg:px-8 first:pl-0">
            <div className="font-display text-4xl lg:text-5xl font-semibold text-[#121417] tracking-tight">
              5.0 ★
            </div>
            <div className="font-body text-xs uppercase tracking-[0.18em] text-[#C9A96E] font-semibold mt-2">
              Verified Google Rating
            </div>
          </div>

          {/* Stat 2 */}
          <div className="lg:px-8">
            <div className="font-display text-4xl lg:text-5xl font-semibold text-[#121417] tracking-tight">
              <AnimatedNumber value={121} />+
            </div>
            <div className="font-body text-xs uppercase tracking-[0.18em] text-[#C9A96E] font-semibold mt-2">
              Client Reviews
            </div>
          </div>

          {/* Stat 3 */}
          <div className="lg:px-8 col-span-2 sm:col-span-1">
            <div className="font-display text-2xl lg:text-3xl font-medium text-[#121417]">
              {COMPANY.shortName}
            </div>
            <div className="font-body text-xs uppercase tracking-[0.18em] text-slate-500 font-medium mt-1">
              Private Limited
            </div>
          </div>

          {/* Stat 4 */}
          <div className="lg:px-8 col-span-2 sm:col-span-1">
            <div className="font-display text-2xl lg:text-3xl font-medium text-[#121417]">
              {COMPANY.city}
            </div>
            <div className="font-body text-xs uppercase tracking-[0.18em] text-slate-500 font-medium mt-1">
              {COMPANY.state}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

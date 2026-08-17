import React, { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="bg-[#FDFBF7] section-padding border-t border-slate-200/60">
      <div className="section-container max-w-4xl mx-auto text-center">
        
        <SectionHeading
          title="Client Testimonials"
          subtitle="Verified feedback from homeowners and commercial partners in Nellore."
          alignment="center"
          className="mb-16"
        />

        {/* Large Editorial Quotation Layout */}
        <div className="relative pt-8 pb-12">
          {/* Large Quote Mark Graphic */}
          <div className="font-display text-8xl lg:text-9xl text-[#C9A96E]/20 absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            “
          </div>

          <blockquote className="relative z-10 space-y-6">
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-[#121417] leading-relaxed font-normal italic max-w-3xl mx-auto">
              "{current.quote}"
            </p>

            <div className="pt-6 space-y-1">
              <cite className="not-italic font-body font-semibold text-sm uppercase tracking-widest text-[#121417] block">
                {current.name}
              </cite>
              {current.project && (
                <span className="text-xs font-body text-[#C9A96E] uppercase tracking-wider block">
                  {current.project}
                </span>
              )}
            </div>
          </blockquote>

          {/* Testimonial Nav Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center space-x-3 pt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? 'bg-[#C9A96E] scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

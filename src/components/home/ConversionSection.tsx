import React from 'react';
import { Button } from '../ui/Button';
import { FadeUp } from '../ui/motion/FadeUp';
import { COMPANY } from '@/data/company';

export function ConversionSection() {
  return (
    <section className="bg-[#121417] text-white section-padding text-center relative overflow-hidden border-t border-[#22272E]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121417] via-[#16191D] to-[#121417] pointer-events-none" />

      <div className="section-container relative z-10 py-12">
        <FadeUp>
          {/* Gold Divider Line */}
          <div className="w-12 h-[2px] bg-[#C9A96E] mx-auto mb-8" />
          
          <h2 className="heading-xl text-white font-display mb-6 leading-tight max-w-4xl mx-auto">
            LET'S BUILD SOMETHING BEAUTIFUL.
          </h2>
          
          <p className="font-body text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Discuss your residential, commercial, or structural project with Billion Themes Private Limited in Nellore.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button variant="primary" href="/contact" size="lg" className="w-full sm:w-auto min-w-[210px]">
              START A PROJECT
            </Button>
            <Button variant="whatsapp" href={COMPANY.whatsappUrl} size="lg" className="w-full sm:w-auto min-w-[210px]">
              WHATSAPP US
            </Button>
            <Button variant="phone" href={`tel:${COMPANY.phone}`} size="lg" className="w-full sm:w-auto min-w-[210px]">
              CALL NOW
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

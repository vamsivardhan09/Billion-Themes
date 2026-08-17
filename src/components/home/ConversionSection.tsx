import React from 'react';
import { Button } from '../ui/Button';
import { COMPANY } from '@/data/company';

export function ConversionSection() {
  return (
    <section className="bg-gradient-to-b from-[#FDFBF7] via-[#F4F8FA] to-[#FDFBF7] section-padding border-t border-slate-200/80 text-center">
      <div className="section-container max-w-4xl space-y-8">
        
        {/* Accent Bar */}
        <div className="w-12 h-[2px] bg-[#D98E20] mx-auto" />

        {/* Main Headline */}
        <h2 className="heading-xl font-display text-[#121417] leading-tight font-medium">
          Let's Build Something Beautiful.
        </h2>

        <p className="font-body text-[#667085] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          From turnkey civil engineering to bespoke residential &amp; commercial interiors in Nellore — reach out directly to start your project.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href={COMPANY.whatsappUrl} variant="whatsapp" size="lg">
            WHATSAPP US
          </Button>
          <Button href={`tel:${COMPANY.phone}`} variant="phone" size="lg">
            CALL NOW: {COMPANY.phoneDisplay}
          </Button>
          <Button href="/contact" variant="primary" size="lg">
            BOOK CONSULTATION
          </Button>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function FeaturedProject() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/60 z-10" />
        <img
          src="/assets/room_hall.jpg"
          alt="Featured Project - Room Hall"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <AnimatedSection direction="up">
          <div className="label-text text-gold mb-6 tracking-[0.3em]">
            FEATURED PROJECT
          </div>
          <h2 className="heading-lg text-white mb-10 max-w-3xl mx-auto">
            MODERN MINIMALIST VILLA IN NELLORE
          </h2>
          <Button href="/projects/modern-minimalist-villa" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">
            VIEW PROJECT
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { RevealText } from '../ui/motion/RevealText';
import { FadeUp } from '../ui/motion/FadeUp';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-20">
      {/* 100% Full-Screen Image Canvas */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full relative"
        >
          <img
            src="/assets/hero_interior.png"
            alt="Billion Themes Full Screen Architectural Living Space"
            className="w-full h-full object-cover object-center"
          />
          {/* Enhanced Cinematic Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </motion.div>
      </div>

      {/* Main Content Container Overlaid on Full Screen Image */}
      <div className="section-container relative z-10 w-full pt-20">
        <div className="max-w-3xl text-left space-y-8 bg-black/35 backdrop-blur-[3px] p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
          
          {/* Studio Tagline */}
          <FadeUp delay={0.2}>
            <div className="inline-flex items-center space-x-3">
              <span className="w-10 h-[2px] bg-[#D98E20]" />
              <span className="label-text text-[#D98E20] font-bold text-xs tracking-[0.25em]">
                Architecture &amp; Interior Design Studio · Nellore
              </span>
            </div>
          </FadeUp>

          {/* Main Headline (Explicitly forced to bright white) */}
          <RevealText
            as="h1"
            className="heading-xl !text-white leading-[1.05] tracking-tight font-display drop-shadow-lg"
            delay={0.3}
          >
            SPACES THAT FEEL LIKE YOURS.
          </RevealText>

          {/* Supporting Positioning */}
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs md:text-sm font-body text-slate-200 tracking-wider uppercase font-medium">
              <span className="!text-white font-semibold">Interior Design</span>
              <span className="text-[#D98E20]">·</span>
              <span className="!text-white font-semibold">Exterior Design</span>
              <span className="text-[#D98E20]">·</span>
              <span className="!text-white font-semibold">Structural Design</span>
              <span className="text-[#D98E20]">·</span>
              <span className="!text-white font-semibold">Building Construction</span>
            </div>
          </FadeUp>

          {/* Primary & Secondary CTAs */}
          <FadeUp delay={0.7}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
              <Button href="/contact" variant="primary" size="lg">
                BOOK A CONSULTATION
              </Button>
              <Button 
                href="/projects" 
                variant="outline" 
                size="lg" 
                className="!border-white !text-white hover:!bg-white hover:!text-[#121417] font-semibold"
              >
                EXPLORE PROJECTS
              </Button>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center">
        <a href="#trust" className="flex flex-col items-center text-xs font-body uppercase tracking-[0.25em] text-slate-200 hover:text-[#D98E20] transition-colors drop-shadow-md">
          <span className="mb-2 font-medium">Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-[#D98E20] text-lg font-bold"
          >
            ↓
          </motion.span>
        </a>
      </div>
    </section>
  );
}

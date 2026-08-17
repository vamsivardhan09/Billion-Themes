import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] || services[0];

  return (
    <section className="bg-[#FDFBF7] section-padding border-t border-slate-200/60">
      <div className="section-container">
        
        {/* Section Heading */}
        <SectionHeading
          title="Our Core Capabilities"
          subtitle="Integrated architecture, interior design, structural engineering, and turnkey civil construction."
          className="mb-16"
        />

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          
          {/* Left: Service List Items */}
          <div className="col-span-5 space-y-4">
            {services.map((service, idx) => {
              const isActive = activeIndex === idx;
              const formattedNum = `0${idx + 1}`;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`p-6 border-b border-slate-200/80 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-[#C9A96E] bg-white shadow-xs pl-8'
                      : 'hover:border-slate-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`font-display text-lg ${isActive ? 'text-[#C9A96E]' : 'text-slate-400'}`}>
                        {formattedNum}
                      </span>
                      <h3 className={`font-display text-xl font-medium ${isActive ? 'text-[#121417]' : 'text-slate-700'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <span className={`text-lg transition-transform duration-300 ${isActive ? 'text-[#C9A96E] translate-x-1' : 'text-slate-300'}`}>
                      →
                    </span>
                  </div>

                  {/* Active Description Reveal */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-3 border-t border-slate-100 text-sm font-body text-[#667085] leading-relaxed font-light"
                    >
                      <p>{service.description}</p>
                      <div className="pt-4">
                        <Button href="/services" variant="outline" size="sm">
                          EXPLORE {service.title.toUpperCase()}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Large Corresponding Visual */}
          <div className="col-span-7">
            <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 rounded-sm shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#121417]/85 to-transparent text-white">
                <span className="label-text text-[#C9A96E]">Capability 0{activeIndex + 1}</span>
                <h4 className="font-display text-2xl font-medium mt-1">{activeService.title}</h4>
                <p className="text-xs font-body text-slate-300 uppercase tracking-widest mt-1">
                  {activeService.tagline}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200/80 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="font-display text-lg text-[#121417]">
                    0{idx + 1} {service.title}
                  </span>
                  <span className="text-xl text-[#C9A96E]">
                    {isActive ? '−' : '+'}
                  </span>
                </button>

                {isActive && (
                  <div className="p-5 pt-0 space-y-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[16/10] object-cover rounded-xs"
                    />
                    <p className="text-sm font-body text-[#667085]">
                      {service.description}
                    </p>
                    <Button href="/services" variant="outline" size="sm" className="w-full">
                      EXPLORE SERVICE
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

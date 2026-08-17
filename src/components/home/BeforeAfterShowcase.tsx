import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { Button } from '../ui/Button';

export function BeforeAfterShowcase() {
  const transformProjects = projects.filter((p) => p.beforeImage && p.afterImage);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeProject = transformProjects[selectedIdx] || transformProjects[0];

  if (!activeProject || !activeProject.beforeImage || !activeProject.afterImage) {
    return null;
  }

  return (
    <section className="bg-[#FDFBF7] section-padding border-t border-slate-200/60">
      <div className="section-container">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            title="Real Site Transformations"
            subtitle="Drag the interactive slider below to compare raw civil construction sites with finished Billion Themes spaces."
          />

          {/* Project Tabs */}
          <div className="flex flex-wrap gap-2">
            {transformProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 text-xs font-body uppercase tracking-wider transition-all duration-300 rounded-xs border ${
                  selectedIdx === idx
                    ? 'bg-[#1C4466] text-white border-[#1C4466] font-semibold shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#C9A96E]'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Slider Visual Left */}
          <div className="lg:col-span-8">
            <BeforeAfterSlider
              key={activeProject.id}
              beforeImage={activeProject.beforeImage}
              afterImage={activeProject.afterImage}
              aspectRatio="16/10"
            />
          </div>

          {/* Details Right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="label-text text-[#C9A96E]">
                Case Study · {activeProject.categories.join(' & ')}
              </span>
              <h3 className="heading-md font-display text-[#121417]">
                {activeProject.name}
              </h3>
              {activeProject.location && (
                <p className="text-xs font-body uppercase tracking-wider text-slate-500 font-medium">
                  📍 {activeProject.location}
                </p>
              )}
            </div>

            <p className="font-body text-sm text-[#667085] leading-relaxed font-light">
              {activeProject.description ||
                'Complete civil structural execution, custom interior woodwork, acoustic ceiling installation, and premium finish handover.'}
            </p>

            <div className="pt-2 space-y-3 border-t border-slate-200/80">
              <div className="flex items-center justify-between text-xs font-body">
                <span className="text-slate-500 uppercase tracking-wider">Civil Phase</span>
                <span className="text-[#121417] font-semibold">Raw Structural Shell</span>
              </div>
              <div className="flex items-center justify-between text-xs font-body">
                <span className="text-slate-500 uppercase tracking-wider">Handover State</span>
                <span className="text-[#D98E20] font-semibold">Turnkey Luxury Delivery</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href={`/projects/${activeProject.slug}`} variant="primary" className="w-full">
                VIEW PROJECT DETAILS →
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

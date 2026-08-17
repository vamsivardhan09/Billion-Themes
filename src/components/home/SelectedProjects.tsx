import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function SelectedProjects() {
  const selected = projects.slice(0, 3); // Top 3 featured portfolio projects

  return (
    <section className="bg-[#FDFBF7] section-padding">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <SectionHeading
            title="Selected Projects"
            subtitle="Explore our editorial portfolio of luxury residences, architectural facades, and commercial spaces."
          />
          <div>
            <Button href="/projects" variant="outline">
              VIEW ALL PROJECTS ({projects.length})
            </Button>
          </div>
        </div>

        {/* Editorial Alternating Showcase */}
        <div className="space-y-24">
          
          {/* Project 01: Large Landscape Image */}
          {selected[0] && (
            <div className="group">
              <Link to={`/projects/${selected[0].slug}`} className="block relative overflow-hidden">
                <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden relative">
                  <motion.img
                    src={selected[0].heroImage}
                    alt={selected[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#121417]/30 transition-opacity duration-500 group-hover:bg-[#121417]/50" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                    <div className="space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
                      <span className="label-text text-[#C9A96E] font-medium uppercase tracking-[0.2em]">
                        Project 01 · {selected[0].categories.join(' & ')}
                      </span>
                      <h3 className="heading-md text-white font-display">
                        {selected[0].name}
                      </h3>
                      {selected[0].location && (
                        <p className="text-xs font-body text-slate-300 tracking-wider">
                          {selected[0].location}
                        </p>
                      )}
                    </div>

                    <div className="inline-flex items-center text-xs font-body uppercase tracking-[0.2em] text-[#C9A96E] group-hover:text-white transition-colors duration-300 font-semibold">
                      <span>VIEW PROJECT</span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Project 02: Portrait / Asymmetrical Offset Layout */}
          {selected[1] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-6 lg:pr-6">
                <span className="label-text text-[#C9A96E]">
                  Project 02 · {selected[1].categories.join(' & ')}
                </span>
                <h3 className="heading-lg font-display text-[#121417]">
                  {selected[1].name}
                </h3>
                <p className="font-body text-sm text-[#667085] leading-relaxed font-light">
                  Tailored interior and spatial arrangement designed for contemporary elegance and functional harmony.
                </p>
                <div className="pt-2">
                  <Link
                    to={`/projects/${selected[1].slug}`}
                    className="inline-flex items-center text-xs font-body uppercase tracking-[0.2em] text-[#121417] hover:text-[#C9A96E] font-semibold transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8">
                <Link to={`/projects/${selected[1].slug}`} className="block relative overflow-hidden group">
                  <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden relative">
                    <img
                      src={selected[1].heroImage}
                      alt={selected[1].name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#121417]/20 transition-opacity duration-500 group-hover:bg-[#121417]/40" />
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Project 03: Full-Width Cinematic View */}
          {selected[2] && (
            <div className="group">
              <Link to={`/projects/${selected[2].slug}`} className="block relative overflow-hidden">
                <div className="aspect-[16/9] lg:aspect-[2.4/1] overflow-hidden relative">
                  <img
                    src={selected[2].heroImage}
                    alt={selected[2].name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#121417]/35 transition-opacity duration-500 group-hover:bg-[#121417]/55" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                    <div className="space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
                      <span className="label-text text-[#C9A96E] font-medium uppercase tracking-[0.2em]">
                        Project 03 · {selected[2].categories.join(' & ')}
                      </span>
                      <h3 className="heading-md text-white font-display">
                        {selected[2].name}
                      </h3>
                    </div>

                    <div className="inline-flex items-center text-xs font-body uppercase tracking-[0.2em] text-[#C9A96E] group-hover:text-white transition-colors duration-300 font-semibold">
                      <span>VIEW PROJECT</span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

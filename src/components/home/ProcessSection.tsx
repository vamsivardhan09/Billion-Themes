import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, CheckCircle2, IndianRupee, Key } from 'lucide-react';

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 75%'],
  });

  // Smooth out progress values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  const stops = [
    {
      step: 'STOP 01',
      title: 'Consultation',
      check: 'Signed design brief',
      position: 'top',
      milestone: 'Day 0 · Your journey begins',
      milestoneType: 'start',
      iconNum: '01',
    },
    {
      step: 'STOP 02',
      title: '3D Design',
      check: 'Approved renders',
      position: 'bottom',
      milestone: '10% · to begin design',
      milestoneType: 'payment',
      iconNum: '02',
    },
    {
      step: 'STOP 03',
      title: '2D Drawings',
      check: 'BOQ + drawings signed',
      position: 'top',
      milestone: '50% · at production kickoff',
      milestoneType: 'payment',
      iconNum: '03',
    },
    {
      step: 'STOP 04',
      title: 'Production',
      check: 'Factory QC pass',
      position: 'bottom',
      milestone: '40% · before installation',
      milestoneType: 'payment',
      iconNum: '04',
    },
    {
      step: 'STOP 05',
      title: 'Installation',
      check: 'Site snag list closed',
      position: 'top',
      milestone: null,
      milestoneType: null,
      iconNum: '05',
    },
    {
      step: 'STOP 06',
      title: 'Handover',
      check: 'Keys + warranty pack',
      position: 'bottom',
      milestone: 'Welcome Home 🎉',
      milestoneType: 'finish',
      iconNum: '06',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FDFBF7] via-[#F4F8FA] to-[#FDFBF7] section-padding border-t border-slate-200/60 overflow-hidden relative">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[2px] bg-[#D98E20]" />
            <span className="label-text text-[#1C4466] font-bold text-xs tracking-[0.25em]">
              HOW IT WORKS
            </span>
          </div>
          
          <h2 className="heading-lg font-display text-[#121417] leading-tight">
            From first call to handover,<br />in six clear phases.
          </h2>
          
          <p className="font-body text-[#667085] text-base md:text-lg font-light leading-relaxed">
            Every phase closes with a client sign-off and an in-house QA check before the next one starts.
          </p>
        </div>

        {/* Desktop Interactive Curved Wave Timeline (Scroll Filled) */}
        <div className="hidden lg:block relative my-16 py-12">
          
          {/* SVG Curved Wave Path */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Background Grey Track Line */}
              <path
                d="M 50 200 C 150 120, 250 280, 350 200 C 450 120, 550 280, 650 200 C 750 120, 850 280, 950 200 C 1050 120, 1150 200, 1180 200"
                stroke="#E2E8F0"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Animated Scroll-Filled Gold/Navy Wave Line */}
              <motion.path
                d="M 50 200 C 150 120, 250 280, 350 200 C 450 120, 550 280, 650 200 C 750 120, 850 280, 950 200 C 1050 120, 1150 200, 1180 200"
                stroke="url(#scrollWaveGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength }}
              />

              <defs>
                <linearGradient id="scrollWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C4466" />
                  <stop offset="50%" stopColor="#D98E20" />
                  <stop offset="100%" stopColor="#1C4466" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 6 Steps Grid Layout */}
          <div className="grid grid-cols-6 gap-4 relative z-10 min-h-[420px] items-center">
            
            {stops.map((item, idx) => {
              const isTop = item.position === 'top';

              return (
                <div
                  key={item.step}
                  className="flex flex-col items-center relative group"
                >
                  {/* TOP CARD */}
                  <div className={`w-full transition-all duration-300 ${isTop ? 'mb-24 opacity-100' : 'mb-4 opacity-0 pointer-events-none'}`}>
                    {isTop && (
                      <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs group-hover:border-[#D98E20] group-hover:shadow-md transition-all duration-300">
                        <div className="text-[11px] font-body uppercase tracking-wider mb-2">
                          <span className="text-[#1C4466] font-bold">{item.step}</span>
                        </div>
                        <h4 className="font-display font-semibold text-base text-[#121417] mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-xs font-body text-slate-500">
                          <CheckCircle2 size={13} className="text-[#1C4466] mr-1.5 shrink-0" />
                          <span>{item.check}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Vertical Connecting Line */}
                  <div
                    className={`w-[1.5px] bg-slate-300 group-hover:bg-[#D98E20] transition-colors duration-300 ${
                      isTop ? 'h-12 -mt-20 mb-2' : 'h-12 mt-2 -mb-20'
                    }`}
                  />

                  {/* Pin Node Circle on Wave */}
                  <div className="w-10 h-10 rounded-full bg-[#1C4466] group-hover:bg-[#D98E20] text-white flex items-center justify-center font-display text-xs font-bold transition-all duration-300 z-20 shadow-md border-2 border-white group-hover:scale-125">
                    {item.iconNum}
                  </div>

                  {/* Milestone Badges along Path */}
                  {idx === 0 && (
                    <div className="absolute top-[215px] -left-12 z-30 pointer-events-none">
                      <span className="bg-[#1C4466] text-white text-[10px] font-body px-3 py-1 rounded-full flex items-center shadow-xs border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-1.5 animate-pulse" />
                        Day 0 · Your journey begins
                      </span>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="absolute top-[175px] left-2 z-30 pointer-events-none">
                      <span className="bg-[#FFF4E5] text-[#B87618] border border-[#FCD39D] text-[10px] font-body px-3 py-1 rounded-full flex items-center font-semibold shadow-xs">
                        <IndianRupee size={10} className="mr-0.5" />
                        10% · to begin design
                      </span>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="absolute top-[225px] -left-8 z-30 pointer-events-none">
                      <span className="bg-[#FFF4E5] text-[#B87618] border border-[#FCD39D] text-[10px] font-body px-3 py-1 rounded-full flex items-center font-semibold shadow-xs">
                        <IndianRupee size={10} className="mr-0.5" />
                        50% · at production kickoff
                      </span>
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="absolute top-[175px] -left-10 z-30 pointer-events-none">
                      <span className="bg-[#FFF4E5] text-[#B87618] border border-[#FCD39D] text-[10px] font-body px-3 py-1 rounded-full flex items-center font-semibold shadow-xs">
                        <IndianRupee size={10} className="mr-0.5" />
                        40% · before installation
                      </span>
                    </div>
                  )}

                  {idx === 5 && (
                    <div className="absolute top-[215px] left-4 z-30 pointer-events-none">
                      <span className="bg-[#FFF4E5] text-[#B87618] border border-[#FCD39D] text-[10px] font-body px-3 py-1 rounded-full flex items-center font-semibold shadow-xs">
                        <Key size={10} className="mr-1 text-[#D98E20]" />
                        Welcome Home 🔑
                      </span>
                    </div>
                  )}

                  {/* BOTTOM CARD */}
                  <div className={`w-full transition-all duration-300 ${!isTop ? 'mt-24 opacity-100' : 'mt-4 opacity-0 pointer-events-none'}`}>
                    {!isTop && (
                      <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs group-hover:border-[#D98E20] group-hover:shadow-md transition-all duration-300">
                        <div className="text-[11px] font-body uppercase tracking-wider mb-2">
                          <span className="text-[#1C4466] font-bold">{item.step}</span>
                        </div>
                        <h4 className="font-display font-semibold text-base text-[#121417] mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-xs font-body text-slate-500">
                          <CheckCircle2 size={13} className="text-[#1C4466] mr-1.5 shrink-0" />
                          <span>{item.check}</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Mobile Curved Scroll Timeline */}
        <div className="lg:hidden relative my-10 pl-8">
          {/* Mobile Vertical Wave Line */}
          <div className="absolute left-3 top-4 bottom-4 w-1 bg-slate-200 rounded-full" />
          <motion.div
            className="absolute left-3 top-4 w-1 bg-gradient-to-b from-[#1C4466] via-[#D98E20] to-[#1C4466] rounded-full"
            style={{ height: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
          />

          <div className="space-y-6">
            {stops.map((item) => (
              <div key={item.step} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs relative">
                <div className="absolute -left-[37px] top-5 w-6 h-6 rounded-full bg-[#1C4466] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-xs">
                  {item.iconNum}
                </div>

                <div className="text-xs font-body uppercase tracking-wider mb-2">
                  <span className="text-[#D98E20] font-bold">{item.step}</span>
                </div>

                <h4 className="font-display font-semibold text-lg text-[#121417] mb-2">
                  {item.title}
                </h4>

                <div className="flex items-center text-xs font-body text-slate-600 mb-3">
                  <CheckCircle2 size={14} className="text-[#1C4466] mr-1.5 shrink-0" />
                  <span>{item.check}</span>
                </div>

                {item.milestone && (
                  <div className="pt-2 border-t border-slate-100">
                    <span className="bg-[#FFF4E5] text-[#B87618] text-[10px] font-body px-2.5 py-1 rounded-full inline-flex items-center font-semibold">
                      {item.milestone}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-slate-600">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={16} className="text-[#1C4466]" />
            <span>Each phase gated by client sign-off + in-house QA check.</span>
          </div>

          <div className="flex items-center space-x-2 text-[#B87618] font-medium">
            <IndianRupee size={14} />
            <span>Standard schedule <strong>10% · 50% · 40%</strong> — milestone-linked, fully transparent.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

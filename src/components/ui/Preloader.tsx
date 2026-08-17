import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 4.5-second progress animation
    const startTime = Date.now();
    const duration = 4500; // 4.5 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setLoading(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Background Architectural Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1C4466_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Decorative Corner Gold Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-8 left-8 w-16 h-[2px] bg-[#D98E20] origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute top-8 left-8 w-[2px] h-16 bg-[#1C4466] origin-top"
          />

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute bottom-8 right-8 w-16 h-[2px] bg-[#D98E20] origin-right"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute bottom-8 right-8 w-[2px] h-16 bg-[#1C4466] origin-bottom"
          />

          {/* Main Logo Container */}
          <div className="relative z-10 flex flex-col items-center max-w-md text-center">
            {/* Logo Fade & Scale in over 0s - 2s */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <Logo height={130} />
            </motion.div>

            {/* Subtle Tagline Fade in at 1.8s */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.6 }}
              className="space-y-2 mb-10"
            >
              <p className="font-display text-sm tracking-[0.25em] text-[#1C4466] uppercase font-semibold">
                Billion Themes Private Limited
              </p>
              <p className="font-body text-xs tracking-[0.2em] text-[#D98E20] uppercase font-medium">
                Civil Engineering &amp; Architectural Studio · Nellore
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 relative">
              <div className="w-full h-[2px] bg-slate-100 overflow-hidden rounded-full relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D98E20] to-[#1C4466]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center mt-3 text-[10px] tracking-widest text-slate-400 font-body uppercase">
                <span>Loading Studio</span>
                <span className="text-[#1C4466] font-semibold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 text-xs font-body uppercase tracking-[0.15em] text-slate-400 hover:text-[#1C4466] transition-colors py-2 px-4 border border-slate-200 hover:border-[#1C4466] rounded-sm"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

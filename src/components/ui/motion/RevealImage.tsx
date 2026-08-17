import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  delay?: number;
}

export function RevealImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio,
  delay = 0,
}: RevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden relative ${containerClassName}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          style={aspectRatio ? { aspectRatio } : undefined}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] }}
      className={`overflow-hidden relative ${containerClassName}`}
    >
      <motion.img
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: delay + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
        loading="lazy"
      />
    </motion.div>
  );
}

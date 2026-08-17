import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { LazyImage } from './LazyImage';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block relative overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden bg-charcoal-light">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <LazyImage
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
        <div className="label-text text-gold mb-2">
          {project.categories.join(' · ')}
        </div>
        <h3 className="heading-sm text-white">
          {project.name}
        </h3>
      </div>
    </Link>
  );
}

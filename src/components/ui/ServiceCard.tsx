import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '@/data/services';
import { LazyImage } from './LazyImage';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-cream group border-t border-gold/20 hover:border-gold transition-colors duration-300">
      <div className="aspect-[4/5] overflow-hidden">
        <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
          <LazyImage
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
      
      <div className="pt-6 pb-2 flex-grow flex flex-col">
        <h3 className="heading-sm text-charcoal mb-3">{service.title}</h3>
        <p className="text-muted font-body mb-6 flex-grow">{service.tagline}</p>
        
        <Link 
          to={`/services#${service.slug}`}
          className="label-text text-gold group-hover:text-gold-light transition-colors inline-flex items-center uppercase"
        >
          View Service <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

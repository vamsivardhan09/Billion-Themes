import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 md:p-10 flex flex-col h-full shadow-sm rounded-sm">
      <div className="text-gold opacity-40 mb-6">
        <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4286 0.000305176H0L4.28571 30.0003H19.7143L15.4286 0.000305176ZM35.7143 0.000305176H20.2857L24.5714 30.0003H40L35.7143 0.000305176Z" />
        </svg>
      </div>
      
      <p className="font-body text-lg md:text-xl text-charcoal leading-relaxed mb-8 flex-grow">
        "{testimonial.quote}"
      </p>
      
      <div className="mt-auto">
        <div className="flex text-gold mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <div className="label-text text-charcoal uppercase tracking-widest">
          {testimonial.name}
        </div>
        {testimonial.project && (
          <div className="text-sm text-muted mt-1 font-body">
            {testimonial.project}
          </div>
        )}
      </div>
    </div>
  );
}

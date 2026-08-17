import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative flex flex-col h-full">
      <div className="text-4xl font-display font-bold text-[#D98E20] mb-3">
        {number}
      </div>
      <h3 className="font-display font-semibold text-lg text-[#1C4466] mb-2">
        {title}
      </h3>
      <p className="font-body text-xs text-slate-600 leading-relaxed flex-grow font-normal">
        {description}
      </p>
      <div className="w-8 h-[2px] bg-[#1C4466] mt-4 opacity-30" />
    </div>
  );
}

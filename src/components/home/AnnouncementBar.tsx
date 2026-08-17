import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { COMPANY } from '@/data/company';

export function AnnouncementBar() {
  return (
    <div className="bg-[#1C4466] text-white py-2 px-4 text-center font-body text-xs font-medium tracking-wider flex items-center justify-center space-x-2 border-b border-[#122F48]">
      <div className="flex text-[#D98E20] items-center">
        <Star size={12} className="fill-current mr-1" />
        <span className="text-white font-bold">{COMPANY.rating} Rating</span>
      </div>
      <span className="text-slate-300">·</span>
      <span>{COMPANY.reviewCount}+ Verified Reviews</span>
      <span className="text-slate-300 hidden sm:inline">·</span>
      <span className="hidden sm:inline-flex items-center text-slate-200">
        <MapPin size={12} className="mr-1 text-[#D98E20]" />
        {COMPANY.city}, AP
      </span>
    </div>
  );
}

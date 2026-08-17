import React from 'react';
import { COMPANY } from '@/data/company';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export function MapSection({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      {/* Luxury Architectural Map Frame */}
      <div className="bg-white p-3 md:p-5 border border-slate-200/90 shadow-xl rounded-sm">
        
        {/* Top Location Info Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[2px] bg-[#D98E20]" />
              <span className="label-text text-[#1C4466] font-semibold text-[10px] tracking-[0.2em]">
                OFFICE LOCATION &amp; STUDIO
              </span>
            </div>
            <h3 className="font-display font-medium text-lg md:text-xl text-[#121417]">
              Billion Themes Private Limited
            </h3>
            <p className="font-body text-xs text-slate-500 flex items-center font-light">
              <MapPin size={12} className="text-[#D98E20] mr-1 shrink-0" />
              {COMPANY.address}
            </p>
          </div>

          <a
            href={COMPANY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2.5 px-4 bg-slate-50 hover:bg-[#FFF4E5] border border-slate-200 rounded-xs text-xs font-body uppercase tracking-wider font-semibold text-[#1C4466] hover:text-[#D98E20] transition-colors shrink-0"
          >
            <Navigation size={13} className="mr-1.5 text-[#D98E20]" />
            Get Directions <ExternalLink size={11} className="ml-1 opacity-70" />
          </a>
        </div>

        {/* Responsive Google Maps Iframe */}
        <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full bg-slate-100 relative rounded-xs overflow-hidden border border-slate-200/80">
          <iframe
            title="Billion Themes Private Limited Google Maps Location"
            src="https://maps.google.com/maps?q=Billion%20Themes%20Private%20Limited%2024%2F1%20near%20Police%20Parade%20Ground%20Dargamitta%20Nellore&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-[1.02] saturation-[1.05]"
          />
        </div>

        {/* Bottom Studio Details Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 mt-1 text-xs font-body text-slate-600">
          <div className="flex items-center space-x-2 p-2.5 bg-slate-50/80 border border-slate-100 rounded-xs">
            <MapPin size={15} className="text-[#D98E20] shrink-0" />
            <div>
              <span className="font-semibold block text-[#121417]">Dargamitta, Nellore</span>
              <span className="text-[10px] text-slate-500">Near Police Parade Ground</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-2.5 bg-slate-50/80 border border-slate-100 rounded-xs">
            <Phone size={15} className="text-[#1C4466] shrink-0" />
            <div>
              <span className="font-semibold block text-[#121417]">Direct Line</span>
              <a href={`tel:${COMPANY.phone}`} className="text-[10px] text-[#D98E20] hover:underline">
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-2.5 bg-slate-50/80 border border-slate-100 rounded-xs">
            <Clock size={15} className="text-[#D98E20] shrink-0" />
            <div>
              <span className="font-semibold block text-[#121417]">Working Hours</span>
              <span className="text-[10px] text-slate-500">Mon – Sat: 9:30 AM – 7:30 PM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

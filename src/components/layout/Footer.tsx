import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/data/company';
import { navItems } from '@/data/navigation';
import { services } from '@/data/services';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-24 lg:pb-12 border-t border-slate-200">
      <div className="section-container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 pb-12 border-b border-slate-200/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex flex-col group" aria-label="Billion Themes Home">
              <span className="font-display font-semibold text-xl tracking-wider text-[#121417]">
                BILLION <span className="text-[#D98E20]">THEMES</span>
              </span>
              <span className="font-body text-[9px] uppercase tracking-[0.25em] text-[#D98E20] font-semibold">
                PRIVATE LIMITED
              </span>
            </Link>
            <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed max-w-md font-light">
              Billion Themes Private Limited — Premier architectural design, interior &amp; exterior studio, structural engineering, and building construction based in Nellore, Andhra Pradesh.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="label-text text-[#1C4466] font-bold text-xs">Navigation</h4>
            <ul className="space-y-2 font-body text-xs uppercase tracking-wider font-medium">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-[#D98E20] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="label-text text-[#1C4466] font-bold text-xs">Services</h4>
            <ul className="space-y-2 font-body text-xs uppercase tracking-wider font-medium">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.slug}`} className="hover:text-[#D98E20] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="label-text text-[#1C4466] font-bold text-xs">Office &amp; Contact</h4>
            <div className="font-body text-xs text-slate-600 space-y-2.5 font-light leading-relaxed">
              <p className="flex items-start">
                <MapPin size={13} className="text-[#D98E20] mr-1.5 shrink-0 mt-0.5" />
                <span>{COMPANY.addressShort}, Nellore, AP {COMPANY.pincode}</span>
              </p>
              <p className="flex items-center">
                <Phone size={13} className="text-[#1C4466] mr-1.5 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-[#D98E20] transition-colors font-medium">
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[11px] font-semibold text-[#1C4466] hover:text-[#D98E20] uppercase tracking-wider pt-1"
                >
                  <Navigation size={12} className="mr-1 text-[#D98E20]" />
                  Open Google Maps →
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-slate-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Registered Studio in {COMPANY.city}, {COMPANY.state}.
          </div>
          <div className="flex space-x-6 text-[11px]">
            <span className="hover:text-[#D98E20] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#D98E20] cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

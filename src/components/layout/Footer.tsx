import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/data/company';
import { navItems } from '@/data/navigation';
import { services } from '@/data/services';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-[#121417] text-slate-400 pt-20 pb-24 lg:pb-12 border-t border-[#22272E]">
      <div className="section-container">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 pb-12 border-b border-[#22272E]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block" aria-label="Billion Themes Home">
              <Logo height={48} variant="white" />
            </Link>
            <p className="font-body text-sm text-slate-400 leading-relaxed max-w-md font-light">
              Billion Themes Private Limited — Premier architectural design, interior &amp; exterior studio, structural engineering, and building construction based in Nellore, Andhra Pradesh.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h4 className="label-text text-[#C9A96E]">Navigation</h4>
            <ul className="space-y-3 font-body text-xs uppercase tracking-wider">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="label-text text-[#C9A96E]">Services</h4>
            <ul className="space-y-3 font-body text-xs uppercase tracking-wider">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.slug}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="label-text text-[#C9A96E]">Location &amp; Contact</h4>
            <div className="font-body text-xs text-slate-300 space-y-3 font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium block">Office Location</strong>
                {COMPANY.address}<br />
                {COMPANY.city}, {COMPANY.state} {COMPANY.pincode}
              </p>
              <p>
                <strong className="text-white font-medium block">Direct Line</strong>
                <a href={`tel:${COMPANY.phone}`} className="hover:text-[#C9A96E] transition-colors">
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-white font-medium block">Instagram</strong>
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A96E] transition-colors">
                  {COMPANY.instagramHandle}
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
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

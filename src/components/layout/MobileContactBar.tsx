import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

export function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex border-t border-border-dark safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20b958] text-white flex items-center justify-center py-4 transition-colors"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="font-body uppercase tracking-wide text-sm font-medium">WhatsApp</span>
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        className="flex-1 bg-charcoal-light hover:bg-charcoal text-cream flex items-center justify-center py-4 transition-colors border-l border-border-dark/20"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="font-body uppercase tracking-wide text-sm font-medium">Call Now</span>
      </a>
    </div>
  );
}

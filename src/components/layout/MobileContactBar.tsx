import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY } from '@/data/company';

export function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50 flex items-center justify-between p-2 bg-[#121417]/95 backdrop-blur-md border border-white/10 rounded-full shadow-2xl safe-area-bottom">
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20b958] text-white flex items-center justify-center py-2 px-3 rounded-full transition-colors mr-1.5 shadow-xs"
      >
        <MessageCircle className="w-4 h-4 mr-1.5 shrink-0" />
        <span className="font-body uppercase tracking-wider text-[11px] font-semibold">WhatsApp</span>
      </a>
      <a
        href={`tel:${COMPANY.phone}`}
        className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center py-2 px-3 rounded-full transition-colors ml-1.5"
      >
        <Phone className="w-3.5 h-3.5 mr-1.5 shrink-0 text-[#D98E20]" />
        <span className="font-body uppercase tracking-wider text-[11px] font-semibold">Call Studio</span>
      </a>
    </div>
  );
}

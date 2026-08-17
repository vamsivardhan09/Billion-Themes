import { useEffect } from 'react';
import { COMPANY } from '@/data/company';
import { ContactForm } from '@/components/ui/ContactForm';
import { MapSection } from '@/components/ui/MapSection';
import { Phone, Mail, MapPin, Camera, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Studio — Billion Themes';
  }, []);

  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-slate-100/80 section-padding text-center border-b border-slate-200/60">
        <div className="section-container max-w-3xl space-y-3">
          <span className="label-text text-[#D98E20]">Direct Consultation</span>
          <h1 className="heading-xl font-display text-[#121417]">Start Your Project</h1>
          <p className="font-body text-[#667085] text-base md:text-lg font-light leading-relaxed">
            Get in touch with Billion Themes Private Limited for turnkey interior design, exterior architecture, structural design, or building construction in Nellore.
          </p>
        </div>
      </section>

      {/* Main Form & Office Info Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Office Contact Info Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm space-y-6">
                <h3 className="heading-sm font-display text-[#121417]">Studio Headquarters</h3>

                <div className="space-y-5 font-body text-sm text-slate-600 font-light">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#D98E20] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#121417] font-medium block">Office Address</strong>
                      <span>{COMPANY.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#1C4466] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#121417] font-medium block">Phone Call / WhatsApp</strong>
                      <a href={`tel:${COMPANY.phone}`} className="hover:text-[#D98E20] transition-colors font-medium">
                        {COMPANY.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Camera className="w-5 h-5 text-[#D98E20] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#121417] font-medium block">Official Instagram</strong>
                      <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#D98E20] transition-colors">
                        {COMPANY.instagramHandle}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#1C4466] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#121417] font-medium block">Working Hours</strong>
                      <span>Monday – Saturday: 9:30 AM – 7:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <Button variant="whatsapp" href={COMPANY.whatsappUrl} className="w-full sm:w-auto">
                    WHATSAPP US
                  </Button>
                  <Button variant="phone" href={`tel:${COMPANY.phone}`} className="w-full sm:w-auto">
                    CALL NOW
                  </Button>
                </div>
              </div>

              {/* Verified Trust Note */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-sm flex items-center space-x-3 text-xs font-body text-slate-600">
                <ShieldCheck size={20} className="text-[#1C4466] shrink-0" />
                <span>5.0 ★ Rated Architectural &amp; Civil Studio in Nellore with 121+ verified client reviews.</span>
              </div>
            </div>

            {/* Direct Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-slate-200 shadow-sm rounded-sm space-y-6">
              <h3 className="heading-sm font-display text-[#121417]">Send a Direct Project Message</h3>
              <p className="font-body text-xs text-slate-500 font-light">
                Fill out the form below and our engineering &amp; design team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Google Maps Section (Framed in Luxury Container) */}
      <section className="section-padding bg-slate-50 border-t border-slate-200/80">
        <div className="section-container">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="label-text text-[#D98E20]">Visit Our Studio</span>
            <h2 className="heading-md font-display text-[#121417]">Find Us in Nellore</h2>
          </div>
          <MapSection />
        </div>
      </section>

    </main>
  );
}

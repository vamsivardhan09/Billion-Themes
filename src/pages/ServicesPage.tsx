import { useEffect } from 'react';
import { services } from '@/data/services';
import { COMPANY } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services — Billion Themes';
  }, []);

  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-slate-100/80 section-padding text-center border-b border-slate-200/60">
        <div className="section-container max-w-3xl space-y-3">
          <span className="label-text text-[#D98E20]">End-to-End Architectural Capabilities</span>
          <h1 className="heading-xl font-display text-[#121417]">Our Services</h1>
          <p className="font-body text-[#667085] text-base md:text-lg font-light leading-relaxed">
            From preliminary structural engineering and 3D architectural renders to turnkey building construction and luxury interior styling.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="section-container space-y-20">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 border-b border-slate-200/80 pb-20 last:border-0 last:pb-0"
              >
                <AnimatedSection>
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    
                    {/* Visual Frame */}
                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="aspect-[4/3] rounded-sm overflow-hidden border border-slate-200 shadow-md relative group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <span className="label-text text-[#D98E20]">0{idx + 1} SERVICE</span>
                          <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                      <div className="space-y-2">
                        <span className="label-text text-[#1C4466] font-bold">0{idx + 1} — {service.slug}</span>
                        <h2 className="heading-lg font-display text-[#121417]">{service.title}</h2>
                        <p className="font-display italic text-lg text-[#D98E20]">"{service.tagline}"</p>
                      </div>

                      <p className="font-body text-[#667085] text-base md:text-lg font-light leading-relaxed">
                        {service.description}
                      </p>

                      {/* Capabilities List */}
                      <div className="space-y-3 pt-2">
                        <h4 className="label-text text-[#121417] font-semibold text-xs">Included Capabilities</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-center text-xs md:text-sm font-body text-slate-700">
                              <CheckCircle2 size={15} className="text-[#D98E20] mr-2 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button href="/contact" variant="primary">
                          DISCUSS {service.title.toUpperCase()} →
                        </Button>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100/90 text-[#121417] section-padding text-center border-t border-slate-200">
        <div className="section-container max-w-3xl space-y-6">
          <h2 className="heading-lg font-display text-[#121417]">Need Multiple Services for Your Site?</h2>
          <p className="font-body text-[#667085] text-lg font-light">
            We handle turnkey architectural packages combining structural design, civil execution, and full interior furnishing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Button variant="whatsapp" href={COMPANY.whatsappUrl}>
              WHATSAPP CONSULTATION
            </Button>
            <Button variant="phone" href={`tel:${COMPANY.phone}`}>
              CALL NOW: {COMPANY.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

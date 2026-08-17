import { useEffect } from 'react';
import { services } from '@/data/services';
import { LazyImage } from '@/components/ui/LazyImage';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services — Billion Themes';
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream section-padding">
        <div className="section-container text-center pt-12 pb-8">
          <h1 className="heading-xl font-display mb-4">Our Services</h1>
          <p className="text-muted heading-sm font-body max-w-2xl mx-auto">
            Comprehensive design and construction solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="flex flex-col">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`section-padding ${isEven ? 'bg-cream' : 'bg-cream-dark'}`}
            >
              <div className="section-container">
                <AnimatedSection direction={isEven ? 'left' : 'right'}>
                  <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        aspectRatio="4/3"
                        className="rounded-lg shadow-lg w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="space-y-2">
                        <span className="text-gold label-text uppercase tracking-widest">{service.tagline}</span>
                        <h2 className="heading-md font-display text-charcoal">{service.title}</h2>
                      </div>
                      
                      <p className="text-muted text-lg">{service.description}</p>
                      
                      {service.features && service.features.length > 0 && (
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-charcoal">
                              <span className="text-gold mr-3 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="pt-4">
                        <Button href="/contact" variant="outline">
                          Get in Touch
                        </Button>
                      </div>
                    </div>

                  </div>
                </AnimatedSection>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

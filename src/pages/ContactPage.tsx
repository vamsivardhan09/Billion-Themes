import { useEffect } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Camera } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { ContactForm } from '@/components/ui/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Billion Themes';
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      detail: COMPANY.phoneDisplay,
      href: `tel:${COMPANY.phone}`,
      external: false,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: 'Message us directly',
      href: COMPANY.whatsappUrl,
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      detail: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      external: false,
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: COMPANY.address,
      href: COMPANY.googleMapsUrl,
      external: true,
    },
    {
      icon: Camera,
      title: 'Instagram',
      detail: COMPANY.instagramHandle,
      href: COMPANY.instagram,
      external: true,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-charcoal text-cream section-padding text-center">
        <div className="section-container">
          <h1 className="heading-xl font-display mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? Reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-cream section-padding">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:w-1/2">
              <h2 className="heading-md font-display text-charcoal mb-8">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Right Column: Info */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="heading-md font-display text-charcoal mb-8">Contact Information</h2>
              
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-5 bg-white border border-border hover:border-gold transition-colors group"
                  >
                    <div className="bg-cream-dark p-3 mr-5 group-hover:bg-gold transition-colors">
                      <method.icon className="w-5 h-5 text-gold group-hover:text-charcoal transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-charcoal text-sm uppercase tracking-wider">{method.title}</h3>
                      <p className="text-muted text-sm mt-1">{method.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="bg-cream-dark h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.123456789!2d79.9729336!3d14.4357276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBillion+Themes!5e0!3m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Billion Themes - Nellore Office"
        ></iframe>
      </section>
    </main>
  );
}

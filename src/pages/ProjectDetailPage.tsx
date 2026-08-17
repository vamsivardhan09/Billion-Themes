import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { COMPANY } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Billion Themes`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#121417]/65" />
        </div>
        <div className="relative z-10 section-container text-center text-white">
          <h1 className="heading-xl font-display text-white mb-4">{project.name}</h1>
          <div className="flex flex-wrap justify-center gap-3">
            {project.categories.map((cat) => (
              <span key={cat} className="label-text text-[#D98E20] uppercase tracking-widest font-semibold">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-[#FDFBF7] section-padding">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column: Info */}
              <div className="lg:w-1/3 space-y-8 p-8 bg-white border border-slate-200/80 rounded-sm shadow-xs">
                {project.location && (
                  <div>
                    <h3 className="label-text text-[#121417] font-bold mb-2">Location</h3>
                    <p className="text-muted font-body text-sm">{project.location}</p>
                  </div>
                )}
                {project.scope && (
                  <div>
                    <h3 className="label-text text-[#121417] font-bold mb-2">Scope</h3>
                    <p className="text-muted font-body text-sm">{project.scope}</p>
                  </div>
                )}
                <div>
                  <h3 className="label-text text-[#121417] font-bold mb-2">Category</h3>
                  <p className="text-muted font-body text-sm capitalize">{project.categories.join(', ')}</p>
                </div>
              </div>

              {/* Right Column: Description */}
              <div className="lg:w-2/3 space-y-6">
                <h2 className="heading-md font-display text-[#121417]">About the Project</h2>
                {project.description ? (
                  <p className="font-body text-[#667085] text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                ) : (
                  <p className="font-body text-[#667085] text-lg leading-relaxed font-light">
                    Project details coming soon. Contact Billion Themes Private Limited to learn more about this project.
                  </p>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Before & After Interactive Comparison (if before/after available) */}
      {project.beforeImage && project.afterImage && (
        <section className="bg-slate-50 section-padding border-y border-slate-200/80">
          <div className="section-container">
            <h2 className="heading-md font-display text-[#121417] mb-8 text-center">
              Site Transformation Comparison
            </h2>
            <div className="max-w-5xl mx-auto">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                aspectRatio="16/9"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#121417] text-white section-padding text-center">
        <div className="section-container max-w-3xl">
          <h2 className="heading-lg font-display text-white mb-6">Start Your Project</h2>
          <p className="font-body text-slate-300 mb-8 text-lg font-light">
            Ready to bring your architectural vision to life? Let's discuss your next project in Nellore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="whatsapp" href={COMPANY.whatsappUrl} className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
            <Button variant="phone" href={`tel:${COMPANY.phone}`} className="w-full sm:w-auto">
              Call Us
            </Button>
            <Button variant="primary" href="/contact" className="w-full sm:w-auto">
              Contact Form
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

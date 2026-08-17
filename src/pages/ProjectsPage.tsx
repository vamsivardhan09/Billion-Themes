import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects — Billion Themes';
  }, []);

  const categories = ['All', 'Interior', 'Exterior', 'Residential', 'Commercial', 'Construction'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.categories.map(c => c.toLowerCase()).includes(activeCategory.toLowerCase()));

  return (
    <main>
      <section className="bg-charcoal text-cream section-padding">
        <div className="section-container text-center">
          <h1 className="heading-xl font-display mb-4">Our Projects</h1>
          <p className="text-muted heading-sm font-body max-w-2xl mx-auto">
            A selection of our interior, exterior, and construction work.
          </p>
        </div>
      </section>

      <section className="bg-cream section-padding min-h-screen">
        <div className="section-container">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100} direction="up">
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

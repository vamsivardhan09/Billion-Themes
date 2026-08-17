import { useState, useEffect } from 'react';
import { projects, ProjectCategory } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = 'Projects — Billion Themes';
  }, []);

  const categories = ['all', 'interior', 'exterior', 'residential', 'commercial', 'construction'];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory as ProjectCategory));

  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-slate-100/80 section-padding text-center border-b border-slate-200/60">
        <div className="section-container max-w-3xl space-y-3">
          <span className="label-text text-[#D98E20]">Architectural Portfolio</span>
          <h1 className="heading-xl font-display text-[#121417]">Selected Works</h1>
          <p className="font-body text-[#667085] text-base md:text-lg font-light leading-relaxed">
            Explore our completed interior transformations, exterior elevations, structural designs, and civil construction projects in Nellore.
          </p>
        </div>
      </section>

      {/* Filter & Portfolio Grid */}
      <section className="section-padding">
        <div className="section-container space-y-12">
          
          {/* Category Filter Row */}
          <div className="flex justify-center">
            <FilterBar
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500 font-body">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

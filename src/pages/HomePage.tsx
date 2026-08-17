import React, { useEffect } from 'react';
import { Hero } from '@/components/home/Hero';
import { AnnouncementBar } from '@/components/home/AnnouncementBar';
import { TrustSection } from '@/components/home/TrustSection';
import { SelectedProjects } from '@/components/home/SelectedProjects';
import { BeforeAfterShowcase } from '@/components/home/BeforeAfterShowcase';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CinematicHouseExperience } from '@/components/home/CinematicHouseExperience';
import { FeaturedProject } from '@/components/home/FeaturedProject';
import { ProcessSection } from '@/components/home/ProcessSection';
import { Testimonials } from '@/components/home/Testimonials';
import { ConversionSection } from '@/components/home/ConversionSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Billion Themes — Interior Design, Exterior Design & Construction in Nellore';
  }, []);

  return (
    <div className="w-full bg-[#FDFBF7]">
      <Hero />
      <AnnouncementBar />
      <TrustSection />
      <SelectedProjects />
      <BeforeAfterShowcase />
      <ServicesOverview />
      <CinematicHouseExperience />
      <FeaturedProject />
      <ProcessSection />
      <Testimonials />
      <ConversionSection />
    </div>
  );
}

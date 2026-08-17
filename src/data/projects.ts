export type ProjectCategory = 'interior' | 'exterior' | 'residential' | 'commercial' | 'construction';

export interface Project {
  id: string;
  name: string;
  slug: string;
  categories: ProjectCategory[];
  heroImage: string;
  beforeImage?: string;       // Authentic raw civil site "Before" state
  afterImage?: string;        // Real finished "After" state from Billion Themes downloads
  gallery: string[];
  featured: boolean;
  description?: string;
  scope?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    id: 'project-ratnam',
    name: 'Project Ratnam',
    slug: 'project-ratnam',
    categories: ['interior', 'residential'],
    heroImage: '/assets/projects/ratnam_after.jpg',
    beforeImage: '/assets/projects/ratnam_before.png',
    afterImage: '/assets/projects/ratnam_after.jpg',
    gallery: ['/assets/projects/ratnam_after.jpg', '/assets/projects/ratnam_before.png'],
    featured: true,
    location: 'Dargamitta, Nellore',
    scope: 'Complete Turnkey Interior & Spatial Architecture',
    description: 'A bespoke interior design project in Nellore showcasing custom marble paneling, ambient LED lighting grids, and premium teak woodwork.',
  },
  {
    id: 'lasya-grand',
    name: 'Lasya Grand',
    slug: 'lasya-grand',
    categories: ['interior', 'commercial'],
    heroImage: '/assets/projects/lasya_after.jpg',
    beforeImage: '/assets/projects/lasya_before.png',
    afterImage: '/assets/projects/lasya_after.jpg',
    gallery: ['/assets/projects/lasya_after.jpg', '/assets/projects/lasya_before.png'],
    featured: true,
    location: 'Magunta Layout, Nellore',
    scope: 'Commercial Dining & Interior Styling',
    description: 'Transforming a raw commercial civil space into a luxurious dining atmosphere featuring acoustic wall paneling and custom warm lighting.',
  },
  {
    id: 'project-bhavya',
    name: 'Project Bhavya',
    slug: 'project-bhavya',
    categories: ['exterior', 'residential', 'construction'],
    heroImage: '/assets/projects/bhavya_after.jpg',
    beforeImage: '/assets/projects/bhavya_before.png',
    afterImage: '/assets/projects/bhavya_after.jpg',
    gallery: ['/assets/projects/bhavya_after.jpg', '/assets/projects/bhavya_before.png'],
    featured: true,
    location: 'Kavali, Andhra Pradesh',
    scope: 'Structural Elevation & Turnkey Civil Construction',
    description: 'Full-scale villa structural engineering, facade elevation design, and complete turnkey civil building construction from ground breaking to handover.',
  },
  {
    id: 'project-srihari',
    name: 'Project Srihari',
    slug: 'project-srihari',
    categories: ['interior', 'residential'],
    heroImage: '/assets/projects/srihari_after.jpg',
    beforeImage: '/assets/projects/srihari_before.png',
    afterImage: '/assets/projects/srihari_after.jpg',
    gallery: ['/assets/projects/srihari_after.jpg', '/assets/projects/srihari_before.png'],
    featured: true,
    location: 'VRC Centre, Nellore',
    scope: 'Master Bedroom & Living Suite Design',
    description: 'Sophisticated residential interior featuring warm wood acoustic paneling, concealed cove lighting, and luxury furnishings.',
  },
  {
    id: 'narasimha',
    name: 'Narasimha Residence',
    slug: 'narasimha',
    categories: ['interior', 'residential'],
    heroImage: '/assets/projects/narasimha_after.jpg',
    afterImage: '/assets/projects/narasimha_after.jpg',
    gallery: ['/assets/projects/narasimha_after.jpg'],
    featured: false,
    location: 'Gudur, Andhra Pradesh',
    scope: 'Residential Interior Design & Modular Woodwork',
  },
  {
    id: 'project-taj',
    name: 'Project Taj',
    slug: 'project-taj',
    categories: ['interior', 'exterior', 'commercial'],
    heroImage: '/assets/projects/taj_after.jpg',
    afterImage: '/assets/projects/taj_after.jpg',
    gallery: ['/assets/projects/taj_after.jpg'],
    featured: false,
    location: 'Rly Kodur, Andhra Pradesh',
    scope: 'Commercial Interior & Exterior Facade',
  },
  {
    id: 'kavali-city',
    name: 'Kavali City Project',
    slug: 'kavali-city',
    categories: ['construction', 'commercial'],
    heroImage: '/assets/projects/kavali_after.jpg',
    afterImage: '/assets/projects/kavali_after.jpg',
    gallery: ['/assets/projects/kavali_after.jpg'],
    featured: false,
    location: 'Kavali City, Andhra Pradesh',
    scope: 'Commercial Civil Engineering & Structure',
  },
];

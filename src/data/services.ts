export interface Service {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    slug: 'interior-design',
    image: '/assets/luxury_bedroom.png',
    tagline: 'Spaces that reflect your personality.',
    description: 'We transform empty spaces into beautiful, functional interiors. Our designs combine aesthetic appeal with practical functionality tailored to your lifestyle.',
    features: ['Living Room Design', 'Bedroom Design', 'Kitchen Design', 'Modular Furniture', 'Lighting Design', 'Material Selection'],
  },
  {
    id: 'exterior-design',
    title: 'Exterior Design',
    slug: 'exterior-design',
    image: '/assets/villa_exterior.png',
    tagline: 'Elevations that make a statement.',
    description: 'Our exterior designs focus on creating striking facades and beautiful landscapes. We carefully balance visual impact with environmental suitability.',
    features: ['Facade Design', 'Landscape Design', 'Outdoor Living', 'Material Selection', 'Lighting Design', 'Color Consultation'],
  },
  {
    id: 'structural-design',
    title: 'Structural Design',
    slug: 'structural-design',
    image: '/assets/civil_engineer_site.png',
    tagline: 'Engineering that stands the test of time.',
    description: 'We provide robust structural design solutions ensuring the safety and longevity of your building. Our engineering processes are meticulous and code-compliant.',
    features: ['Structural Analysis', 'Foundation Design', 'RCC Design', 'Steel Structures', 'Load Calculations', 'Safety Compliance'],
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    slug: 'building-construction',
    image: '/assets/civil_engineer_site.png',
    tagline: 'From blueprint to handover.',
    description: 'We manage and execute building construction projects with precision. Our focus is on delivering quality construction efficiently and within timeline.',
    features: ['Residential Construction', 'Commercial Construction', 'Renovation', 'Project Management', 'Quality Assurance', 'Timeline Management'],
  },
];

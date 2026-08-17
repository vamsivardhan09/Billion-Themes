export interface Testimonial {
  id: string;
  name: string;
  project?: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Client — Pending Approval',
    project: 'Residential Project',
    quote: 'The team delivered excellent quality on our home construction. The attention to detail and structural integrity gives us immense peace of mind.',
    rating: 5,
    verified: false,
  },
  {
    id: 't2',
    name: 'Client — Pending Approval',
    project: 'Commercial Space',
    quote: 'Very professional interior design work. They transformed our office space into an inspiring environment that perfectly aligns with our brand.',
    rating: 5,
    verified: false,
  },
  {
    id: 't3',
    name: 'Client — Pending Approval',
    project: 'Villa Project',
    quote: 'Great experience from blueprint to handover. The structural design was robust, and the exterior elevation looks absolutely stunning.',
    rating: 5,
    verified: false,
  },
];

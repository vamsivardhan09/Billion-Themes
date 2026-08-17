import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/data/company';
import { Camera, ShieldCheck, MapPin, Award, CheckCircle2, User, Building2, Compass, ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About & Founder — Billion Themes';
  }, []);

  const founder = COMPANY.founder;

  const instagramPosts = [
    {
      id: 1,
      image: '/assets/projects/ratnam_after.jpg',
      caption: 'Luxury living room transformation in Nellore. Teak wood paneling & warm ambient lights.',
      likes: '420+',
    },
    {
      id: 2,
      image: '/assets/projects/bhavya_after.jpg',
      caption: 'Modern villa structural elevation & turnkey civil execution in Kavali.',
      likes: '680+',
    },
    {
      id: 3,
      image: '/assets/projects/srihari_after.jpg',
      caption: 'Master bedroom suite styling with acoustic wall dampening.',
      likes: '510+',
    },
    {
      id: 4,
      image: '/assets/projects/lasya_after.jpg',
      caption: 'Commercial dining interior spatial architecture in Magunta Layout.',
      likes: '390+',
    },
  ];

  return (
    <main className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-[#121417] text-white section-padding text-center relative overflow-hidden">
        <div className="section-container relative z-10 py-8">
          <span className="label-text text-[#C9A96E]">Architecture · Interiors · Civil Engineering</span>
          <h1 className="heading-xl font-display text-white mt-2 mb-4">About Billion Themes</h1>
          <p className="font-body text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Bringing architectural vision and turnkey civil construction expertise together under one studio in Nellore.
          </p>
        </div>
      </section>

      {/* Founder Leadership Section */}
      <section className="bg-[#FDFBF7] section-padding border-b border-slate-200/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Image Frame */}
            <div className="lg:col-span-5">
              <div className="relative p-4 bg-white border border-slate-200 shadow-xl rounded-sm">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative group">
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — ${founder.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="label-text text-[#C9A96E]">{founder.title}</span>
                    <h3 className="font-display text-2xl font-semibold">{founder.name}</h3>
                    <p className="text-xs font-body text-slate-300 font-medium">{founder.role}</p>
                  </div>
                </div>

                {/* Direct Personal Instagram Badge */}
                <a
                  href={founder.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-between p-3 bg-slate-50 hover:bg-[#FFF4E5] border border-slate-200 rounded-xs text-xs font-body text-[#1C4466] hover:text-[#D98E20] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Camera size={15} className="text-[#D98E20]" />
                    <span className="font-semibold">{founder.instagramHandle}</span>
                  </div>
                  <span className="flex items-center text-[10px] uppercase tracking-wider font-bold">
                    Follow Founder <ArrowUpRight size={12} className="ml-0.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Founder Vision & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2">
                  <span className="w-6 h-[2px] bg-[#D98E20]" />
                  <span className="label-text text-[#C9A96E]">FOUNDER &amp; MANAGING DIRECTOR</span>
                </div>
                <h2 className="heading-lg font-display text-[#121417]">
                  {founder.name}
                </h2>
                <p className="font-body text-xs uppercase tracking-widest text-[#1C4466] font-semibold">
                  {founder.role}
                </p>
              </div>

              {/* Motto Banner */}
              <div className="p-4 bg-[#121417] text-[#C9A96E] font-display text-base font-semibold tracking-wider uppercase rounded-xs border-l-4 border-[#D98E20] flex items-center justify-between">
                <span>"{founder.motto}"</span>
                <Compass size={20} className="text-[#D98E20] opacity-80" />
              </div>

              <p className="font-body text-slate-600 text-base md:text-lg font-light leading-relaxed">
                {founder.bio}
              </p>

              {/* Key Credentials List */}
              <div className="space-y-3 pt-2">
                <h4 className="label-text text-[#121417] font-bold">Leadership Credentials</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {founder.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start text-xs font-body text-[#121417]">
                      <CheckCircle2 size={15} className="text-[#D98E20] mr-2 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="font-display text-2xl font-bold text-[#1C4466]">5.0 ★ Rating</span>
                  <p className="text-xs font-body text-slate-500 uppercase tracking-wider">121+ Verified Reviews</p>
                </div>
                <div className="space-y-1">
                  <span className="font-display text-2xl font-bold text-[#D98E20]">700+ Posts</span>
                  <p className="text-xs font-body text-slate-500 uppercase tracking-wider">Active Studio Portfolio</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button href={COMPANY.whatsappUrl} variant="primary">
                  CONNECT ON WHATSAPP →
                </Button>
                <Button href={founder.instagramUrl} variant="outline">
                  FOUNDER'S INSTAGRAM
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instagram Studio Grid Showcase */}
      <section className="bg-slate-50 section-padding border-b border-slate-200/60">
        <div className="section-container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="label-text text-[#D98E20]">Live Portfolio Stream</span>
              <h2 className="heading-md font-display text-[#121417] mt-1">
                Follow Us on Instagram {COMPANY.instagramHandle}
              </h2>
            </div>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-body uppercase tracking-widest text-[#1C4466] hover:text-[#D98E20] font-semibold transition-colors"
            >
              <Camera className="w-4 h-4 mr-2 text-[#D98E20]" />
              Visit Official Instagram Page →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-sm overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all group block"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#121417]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-body text-xs uppercase tracking-widest font-semibold">
                    <Camera className="w-5 h-5 mr-2 text-[#D98E20]" /> View Post
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="font-body text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-body text-[#D98E20] font-semibold">
                    <span>❤️ {post.likes} Likes</span>
                    <span>{COMPANY.instagramHandle}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#121417] text-white section-padding text-center">
        <div className="section-container max-w-3xl">
          <h2 className="heading-lg font-display text-white mb-6">Ready to Start Your Project?</h2>
          <p className="font-body text-slate-300 mb-8 text-lg font-light">
            Connect directly with Suchethan Reddy &amp; Billion Themes Private Limited via WhatsApp or phone call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="whatsapp" href={COMPANY.whatsappUrl}>
              WHATSAPP US
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

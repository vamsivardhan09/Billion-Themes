import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function CinematicHouseExperience() {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      id: 'living',
      label: '01 Living Room',
      image: '/assets/luxury_living_room.png',
      description: 'Expansive spatial layout with custom Italian marble and concealed architectural cove lighting.',
    },
    {
      id: 'bedroom',
      label: '02 Master Suite',
      image: '/assets/luxury_bedroom.png',
      description: 'Warm veneer paneling, floor-to-ceiling drapery, and acoustic spatial dampening.',
    },
    {
      id: 'hall',
      label: '03 Reception Hall',
      image: '/room_hall.jpg',
      description: 'Architectural ceiling drop with integrated ambient lights and bespoke furniture fittings.',
    },
    {
      id: 'exterior',
      label: '04 Exterior Elevation',
      image: '/assets/villa_exterior.png',
      description: 'Contemporary facade detailing, weather-resistant louvers, and structural integrity.',
    },
  ];

  const currentRoom = rooms[activeRoom] || rooms[0];

  return (
    <section className="relative w-full bg-[#121417] text-white overflow-hidden py-24 border-y border-[#22272E]">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="label-text text-[#C9A96E]">Continuous Spatial Narrative</span>
          <h2 className="heading-lg font-display text-white mt-2 mb-4">
            EXPERIENCE THE SPACE
          </h2>
          <p className="font-body text-slate-300 text-base md:text-lg font-light">
            A home designed as one continuous story.
          </p>
        </div>

        {/* Cinematic Container (Architected for scroll video scrub / GSAP trigger) */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-sm overflow-hidden bg-black shadow-2xl border border-slate-800">
          <motion.img
            key={currentRoom.id}
            initial={{ opacity: 0.4, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            src={currentRoom.image}
            alt={currentRoom.label}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-black/40" />

          {/* Overlay Info */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 z-20">
            <div className="max-w-xl space-y-2">
              <span className="label-text text-[#C9A96E]">{currentRoom.label}</span>
              <p className="font-body text-sm md:text-base text-slate-200 font-light leading-relaxed">
                {currentRoom.description}
              </p>
            </div>

            {/* Room Tabs */}
            <div className="flex flex-wrap gap-2">
              {rooms.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(idx)}
                  className={`px-4 py-2 text-xs font-body uppercase tracking-wider transition-all duration-300 rounded-xs border ${
                    activeRoom === idx
                      ? 'bg-[#C9A96E] text-[#121417] border-[#C9A96E] font-semibold'
                      : 'bg-black/40 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {room.label.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

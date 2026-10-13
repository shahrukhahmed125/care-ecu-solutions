import React, { useState, useEffect } from 'react';
import { GALLERY_PROJECTS } from '../data/careEcuData';
import { SectionHeader } from './SectionHeader';
import { SafeImage } from './SafeImage';
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Wrench, 
  Car
} from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Bench Repair', 'Diagnostics', 'Keys & Immo', 'Micro-Soldering'];

  const filteredProjects = selectedCategory === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => 
          prev !== null ? (prev > 0 ? prev - 1 : filteredProjects.length - 1) : null
        );
      }
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => 
          prev !== null ? (prev < filteredProjects.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredProjects.length]);

  return (
    <section id="gallery" className="py-24 bg-[#08090C] relative border-t border-white/[0.06]">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/3 left-1/3 w-[550px] h-[300px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Section Header */}
        <SectionHeader
          badgeText="Workshop Archives & Documentation"
          badgeIcon={<Camera className="w-3.5 h-3.5" />}
          titlePrefix="Bench Testing &"
          titleHighlight="Hardware Engineering Gallery"
          description="Direct glimpses into our Romford testing facility: oscilloscopes, BDM flash rigs, microscope workstations, and surgical micro-soldering restorations."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF1E27] to-[#990A17] text-white font-bold shadow-[0_0_20px_rgba(255,30,39,0.5)] scale-105'
                    : 'bg-[#0E1015] text-[#9CA3AF] hover:text-white hover:bg-[#161820] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-cursor="view"
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative rounded-2xl bg-[#090A0E] border border-white/[0.08] hover:border-red-500/60 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_15px_40px_rgba(255,30,39,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with SafeImage */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0E1015]">
                <SafeImage
                  src={project.imageUrl}
                  fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-black/30" />

                {/* Category Badge in Crimson */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-400 uppercase font-semibold">
                  {project.category}
                </div>

                {/* Expand Indicator */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 backdrop-blur-md text-white/70 group-hover:text-white group-hover:bg-[#FF1E27] transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Caption and Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-1">
                  <Car className="w-3 h-3" />
                  <span>{project.vehicle}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-red-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                  <span className="flex items-center gap-1.5 truncate">
                    <Wrench className="w-3 h-3 text-red-500" />
                    <span className="truncate">{project.equipmentUsed}</span>
                  </span>
                  <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform">VIEW →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center bg-[#090A0E] border border-red-500/40 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 text-white">
              <div>
                <span className="text-xs font-mono text-red-400 uppercase tracking-wider">
                  {filteredProjects[activeLightboxIndex].category} &bull; {filteredProjects[activeLightboxIndex].vehicle}
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {filteredProjects[activeLightboxIndex].title}
                </h3>
              </div>

              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 rounded-lg bg-[#161820] hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image with SafeImage */}
            <div className="relative w-full my-6 flex items-center justify-center max-h-[58vh] overflow-hidden rounded-xl bg-black">
              <SafeImage
                src={filteredProjects[activeLightboxIndex].imageUrl}
                fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt={filteredProjects[activeLightboxIndex].title}
                className="max-h-[58vh] w-auto object-contain rounded-lg"
              />

              {/* Prev / Next arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => 
                    prev !== null ? (prev > 0 ? prev - 1 : filteredProjects.length - 1) : null
                  );
                }}
                className="absolute left-4 p-3 rounded-full bg-black/80 hover:bg-[#FF1E27] text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxIndex((prev) => 
                    prev !== null ? (prev < filteredProjects.length - 1 ? prev + 1 : 0) : null
                  );
                }}
                className="absolute right-4 p-3 rounded-full bg-black/80 hover:bg-[#FF1E27] text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Description & Equipment metadata */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-[#D1D5DB]">
              <div className="max-w-xl">
                <p className="text-[#9CA3AF]">
                  {filteredProjects[activeLightboxIndex].description}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#0E1015] border border-red-500/30 text-red-400 whitespace-nowrap">
                Equip: {filteredProjects[activeLightboxIndex].equipmentUsed}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

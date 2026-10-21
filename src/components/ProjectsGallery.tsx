import React, { useState } from 'react';
import { ArrowUpRight, Filter, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/bularcrestData';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenCommission: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject, onOpenCommission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Energy Autonomy', 'Monumental'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full py-12 md:py-20 relative z-10 animate-in fade-in duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Portfolio Archive
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light tracking-tight">
              Curated Architectural Works
            </h1>
          </div>
          <p className="font-sans text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            Private residences, commercial envelopes, and autonomous sanctuaries engineered for multi-century permanence.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/5 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="uppercase tracking-wider font-semibold text-[10px]">Filter:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#C5A059] text-[#0B0E14] shadow-[0_0_15px_rgba(197,160,89,0.3)] font-semibold'
                    : 'bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group bg-[#181B22]/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A059]/40 hover:shadow-[0_24px_50px_rgba(197,160,89,0.15)] cursor-pointer flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden w-full h-72 sm:h-80 md:h-96">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B0E14]/80 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-[#E9C176]">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0B0E14]/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                    {project.code}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0E14]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#E9C176] group-hover:bg-[#C5A059] group-hover:text-[#0B0E14] transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#9CA3AF]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E9C176]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#E9C176]" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl text-[#F9FAFB] font-light mb-2 group-hover:text-[#E9C176] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#E9C176] tracking-wider uppercase mb-3">
                    {project.subtitle}
                  </p>
                  <p className="font-sans text-sm text-[#9CA3AF] font-light line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Metrics */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#9CA3AF] text-[10px] uppercase tracking-wider block">Scope</span>
                    <span className="font-serif text-base text-[#F9FAFB] font-light">{project.conditionedArea}</span>
                  </div>
                  <div>
                    <span className="text-[#9CA3AF] text-[10px] uppercase tracking-wider block">Autonomy</span>
                    <span className="font-sans text-xs text-[#E9C176] font-medium">{project.energyProfile.split('+')[0]}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E9C176] group-hover:bg-[#C5A059] group-hover:text-[#0B0E14] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl text-[#F9FAFB] font-light">
              Looking for a confidential site consultation?
            </h4>
            <p className="text-xs text-[#9CA3AF] mt-1">
              We review prospective land acquisitions, zoning feasibility, and geotechnical conditions.
            </p>
          </div>
          <button
            onClick={onOpenCommission}
            className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            Request Private Feasibility
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/bularcrestData';

interface ShowcaseSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  project: ProjectItem;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onSelectProject, project }) => {
  return (
    <section className="w-full py-16 md:py-24 relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Monolithic Architectural Image Showcase */}
          <div
            onClick={() => onSelectProject(project)}
            className="md:col-span-7 relative group overflow-hidden rounded-2xl shadow-2xl bg-[#14171F] border border-white/10 cursor-pointer"
          >
            <div
              className="w-full h-[400px] sm:h-[480px] md:h-[540px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url('${project.image}')`
              }}
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent pointer-events-none" />

            {/* Bottom Meta Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em] block">
                  {project.title}
                </span>
                <p className="font-sans text-sm text-[#D1C5B4] font-light mt-1">
                  {project.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-[#0B0E14]/80 backdrop-blur-md border border-white/10 font-sans text-[10px] text-[#D9C4A0] uppercase tracking-wider">
                  2024 Retrospective
                </span>
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#E9C176] group-hover:bg-[#C5A059] group-hover:text-[#0B0E14] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Doctrine Narrative */}
          <div className="md:col-span-5 flex flex-col justify-center space-y-6 md:pl-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Sovereign Construction
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9FAFB] font-light leading-[1.15]">
              Where physical permanence meets quiet intelligence.
            </h2>

            <p className="font-sans text-base text-[#9CA3AF] font-light leading-relaxed">
              Every pavilion, residence, and institutional envelope we execute balances raw geological presence with seamless, invisible technology. We believe true luxury is acoustic isolation, thermal balance, and architectural conviction.
            </p>

            {/* Certified Seismic & Energy Standard badge */}
            <div className="p-6 rounded-2xl bg-[#181B22]/60 backdrop-blur-xl border border-white/10 shadow-lg flex items-center gap-4 group hover:border-[#C5A059]/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#E9C176]" />
              </div>
              <div>
                <h3 className="font-sans text-base text-[#F9FAFB] font-medium">
                  Certified Seismic & Energy Standard
                </h3>
                <p className="font-sans text-xs text-[#9CA3AF] mt-0.5 font-light">
                  Engineered to exceed SN EN 1998-1 Eurocode thresholds and Passivhaus airtightness standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

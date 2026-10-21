import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/bularcrestData';

interface ProjectMonographProps {
  project: ProjectItem;
  onOpenProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const ProjectMonograph: React.FC<ProjectMonographProps> = ({
  project,
  onOpenProject,
  onViewAllProjects
}) => {
  return (
    <section className="w-full py-16 md:py-24 relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#181B22]/55 backdrop-blur-2xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8),0_0_1px_1px_rgba(255,255,255,0.06)_inset] flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E9C176] font-sans text-[11px] font-semibold uppercase tracking-[0.2em]">
                Selected Monograph
              </span>
              <span className="font-sans text-[11px] text-[#9CA3AF] uppercase tracking-[0.18em]">
                {project.code}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9FAFB] font-light">
              {project.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#9CA3AF] font-light leading-relaxed">
              {project.overview}
            </p>

            {/* Spec metrics strip */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4 border-t border-white/5">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#E9C176] font-light">
                  {project.conditionedArea}
                </span>
                <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-wider block mt-0.5">
                  Conditioned Space
                </span>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#F9FAFB] font-light">
                  100%
                </span>
                <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-wider block mt-0.5">
                  Off-Grid Solar
                </span>
              </div>

              <div className="w-px h-10 bg-white/10" />

              <div>
                <span className="block font-serif text-2xl sm:text-3xl text-[#F9FAFB] font-light">
                  14 mo
                </span>
                <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-wider block mt-0.5">
                  Execution Timeline
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenProject(project)}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E9C176] hover:text-white transition-colors"
              >
                <span>Inspect Technical Blueprint &amp; Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div
            onClick={() => onOpenProject(project)}
            className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl border border-white/10 cursor-pointer shadow-2xl"
          >
            <div
              className="w-full h-80 sm:h-96 md:h-[420px] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url('${project.image}')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 right-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewAllProjects();
                }}
                className="px-4 py-2.5 rounded-full bg-[#0B0E14]/85 backdrop-blur-md border border-white/10 text-[#F9FAFB] hover:text-[#E9C176] hover:border-[#C5A059]/40 font-sans text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg"
              >
                <span>View Full Archive</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

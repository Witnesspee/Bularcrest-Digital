import React, { useEffect } from 'react';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/bularcrestData';

interface ProjectLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireProject: (project: ProjectItem) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0B0E14]/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-5xl my-auto bg-[#14171F]/95 border border-white/15 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_1px_1px_rgba(197,160,89,0.3)_inset] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0E14]/70">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E9C176] text-[10px] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-[#9CA3AF] uppercase tracking-wider font-mono">
              {project.code}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Image in Modal */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 md:h-[420px] shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 id="modal-project-title" className="font-serif text-2xl sm:text-4xl text-[#F9FAFB] font-light">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-[#E9C176] mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    Completed {project.year}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onInquireProject(project)}
                className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Inquire on this Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider block font-medium">Conditioned Space</span>
              <span className="font-serif text-xl sm:text-2xl text-[#F9FAFB] font-light mt-0.5 block">{project.conditionedArea}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider block font-medium">Execution Timeline</span>
              <span className="font-serif text-xl sm:text-2xl text-[#E9C176] font-light mt-0.5 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider block font-medium">Energy Protocol</span>
              <span className="text-xs text-[#F9FAFB] font-medium mt-1.5 block">{project.energyProfile}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider block font-medium">Structural Life</span>
              <span className="text-xs text-[#E9C176] font-medium mt-1.5 block">150+ Years Unassisted</span>
            </div>
          </div>

          {/* Overview & Highlights */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold">
              Architectural Monograph Summary
            </h3>
            <p className="font-sans text-base text-[#D1C5B4] font-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Architectural Innovations */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold">
              Engineering & Spatial Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architecturalHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#9CA3AF] leading-relaxed font-light">
                    {hl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural System & Materiality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-semibold block mb-2 text-[#E9C176]">
                Structural System
              </span>
              <p className="text-xs text-[#F9FAFB] leading-relaxed font-light">
                {project.structuralSystem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider font-semibold block mb-2 text-[#E9C176]">
                Key Material Palette
              </span>
              <div className="flex flex-wrap gap-2">
                {project.keyMaterials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-[#D1C5B4]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0B0E14]/80 border-t border-white/10 flex items-center justify-between text-xs text-[#9CA3AF]">
          <span>SN EN 1998-1 Eurocode Conformance Guaranteed</span>
          <button
            onClick={() => onInquireProject(project)}
            className="text-[#E9C176] hover:text-white font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5"
          >
            <span>Request Portfolio Dossier PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

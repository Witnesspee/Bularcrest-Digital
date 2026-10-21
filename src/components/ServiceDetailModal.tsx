import React, { useEffect } from 'react';
import { X, CheckCircle2, Award, Layers, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '../data/bularcrestData';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onInquireService: (service: ServiceDetail) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquireService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0B0E14]/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl my-auto bg-[#14171F]/95 border border-white/15 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_1px_1px_rgba(197,160,89,0.3)_inset] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0E14]/70">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#E9C176] font-semibold">{service.number}</span>
            <span className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.2em]">{service.kicker}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          <div>
            <div className="inline-block text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.18em] mb-2">
              {service.tagline}
            </div>
            <h2 id="modal-service-title" className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] font-light">
              {service.title}
            </h2>
            <p className="font-sans text-base text-[#D1C5B4] font-light leading-relaxed mt-4">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Core Engineering Deliverables</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.deliverables.map((del, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span className="text-xs text-[#9CA3AF] leading-relaxed font-light">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div className="space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technical Tolerances &amp; Thresholds</span>
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-xs">
                <tbody>
                  {service.specifications.map((spec, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-medium text-[#9CA3AF] w-1/3">{spec.label}</td>
                      <td className="py-3 px-4 font-mono text-[#F9FAFB]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Materials & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[10px] text-[#E9C176] uppercase tracking-wider font-semibold block">
                Approved Material Specs
              </span>
              <div className="flex flex-wrap gap-2">
                {service.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[11px] text-[#D1C5B4]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[10px] text-[#E9C176] uppercase tracking-wider font-semibold block flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Audited Certifications</span>
              </span>
              <div className="space-y-2">
                {service.certifications.map((cert, i) => (
                  <div key={i} className="text-xs text-[#9CA3AF] font-light flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#E9C176]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action */}
        <div className="p-6 bg-[#0B0E14]/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#9CA3AF]">
            Direct partner consultation available under strict non-disclosure agreement.
          </span>
          <button
            onClick={() => onInquireService(service)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] cursor-pointer whitespace-nowrap"
          >
            <span>Commission {service.title} Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  SERVICES_DATA, 
  ServiceDetail, 
  PROJECTS_DATA 
} from '../data/bularcrestData';
import { 
  Building2, 
  Zap, 
  Shield, 
  Sun, 
  PenTool, 
  Hammer, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';

interface ServicesDetailedViewProps {
  onSelectServiceModal: (service: ServiceDetail) => void;
  onOpenCommission: (serviceTitle?: string) => void;
}

export const ServicesDetailedView: React.FC<ServicesDetailedViewProps> = ({
  onSelectServiceModal,
  onOpenCommission
}) => {
  const [activeTab, setActiveTab] = useState<string>('construction');

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'construction': return <Hammer className="w-5 h-5" />;
      case 'architecture': return <Building2 className="w-5 h-5" />;
      case 'energy': return <Zap className="w-5 h-5" />;
      case 'security': return <Shield className="w-5 h-5" />;
      case 'lighting': return <Sun className="w-5 h-5" />;
      case 'interiors': return <PenTool className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full py-12 md:py-20 relative z-10 animate-in fade-in duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
        {/* Title */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
              Sovereign Disciplines
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F9FAFB] font-light tracking-tight leading-[1.1]">
            Integrated Architectural &amp; Engineering Mastery
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed mt-4">
            Six disciplined branches executed under one roof. No subcontracting compromises, no design-to-build misalignments.
          </p>
        </div>

        {/* Tab navigation for services */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-white/10 scrollbar-none">
          {SERVICES_DATA.map((srv) => {
            const isSelected = activeTab === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#C5A059] text-[#0B0E14] shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] border border-white/5'
                }`}
              >
                {getIcon(srv.id)}
                <span>{srv.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#181B22]/55 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-12 animate-in fade-in duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-[#E9C176] font-semibold">{activeService.number}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">{activeService.kicker}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light">
                {activeService.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#E9C176] tracking-wider uppercase mt-1">
                {activeService.tagline}
              </p>
            </div>

            <button
              onClick={() => onOpenCommission(activeService.title)}
              className="px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider shadow-[0_0_24px_rgba(197,160,89,0.3)] transition-all cursor-pointer whitespace-nowrap self-start lg:self-auto"
            >
              Commission {activeService.title}
            </button>
          </div>

          <p className="text-base sm:text-lg text-[#D1C5B4] font-light leading-relaxed max-w-4xl">
            {activeService.description}
          </p>

          {/* Deliverables and Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Deliverables */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Atelier Deliverables</span>
              </h3>
              <div className="space-y-2.5">
                {activeService.deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications & Tolerances */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#E9C176] font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Audited Technical Standards</span>
              </h3>
              <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
                <table className="w-full text-left text-xs">
                  <tbody>
                    {activeService.specifications.map((sp, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                        <td className="py-3.5 px-5 text-[#9CA3AF] font-medium w-2/5">{sp.label}</td>
                        <td className="py-3.5 px-5 font-mono text-[#F9FAFB] font-medium">{sp.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#E9C176] font-semibold block">
                  Materiality Guidelines:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.materials.map((m, i) => (
                    <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-[#D1C5B4]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table: Standard Industry vs Bularcrest Sovereign Standard */}
        <div className="space-y-8">
          <div>
            <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em] block mb-2">
              The Quality Horizon
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] font-light">
              Conventional Practice vs. Bularcrest Sovereign Standard
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#181B22]/50 backdrop-blur-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-4 px-6 text-[#9CA3AF] uppercase tracking-wider font-semibold">Standard Dimension</th>
                  <th className="py-4 px-6 text-[#9CA3AF] uppercase tracking-wider font-semibold">Conventional High-End</th>
                  <th className="py-4 px-6 text-[#E9C176] uppercase tracking-wider font-semibold">Bularcrest Sovereign Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#D1C5B4] font-light">
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-6 font-medium text-[#F9FAFB]">Structural Envelope Lifespan</td>
                  <td className="py-4 px-6 text-[#9CA3AF]">25 - 40 years before major retrofit</td>
                  <td className="py-4 px-6 text-[#E9C176] font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>150+ years unassisted; 50-year warranty</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-6 font-medium text-[#F9FAFB]">Seismic Acceleration</td>
                  <td className="py-4 px-6 text-[#9CA3AF]">Baseline regional municipal code</td>
                  <td className="py-4 px-6 text-[#E9C176] font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>SN EN 1998-1 Eurocode 8 Seismic Class 1</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-6 font-medium text-[#F9FAFB]">Energy Resilience</td>
                  <td className="py-4 px-6 text-[#9CA3AF]">Grid-dependent with emergency diesel generator</td>
                  <td className="py-4 px-6 text-[#E9C176] font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Closed-loop subterranean LFP + Geothermal</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-6 font-medium text-[#F9FAFB]">Client-Architect Candor</td>
                  <td className="py-4 px-6 text-[#9CA3AF]">Marked-up change orders &amp; opaque billing</td>
                  <td className="py-4 px-6 text-[#E9C176] font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Real-time portal &amp; transparent escrow audit</span>
                  </td>
                </tr>
                <tr className="hover:bg-white/[0.01]">
                  <td className="py-4 px-6 font-medium text-[#F9FAFB]">Perimeter Defense</td>
                  <td className="py-4 px-6 text-[#9CA3AF]">External third-party alarm contractor</td>
                  <td className="py-4 px-6 text-[#E9C176] font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>In-wall air-gapped biometric &amp; BR6 ballistic glass</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

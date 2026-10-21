import React from 'react';
import { 
  Building2, 
  Zap, 
  Shield, 
  Sun, 
  PenTool, 
  Hammer, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_DATA, ServiceDetail } from '../data/bularcrestData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'construction':
        return <Hammer className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      case 'architecture':
        return <Building2 className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      case 'energy':
        return <Zap className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      case 'security':
        return <Shield className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      case 'lighting':
        return <Sun className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      case 'interiors':
        return <PenTool className="w-7 h-7 text-[#E9C176] group-hover:text-[#0B0E14] transition-colors" />;
      default:
        return <Building2 className="w-7 h-7 text-[#E9C176]" />;
    }
  };

  return (
    <section className="w-full py-20 md:py-28 relative z-10" id="services">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Our Expertise
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light tracking-tight">
              Architectural & Technical Mastery
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-[#9CA3AF] max-w-md font-light leading-relaxed">
            A unified continuum of structural construction, clean energy grids, and integrated defensive enclosures.
          </p>
        </div>

        {/* 3x2 Glassmorphic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-[#181B22]/45 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7),0_0_1px_1px_rgba(255,255,255,0.06)_inset] transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A059]/40 hover:shadow-[0_24px_50px_rgba(197,160,89,0.12),0_0_1px_1px_rgba(197,160,89,0.3)_inset] flex flex-col justify-between min-h-[340px] cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300 shadow-sm">
                  {getIcon(service.id)}
                </div>

                <span className="font-sans text-[10px] text-[#8C7A5B] font-semibold uppercase tracking-[0.2em] block mb-1">
                  {service.kicker}
                </span>

                <h3 className="font-serif text-2xl text-[#F9FAFB] font-light mb-3 group-hover:text-[#E9C176] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#9CA3AF] font-light leading-relaxed">
                  {service.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-sans text-[11px] text-[#E9C176] uppercase tracking-wider font-semibold">
                  {service.tagline}
                </span>
                <span className="flex items-center gap-1 text-[#9CA3AF] group-hover:text-[#F9FAFB] group-hover:translate-x-1.5 transition-all">
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E9C176]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

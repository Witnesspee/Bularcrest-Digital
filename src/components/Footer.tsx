import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'projects' | 'about' | 'contact') => void;
  onOpenCommission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCommission }) => {
  return (
    <footer className="relative z-10 w-full bg-[#0B0E14]/90 backdrop-blur-xl border-t border-white/5 mt-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-2 max-w-sm">
          <span className="font-serif text-2xl text-[#F9FAFB] tracking-tight font-light">
            Bularcrest
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
            Bespoke monumental and private residential architecture for collectors of spatial permanence.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-10 items-center">
          <button
            onClick={() => onNavigate('services')}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={onOpenCommission}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9C176] hover:text-white transition-colors cursor-pointer"
          >
            Get a Quote
          </button>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#9CA3AF] text-xs font-light border-t border-white/5 pt-8">
        <p>© 2025 Bularcrest Atelier. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D1C5B4] font-medium">Zurich</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D1C5B4] font-medium">Kyoto</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#D1C5B4] font-medium">London</span>
        </div>
      </div>
    </footer>
  );
};

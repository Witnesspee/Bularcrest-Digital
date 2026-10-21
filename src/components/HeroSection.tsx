import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreDomains: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreDomains }) => {
  return (
    <section className="relative min-h-[920px] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6">
      {/* Immersive Monumental Architectural Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full scale-105 transition-transform duration-1000 ease-out z-0"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-KzYqCbFN0sa0t-zB6XFeqfvd54J271-I6XBaJKRtjjPQUDgCzOYxYJJsIHRrncjxVK0EN9Tgy2a9zEJis5243G54ftff8AUWLGGuDiIMvjHbTv-ToqPulMIcYojPmhr1bZ22vT__59nExVyJ1DKiyfUaNx8jp8PjKdXxwC9y2r5HqKX74X9-yjEIUCoE2CTdxaE1tgPIRsCcCMllbSczrMuqTkW2ULFROML0TpY7KawpAC8wL8psNw')`
        }}
      />

      {/* Multi-tier Obsidian Vignette & Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/85 via-[#0B0E14]/75 to-[#0B0E14] mix-blend-multiply z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent z-0 pointer-events-none" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute -top-[15%] left-1/4 w-[600px] h-[600px] rounded-full bg-[#C5A059]/10 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[40%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#1B2A4A]/30 blur-[150px] pointer-events-none z-0" />

      {/* Floating Central Glass Monolith Card */}
      <div className="max-w-3xl w-full mx-auto p-8 sm:p-12 md:p-14 bg-[#181B22]/55 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(255,255,255,0.08)_inset] text-center relative z-10 transition-all duration-500 hover:shadow-[0_36px_80px_-10px_rgba(197,160,89,0.18),0_0_1px_1px_rgba(197,160,89,0.25)_inset]">
        {/* Architectural Division Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.25em]">
            Construction • Design • Energy • Security
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F9FAFB] tracking-tight leading-[1.1] mb-6 font-light">
          We build spaces <span className="italic font-normal text-[#E9C176]">that last</span>.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Modern construction, bespoke architectural permanence, and integrated intelligence. Precision crafted for generations.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-[1.02] cursor-pointer group focus-visible:outline-none"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreDomains}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9FAFB] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer focus-visible:outline-none"
          >
            <span>Explore Domains</span>
            <ChevronDown className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

        {/* Quick Metrics Strip */}
        <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#F9FAFB] font-light">18+</span>
            <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-[0.18em] mt-1 font-medium">
              Years Mastery
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-white/10">
            <span className="font-serif text-2xl sm:text-3xl text-[#E9C176] font-light">140</span>
            <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-[0.18em] mt-1 font-medium">
              Sites Erected
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl text-[#F9FAFB] font-light">99.8%</span>
            <span className="font-sans text-[10px] text-[#9CA3AF] uppercase tracking-[0.18em] mt-1 font-medium">
              Structural Precision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

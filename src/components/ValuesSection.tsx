import React from 'react';
import { CORE_VALUES } from '../data/bularcrestData';

export const ValuesSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 relative z-10" id="values">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Narrative Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Foundational Principles
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9FAFB] font-light tracking-tight leading-tight">
              Our Core Values
            </h2>

            <p className="font-sans text-base text-[#9CA3AF] font-light leading-relaxed">
              In an era of disposable design and fleeting trends, Bularcrest Atelier anchors itself in unyielding spatial permanence. We reject compromise, building structures meant to outlive generations.
            </p>

            {/* Inline SVG Quality Standard Seal */}
            <div className="p-6 rounded-2xl bg-[#181B22]/50 backdrop-blur-xl border border-white/10 shadow-lg flex items-center gap-5 mt-8 group hover:border-[#C5A059]/40 transition-colors">
              <svg className="w-14 h-14 text-[#E9C176] shrink-0" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeDasharray="4 2" strokeWidth="1.5" />
                <path d="M24 10V38M10 24H38" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
                <circle cx="24" cy="24" fill="currentColor" fillOpacity="0.15" r="14" />
                <polygon fill="currentColor" points="24,14 27,21 34,22 29,27 30,34 24,30 18,34 19,27 14,22 21,21" />
              </svg>
              <div>
                <div className="font-sans text-xs text-[#F9FAFB] tracking-[0.18em] uppercase font-semibold">
                  Bularcrest Seal
                </div>
                <div className="font-sans text-xs text-[#9CA3AF] mt-1 font-light leading-relaxed">
                  Swiss-engineered structural warranty &amp; 50-year envelope guarantee.
                </div>
              </div>
            </div>
          </div>

          {/* Right Vertical Stack of Glass Panels */}
          <div className="lg:col-span-7 space-y-6 flex flex-col">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-[#181B22]/45 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7),0_0_1px_1px_rgba(255,255,255,0.06)_inset] transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-[0_24px_50px_rgba(197,160,89,0.1),0_0_1px_1px_rgba(197,160,89,0.3)_inset] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E9C176] flex items-center justify-center font-sans text-xs font-semibold">
                      {val.numeral}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">
                      {val.title}
                    </h3>
                  </div>
                  <span className="font-sans text-[11px] text-[#E9C176] uppercase tracking-[0.18em] font-medium">
                    {val.subtitle}
                  </span>
                </div>

                <div className="font-sans text-lg text-[#E9C176] font-normal mb-3 italic">
                  {val.quote}
                </div>

                <p className="font-sans text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed">
                  {val.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {val.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-white/5 border border-white/5 font-sans text-[10px] text-[#D1C5B4] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

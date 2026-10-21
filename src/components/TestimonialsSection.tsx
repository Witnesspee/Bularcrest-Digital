import React, { useState } from 'react';
import { MapPin, Building, Quote, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  achievementBadge: string;
  timeline: string;
}

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Lagos' | 'Abuja' | 'Port Harcourt'>('All');

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Dr. Oladipo Adeleke, CON',
      role: 'Group Chairman, Sovereign Maritime Logistics',
      location: 'Banana Island, Ikoyi, Lagos',
      projectType: 'Monolithic Waterfront Villa & Subterranean Vault',
      quote: 'In Lagos, building at this scale usually comes with contractor excuses and supply chain compromises. Bularcrest operated like a Swiss chronometer. Our 14-month schedule in Banana Island was met to the exact week, and our subterranean micro-grid has kept the entire residence off-grid for two years without a second of downtime.',
      achievementBadge: '100% Off-Grid · Zero Schedule Slippage',
      timeline: '14 Months Turnkey'
    },
    {
      id: 'test-2',
      name: 'Hajia Amina Bello-Kano',
      role: 'Principal Trustee, Sahel Heritage Foundation',
      location: 'Maitama District, Abuja, FCT',
      projectType: 'Private Family Compound & Cultural Pavilion',
      quote: 'The thermal serenity and acoustic isolation of our Maitama residence are unlike anything else in Abuja. Even in 40°C dry season heat, the geothermal radiant cooling keeps the interior at a quiet 21°C without blowing fans. Their open-book escrow provided radical peace of mind.',
      achievementBadge: 'Geothermal Cooling · Open-Book Escrow',
      timeline: '18 Months Turnkey'
    },
    {
      id: 'test-3',
      name: 'Engr. Kenneth Nwachukwu, FNSE',
      role: 'Managing Director, Trans-Niger Energy Infrastructure',
      location: 'Old GRA, Port Harcourt, Rivers State',
      projectType: 'Executive Compound & Secure Energy Vault',
      quote: 'As a chartered civil engineer myself, I audited every single batch of their C60/75 concrete and every CFA caisson bored into our delta soil. Bularcrest’s structural discipline is unmatched in Nigeria. The perimeter ballistic defense and air-gapped systems are completely invisible.',
      achievementBadge: '38m Deep Caissons · Invisible Defense',
      timeline: '16 Months Turnkey'
    },
    {
      id: 'test-4',
      name: 'Tunde & Folashade Alabi',
      role: 'Technology Founders & Art Patrons',
      location: 'Lekki Phase 1 (Waterfront), Lagos',
      projectType: 'Contemporary Monolith & Private Gallery',
      quote: 'Our previous contractors battled moisture intrusion and foundation settlement in Lekki’s high water table. Bularcrest anchored deep caissons and applied German crystalline waterproofing. Through three consecutive rainy seasons, our subterranean gallery has remained pristine and bone-dry.',
      achievementBadge: 'Hydrostatic Seal · Zero Settlement',
      timeline: '12 Months Turnkey'
    }
  ];

  const filteredTestimonials = activeFilter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.location.toLowerCase().includes(activeFilter.toLowerCase()));

  const whatsappDirectLink = 'https://wa.link/bjlbnc';

  return (
    <section className="w-full py-20 md:py-28 relative z-10" id="testimonials">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Client Patronage &amp; Trust
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light tracking-tight">
              Words from Our Patrons
            </h2>
            <p className="font-sans text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed mt-4">
              Private principals, institutional trustees, and family offices reflect on structural permanence, guaranteed timelines, and radical honesty across Nigeria.
            </p>
          </div>

          {/* Regional Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#181B22]/60 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {(['All', 'Lagos', 'Abuja', 'Port Harcourt'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setActiveFilter(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === region
                    ? 'bg-[#C5A059] text-[#0B0E14] shadow-sm'
                    : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="group bg-[#181B22]/45 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.8),0_0_1px_1px_rgba(255,255,255,0.06)_inset] transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-[0_24px_50px_rgba(197,160,89,0.12)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Ambient Quote Glyph */}
              <div className="absolute top-6 right-8 text-white/[0.03] group-hover:text-[#C5A059]/10 transition-colors pointer-events-none">
                <Quote className="w-20 h-20 -scale-x-100" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Location and Project Type Header */}
                <div className="space-y-2 border-b border-white/5 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-[#E9C176] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      {t.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#D1C5B4] uppercase tracking-wider font-mono">
                      {t.timeline}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF] font-light">
                    <Building className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>{t.projectType}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="font-serif text-base sm:text-lg text-[#F9FAFB] font-light italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Patron Identification Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div>
                  <h4 className="font-sans text-sm text-[#F9FAFB] font-medium tracking-tight">
                    {t.name}
                  </h4>
                  <p className="font-sans text-xs text-[#9CA3AF] font-light mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[10px] text-[#E9C176] font-medium self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.achievementBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct Referral Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#181B22]/80 via-[#181B22]/60 to-[#181B22]/80 backdrop-blur-2xl border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#E9C176] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#F9FAFB] font-light">
                Request a Private Client Reference
              </h4>
              <p className="text-xs text-[#9CA3AF] font-light mt-1">
                Speak directly with former patrons or inspect completed sites in Ikoyi and Maitama under NDA.
              </p>
            </div>
          </div>

          <a
            href={whatsappDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_24px_rgba(197,160,89,0.3)] transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Connect on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

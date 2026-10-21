import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, Clock } from 'lucide-react';
import { ATELIERS, ARCHITECTS_LEADERSHIP } from '../data/bularcrestData';

interface AboutSectionProps {
  onOpenCommission: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCommission }) => {
  // Live clock for Zurich, Kyoto, London
  const [times, setTimes] = useState<{ [city: string]: string }>({});

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated: { [city: string]: string } = {};

      ATELIERS.forEach((atelier) => {
        try {
          const formatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: atelier.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
          updated[atelier.city] = formatter.format(now);
        } catch {
          updated[atelier.city] = now.toLocaleTimeString();
        }
      });

      setTimes(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 md:py-20 relative z-10 animate-in fade-in duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-24">
        {/* Atelier Narrative Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
              The Bularcrest Atelier
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F9FAFB] font-light tracking-tight leading-[1.1]">
            Architectural permanence sculpted for generations.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed mt-6">
            Founded with the belief that buildings should outlive trends by centuries, Bularcrest unifies master architecture, heavy structural engineering, sovereign energy micro-grids, and discreet biometric defense under a singular atelier.
          </p>
        </div>

        {/* Founding Philosophy 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#181B22]/50 backdrop-blur-xl border border-white/10 shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E9C176] font-mono text-sm font-semibold">
              01
            </div>
            <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">Geological Weight</h3>
            <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
              We anchor our structures directly into bedrock using post-tensioned concrete and unyielding native stone, eliminating fragile synthetic claddings that deteriorate under seasonal cycles.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#181B22]/50 backdrop-blur-xl border border-white/10 shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E9C176] font-mono text-sm font-semibold">
              02
            </div>
            <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">Invisible Autonomy</h3>
            <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
              Energy and security should never scream for attention. Photovoltaics match roof slate reflectivity, geothermal loops run deep underground, and biometric seals are flush with hand-cast bronze.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#181B22]/50 backdrop-blur-xl border border-white/10 shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E9C176] font-mono text-sm font-semibold">
              03
            </div>
            <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">Radical Candor</h3>
            <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">
              Open-book escrow, millimetric survey tolerances, and zero marketing illusions. Our clients are partners who receive real-time sensor telemetry and immutable milestone accounting.
            </p>
          </div>
        </div>

        {/* Master Architects & Leadership */}
        <div className="space-y-10">
          <div>
            <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em] block mb-2">
              Leadership &amp; Master Artisans
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] font-light">
              Master Architects Behind the Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARCHITECTS_LEADERSHIP.map((lead, i) => (
              <div
                key={i}
                className="group bg-[#181B22]/45 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-lg flex flex-col justify-between"
              >
                <div className="h-72 w-full overflow-hidden relative">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider text-[#E9C176] font-semibold block">
                      {lead.creds}
                    </span>
                    <h3 className="font-serif text-xl text-[#F9FAFB] font-light mt-0.5">
                      {lead.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#E9C176] uppercase tracking-wider font-medium block mb-2">
                      {lead.role}
                    </span>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
                      {lead.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Ateliers & Interactive Local Clocks */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em] block mb-2">
                Global Coordinates
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] font-light">
                Our Ateliers
              </h2>
            </div>
            <p className="text-xs text-[#9CA3AF] max-w-sm">
              Headquartered along the Limmat in Zürich, with spatial laboratories in Kyoto and London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ATELIERS.map((atelier) => (
              <div
                key={atelier.city}
                className="p-8 rounded-2xl bg-[#181B22]/50 backdrop-blur-xl border border-white/10 shadow-lg space-y-6 group hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <span className="text-xs text-[#E9C176] uppercase tracking-wider font-semibold block">
                      {atelier.country}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F9FAFB] font-light mt-0.5">
                      {atelier.city} Atelier
                    </h3>
                  </div>

                  {/* Live Local Clock */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#E9C176]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{times[atelier.city] || '--:--:--'}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-[#9CA3AF] font-light">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{atelier.address}, {atelier.postal}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="font-mono">{atelier.directPhone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{atelier.directEmail}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-[#9CA3AF]">
                  Director: <span className="text-[#F9FAFB] font-medium">{atelier.director}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audited Guarantees & Swiss Warranty Seal */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#181B22]/80 via-[#181B22]/50 to-[#181B22]/80 backdrop-blur-2xl border border-[#C5A059]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/15 text-[#E9C176] text-[11px] font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>50-Year Structural Envelope Guarantee</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F9FAFB] font-light">
              Underwritten by Swiss Reinsurance &amp; Eurocode 8 Seismic Verification
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
              Every building we deliver is insured against structural fatigue, thermal leakage, and seismic acceleration. We provide an annual physical inspection by a registered partner for 5 decades.
            </p>
          </div>

          <button
            onClick={onOpenCommission}
            className="shrink-0 px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-widest shadow-[0_0_24px_rgba(197,160,89,0.3)] transition-all cursor-pointer whitespace-nowrap"
          >
            Initiate Atelier Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

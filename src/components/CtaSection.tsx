import React, { useState } from 'react';
import { Lock, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenFullCommission: (prefillEmail?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenFullCommission }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenFullCommission(email);
    }, 600);
  };

  return (
    <section className="w-full pt-12 pb-24 relative z-10" id="inquiry">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#181B22]/55 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 md:p-16 border border-[#C5A059]/25 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_1px_1px_rgba(197,160,89,0.2)_inset] relative overflow-hidden">
          {/* Internal Glow Accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#C5A059]/15 blur-[90px] pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30">
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Initiate Commission
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light tracking-tight leading-tight">
              Let’s build something great.
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#9CA3AF] font-light leading-relaxed max-w-xl mx-auto">
              Connect directly with our senior partners and master architects. We take on a strictly limited cohort of 8 commissions per calendar year.
            </p>

            {/* Newsletter / Quick Inquiry Form */}
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
              <div className="w-full relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email..."
                  required
                  className="w-full bg-[#0B0E14]/85 border border-white/20 rounded-full sm:rounded-l-full sm:rounded-r-none px-6 py-4 text-[#F9FAFB] text-sm placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#C5A059] transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                className={`w-full sm:w-auto shrink-0 px-8 py-4 rounded-full sm:rounded-r-full sm:rounded-l-none text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_24px_rgba(197,160,89,0.3)] cursor-pointer flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-[#E9C176] text-[#0B0E14]'
                    : 'bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14]'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#0B0E14]" />
                    <span>Inquiry Started</span>
                  </>
                ) : (
                  <>
                    <span>Contact Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4 text-[#9CA3AF] text-xs font-light">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#E9C176]" />
                Confidential NDA Standard
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E9C176]" />
                24hr Partner Response
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

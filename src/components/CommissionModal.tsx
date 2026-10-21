import React, { useState } from 'react';
import { X, Check, CheckCircle2, Shield, Zap, Building, Lock, ArrowRight, Printer } from 'lucide-react';
import { ATELIERS } from '../data/bularcrestData';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedProject?: string;
  initialEmail?: string;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedProject,
  initialEmail = ''
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Configuration state
  const [selectedDomains, setSelectedDomains] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Construction', 'Architecture']
  );
  const [areaSquareMeters, setAreaSquareMeters] = useState<number>(850);
  const [energyTier, setEnergyTier] = useState<'Standard Net-Zero' | 'Hybrid Micro-Grid' | '100% Off-Grid Sovereign'>('100% Off-Grid Sovereign');
  const [securityTier, setSecurityTier] = useState<'Passive Perimeter' | 'Biometric Access' | 'Air-Gapped Vault'>('Biometric Access');
  const [atelierPreference, setAtelierPreference] = useState<string>('Zürich');

  // Contact details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState(initialEmail);
  const [clientPhone, setClientPhone] = useState('');
  const [clientLocation, setClientLocation] = useState(preselectedProject ? `Inspired by ${preselectedProject}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [dossierId, setDossierId] = useState('');

  if (!isOpen) return null;

  const toggleDomain = (domain: string) => {
    if (selectedDomains.includes(domain)) {
      if (selectedDomains.length > 1) {
        setSelectedDomains(selectedDomains.filter((d) => d !== domain));
      }
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const calculateEstimate = () => {
    // Base estimation algorithm for preliminary briefing
    let basePerSqm = 6500; // CHF / EUR per m² for high-end monolithic
    if (selectedDomains.includes('Energy')) basePerSqm += 850;
    if (selectedDomains.includes('Security')) basePerSqm += 1100;
    if (selectedDomains.includes('Interiors')) basePerSqm += 1400;
    if (selectedDomains.includes('Lighting')) basePerSqm += 450;

    const estimatedTotal = areaSquareMeters * basePerSqm;
    const estimatedMonths = Math.max(12, Math.round(areaSquareMeters / 60));

    return {
      totalFormatted: `CHF ${(estimatedTotal / 1000000).toFixed(2)}M - ${((estimatedTotal * 1.25) / 1000000).toFixed(2)}M`,
      timelineMonths: `${estimatedMonths} - ${estimatedMonths + 4} months`
    };
  };

  const estimate = calculateEstimate();

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `BLR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setDossierId(id);
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#0B0E14]/85 backdrop-blur-2xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl my-auto bg-[#14171F]/95 border border-white/15 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_1px_1px_rgba(197,160,89,0.3)_inset] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0E14]/70">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E9C176]" />
            <span className="text-xs text-[#E9C176] uppercase tracking-[0.2em] font-semibold">
              Commission Feasibility Estimator
            </span>
            {preselectedProject && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-[#9CA3AF]">
                Ref: {preselectedProject}
              </span>
            )}
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto text-[#E9C176]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] text-[#E9C176] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Commission Registry Confirmed
                </span>
                <h3 className="font-serif text-3xl text-[#F9FAFB] font-light">
                  Dossier {dossierId} Initialized
                </h3>
                <p className="text-sm text-[#9CA3AF] max-w-lg mx-auto mt-2 leading-relaxed font-light">
                  Managing Partner in {atelierPreference} has received your spatial brief. A preliminary feasibility analysis and non-disclosure deed will be issued to <span className="text-[#F9FAFB] font-medium">{clientEmail}</span> within 24 hours.
                </p>
              </div>

              {/* Dossier Summary Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-lg mx-auto text-left space-y-3 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9CA3AF]">Principal:</span>
                  <span className="text-[#F9FAFB] font-medium">{clientName || 'Private Patron'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9CA3AF]">Selected Scope:</span>
                  <span className="text-[#E9C176] font-medium">{selectedDomains.join(' • ')}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9CA3AF]">Conditioned Footprint:</span>
                  <span className="text-[#F9FAFB] font-mono">{areaSquareMeters} m²</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9CA3AF]">Energy &amp; Security:</span>
                  <span className="text-[#F9FAFB]">{energyTier} / {securityTier}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[#9CA3AF]">Estimated Execution:</span>
                  <span className="text-[#F9FAFB] font-mono">{estimate.timelineMonths}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#9CA3AF]">Preliminary Budget Scope:</span>
                  <span className="text-[#E9C176] font-semibold font-mono">{estimate.totalFormatted}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F9FAFB] hover:text-[#E9C176] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Brief Dossier</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close &amp; Return to Atelier
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold ${
                      step === 1 ? 'text-[#E9C176]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[10px]">1</span>
                    <span>Domains &amp; Scale</span>
                  </button>
                  <span className="text-white/20">/</span>
                  <button
                    onClick={() => setStep(2)}
                    className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold ${
                      step === 2 ? 'text-[#E9C176]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[10px]">2</span>
                    <span>Autonomy &amp; Security</span>
                  </button>
                  <span className="text-white/20">/</span>
                  <button
                    onClick={() => setStep(3)}
                    className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold ${
                      step === 3 ? 'text-[#E9C176]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[10px]">3</span>
                    <span>Patron Confidentiality</span>
                  </button>
                </div>

                <div className="text-xs font-mono text-[#E9C176]">
                  Step {step} of 3
                </div>
              </div>

              {/* Step 1: Domains & Scale */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 id="modal-quote-title" className="font-serif text-2xl text-[#F9FAFB] font-light">
                      Select Architectural &amp; Engineering Domains
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                      Choose all scopes required for your prospective site.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Construction', label: 'Heavy Construction', icon: Building },
                      { id: 'Architecture', label: 'Spatial Architecture', icon: Building },
                      { id: 'Energy', label: 'Autonomous Energy', icon: Zap },
                      { id: 'Security', label: 'Perimeter Defense', icon: Shield },
                      { id: 'Lighting', label: 'Circadian Optics', icon: Zap },
                      { id: 'Interiors', label: 'Bespoke Millwork', icon: Building }
                    ].map((item) => {
                      const isSelected = selectedDomains.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleDomain(item.id)}
                          className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#C5A059]/15 border-[#C5A059] text-[#F9FAFB] shadow-[0_0_15px_rgba(197,160,89,0.15)]'
                              : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-semibold block">{item.label}</span>
                            <span className="text-[10px] text-[#9CA3AF] mt-0.5 block">Integrated Atelier</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#E9C176] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Footprint Slider */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#F9FAFB]">
                        Conditioned Space Footprint
                      </label>
                      <span className="font-serif text-2xl text-[#E9C176] font-light">
                        {areaSquareMeters} m²
                      </span>
                    </div>

                    <input
                      type="range"
                      min={250}
                      max={4000}
                      step={50}
                      value={areaSquareMeters}
                      onChange={(e) => setAreaSquareMeters(Number(e.target.value))}
                      className="w-full accent-[#C5A059] cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                      <span>250 m² (Private Pavilion)</span>
                      <span>1,500 m² (Compound)</span>
                      <span>4,000+ m² (Monumental Estate)</span>
                    </div>
                  </div>

                  {/* Estimated preliminary metric pill */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs">
                    <span className="text-[#D1C5B4]">Estimated Construction Timeline:</span>
                    <span className="font-mono text-[#E9C176] font-semibold">{estimate.timelineMonths}</span>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <span>Continue to Autonomy &amp; Security</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Autonomy & Security */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">
                      Infrastructure Autonomy &amp; Defense Level
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                      Calibrate microgrid self-sufficiency and discreet architectural protection.
                    </p>
                  </div>

                  {/* Energy Options */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Clean Energy Architecture
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['Standard Net-Zero', 'Hybrid Micro-Grid', '100% Off-Grid Sovereign'] as const).map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setEnergyTier(tier)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            energyTier === tier
                              ? 'bg-[#C5A059]/15 border-[#C5A059] text-[#F9FAFB]'
                              : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-semibold block">{tier}</span>
                          <span className="text-[10px] text-[#9CA3AF] mt-1 block">
                            {tier === '100% Off-Grid Sovereign' ? 'Deep geothermal + subterranean LFP vault' : 'High-efficiency BIPV + grid balance'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Security Options */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Perimeter &amp; Interior Protection
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['Passive Perimeter', 'Biometric Access', 'Air-Gapped Vault'] as const).map((sec) => (
                        <button
                          key={sec}
                          type="button"
                          onClick={() => setSecurityTier(sec)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            securityTier === sec
                              ? 'bg-[#C5A059]/15 border-[#C5A059] text-[#F9FAFB]'
                              : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-semibold block">{sec}</span>
                          <span className="text-[10px] text-[#9CA3AF] mt-1 block">
                            {sec === 'Air-Gapped Vault' ? 'NBC overpressure airlock & BR6 glazing' : 'Discreet neural CCTV & flush biometric doors'}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Atelier */}
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Managing Atelier Office
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {ATELIERS.map((at) => (
                        <button
                          key={at.city}
                          type="button"
                          onClick={() => setAtelierPreference(at.city)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                            atelierPreference === at.city
                              ? 'bg-[#C5A059] text-[#0B0E14] font-semibold'
                              : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs block">{at.city}</span>
                          <span className="text-[9px] uppercase tracking-wider opacity-80 block">{at.country}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-[#9CA3AF] hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all"
                    >
                      <span>Proceed to Confidential Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Patron Details & Final Submit */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">
                      Patron Representation &amp; Transmission
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                      Direct private assignment with partner oversight. Protected under Swiss banking secrecy NDA standards.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-1">
                        Principal or Representative Name
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Lord Julian Vance"
                        className="w-full bg-[#0B0E14] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-1">
                          Confidential Email
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="julian@vance-holdings.co.uk"
                          className="w-full bg-[#0B0E14] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-1">
                          Direct Telephone
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+44 79 11 123456"
                          className="w-full bg-[#0B0E14] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-1">
                        Target Site &amp; Project Notes
                      </label>
                      <input
                        type="text"
                        value={clientLocation}
                        onChange={(e) => setClientLocation(e.target.value)}
                        placeholder="e.g. 5-acre waterfront parcel on Lake Zurich; seeking subterranean wine cellar and solar islanding"
                        className="w-full bg-[#0B0E14] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-white/30 focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#9CA3AF] block">Preliminary Estimated Budget</span>
                      <span className="font-serif text-lg text-[#E9C176] font-light">{estimate.totalFormatted}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#9CA3AF] block">Estimated Execution</span>
                      <span className="font-mono text-[#F9FAFB]">{estimate.timelineMonths}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#9CA3AF]">
                    <Lock className="w-3.5 h-3.5 text-[#E9C176] shrink-0" />
                    <span>Your brief remains confidential and is reviewed solely by our managing partners.</span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-[#9CA3AF] hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider shadow-[0_0_24px_rgba(197,160,89,0.3)] cursor-pointer transition-all"
                    >
                      Submit Commission Dossier
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

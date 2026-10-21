import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Lock, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { ATELIERS } from '../data/bularcrestData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Construction',
    clientPersona: 'High-Net-Worth Individual',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAtelier, setSelectedAtelier] = useState('Zürich');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full py-12 md:py-20 relative z-10 animate-in fade-in duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C5A059]" />
            <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
              Direct Partner Inquiry
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F9FAFB] font-light tracking-tight leading-[1.1]">
            Initiate a Confidential Commission.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#9CA3AF] font-light leading-relaxed mt-4">
            Connect directly with our master architects and structural engineering partners in Zürich, Kyoto, or London. All discussions are protected under standard Swiss non-disclosure agreements.
          </p>
        </div>

        {/* Split Screen Layout (Left: Atelier Info Card, Right: Validated Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact info in Glass Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#181B22]/55 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#E9C176] font-semibold block mb-1">
                  Atelier Headquarters
                </span>
                <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">
                  Bularcrest Global Network
                </h3>
              </div>

              {/* Atelier Selector Pill */}
              <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/5">
                {ATELIERS.map((at) => (
                  <button
                    key={at.city}
                    type="button"
                    onClick={() => setSelectedAtelier(at.city)}
                    className={`flex-1 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedAtelier === at.city
                        ? 'bg-[#C5A059] text-[#0B0E14] shadow-sm'
                        : 'text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    {at.city}
                  </button>
                ))}
              </div>

              {/* Selected Atelier Details */}
              {(() => {
                const at = ATELIERS.find((a) => a.city === selectedAtelier) || ATELIERS[0];
                return (
                  <div className="space-y-4 text-xs text-[#D1C5B4] font-light animate-in fade-in duration-200">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-[#F9FAFB] block">{at.city} Atelier</span>
                          <span className="text-[#9CA3AF]">{at.address}, {at.postal}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <div>
                          <span className="font-medium text-[#F9FAFB] block">Direct Telephony Line</span>
                          <span className="font-mono text-[#9CA3AF]">{at.directPhone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <div>
                          <span className="font-medium text-[#F9FAFB] block">Encrypted Transmission</span>
                          <span className="text-[#9CA3AF]">{at.directEmail}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="text-[#9CA3AF] block">Managing Partner:</span>
                      <span className="text-[#F9FAFB] font-medium text-sm">{at.director}</span>
                    </div>
                  </div>
                );
              })()}

              {/* Guarantees */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                  <Lock className="w-4 h-4 text-[#E9C176]" />
                  <span>Strict Swiss Non-Disclosure Agreement Guaranteed</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                  <Clock className="w-4 h-4 text-[#E9C176]" />
                  <span>24-Hour Senior Partner Response Window</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#9CA3AF]">
                  <ShieldCheck className="w-4 h-4 text-[#E9C176]" />
                  <span>Maximum 8 Active Commissions Handled Annually</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form in Glass Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#181B22]/55 backdrop-blur-2xl border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center mx-auto text-[#E9C176]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-[#F9FAFB] font-light">
                      Commission Brief Received
                    </h3>
                    <p className="font-sans text-sm text-[#9CA3AF] max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <span className="text-[#F9FAFB] font-medium">{formData.name}</span>. Your brief has been transmitted to Managing Partner {ATELIERS.find(a => a.city === selectedAtelier)?.director}. We will initiate secure communication within 24 hours.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs">
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Dossier Reference:</span>
                      <span className="font-mono text-[#E9C176] font-semibold">BLR-2026-8941</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Preferred Atelier:</span>
                      <span className="text-[#F9FAFB]">{selectedAtelier}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Target Domain:</span>
                      <span className="text-[#F9FAFB]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>Confidential Status:</span>
                      <span className="text-[#E9C176]">Protected under NDA</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Construction',
                        clientPersona: 'High-Net-Worth Individual',
                        location: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#9CA3AF] hover:text-white transition-colors"
                  >
                    Submit Additional Inquiries
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#E9C176] font-semibold block mb-1">
                      Step 1 of 1
                    </span>
                    <h3 className="font-serif text-2xl text-[#F9FAFB] font-light">
                      Project Specification Brief
                    </h3>
                  </div>

                  {/* Client Persona Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Client Representation
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'High-Net-Worth Individual',
                        'Commercial Developer',
                        'Corporate Client'
                      ].map((persona) => (
                        <button
                          key={persona}
                          type="button"
                          onClick={() => setFormData({ ...formData, clientPersona: persona })}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${
                            formData.clientPersona === persona
                              ? 'bg-[#C5A059]/15 border-[#C5A059] text-[#E9C176] font-semibold shadow-sm'
                              : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:border-white/20'
                          }`}
                        >
                          {persona}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Full Name / Principal
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Alexander Wright"
                        className="w-full bg-[#0B0E14]/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Confidential Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexander@sovereignholdings.ch"
                        className="w-full bg-[#0B0E14]/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Direct Contact Telephone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+41 79 000 00 00"
                        className="w-full bg-[#0B0E14]/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        Primary Domain Scope
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] focus:outline-none focus:border-[#C5A059] transition-all"
                      >
                        <option value="Construction">Heavy Civil &amp; Sovereign Construction</option>
                        <option value="Architecture">Master Architecture &amp; Spatial Direction</option>
                        <option value="Energy">Autonomous Micro-Grids &amp; Geothermal</option>
                        <option value="Security">Perimeter Defense &amp; Biometric Bunkers</option>
                        <option value="Lighting">Circadian Optics &amp; Solar Synchronization</option>
                        <option value="Interiors">Bespoke Millwork &amp; Tactile Interiors</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Site Location */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Target Site Location / Region
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. St. Moritz, Lake Como, London Mayfair, Kyoto Hills"
                      className="w-full bg-[#0B0E14]/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                    />
                  </div>

                  {/* Project Overview Message */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Project Scope &amp; Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your requirements, target square footage, timeline, and architectural objectives..."
                      className="w-full bg-[#0B0E14]/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#9CA3AF]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-[0_0_24px_rgba(197,160,89,0.3)] hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="animate-pulse">Encrypting &amp; Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Confidential Commission Brief</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

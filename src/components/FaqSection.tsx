import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'Timelines & Logistics' | 'Material Sourcing' | 'Foundations & Soil' | 'Energy & Autonomy' | 'Approvals & Escrow';
  question: string;
  summary: string;
  answer: string;
  keyTakeaway: string;
  specBadge?: string;
}

interface FaqSectionProps {
  onOpenCommission: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenCommission }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'Timelines & Logistics',
      question: 'What realistic execution timelines can patrons expect, and how do you insulate projects from Nigerian port delays?',
      summary: '14 to 22 months turnkey execution with pre-procurement bonded escrow.',
      answer: 'Standard bespoke residential and commercial commissions average 14 to 22 months from piling completion to turnkey handover. To counter Apapa/Tin Can port clearing unpredictability and customs bottlenecks, Bularcrest employs a dual-track logistics framework: all long-lead imported fixtures (triple-glazed Schüco curtain walls, specialized LFP battery banks, and patinated bronze joinery) are ordered, cleared, and held in private bonded, climate-controlled warehousing before site excavation begins. We never break ground dependent on sea freight in transit.',
      keyTakeaway: 'Zero mid-construction work stoppages caused by maritime port or clearance delays.',
      specBadge: 'Bonded Warehouse Buffer'
    },
    {
      id: 'faq-2',
      category: 'Material Sourcing',
      question: 'How does Bularcrest ensure material authenticity and protect against substandard steel and batching in Nigeria?',
      summary: 'Independent Swiss-standard laboratory verification on all high-tensile steel and ready-mix concrete.',
      answer: 'Counterfeit rebar and poor cement batching are pervasive risks in West African construction. Bularcrest enforces strict source-to-site traceability. We only procure certified high-tensile rebar conforming to BS 4449 / ASTM A615 with mill test certificates, tested batch-by-batch in accredited independent metallurgical laboratories. All structural concrete utilizes high-performance C50/60 and C60/75 formulations using low-alkali Portland cement, sulfate-resistant pozzolanic additives, and automated batching plants with mandatory 7-day, 14-day, and 28-day cube compression crush tests.',
      keyTakeaway: 'Continuous destructive testing prevents structural compromises before any pour is certified.',
      specBadge: 'ASTM & BS 4449 Lab Audited'
    },
    {
      id: 'faq-3',
      category: 'Foundations & Soil',
      question: 'How do you engineer foundations for high water tables and reclaimed coastal soils in Lagos (Lekki, Ikoyi, Eko Atlantic)?',
      summary: 'Deep bored cast-in-place piling, anti-saline concrete coatings, and subterranean hydrostatic dampening.',
      answer: 'Coastal Lagos presents extreme geotechnical challenges: high water tables, saline groundwater, and silt subsidence. Bularcrest mandates comprehensive geotechnical soil probing (standard penetration tests and cone penetrometer testing) before architectural drafting. Our structural engineers deploy continuous-flight auger (CFA) or bored cast-in-place caissons anchored deep into competent sandy-clay strata (frequently 25m to 42m deep). Concrete substructures incorporate crystalline waterproofing admixtures (such as Kryton/Xypex) and cathodic corrosion protection to guard rebar against marine chloride attack.',
      keyTakeaway: '50-year structural warranty engineered against coastal settlement and saline concrete cancer.',
      specBadge: 'Subterranean Caissons (40m+)'
    },
    {
      id: 'faq-4',
      category: 'Energy & Autonomy',
      question: 'Can your energy systems deliver genuine 24/7 power without continuous dependence on loud diesel generators?',
      summary: 'Subterranean solar battery micro-grids providing 95%+ grid/generator independence with 8ms transfer.',
      answer: 'True spatial luxury requires acoustic silence and total autonomy. Rather than designing around noisy, polluting diesel gensets as primary power, Bularcrest engineers integrated closed-loop micro-grids. We pair building-integrated solar glass (BIPV) with subterranean Tier 1 lithium-iron-phosphate (LFP) battery energy storage vaults (50kWh to 250kWh). In the event of national grid failure or brownouts, smart hybrid inverters transfer power in under 8 milliseconds (undetectable to sensitive electronics and lighting). Gensets, if retained, function purely as rare secondary emergency reserves, reducing fuel consumption by up to 95%.',
      keyTakeaway: 'Acoustic tranquility with zero flicker and autonomous clean micro-grid reserves.',
      specBadge: 'Subterranean LFP Vaults'
    },
    {
      id: 'faq-5',
      category: 'Approvals & Escrow',
      question: 'How do you safeguard clients against currency volatility (Naira devaluation) during multi-year projects?',
      summary: 'Fixed-milestone foreign exchange escrow reserves and locked advance bulk procurement.',
      answer: 'Inflationary fluctuations and foreign exchange volatility are shielded through our Swiss Escrow Framework. Milestone agreements are pegged to stable reserve currencies (USD, EUR, or CHF) held in transparent client-controlled escrow. Furthermore, our pre-funding model allows Bularcrest to lock in 100% of material contracts (cement, granite aggregates, rebar, glazing) at Day 1 prices, completely insulating the patron from currency devaluations or domestic supplier inflation midway through construction.',
      keyTakeaway: 'Zero sudden price escalations or arbitrary contractor variation requests.',
      specBadge: 'Fixed Cost Escrow Shield'
    },
    {
      id: 'faq-6',
      category: 'Approvals & Escrow',
      question: 'What is your process for navigating statutory building permits (LASPPPA in Lagos, FCDA in Abuja)?',
      summary: 'Comprehensive statutory title vetting, EIA certification, and guaranteed regulatory indemnity.',
      answer: 'Navigating state planning permits (e.g., LASPPPA in Lagos State, Federal Capital Development Authority in Abuja) requires rigorous legal and architectural alignment. Bularcrest maintains an in-house statutory liaison council composed of licensed Nigerian architects (ARCON/NIA) and civil engineers (COREN). We execute environmental impact assessments, geotechnical clearance reports, drainage master-plan approvals, and fire service certifications before site fencing, guaranteeing full legal compliance without bureaucratic standstill.',
      keyTakeaway: 'Guaranteed municipal approvals with verified COREN and ARCON registered seals.',
      specBadge: 'ARCON & COREN Verified'
    },
    {
      id: 'faq-7',
      category: 'Material Sourcing',
      question: 'Do you combine local Nigerian materials with imported Swiss/European components?',
      summary: 'Harmonious fusion of raw Nigerian granites and aged timber with precision European glazing and optics.',
      answer: 'Yes. Bularcrest celebrates the timeless beauty of indigenous African materials when engineered to precision tolerances. We utilize Nigerian granite quarry aggregates (Ogun and Abuja granite), sustainably harvested aged teak, and hand-finished bronze, paired seamlessly with precision Swiss thermal glazing (Ug 0.5), German post-tensioned hydraulic anchor systems, and Italian limestone vanities. This hybrid materiality produces architecture rooted in its geographical terroir while performing to European standards.',
      keyTakeaway: 'Authentic local materiality elevated by European structural precision.',
      specBadge: 'Hybrid Regional Materiality'
    }
  ];

  const categories = [
    'All',
    'Timelines & Logistics',
    'Material Sourcing',
    'Foundations & Soil',
    'Energy & Autonomy',
    'Approvals & Escrow'
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.keyTakeaway.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 md:py-28 relative z-10" id="nigeria-faq">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A059]" />
              <span className="font-sans text-[11px] font-semibold text-[#E9C176] uppercase tracking-[0.2em]">
                Regional Mastery &amp; Realities
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9FAFB] font-light tracking-tight">
              Architectural &amp; Construction FAQ
            </h2>
            <p className="font-sans text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed mt-4">
              Addressing geotechnical soil conditions, port logistics, certified material provenance, and sovereign clean energy across Lagos, Abuja, and Port Harcourt.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search timelines, soil, sourcing..."
              className="w-full bg-[#181B22]/70 backdrop-blur-md border border-white/10 rounded-full pl-11 pr-4 py-3 text-xs text-[#F9FAFB] placeholder:text-[#9CA3AF]/60 focus:outline-none focus:border-[#C5A059] transition-all"
            />
            <Search className="w-4 h-4 text-[#C5A059] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/5 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#C5A059] text-[#0B0E14] font-semibold shadow-[0_0_15px_rgba(197,160,89,0.25)]'
                    : 'bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion Panels */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-[#9CA3AF]">
              <HelpCircle className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
              <p className="text-sm font-light">No questions match your search query "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 text-xs text-[#E9C176] uppercase tracking-wider font-semibold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-[#181B22]/70 backdrop-blur-xl border-[#C5A059]/40 shadow-[0_15px_35px_-10px_rgba(197,160,89,0.12)]'
                      : 'bg-[#181B22]/35 backdrop-blur-lg border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none"
                  >
                    <div className="space-y-1.5 pr-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-[#C5A059] font-semibold">
                          {faq.category}
                        </span>
                        {faq.specBadge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-wider text-[#D1C5B4] font-mono">
                            {faq.specBadge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#F9FAFB] font-light leading-snug">
                        {faq.question}
                      </h3>
                      {!isOpen && (
                        <p className="font-sans text-xs text-[#9CA3AF] font-light line-clamp-1 pt-1">
                          {faq.summary}
                        </p>
                      )}
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#C5A059] text-[#0B0E14] rotate-180'
                          : 'bg-white/5 text-[#9CA3AF] border border-white/10'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 space-y-5 border-t border-white/5 pt-5 animate-in fade-in duration-200">
                      <p className="font-sans text-sm sm:text-base text-[#D1C5B4] font-light leading-relaxed">
                        {faq.answer}
                      </p>

                      {/* Key takeaway callout box */}
                      <div className="p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/25 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#E9C176] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#E9C176] font-semibold block mb-0.5">
                            Bularcrest Standard
                          </span>
                          <span className="text-xs text-[#F9FAFB] font-light leading-relaxed">
                            {faq.keyTakeaway}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Regional Consultation Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#14171F]/70 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#E9C176]" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#F9FAFB] font-light">
                Have an unlisted site challenge in Lekki, Ikoyi, or Maitama?
              </h4>
              <p className="text-xs text-[#9CA3AF] font-light mt-1">
                Our senior geotechnical partners provide confidential preliminary land feasibility audits.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCommission}
            className="shrink-0 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Request Geotechnical Feasibility</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

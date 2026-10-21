import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'services' | 'projects' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'services' | 'projects' | 'about' | 'contact') => void;
  onOpenCommission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenCommission }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  const handleNavClick = (view: 'home' | 'services' | 'projects' | 'about' | 'contact') => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-4 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`h-16 md:h-20 w-full max-w-[1440px] flex items-center justify-between px-5 md:px-8 rounded-full border pointer-events-auto transition-all duration-500 ${
          scrolled
            ? 'bg-[#14171F]/90 backdrop-blur-2xl border-white/15 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.85)]'
            : 'bg-[#181B22]/75 backdrop-blur-xl border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]'
        }`}
      >
        {/* Brand Wordmark & Monogram */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
          aria-label="Bularcrest Home"
        >
          {/* Architectural Atelier Monogram Symbol */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9C176] via-[#C5A059] to-[#8C7A5B] p-[1px] shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            <div className="w-full h-full rounded-full bg-[#0B0E14] flex items-center justify-center">
              <svg className="w-4 h-4 text-[#E9C176]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6a3 3 0 0 1 6 0v6" />
              </svg>
            </div>
          </div>
          <span className="font-serif text-xl md:text-2xl text-[#F9FAFB] tracking-tight font-light group-hover:text-[#E9C176] transition-colors">
            Bularcrest
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] font-sans font-semibold uppercase tracking-[0.2em] transition-colors whitespace-nowrap relative py-1 focus-visible:outline-none ${
                  isActive ? 'text-[#E9C176]' : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Get a Quote & Direct Inquiry */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={onOpenCommission}
            className="hidden sm:inline-flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_0_24px_rgba(197,160,89,0.3)] hover:scale-[1.02] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C176]"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick Partner Profile / Trust Marker */}
          <button
            onClick={() => handleNavClick('about')}
            className="w-8 h-8 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#E9C176] hover:bg-[#C5A059] hover:text-[#0B0E14] transition-colors focus-visible:outline-none"
            title="Swiss Engineered Atelier Standards"
            aria-label="Atelier Credentials"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#F9FAFB] focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0E14]/90 backdrop-blur-2xl flex flex-col justify-center items-center p-8 pointer-events-auto md:hidden animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-[#F9FAFB]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-xs flex flex-col items-center gap-6 text-center">
            <span className="font-serif text-3xl text-[#F9FAFB] mb-2 font-light">Bularcrest</span>
            <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-4">
              Atelier of Spatial Permanence
            </p>

            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => handleNavClick('home')}
                className={`py-3 text-sm uppercase tracking-[0.2em] font-semibold border-b border-white/5 transition-colors ${
                  currentView === 'home' ? 'text-[#E9C176]' : 'text-[#F9FAFB]'
                }`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-3 text-sm uppercase tracking-[0.2em] font-semibold border-b border-white/5 transition-colors ${
                    currentView === item.id ? 'text-[#E9C176]' : 'text-[#F9FAFB]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="mt-6 w-full py-4 rounded-full bg-[#C5A059] text-[#0B0E14] text-xs font-semibold uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(197,160,89,0.3)]"
            >
              Initiate Commission
            </button>

            <div className="mt-8 flex items-center justify-center gap-4 text-[10px] tracking-widest uppercase text-[#9CA3AF]">
              <span>Zürich</span>
              <span>•</span>
              <span>Kyoto</span>
              <span>•</span>
              <span>London</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

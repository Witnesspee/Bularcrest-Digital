import React, { useState } from 'react';
import { MessageSquare, X, Send, Copy, Check, ShieldCheck, Clock } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dedicated Atelier WhatsApp Link
  const whatsappUrl = 'https://wa.link/bjlbnc';

  const defaultMessage = 
    `Hello Bularcrest Atelier, I would like to initiate a confidential inquiry regarding a prospective architectural & construction project.

• Site Location: 
• Scope (Residential / Commercial / Micro-grid): 
• Estimated Footprint (m²): 
• Target Timeline: 

Looking forward to speaking with a senior architect.`;

  const handleCopyTemplate = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(defaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Luxury Glassmorphic Preview Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 p-5 rounded-2xl bg-[#14171F]/95 backdrop-blur-2xl border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(197,160,89,0.3)_inset] animate-in fade-in slide-in-from-bottom-3 duration-200 text-[#F9FAFB]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-[#0B0E14] shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.08-2.122-.507-1.782-.733-2.905-2.55-2.993-2.668-.088-.119-.714-.951-.714-1.812 0-.86.448-1.284.608-1.458.16-.174.348-.217.464-.217.116 0 .232.001.333.006.106.005.249-.04.39.299.144.35.493 1.202.536 1.29.043.088.072.19.014.305-.058.115-.088.19-.175.29-.087.102-.183.228-.261.306-.087.086-.177.18-.076.353.101.174.45 0.742.966 1.202.665.592 1.226.776 1.4.863.174.088.276.073.377-.044.102-.116.435-.508.55-.682.117-.174.233-.145.391-.087.159.058 1.001.472 1.175.559.174.087.29.13.333.203.044.073.044.42-.1 1.025z"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-sm font-medium text-[#F9FAFB] block">
                  Bularcrest Atelier Desk
                </span>
                <span className="text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Direct Partner Telemetry
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#9CA3AF] hover:text-white transition-colors"
              aria-label="Close WhatsApp popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-3 space-y-3">
            <p className="text-xs text-[#9CA3AF] font-light leading-relaxed">
              Connect directly via WhatsApp for confidential architectural inquiries, geotechnical feasibility, and turnkey construction discussions.
            </p>

            {/* Template Preview */}
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold">
                <span>Pre-filled Inquiry Template</span>
                <button
                  onClick={handleCopyTemplate}
                  className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                  title="Copy message to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#E9C176]" />
                      <span className="text-[#E9C176]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-[#D1C5B4] font-mono leading-relaxed bg-[#0B0E14]/60 p-2.5 rounded-lg border border-white/5 whitespace-pre-line max-h-32 overflow-y-auto">
                {defaultMessage}
              </p>
            </div>

            {/* NDA Trust Note */}
            <div className="flex items-center gap-1.5 text-[10px] text-[#9CA3AF]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>All communications strictly protected under NDA protocols.</span>
            </div>
          </div>

          {/* Action Link Button */}
          <div className="pt-2 border-t border-white/5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Launch WhatsApp Conversation</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="flex items-center gap-2">
        {/* Quick Launch Direct Anchor for 1-click accessibility */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#C5A059] hover:bg-[#E9C176] text-[#0B0E14] shadow-[0_0_25px_rgba(197,160,89,0.4)] hover:shadow-[0_0_35px_rgba(197,160,89,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer border border-[#E9C176]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9C176]"
          aria-label="Chat on WhatsApp with Bularcrest Atelier"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-5 h-5 fill-[#0B0E14] shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.08-2.122-.507-1.782-.733-2.905-2.55-2.993-2.668-.088-.119-.714-.951-.714-1.812 0-.86.448-1.284.608-1.458.16-.174.348-.217.464-.217.116 0 .232.001.333.006.106.005.249-.04.39.299.144.35.493 1.202.536 1.29.043.088.072.19.014.305-.058.115-.088.19-.175.29-.087.102-.183.228-.261.306-.087.086-.177.18-.076.353.101.174.45 0.742.966 1.202.665.592 1.226.776 1.4.863.174.088.276.073.377-.044.102-.116.435-.508.55-.682.117-.174.233-.145.391-.087.159.058 1.001.472 1.175.559.174.087.29.13.333.203.044.073.044.42-.1 1.025z"/>
          </svg>
          <span className="font-sans text-xs font-semibold uppercase tracking-wider whitespace-nowrap hidden sm:inline">
            Chat on WhatsApp
          </span>
        </a>

        {/* Info/Preview Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-[#181B22]/90 hover:bg-[#181B22] border border-[#C5A059]/40 text-[#E9C176] hover:text-white transition-all shadow-lg cursor-pointer focus-visible:outline-none"
          title="View pre-filled inquiry options"
          aria-label="Toggle WhatsApp inquiry template preview"
        >
          {isOpen ? <X className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

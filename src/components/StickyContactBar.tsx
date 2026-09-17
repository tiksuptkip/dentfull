import React, { useState, useEffect } from "react";
import { Send, MessageSquare, Phone, ArrowUp, Mail, ShieldCheck } from "lucide-react";

interface StickyContactBarProps {
  onScrollToRfq: () => void;
  onOpenQuickModal: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({
  onScrollToRfq,
  onOpenQuickModal,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Action Bar on Bottom (Mobile and Tablet) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-slate-300 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href="https://wa.me/18329028877?text=Hello%20Dentfull%20Sales,%20inquiring%20about%20Hot%20Rolled%20Steel%20Coils"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded bg-emerald-600 text-white font-bold text-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onScrollToRfq}
          className="flex-2 flex items-center justify-center gap-1.5 py-2.5 rounded bg-orange-600 text-white font-bold text-xs uppercase tracking-wide shadow"
        >
          <Send className="w-4 h-4" />
          <span>Request Quote</span>
        </button>
      </div>

      {/* Floating Side Widget on Desktop */}
      <div className="hidden lg:flex fixed right-4 bottom-8 z-40 flex-col gap-2.5 items-end">
        {/* Instant Quote Pill */}
        <button
          onClick={onOpenQuickModal}
          className="group flex items-center gap-2 px-3.5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer border border-orange-700 text-xs font-bold uppercase tracking-wider"
          title="Open Instant Quote Dialog"
        >
          <Send className="w-4 h-4" />
          <span>Quick Quote</span>
        </button>

        {/* WhatsApp Pill */}
        <a
          href="https://wa.me/18329028877?text=Hello%20Dentfull%20Sales,%20inquiring%20about%20Hot%20Rolled%20Steel%20Coils"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer border border-emerald-700 text-xs font-bold"
          title="Direct WhatsApp with Steel Technical Sales"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Inquire</span>
        </a>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer border border-slate-700"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};

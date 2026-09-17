import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { PageId } from '../types';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface FooterProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t-4 border-[#EA580C]">
      {/* Upper Certifications Bar */}
      <div className="bg-[#0F2B48] border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-600/20 text-[#EA580C] rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm tracking-wide">
                Certified Quality &amp; International Standards
              </h4>
              <p className="text-xs text-slate-400">
                Full Mill Test Certification (EN 10204 3.1) accompanying every export consignment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-700/60 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-700/60 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold">CE Conformity (EN 10025)</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-700/60 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold">SGS Verified Mill</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-700/60 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-bold">Bureau Veritas (BV)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Corporate Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0F2B48] border border-slate-700 flex items-center justify-center text-white">
                <span className="font-black text-2xl tracking-tighter text-[#EA580C]">d</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-['Montserrat',sans-serif]">
                dent<span className="text-[#EA580C]">full</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              dentfull Industrial Group (<strong>dentfull.com</strong>) is an enterprise manufacturer and premier global exporter of Prime Carbon Steel, Austenitic &amp; Duplex Stainless Steel, Galvanized &amp; Color Coated Coils (GI/PPGI), and High-Pressure Alloy Tubing. Delivering zero-defect metallurgical solutions to 80+ nations.
            </p>

            {/* Direct Contact Box */}
            <div className="p-4 bg-slate-900/80 rounded-lg border border-slate-800 space-y-2.5 text-xs">
              <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px] text-[#EA580C]">
                Official Commercial Inquiry Desk
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Primary Sales:</span>
                <a href={`mailto:${DENTFULL_SALES_EMAIL}`} className="text-white hover:text-[#EA580C] font-semibold underline underline-offset-2">
                  {DENTFULL_SALES_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>HQ Desk:</span>
                <span className="text-slate-200 font-medium">+86-531-88992211 / +86 186 6378 9922</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Heavy Industrial Cluster, High-Tech Development Zone, Shandong Province, China.
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Deep-linked Product Lines */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#EA580C] pl-2.5">
              Carbon Steel
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'hot-rolled-steel-coil')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Hot Rolled Steel Coil (HRC)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'cold-rolled-steel-coil')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Cold Rolled Steel Coil (CRC)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Structural S235 / S355 Plates</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'seamless-carbon-steel-pipe')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Seamless API 5L Steel Pipes</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Hot Rolled Steel H-Beams</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Coated & Stainless Series */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#2563EB] pl-2.5">
              Stainless &amp; Coated
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'stainless-steel-304-coil')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>304 / 304L Stainless Coils</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'marine-316l-stainless-plate')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>316L Marine Grade Plates</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'hot-dip-galvanized-steel-coil')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Galvanized Steel Coil (GI)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'prepainted-galvanized-ppgi')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>PPGI Color Coated Coils</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('product-detail', 'aluminum-5052-6061-sheet')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>5052 / 6061 Aluminum Alloys</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Instant RFQ */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-emerald-500 pl-2.5">
              Enterprise Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 mb-6">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white">
                  Corporate Profile &amp; History
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-white">
                  Quality Control Lab &amp; MTC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('factory')} className="hover:text-white">
                  Factory &amp; Rolling Mills Tour
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white">
                  Global Export Track Record
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white">
                  Incoterms &amp; Port Logistics
                </button>
              </li>
            </ul>

            {/* Newsletter lead box */}
            <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
              <div className="text-xs font-bold text-white mb-1">
                Weekly Steel Index &amp; Pricing
              </div>
              <p className="text-[11px] text-slate-400 mb-2.5">
                Subscribe for real-time FOB price indices and MTC updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5">
                <input
                  type="email"
                  placeholder="Your business email..."
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-[#EA580C] hover:bg-[#d94e09] text-white px-2.5 py-1.5 rounded text-xs font-bold shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {newsletterSubscribed && (
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-2">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed! Market reports dispatched weekly.</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Global Port Network Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-xs text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="font-bold text-slate-200">Main Export Ports:</span> Qingdao, Tianjin, Shanghai, Ningbo, Guangzhou.
          </div>
          <div>
            <span className="font-bold text-slate-200">Incoterms Supported:</span> FOB, CIF, CFR, EXW, DDP, DAP with sea-worthy strapping.
          </div>
          <div className="md:text-right">
            <span className="font-bold text-slate-200">Payment Terms:</span> T/T 30/70, 100% Irrevocable L/C at sight, Usance L/C.
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#050D1A] py-4 px-4 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            Copyright &copy; 2026 <strong>dentfull.com</strong>. All Rights Reserved. Prime Industrial Steel &amp; Alloy Manufacturing.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('quality')} className="hover:text-white transition-colors">
              Mill Test Standards
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Sales Desk: {DENTFULL_SALES_EMAIL}
            </button>
            <span>•</span>
            <span className="text-slate-400">ISO 9001:2015 Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

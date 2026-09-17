import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  ShieldCheck, 
  Factory, 
  Layers, 
  Building2, 
  SendHorizontal,
  Search
} from 'lucide-react';
import { PageId, LanguageCode } from '../types';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: LanguageCode; label: string; flag: string }[] = [
    { code: 'EN', label: 'English (US)', flag: '🇺🇸' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'AR', label: 'العربية', flag: '🇦🇪' },
    { code: 'RU', label: 'Русский', flag: '🇷🇺' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' }
  ];

  const handleNavClick = (page: PageId, productId?: string) => {
    onNavigate(page, productId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left contact info */}
          <div className="flex items-center gap-5 flex-wrap">
            <a 
              href="tel:+8653188992211" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Global Sales Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
              <span className="font-medium tracking-wide">+86-531-88992211</span>
            </a>
            <a 
              href="https://wa.me/8618663789922" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Official Commercial WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp: +86 186 6378 9922</span>
            </a>
            <a 
              href={`mailto:${DENTFULL_SALES_EMAIL}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Commercial Inquiry Inbox"
            >
              <Mail className="w-3.5 h-3.5 text-[#EA580C]" />
              <span className="font-semibold text-slate-200">{DENTFULL_SALES_EMAIL}</span>
            </a>
          </div>

          {/* Right utility items */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-slate-400">
              ISO 9001:2015 &amp; CE Certified Mill Exporter
            </span>

            {/* Quick Inquiry action */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="hidden md:flex items-center gap-1 text-[#EA580C] hover:text-orange-400 font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Quick Inquiry</span>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1 rounded text-slate-200 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#EA580C]" />
                <span className="font-semibold">{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50 text-slate-800">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setSelectedLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-100 ${
                        selectedLang === l.code ? 'font-bold text-[#0F2B48] bg-slate-50' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {selectedLang === l.code && <span className="text-[#EA580C]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0F2B48] flex items-center justify-center text-white shadow-md group-hover:bg-[#1E3A8A] transition-colors relative overflow-hidden">
            <span className="font-black text-2xl tracking-tighter text-[#EA580C]">d</span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tight text-[#0F2B48] font-['Montserrat',sans-serif]">
                dent<span className="text-[#EA580C]">full</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                Steel
              </span>
            </div>
            <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">
              dentfull.com • Industrial Manufacturing
            </p>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'home'
                ? 'text-[#0F2B48] bg-slate-100 font-bold'
                : 'hover:text-[#0F2B48] hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* About Us dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                currentPage === 'about'
                  ? 'text-[#0F2B48] bg-slate-100 font-bold'
                  : 'hover:text-[#0F2B48] hover:bg-slate-50'
              }`}
            >
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-50">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#EA580C] text-sm"
                >
                  <div className="font-semibold text-slate-800">Company Profile</div>
                  <div className="text-xs text-slate-500">History &amp; Milestones since 2004</div>
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#EA580C] text-sm"
                >
                  <div className="font-semibold text-slate-800">Vision, Mission &amp; Values</div>
                  <div className="text-xs text-slate-500">Zero-defect precision &amp; global integrity</div>
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 hover:text-[#EA580C] text-sm"
                >
                  <div className="font-semibold text-slate-800">Factory Scale &amp; Capacity</div>
                  <div className="text-xs text-slate-500">500,000 MT annual production</div>
                </button>
              </div>
            )}
          </div>

          {/* Products Catalog dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('products')}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                currentPage === 'products' || currentPage === 'product-detail'
                  ? 'text-[#0F2B48] bg-slate-100 font-bold'
                  : 'hover:text-[#0F2B48] hover:bg-slate-50'
              }`}
            >
              <span>Products Catalog</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-lg shadow-xl p-3 z-50">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pb-2 mb-1 border-b border-slate-100">
                  Major Industrial Steel Lines
                </div>
                <button
                  onClick={() => handleNavClick('product-detail', 'hot-rolled-steel-coil')}
                  className="w-full text-left p-2 rounded-md hover:bg-slate-50 hover:text-[#EA580C] flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Carbon Steel Coils &amp; Plates</div>
                    <div className="text-xs text-slate-500">Hot Rolled (HRC), Cold Rolled (CRC), S355JR, A36</div>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded">Hot</span>
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left p-2 rounded-md hover:bg-slate-50 hover:text-[#EA580C]"
                >
                  <div className="font-semibold text-slate-800 text-sm">Stainless Steel Series</div>
                  <div className="text-xs text-slate-500">304, 304L, 316L, 310S, 2205 Duplex Sheet/Coils</div>
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left p-2 rounded-md hover:bg-slate-50 hover:text-[#EA580C]"
                >
                  <div className="font-semibold text-slate-800 text-sm">Galvanized &amp; Prepainted (GI/PPGI)</div>
                  <div className="text-xs text-slate-500">Hot Dip Zinc Z30-Z275, Galvalume &amp; RAL Colors</div>
                </button>
                <button
                  onClick={() => handleNavClick('products')}
                  className="w-full text-left p-2 rounded-md hover:bg-slate-50 hover:text-[#EA580C]"
                >
                  <div className="font-semibold text-slate-800 text-sm">Industrial Seamless Pipes &amp; Alloys</div>
                  <div className="text-xs text-slate-500">API 5L, ASTM A106, Aluminum 5052/6061</div>
                </button>
                <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                  <button 
                    onClick={() => handleNavClick('products')}
                    className="text-xs text-[#2563EB] hover:text-[#1E3A8A] font-bold"
                  >
                    View All 35+ Standard Products &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('quality')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'quality'
                ? 'text-[#0F2B48] bg-slate-100 font-bold'
                : 'hover:text-[#0F2B48] hover:bg-slate-50'
            }`}
          >
            Quality &amp; Tech
          </button>

          <button
            onClick={() => handleNavClick('factory')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'factory'
                ? 'text-[#0F2B48] bg-slate-100 font-bold'
                : 'hover:text-[#0F2B48] hover:bg-slate-50'
            }`}
          >
            Factory &amp; Equipment
          </button>

          <button
            onClick={() => handleNavClick('projects')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'projects'
                ? 'text-[#0F2B48] bg-slate-100 font-bold'
                : 'hover:text-[#0F2B48] hover:bg-slate-50'
            }`}
          >
            Global Projects
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 rounded-md transition-colors ${
              currentPage === 'contact'
                ? 'text-[#0F2B48] bg-slate-100 font-bold'
                : 'hover:text-[#0F2B48] hover:bg-slate-50'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* CTA "Get A Quote" */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 bg-[#EA580C] hover:bg-[#d94e09] text-white px-5 py-2.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <SendHorizontal className="w-4 h-4" />
            <span>Get A Quote</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#EA580C] text-white text-xs font-bold px-3 py-1.5 rounded"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE COLLAPSIBLE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'home' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'about' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'products' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Products Catalog
            </button>
            <button
              onClick={() => handleNavClick('product-detail', 'hot-rolled-steel-coil')}
              className="p-2.5 text-left text-sm rounded text-orange-600 font-semibold bg-orange-50"
            >
              Hot Rolled Coil Page
            </button>
            <button
              onClick={() => handleNavClick('quality')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'quality' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Quality &amp; Tech
            </button>
            <button
              onClick={() => handleNavClick('factory')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'factory' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Factory Tour
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'projects' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Global Projects
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-2.5 text-left text-sm rounded ${currentPage === 'contact' ? 'bg-slate-100 font-bold text-[#0F2B48]' : 'text-slate-700'}`}
            >
              Contact Us
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#EA580C] text-white py-2.5 rounded font-bold text-center flex items-center justify-center gap-2"
            >
              <SendHorizontal className="w-4 h-4" />
              <span>Get Immediate Quote (sales@dentfull.com)</span>
            </button>
            <div className="text-xs text-center text-slate-500">
              Direct Phone: +86-531-88992211 | WhatsApp: +86 186 6378 9922
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

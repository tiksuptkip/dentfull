import React, { useState } from "react";
import { Phone, Mail, Clock, Globe, ShieldCheck, Award, FileText, ChevronDown } from "lucide-react";

interface TopUtilityBarProps {
  onOpenAuditor: () => void;
  inquiryCount: number;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenAuditor, inquiryCount }) => {
  const [selectedLang, setSelectedLang] = useState("English (US)");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const languages = [
    { code: "en", label: "English (US)", flag: "🇺🇸" },
    { code: "es", label: "Español (ES)", flag: "🇪🇸" },
    { code: "ru", label: "Русский (RU)", flag: "🇷🇺" },
    { code: "ar", label: "العربية (AR)", flag: "🇸🇦" },
    { code: "fr", label: "Français (FR)", flag: "🇫🇷" },
    { code: "de", label: "Deutsch (DE)", flag: "🇩🇪" },
  ];

  return (
    <div id="top-utility-bar" className="bg-[#0b1329] text-slate-300 text-xs border-b border-slate-800 tracking-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Quick Contact & Dispatch Hub */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400 font-medium">Sales Desk:</span>
            <a href="tel:+18008423368" className="font-semibold text-white hover:underline">
              +1 (800) 842-3368
            </a>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-slate-400 font-medium">Direct RFQ:</span>
            <a href="mailto:sales@dentfull.com" className="font-semibold text-blue-200 hover:text-white hover:underline">
              sales@dentfull.com
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Global Response SLA &lt; 2 Hrs</span>
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Ports: Qingdao · Tianjin · Shanghai</span>
          </div>
        </div>

        {/* Right: Certification Badges & Language Selector */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          {/* Certifications badges */}
          <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-slate-300">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-emerald-300">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-blue-300">
              <Award className="w-3 h-3 text-blue-400" />
              CE Certified
            </span>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-amber-300">
              SGS & BV Audited
            </span>
          </div>

          {/* Email Dispatch / RFQ Log Auditor button */}
          <button
            id="rfq-auditor-trigger-btn"
            onClick={onOpenAuditor}
            title="Inspect direct email dispatches sent to sales@dentfull.com"
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer text-[11px]"
          >
            <FileText className="w-3 h-3 text-orange-400" />
            <span>Email Logs to sales@dentfull.com</span>
            {inquiryCount > 0 && (
              <span className="px-1.5 py-0.2 bg-orange-500 text-white rounded-full text-[10px] font-bold">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              id="language-selector-btn"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline font-medium">{selectedLang}</span>
              <span className="sm:hidden font-medium">EN</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showLangDropdown && (
              <div
                id="language-dropdown-menu"
                className="absolute right-0 mt-1 w-44 bg-[#0f172a] border border-slate-700 rounded-md shadow-xl z-50 py-1 text-slate-200"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.label);
                      setShowLangDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

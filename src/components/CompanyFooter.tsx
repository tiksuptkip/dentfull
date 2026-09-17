import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ChevronRight, 
  FileText, 
  Clock 
} from "lucide-react";

interface CompanyFooterProps {
  onOpenAuditor: () => void;
  onOpenSpecModal: () => void;
  onScrollToRfq: () => void;
}

export const CompanyFooter: React.FC<CompanyFooterProps> = ({
  onOpenAuditor,
  onOpenSpecModal,
  onScrollToRfq,
}) => {
  return (
    <footer id="company-footer" className="bg-[#0b1329] text-slate-400 text-xs border-t border-slate-800">
      {/* Top Credentials Bar */}
      <div className="border-b border-slate-800/80 py-8 bg-[#080e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-900/50 border border-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <strong className="text-white block text-sm font-bold">ISO 9001:2015</strong>
                <span className="text-[11px] text-slate-400">Certified Quality Management</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-orange-900/50 border border-orange-700 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <strong className="text-white block text-sm font-bold">CE & MTC 3.1</strong>
                <span className="text-[11px] text-slate-400">European Standard Conformity</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-emerald-900/50 border border-emerald-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <strong className="text-white block text-sm font-bold">&lt; 2-Hour Response</strong>
                <span className="text-[11px] text-slate-400">Rapid Engineering Quotation</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <strong className="text-white block text-sm font-bold">85+ Export Nations</strong>
                <span className="text-[11px] text-slate-400">Global Seaworthy Freight</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Links & Company Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Profile & Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-slate-900 font-black text-lg">
                D
              </div>
              <span className="text-xl font-black text-white uppercase font-['Barlow'] tracking-tight">
                dentfull<span className="text-orange-500">.com</span>
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Dentfull Advanced Metallurgy Co., Ltd. is a premier manufacturer, master distributor, and global exporter of high-grade carbon steel coils, cold-rolled sheets, and industrial structural materials. Operating 3 continuous tandem hot rolling lines with an annual output surpassing 1.8M metric tons.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>• Mill Accreditation: EN 10025, ASTM A36, JIS G3101, GB/T 700</div>
              <div>• Third-Party Inspection: SGS, Bureau Veritas (BV), TÜV Rheinland</div>
            </div>
          </div>

          {/* Col 2: Products Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Product Directory
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#product-hero" className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-300 font-semibold">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                  Hot Rolled Steel Coil (HR Coil)
                </a>
              </li>
              <li>
                <a href="#tab-specs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Hot Rolled Heavy Steel Plates
                </a>
              </li>
              <li>
                <a href="#tab-specs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Cold Rolled Full Hard / Annealed Coils
                </a>
              </li>
              <li>
                <a href="#tab-specs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Hot-Dip Galvanized Steel Coils (GI)
                </a>
              </li>
              <li>
                <a href="#tab-specs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Carbon Steel ERW & Seamless Pipes
                </a>
              </li>
              <li>
                <a href="#tab-specs" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Structural Steel H-Beams & Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Downloads (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Standards & Docs
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenSpecModal} className="hover:text-white transition-colors text-left cursor-pointer">
                  Technical Spec Sheet (PDF)
                </button>
              </li>
              <li>
                <a href="#tab-inspection" className="hover:text-white transition-colors">
                  Mill Test Cert (MTC 3.1)
                </a>
              </li>
              <li>
                <a href="#tab-shipping" className="hover:text-white transition-colors">
                  Seaworthy Packaging Guide
                </a>
              </li>
              <li>
                <a href="#tab-facility" className="hover:text-white transition-colors">
                  Factory Plant Tour
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAuditor}
                  className="hover:text-orange-400 text-slate-400 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-orange-500" />
                  <span>Email Log Auditor</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Global Procurement Desk
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Quotation Email:</span>
                  <a href="mailto:sales@dentfull.com" className="text-white font-bold hover:text-blue-300">
                    sales@dentfull.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">24/7 Hotline / WhatsApp:</span>
                  <a href="tel:+18008423368" className="text-white font-semibold hover:underline">
                    +1 (800) 842-3368 / +1 (832) 902-8877
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Port Terminals & Yard:</span>
                  <span className="text-slate-300">
                    Port of Qingdao Steel Logistics Terminal & Port of Tianjin Xingang, China
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onScrollToRfq}
                  className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase rounded text-xs transition-colors cursor-pointer"
                >
                  Send Inquiry Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-slate-800/80 py-6 bg-[#060b17] text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <p>
            © 2026 Dentfull Advanced Metallurgy Co., Ltd. (dentfull.com). All rights reserved. Registered ISO 9001 & CE manufacturing facility.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">Terms of Supply</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300">Quality Assurance Standards</a>
            <span>·</span>
            <a href="mailto:sales@dentfull.com" className="text-slate-400 hover:text-white font-semibold">
              sales@dentfull.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

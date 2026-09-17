import React from "react";
import { ChevronRight, Home, Download, Printer, Share2, Check } from "lucide-react";

interface BreadcrumbNavProps {
  onOpenSpecModal: () => void;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ onOpenSpecModal }) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <nav aria-label="Breadcrumb" id="breadcrumb-navigation" className="bg-slate-100 border-b border-slate-200 py-3 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        {/* Breadcrumb path */}
        <ol className="flex items-center flex-wrap gap-1.5 text-slate-500 font-medium">
          <li className="flex items-center gap-1.5">
            <a href="#" className="hover:text-blue-700 flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li className="flex items-center gap-1.5">
            <a href="#tab-specs" className="hover:text-blue-700">
              Products
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li className="flex items-center gap-1.5">
            <a href="#tab-specs" className="hover:text-blue-700">
              Carbon Steel Products
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li className="text-slate-900 font-bold tracking-tight">
            Hot Rolled Steel Coil (HR Coil)
          </li>
        </ol>

        {/* Quick Document Actions */}
        <div className="flex items-center gap-2">
          <button
            id="download-spec-btn-breadcrumb"
            onClick={onOpenSpecModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold shadow-2xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Download Spec Sheet (PDF)</span>
          </button>

          <button
            id="print-spec-btn-breadcrumb"
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print</span>
          </button>

          <button
            id="share-product-btn-breadcrumb"
            onClick={handleShare}
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium transition-colors cursor-pointer"
            title="Copy product link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-500" />}
            <span className="hidden md:inline">{copied ? "Copied" : "Share"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

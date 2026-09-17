import React from "react";
import { X, Printer, Download, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { CHEMICAL_COMPOSITIONS, MECHANICAL_PROPERTIES, PRODUCT_SPECS } from "../data/productData";

interface SpecSheetDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecSheetDownloadModal: React.FC<SpecSheetDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Toolbar */}
        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Technical Data Sheet (TDS)
            </span>
            <span className="text-slate-400 text-xs">· Doc No: TDS-DF-HRC-2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Technical Document Body */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-10 space-y-6 text-slate-900 bg-white print:p-0">
          {/* Document Corporate Header */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Barlow'] tracking-tight uppercase">
                  dentfull
                </span>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                  metallurgy
                </span>
              </div>
              <p className="text-xs text-slate-600 font-semibold uppercase mt-0.5">
                Dentfull Advanced Metallurgy Co., Ltd. · www.dentfull.com
              </p>
              <p className="text-[11px] text-slate-500">
                Direct Sales & Technical Inquiries: sales@dentfull.com · Tel: +1 (800) 842-3368
              </p>
            </div>

            <div className="text-right text-xs">
              <div className="font-mono font-bold text-slate-800">Doc: TDS-DF-HRC-Rev4</div>
              <div className="text-slate-500">Issued: September 2026</div>
              <div className="text-emerald-700 font-bold">ISO 9001:2015 · CE EN 10025</div>
            </div>
          </div>

          {/* Title banner */}
          <div className="bg-slate-100 p-4 rounded border-l-4 border-blue-800">
            <h1 className="text-xl font-extrabold text-slate-900 font-['Barlow'] uppercase tracking-tight">
              Product Technical Specification: Hot Rolled Steel Coil
            </h1>
            <p className="text-xs text-slate-700 mt-1">
              Commercial & Structural Carbon Steel | Model/Grade: Q235B / SS400 / ASTM A36 / S235JR / S355JR
            </p>
          </div>

          {/* Core specs list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Thickness Range</strong>
              <span className="font-bold text-slate-900">{PRODUCT_SPECS.thickness}</span>
            </div>
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Width Range</strong>
              <span className="font-bold text-slate-900">{PRODUCT_SPECS.width}</span>
            </div>
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Coil Inner Diameter</strong>
              <span className="font-bold text-slate-900">{PRODUCT_SPECS.coilId}</span>
            </div>
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Coil Unit Weight</strong>
              <span className="font-bold text-slate-900">{PRODUCT_SPECS.coilWeight}</span>
            </div>
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Surface Condition</strong>
              <span className="font-bold text-slate-900">Black Mill Finish / Pickled & Oiled (P&O)</span>
            </div>
            <div className="border border-slate-200 p-3 rounded bg-slate-50/50">
              <strong className="text-slate-500 block text-[10px] uppercase">Accredited Testing</strong>
              <span className="font-bold text-slate-900">MTC EN 10204 3.1 Certified</span>
            </div>
          </div>

          {/* Chemical properties table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              1. Chemical Composition Specification (Mass %)
            </h3>
            <table className="w-full text-left text-xs border border-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-900 font-bold">
                  <th className="p-2 border border-slate-300">Grade</th>
                  <th className="p-2 border border-slate-300">Standard</th>
                  <th className="p-2 border border-slate-300">C (%)</th>
                  <th className="p-2 border border-slate-300">Mn (%)</th>
                  <th className="p-2 border border-slate-300">Si (%)</th>
                  <th className="p-2 border border-slate-300">P (%)</th>
                  <th className="p-2 border border-slate-300">S (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CHEMICAL_COMPOSITIONS.map((c) => (
                  <tr key={c.grade} className="font-mono">
                    <td className="p-2 font-bold font-sans border border-slate-300">{c.grade}</td>
                    <td className="p-2 border border-slate-300">{c.standard}</td>
                    <td className="p-2 border border-slate-300">{c.c}</td>
                    <td className="p-2 border border-slate-300">{c.mn}</td>
                    <td className="p-2 border border-slate-300">{c.si}</td>
                    <td className="p-2 border border-slate-300">{c.p}</td>
                    <td className="p-2 border border-slate-300">{c.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mechanical properties table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              2. Mechanical Properties & Tensile Parameters
            </h3>
            <table className="w-full text-left text-xs border border-slate-300 border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-900 font-bold">
                  <th className="p-2 border border-slate-300">Grade</th>
                  <th className="p-2 border border-slate-300">Yield Strength Re (MPa)</th>
                  <th className="p-2 border border-slate-300">Tensile Strength Rm (MPa)</th>
                  <th className="p-2 border border-slate-300">Elongation (%)</th>
                  <th className="p-2 border border-slate-300">Impact Energy (J)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {MECHANICAL_PROPERTIES.map((m) => (
                  <tr key={m.grade} className="font-mono">
                    <td className="p-2 font-bold font-sans border border-slate-300">{m.grade}</td>
                    <td className="p-2 border border-slate-300">{m.yieldStrength}</td>
                    <td className="p-2 border border-slate-300">{m.tensileStrength}</td>
                    <td className="p-2 border border-slate-300">{m.elongation}</td>
                    <td className="p-2 border border-slate-300">{m.impactCharpy || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quality Assurance Stamp */}
          <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">Quality Inspection Department</p>
              <p className="text-[11px]">Dentfull Advanced Metallurgy Co., Ltd.</p>
              <p className="text-[11px] text-slate-500">Document generated electronically from dentfull.com portal.</p>
            </div>
            <div className="border-2 border-blue-900 rounded-md p-2 text-center text-blue-950 font-bold font-serif text-[11px] leading-tight">
              ★ DENTFULL QUALITY CONTROL ★<br />
              <span className="text-[9px] font-sans font-normal">EN 10204 3.1 VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-xs flex justify-between items-center print:hidden">
          <span className="text-slate-500">Need specific custom thickness or slit widths? Contact sales@dentfull.com</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 text-white rounded font-bold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  Factory, 
  Layers, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  Play, 
  ArrowRight, 
  Box, 
  Anchor, 
  Cpu 
} from 'lucide-react';
import { PageId } from '../types';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface FactoryPageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const FactoryPage: React.FC<FactoryPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const workshops = [
    {
      title: 'Workshop 01: 1700mm Continuous Hot Strip Mill',
      area: '48,000 m²',
      crane: 'Up to 60-Ton Overhead Magnetic Gantry',
      equipment: '7-stand 4-high finishing mill, hydraulic AGC system, laminar run-out cooling table, dual hydraulic down-coilers.',
      output: '260,000 MT/year prime HRC',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Workshop 02: Cold Strip Reversing & Tandem Mill',
      area: '36,000 m²',
      crane: 'Dual 40-Ton Precision Cranes',
      equipment: '1450mm 6-high cold rolling mill, continuous electrolytic cleaning line, bell-type hydrogen annealing furnaces.',
      output: '120,000 MT/year prime CRC',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Workshop 03: Continuous Galvanizing & Zinc Pot Lines',
      area: '32,000 m²',
      crane: '30-Ton Coil Manipulator Cranes',
      equipment: 'Sendzimir method continuous galvanizing lines, nitrogen wipe air-knives, automated skin-pass mill, chromate passivation.',
      output: '140,000 MT/year GI & GL coils',
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Workshop 04: High-Speed Precision Slitting & Cut-To-Length',
      area: '24,000 m²',
      crane: '25-Ton Rotary C-Hook Cranes',
      equipment: 'German Heinrich CNC rotary slitting shears, hydraulic loop tensioner, flying shear cut-to-length plate line (±0.2mm precision).',
      output: '180,000 MT/year processed strips',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-[#0F2B48] text-white py-14 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-[#EA580C] font-semibold">Factory &amp; Rolling Mills</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Advanced Rolling Mills, Slitting Lines &amp; Export Logistics
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Tour dentfull's 180,000 square meter integrated steel complex. Engineered with heavy automated rolling stands, continuous pickling, zinc coating, and sea-worthy export staging bays.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Plant Overview & Technical Footprint */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Infrastructure Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Engineered for High-Tonnage Continuous Steel Processing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Situated in close proximity to major deep-water seaports (Qingdao and Tianjin), our manufacturing facility combines heavy industrial metallurgical capability with seamless export container loading.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-[#0F2B48]">180,000 m²</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Total Plant Footprint</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-[#EA580C]">60-Ton</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Max Overhead Crane</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                <div className="text-2xl font-black text-[#0F2B48]">50,000 MT</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Constant Warehouse Stock</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuoteModal('Factory Visit / Plant Audit')}
                className="bg-[#EA580C] hover:bg-[#d94e09] text-white px-6 py-2.5 rounded font-bold text-xs shadow-md transition-colors"
              >
                Schedule Plant Audit / Visit
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-200 hover:bg-slate-300 text-[#0F2B48] px-5 py-2.5 rounded font-bold text-xs transition-colors"
              >
                Port &amp; Rail Freight Inquiry
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="dentfull plant rolling workshop"
                className="w-full h-80 object-cover opacity-85"
              />
              <div className="p-5 bg-[#0A192F] text-white space-y-2">
                <div className="text-xs font-bold text-[#EA580C]">Plant Location &amp; Dispatch</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct railway spur connected to plant yard. Container trucks dispatched directly to Qingdao Qianwan Container Terminal (QQCT) within 4 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops & Production Lines Grid */}
        <section className="space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Operational Divisions
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Four Specialized Heavy Processing Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshops.map((w, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="relative h-52 bg-slate-900 overflow-hidden">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-[#0F2B48]/90 text-white text-xs font-bold px-2.5 py-1 rounded">
                    Area: {w.area}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-[#EA580C] text-xs font-mono px-2 py-0.5 rounded font-bold">
                    {w.output}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-[#0F2B48] text-base">{w.title}</h3>
                    <div className="text-xs text-slate-500 mt-1 font-semibold">Crane Rating: {w.crane}</div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {w.equipment}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold">● Active Production</span>
                    <button
                      onClick={() => onOpenQuoteModal(`Inquiry for equipment: ${w.title}`)}
                      className="text-[#EA580C] hover:underline font-bold"
                    >
                      Inquire Workshop Capacity &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packaging, Container Stuffing & Maritime Logistics */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Global Shipping Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Container Stuffing &amp; Breakbulk Vessel Logistics
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Steel coils are dense, heavy cargo requiring meticulous weight distribution and reinforced sea-fastening to prevent movement during oceanic roll and pitch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center font-bold">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">20ft Heavy Container Loading</h3>
              <p className="text-slate-600 leading-relaxed">
                Standard payload of 25-28 Metric Tons per 20GP container. Coils positioned on timber sleepers with steel wire lashing to floor D-rings.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Breakbulk &amp; Vessel Chartering</h3>
              <p className="text-slate-600 leading-relaxed">
                For bulk orders exceeding 1,000 MT, dentfull charters dedicated dry bulk or multi-purpose vessels with below-deck hatch stowage to avoid salt air exposure.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Port Warehousing &amp; Survey</h3>
              <p className="text-slate-600 leading-relaxed">
                Covered transit warehouses at Qingdao and Tianjin ports. Independent tally and SGS draft surveys conducted before issuing clean Bills of Lading.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

import React from 'react';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Globe, 
  History, 
  Award, 
  Users, 
  ChevronRight, 
  CheckCircle,
  Factory,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface AboutPageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const milestones = [
    {
      year: '2004',
      title: 'Founding of dentfull Metallurgical Mill',
      desc: 'Inception of plant operations with two medium-plate rolling lines and an initial capacity of 80,000 MT/year.'
    },
    {
      year: '2010',
      title: 'Commissioning of 1700mm Hot Strip Mill',
      desc: 'Upgraded to computer-controlled continuous hot strip mill and obtained ISO 9001:2008 & CE (EN 10025) certifications.'
    },
    {
      year: '2016',
      title: 'Continuous Galvanizing & Color-Coating Complex',
      desc: 'Added 2 continuous hot-dip zinc lines (Z30-Z275) and 2 high-speed PPGI lines serving global cladding markets.'
    },
    {
      year: '2021',
      title: 'Austenitic Stainless Steel & Clean Alloy Division',
      desc: 'Inaugurated dedicated stainless steel annealing and cold rolling lines for Grade 304/316L coils and precision sheets.'
    },
    {
      year: '2026',
      title: 'Global Export Milestone & Green Steel Transition',
      desc: 'Annual capacity crosses 500,000 MT, serving buyers across 80+ nations with comprehensive EN 10204 3.1 MTC integrity.'
    }
  ];

  const capacityData = [
    { line: '1700mm Hot Strip Rolling Mill (HRC)', capacity: '260,000 MT / Year', thickness: '1.2mm - 25.4mm', width: '600mm - 2000mm' },
    { line: 'Tandem Cold Rolling Mill (CRC)', capacity: '120,000 MT / Year', thickness: '0.25mm - 3.5mm', width: '600mm - 1800mm' },
    { line: 'Continuous Hot-Dip Galvanizing Lines (GI)', capacity: '140,000 MT / Year', thickness: '0.12mm - 4.0mm', width: '600mm - 1500mm' },
    { line: 'Color Coated Steel Coil Line (PPGI)', capacity: '90,000 MT / Year', thickness: '0.13mm - 1.5mm', width: '600mm - 1250mm' },
    { line: 'High-Frequency Welded & Seamless Pipe Facility', capacity: '75,000 MT / Year', thickness: 'SCH 10 - XXS', width: 'OD 21.3mm - 914mm' },
    { line: 'Precision Stainless Steel Processing & Slitting', capacity: '60,000 MT / Year', thickness: '0.3mm - 12.0mm', width: '1000mm - 2000mm' }
  ];

  return (
    <div className="w-full bg-slate-50">
      
      {/* Page Hero Header */}
      <div className="bg-[#0F2B48] text-white py-14 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <span>/</span>
            <span className="text-[#EA580C] font-semibold">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Corporate Profile &amp; Industrial Heritage
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            dentfull Industrial Group (<strong>dentfull.com</strong>) has been pioneering high-grade metallurgical manufacturing, cold strip processing, and global steel export for over two decades.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Company Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Enterprise Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Precision Metallurgical Engineering Built For Global Industry
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded with the vision to bridge international manufacturing demand with prime mill-certified steel, <strong>dentfull</strong> integrates advanced blast furnace smelting, high-speed continuous strip rolling, precision slitting, and deep-drawing surface treatment.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Operating out of our 180,000 square meter industrial complex in Shandong, China, our specialized supply chain serves heavy construction contractors, pressure vessel builders, appliance manufacturers, and shipyards spanning 80+ countries across Europe, the Middle East, the Americas, and Southeast Asia.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="text-xl font-black text-[#0F2B48]">180,000 m²</div>
                <div className="text-xs text-slate-500">Mill Facility Area</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="text-xl font-black text-[#EA580C]">500,000 MT</div>
                <div className="text-xs text-slate-500">Annual Steel Volume</div>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <div className="text-xl font-black text-[#0F2B48]">850+ Staff</div>
                <div className="text-xs text-slate-500">Engineers &amp; Metallurgists</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="dentfull enterprise plant overview"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-[#0A192F] text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ISO 9001:2015 &amp; CE Certified Mill Exporter</span>
                </div>
                <p className="text-xs text-slate-300">
                  Full Mill Test Certificate (EN 10204 3.1) provided with every consignment. Inquiries: {DENTFULL_SALES_EMAIL}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Core Values */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Guiding Corporate Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Vision, Mission &amp; Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded bg-[#0F2B48] text-[#EA580C] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F2B48] text-base">Corporate Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be the world’s most trusted and technologically disciplined B2B steel partner, recognized for zero-defect metallurgical tolerances, honest chemical transparency, and dependable containerized shipping.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded bg-[#0F2B48] text-blue-400 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F2B48] text-base">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empowering industrial contractors, shipbuilders, and appliance manufacturers worldwide by supplying prime-certified steel on time, reducing procurement friction, and guaranteeing rigorous compliance with ASTM, JIS, and EN standards.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded bg-[#0F2B48] text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0F2B48] text-base">Core Values</h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>Metallurgical Integrity:</strong> Strict chemical ladle &amp; tensile verification.</li>
                <li>• <strong>Contractual Reliability:</strong> Locked FOB/CIF pricing with on-time sailings.</li>
                <li>• <strong>Customer Service:</strong> 12-hour technical engineering response.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factory Scale & Production Capacity Table */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Plant Infrastructure
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
                Production Capacity &amp; Rolling Mill Inventory
              </h2>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#EA580C] hover:bg-[#d94e09] text-white px-4 py-2 rounded text-xs font-bold self-start sm:self-auto transition-colors"
            >
              Request Plant Mill Schedule
            </button>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0F2B48] text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="p-3.5 pl-5">Production Line / Equipment</th>
                    <th className="p-3.5">Annual Rated Volume</th>
                    <th className="p-3.5">Gauge / Thickness Range</th>
                    <th className="p-3.5">Width Range</th>
                    <th className="p-3.5 pr-5">Standard Capabilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {capacityData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 pl-5 font-bold text-[#0F2B48]">{row.line}</td>
                      <td className="p-3.5 font-semibold text-[#EA580C]">{row.capacity}</td>
                      <td className="p-3.5 font-mono">{row.thickness}</td>
                      <td className="p-3.5 font-mono">{row.width}</td>
                      <td className="p-3.5 pr-5 text-emerald-700 font-semibold">ASTM / EN / JIS Certified</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Corporate Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Continuous Expansion
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              dentfull History &amp; Growth Milestones
            </h2>
          </div>

          <div className="relative border-l-2 border-[#EA580C] ml-4 sm:ml-32 space-y-8 py-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Marker */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#EA580C] group-hover:scale-125 transition-transform"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-xl font-black text-[#EA580C] font-mono">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-[#0F2B48]">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Governance & Organization */}
        <section className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-1">
              Structure &amp; Accountability
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-['Montserrat',sans-serif]">
              Corporate Governance &amp; Organizational Chart
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Our streamlined matrix structure guarantees swift communication between mill rolling schedules, metallurgical lab testing, international shipping logistics, and client accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="font-bold text-white text-sm">Board of Directors &amp; CEO</div>
              <p className="text-slate-400 mt-1">Strategic oversight, capital mill investments, and ESG adherence.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="font-bold text-white text-sm">Metallurgical Tech &amp; QA</div>
              <p className="text-slate-400 mt-1">Spectrometer labs, ultrasonic NDT, and MTC 3.1 signing authorities.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="font-bold text-white text-sm">International Sales Division</div>
              <p className="text-slate-400 mt-1">Global quoting desk, multilingual engineers (sales@dentfull.com).</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
              <div className="font-bold text-white text-sm">Maritime Freight &amp; Customs</div>
              <p className="text-slate-400 mt-1">Port clearance, container loading, and ocean chartering teams.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

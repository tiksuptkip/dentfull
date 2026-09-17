import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  CheckCircle, 
  Download, 
  ChevronRight, 
  Microscope, 
  Gauge, 
  Search, 
  Layers, 
  FileText 
} from 'lucide-react';
import { PageId } from '../types';
import { CERTIFICATIONS } from '../data/products';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface QualityPageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const testingEquipments = [
    {
      name: 'Direct-Reading Optical Emission Spectrometer (OES)',
      brand: 'Thermo Fisher ARL 3460 (Germany)',
      purpose: 'Rapid chemical heat and ladle analysis with 0.0001% precision for C, Si, Mn, P, S, Cr, Ni, Mo, and trace micro-alloying elements (V, Ti, Nb).',
      standard: 'ASTM E415 / ISO 14284'
    },
    {
      name: 'Universal Microcomputer Hydraulic Tensile Testing Machine',
      brand: 'SANS 600kN Electronic Hydraulic System',
      purpose: 'Continuous evaluation of upper yield strength (ReH), ultimate tensile capacity (Rm), total elongation (A50), and plastic strain ratio (r-value).',
      standard: 'ASTM A370 / ISO 6892-1 / EN 10002'
    },
    {
      name: 'Charpy V-Notch Impact Testing Machine with Cryogenic Bath',
      brand: 'ZwickRoell Pendulum Impact System (300J)',
      purpose: 'Determining metallurgical ductile-to-brittle transition temperature down to -196°C in liquid nitrogen for offshore and cryogenic pressure vessel steels.',
      standard: 'ASTM E23 / ISO 148-1'
    },
    {
      name: 'Full Automatic Ultrasonic Multi-Channel Flaw Detection (UT)',
      brand: 'Krautkrämer USM 36 Flaw Detector',
      purpose: '100% volumetric inspection of internal laminations, hydrogen embrittlement flakes, and inclusions across heavy steel plates and welded seams.',
      standard: 'ASTM A435 / ASTM A578 Level A/B / EN 10160'
    },
    {
      name: 'High-Pressure Hydrostatic Testing System',
      brand: 'Hydratech Computer Monitored System (up to 70 MPa)',
      purpose: '100% pressure holding verification for seamless and ERW steel pipes manufactured to API 5L and ASTM A106.',
      standard: 'API SPEC 5L / ASTM A53'
    },
    {
      name: 'Salt Spray Corrosion Testing Chamber',
      brand: 'Ascott Analytical Corrosion System (1000 hrs)',
      purpose: 'Salt spray mist chamber testing assessing zinc passivation, chromate film integrity, and paint adhesion on GI and PPGI coils.',
      standard: 'ASTM B117 / ISO 9227'
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
            <span className="text-[#EA580C] font-semibold">Quality &amp; Technical Standards</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Comprehensive Quality Assurance &amp; Testing Facilities
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            From raw iron ore inspection to final EN 10204 3.1 Mill Test Certification, dentfull enforces a zero-defect quality protocol backed by state-of-the-art metallurgical laboratories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        
        {/* Quality Management System Breakdown */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Zero-Defect Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              4-Stage Metallurgical Quality Control System
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every coil and plate manufactured at dentfull plants is tracked by a unique Barcode Heat ID that archives furnace records, chemical spectrometer graphs, and ultrasonic scan waveforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Raw Material Ladle Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Raw iron ore and scrap alloys checked via OES spectrometer. Strict control on harmful tramp elements (Tin, Arsenic, Lead).
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Online Gauge &amp; Surface Optical Scan</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gamma-ray non-contact thickness gauges and 100% optical stroboscopic cameras guarantee ±0.02mm thickness profile.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Physical Laboratory Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sample cut from head and tail of each master coil tested for yield, elongation, impact toughness, and bend angle.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                4
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Pre-Shipment Packaging Audit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Third-party inspection (SGS/BV) verification of rust-preventive paper, steel strapping, weight scale, and container lashing.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Facilities & Equipment Showcase */}
        <section className="space-y-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Laboratory Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Metallurgical Inspection &amp; Testing Apparatus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingEquipments.map((eq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#EA580C]">{eq.brand}</div>
                  <h3 className="font-bold text-slate-800 text-sm">{eq.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{eq.purpose}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Compliance:</span>
                  <span className="font-bold text-[#0F2B48] font-mono">{eq.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* High-res Downloadable Certificate Placeholders */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                Official Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
                International Mill Certifications &amp; Accreditations
              </h2>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Full ISO & CE Certificate Dossier')}
              className="bg-[#EA580C] hover:bg-[#d94e09] text-white px-4 py-2 rounded text-xs font-bold transition-colors self-start sm:self-auto"
            >
              Request Full Certified Dossier
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{cert.title}</h3>
                  <div className="text-xs text-slate-500">{cert.issuer}</div>
                  <p className="text-xs text-slate-600 mt-2">{cert.scope}</p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                  <div className="font-mono text-slate-500 text-[11px]">Cert No: {cert.certNo}</div>
                  <button
                    onClick={() => onOpenQuoteModal(`Download verification for ${cert.title}`)}
                    className="w-full bg-white hover:bg-slate-100 text-[#0F2B48] border border-slate-300 py-1.5 rounded text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Download Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

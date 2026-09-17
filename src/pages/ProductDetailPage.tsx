import React, { useState } from 'react';
import { 
  ChevronRight, 
  SendHorizontal, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Award, 
  Truck, 
  Layers, 
  Maximize2,
  Download,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { PageId, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface ProductDetailPageProps {
  productId?: string;
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId = 'hot-rolled-steel-coil',
  onNavigate,
  onOpenQuoteModal
}) => {
  // Find current product or fallback to hot rolled steel coil
  const product: Product = PRODUCTS.find(p => p.id === productId || p.slug === productId) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'flowchart' | 'packaging' | 'mtc'>('specs');
  
  // Direct Inquiry Form states
  const [directName, setDirectName] = useState('');
  const [directEmail, setDirectEmail] = useState('');
  const [directPhone, setDirectPhone] = useState('');
  const [directQty, setDirectQty] = useState('50');
  const [directPort, setDirectPort] = useState('CIF Rotterdam Port');
  const [directMsg, setDirectMsg] = useState(`Requesting formal FOB/CIF quote for ${product.name}. Please include EN 10204 3.1 MTC parameters and current factory lead time.`);
  const [directSuccess, setDirectSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (directName && directEmail) {
      setDirectSuccess(true);
      setTimeout(() => {
        setDirectSuccess(false);
        setDirectName('');
        setDirectEmail('');
        setDirectPhone('');
      }, 7000);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(DENTFULL_SALES_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* 1. BREADCRUMBS BAR */}
      <div className="bg-white border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0F2B48]">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button onClick={() => onNavigate('products')} className="hover:text-[#0F2B48]">
            Products
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button onClick={() => onNavigate('products')} className="hover:text-[#0F2B48]">
            {product.categoryLabel}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-bold text-[#EA580C]">{product.name}</span>
        </div>
      </div>

      {/* 2. TWO-COLUMN PRODUCT OVERVIEW */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Preview with Hover Zoom Effect */}
            <div className="relative h-[380px] sm:h-[460px] bg-slate-950 rounded-xl overflow-hidden shadow-lg border border-slate-200 group">
              <img
                src={product.gallery[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0F2B48]/90 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-xs">
                Mill Prime Standard • {product.standards[0]}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs font-mono px-3 py-1 rounded">
                Photo {activeImageIndex + 1} of {product.gallery.length}
              </div>
            </div>

            {/* 5-Thumbnail Carousel */}
            <div className="grid grid-cols-5 gap-2.5">
              {product.gallery.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#EA580C] ring-2 ring-orange-200 scale-95'
                      : 'border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Standard export packaging includes multi-layer anti-rust paper, galvanized metal hoods, and edge protectors.
              </span>
            </div>
          </div>

          {/* RIGHT: Product Specs Summary & Inquire Now */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded">
                  {product.subcategory}
                </span>
                <span className="text-xs text-slate-400">• ISO 9001 &amp; CE Certified</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif] leading-tight">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Core Specs Quick Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div>
                <span className="text-slate-500 block">Standards:</span>
                <span className="font-bold text-slate-800">{product.standards.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Steel Grades:</span>
                <span className="font-bold text-slate-800">{product.grades.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Thickness Range:</span>
                <span className="font-mono font-bold text-slate-800">{product.thicknessRange}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Width Range:</span>
                <span className="font-mono font-bold text-slate-800">{product.widthRange}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Minimum Order (MOQ):</span>
                <span className="font-bold text-[#EA580C]">{product.moq}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Monthly Capacity:</span>
                <span className="font-bold text-emerald-700">{product.monthlyCapacity}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onOpenQuoteModal(product.name)}
                className="w-full sm:flex-1 bg-[#EA580C] hover:bg-[#d94e09] text-white py-3.5 px-6 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>Inquire Now for Immediate Pricing</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('direct-inquiry-box');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#0F2B48] py-3.5 px-5 rounded-md font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Direct Inquiry Form</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
              <span>Direct Routing: <strong className="text-slate-700">{DENTFULL_SALES_EMAIL}</strong></span>
              <button 
                onClick={handleCopy}
                className="text-[#EA580C] hover:underline flex items-center gap-1 font-semibold"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* 3. TABBED TECHNICAL INFORMATION SECTION */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Tab Headers */}
          <div className="bg-slate-100 border-b border-slate-200 flex flex-wrap text-xs sm:text-sm font-bold text-slate-700">
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3.5 px-5 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'specs'
                  ? 'border-[#EA580C] text-[#0F2B48] bg-white font-extrabold'
                  : 'border-transparent hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 text-[#EA580C]" />
              <span>Chemical &amp; Mechanical Specs</span>
            </button>

            <button
              onClick={() => setActiveTab('flowchart')}
              className={`py-3.5 px-5 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'flowchart'
                  ? 'border-[#EA580C] text-[#0F2B48] bg-white font-extrabold'
                  : 'border-transparent hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4 text-[#EA580C]" />
              <span>Manufacturing Flowchart</span>
            </button>

            <button
              onClick={() => setActiveTab('packaging')}
              className={`py-3.5 px-5 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'packaging'
                  ? 'border-[#EA580C] text-[#0F2B48] bg-white font-extrabold'
                  : 'border-transparent hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Truck className="w-4 h-4 text-[#EA580C]" />
              <span>Sea-Worthy Packaging &amp; Shipping</span>
            </button>

            <button
              onClick={() => setActiveTab('mtc')}
              className={`py-3.5 px-5 border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'mtc'
                  ? 'border-[#EA580C] text-[#0F2B48] bg-white font-extrabold'
                  : 'border-transparent hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-[#EA580C]" />
              <span>Mill Test Certificate (EN 10204 3.1)</span>
            </button>
          </div>

          {/* Tab Body */}
          <div className="p-6 sm:p-8">
            
            {/* TAB 1: CHEMICAL COMPOSITION & MECHANICAL PROPERTIES */}
            {activeTab === 'specs' && (
              <div className="space-y-8">
                
                {/* Chemical Composition Table */}
                <div>
                  <h3 className="text-base font-bold text-[#0F2B48] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                    <span>Chemical Ladle Composition Specifications (%)</span>
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#0F2B48] text-white uppercase text-[11px]">
                        <tr>
                          <th className="p-3 pl-4">Steel Grade</th>
                          <th className="p-3">C (Carbon)</th>
                          <th className="p-3">Si (Silicon)</th>
                          <th className="p-3">Mn (Manganese)</th>
                          <th className="p-3">P (Phosphorus)</th>
                          <th className="p-3">S (Sulfur)</th>
                          <th className="p-3 pr-4">Alloying / Other</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono text-slate-700">
                        {product.chemicalComposition.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="p-3 pl-4 font-bold text-[#0F2B48] font-sans">{row.grade}</td>
                            <td className="p-3">{row.c}</td>
                            <td className="p-3">{row.si}</td>
                            <td className="p-3">{row.mn}</td>
                            <td className="p-3">{row.p}</td>
                            <td className="p-3">{row.s}</td>
                            <td className="p-3 pr-4 text-slate-500">{row.other || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mechanical Properties Table */}
                <div>
                  <h3 className="text-base font-bold text-[#0F2B48] mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
                    <span>Mechanical Properties (Tensile, Yield, Elongation)</span>
                  </h3>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-800 text-white uppercase text-[11px]">
                        <tr>
                          <th className="p-3 pl-4">Grade</th>
                          <th className="p-3">Yield Strength (ReH / MPa)</th>
                          <th className="p-3">Tensile Strength (Rm / MPa)</th>
                          <th className="p-3">Elongation (A50 / %)</th>
                          <th className="p-3 pr-4">Charpy V-Notch Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono text-slate-700">
                        {product.mechanicalProperties.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="p-3 pl-4 font-bold text-[#0F2B48] font-sans">{row.grade}</td>
                            <td className="p-3 font-semibold text-blue-900">{row.yieldStrength}</td>
                            <td className="p-3">{row.tensileStrength}</td>
                            <td className="p-3">{row.elongation}</td>
                            <td className="p-3 pr-4 text-emerald-700 font-semibold">{row.impactEnergy || '27J min @ 20°C'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Comprehensive Specification Table */}
                <div>
                  <h3 className="text-base font-bold text-[#0F2B48] mb-3">
                    Dimensional Tolerances &amp; Production Parameters
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {product.specsTable.map((spec, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded flex justify-between">
                        <span className="font-semibold text-slate-600">{spec.property}:</span>
                        <span className="font-bold text-slate-800 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: MANUFACTURING FLOWCHART */}
            {activeTab === 'flowchart' && (
              <div className="space-y-6">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-bold text-[#0F2B48]">
                    Hot Strip &amp; Cold Rolling Manufacturing Flowchart
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Every batch undergoes computer-monitored blast furnace smelting, vacuum degassing (VD/LF), continuous slab casting, and precision multi-stand rolling.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                      01
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Blast Furnace &amp; Ladle Refinement</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Molten iron de-phosphorization, vacuum degassing, and argon stirring to achieve ultra-low gas content and clean inclusions.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                      02
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Continuous Casting (CCM)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Solidification into uniform steel slabs (200-250mm thickness) with hydraulic mold oscillation to prevent surface cracks.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                      03
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Continuous Hot Strip Mill</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Reheating furnace up to 1250°C followed by roughing stands and 7-stand finishing mill with AGC thickness feedback.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#0F2B48] text-[#EA580C] font-bold text-xs flex items-center justify-center">
                      04
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Laminar Cooling &amp; Coiling</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Controlled cooling table sets ferrite-pearlite grain size before automatic down-coilers wrap coils at ±5mm width precision.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                  <strong>Online Surface Inspection:</strong> High-definition optical strobe cameras scan 100% of the strip surface at 20 m/s to detect any slivers, roll marks, or scale indentations before coiling.
                </div>
              </div>
            )}

            {/* TAB 3: PACKAGING & SEA-WORTHY SHIPPING */}
            {activeTab === 'packaging' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F2B48]">
                    Export Sea-Worthy Packaging &amp; Container Stowage
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Engineered to withstand prolonged oceanic transport, humidity fluctuations, and rigorous port crane handling.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-slate-800 text-sm text-[#EA580C]">
                      1. Multi-Layer Anti-Rust Barrier
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Vapor Corrosion Inhibitor (VCI) anti-rust paper wrapping.</li>
                      <li>• High-density waterproof polyethylene film wrapping.</li>
                      <li>• Desiccant packs placed inside inner coil core.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-slate-800 text-sm text-[#2563EB]">
                      2. Metallic Shell &amp; Strapping
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Galvanized steel inner and outer diameter edge protection rings.</li>
                      <li>• Galvanized outer wrap sheet clamped with circumferential steel hoops.</li>
                      <li>• 3 radial straps and 4 circumferential heavy tensile steel bands.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-slate-800 text-sm text-emerald-700">
                      3. Container Loading &amp; Lashing
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Eye-to-Sky or Eye-to-Wall placement in 20GP containers.</li>
                      <li>• Kiln-dried fumigated hardwood chocks and saddle cradles.</li>
                      <li>• Heavy steel cable cross-lashing verified for rough sea transit.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MILL TEST CERTIFICATES (MTC / EN 10204 3.1) */}
            {activeTab === 'mtc' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F2B48]">
                      Mill Test Certificate Sample (EN 10204 3.1)
                    </h3>
                    <p className="text-xs text-slate-600">
                      Each shipment includes official inspection documents with heat number, chemical ladle results, and mechanical tensile confirmation.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal(`MTC Sample Request for ${product.name}`)}
                    className="flex items-center gap-1.5 bg-[#0F2B48] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#1E3A8A] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Download Blank MTC PDF</span>
                  </button>
                </div>

                {/* Simulated Certificate Display */}
                <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-300 font-mono text-xs text-slate-800 space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-300 pb-3">
                    <div>
                      <div className="text-base font-black text-[#0F2B48] font-sans">
                        dentfull INDUSTRIAL GROUP CO., LTD.
                      </div>
                      <div className="text-[11px] text-slate-500">
                        INSPECTION CERTIFICATE ACCORDING TO EN 10204 3.1 / ISO 10474 3.1
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#EA580C]">MTC No: DF-2026-M8849</div>
                      <div className="text-[11px] text-slate-500">Date: 2026-03-12</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                    <div><strong>Customer:</strong> Commercial Consignee</div>
                    <div><strong>Commodity:</strong> {product.name}</div>
                    <div><strong>Standard:</strong> {product.standards[0]}</div>
                    <div><strong>Heat Number:</strong> H-260388A</div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded text-[11px] space-y-1">
                    <div className="font-bold text-slate-700">Ladle Chemical Analysis Result (wt%):</div>
                    <div className="text-slate-600">
                      C: 0.16 | Si: 0.22 | Mn: 0.58 | P: 0.018 | S: 0.009 | CEV: 0.32 | State: FULLY KILLED
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-slate-200 rounded text-[11px] space-y-1">
                    <div className="font-bold text-slate-700">Tensile &amp; Impact Test Verification:</div>
                    <div className="text-slate-600">
                      ReH (Yield): 275 MPa | Rm (Tensile): 445 MPa | Elongation (A50): 29.5% | Charpy (20°C): 48J, 52J, 50J
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-300 flex justify-between">
                    <span>Quality Assurance Manager: Dr. K. Zhou (Signed)</span>
                    <span className="text-emerald-700 font-bold">✓ PASSED 100% ULTRASONIC &amp; SPECTROMETER VERIFICATION</span>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* 4. DIRECT PRODUCT INQUIRY FORM (PRE-FILLED) */}
        <div id="direct-inquiry-box" className="mt-12 bg-white rounded-xl border-2 border-slate-300 p-6 sm:p-8 shadow-md">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Direct Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Inquire Directly For: {product.name}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Data transmitted straight to <strong className="text-slate-800">{DENTFULL_SALES_EMAIL}</strong> for formal mill quotation.
            </p>
          </div>

          {directSuccess ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-900">
                Inquiry Successfully Dispatched to sales@dentfull.com!
              </h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                "Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at sales@dentfull.com. An engineer will follow up with formal pricing within 12 hours."
              </p>
            </div>
          ) : (
            <form onSubmit={handleDirectSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={directName}
                    onChange={(e) => setDirectName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="buyer@company.com"
                    value={directEmail}
                    onChange={(e) => setDirectEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+Country code"
                    value={directPhone}
                    onChange={(e) => setDirectPhone(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Required Quantity (Metric Tons)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={directQty}
                    onChange={(e) => setDirectQty(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Seaport / Country
                  </label>
                  <input
                    type="text"
                    value={directPort}
                    onChange={(e) => setDirectPort(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Specifications &amp; Requirements
                </label>
                <textarea
                  rows={3}
                  value={directMsg}
                  onChange={(e) => setDirectMsg(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white py-3 rounded font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>Submit Product Inquiry to sales@dentfull.com</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  SendHorizontal, 
  Award, 
  Globe2, 
  Headphones, 
  Factory, 
  CheckCircle, 
  Play, 
  Layers, 
  Truck, 
  FileCheck2, 
  ChevronRight,
  Sparkles,
  Building,
  TrendingUp,
  Mail
} from 'lucide-react';
import { PageId } from '../types';
import { CATEGORIES, PRODUCTS, NEWS_INSIGHTS } from '../data/products';
import { DENTFULL_SALES_EMAIL } from '../services/rfqService';

interface HomePageProps {
  onNavigate: (page: PageId, productId?: string) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  // Hero slider slides
  const heroSlides = [
    {
      title: 'Leading Global Supplier of Prime Carbon Steel, Stainless Steel & Industrial Alloys',
      subtitle: 'ISO 9001:2015 & CE Certified Heavy Rolling Mills. 500,000+ Metric Tons Annual Production Exported to 80+ Countries Worldwide.',
      tag: 'PRIME B2B METALLURGICAL EXPORTER',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85',
      primaryCTA: 'Get Factory Direct Quotation',
      secondaryCTA: 'Browse Steel Catalog'
    },
    {
      title: 'Precision Hot & Cold Rolled Coils With Guaranteed Mill Test Certification (EN 10204 3.1)',
      subtitle: 'Supplying ASTM A36, SS400, S355JR, DC01, and Marine Grade 316L Plates With Strict Metallurgical Traceability.',
      tag: 'ADVANCED HOT STRIP & COLD ROLLING MILLS',
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1800&q=85',
      primaryCTA: 'Request MTC & Pricing',
      secondaryCTA: 'Explore Factory Equipment'
    },
    {
      title: 'High Corrosion Hot-Dip Galvanized (GI) & Pre-Painted Steel (PPGI) Solutions',
      subtitle: 'Heavy zinc coating up to Z275 g/m² and RAL color-coated coils for industrial construction and infrastructure.',
      tag: 'CONTINUOUS COATING & ZINC PASSIVATION',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85',
      primaryCTA: 'Inquire Coated Steel',
      secondaryCTA: 'View Quality Lab'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Quick Instant Quotation Finder state
  const [quickMaterial, setQuickMaterial] = useState('Hot Rolled Steel Coil (HRC)');
  const [quickDimension, setQuickDimension] = useState('Thickness 2.0mm - 12.0mm, Width 1250mm');
  const [quickPort, setQuickPort] = useState('CIF Rotterdam Port');

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuoteModal(`${quickMaterial} (${quickDimension} - To: ${quickPort})`);
  };

  // Bottom RFQ form state
  const [bottomName, setBottomName] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomPhone, setBottomPhone] = useState('');
  const [bottomCompany, setBottomCompany] = useState('');
  const [bottomProduct, setBottomProduct] = useState('Prime Hot Rolled Steel Coil (HRC)');
  const [bottomQty, setBottomQty] = useState('50');
  const [bottomPort, setBottomPort] = useState('');
  const [bottomMsg, setBottomMsg] = useState('');
  const [bottomSuccess, setBottomSuccess] = useState(false);

  const handleBottomRFQSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bottomName && bottomEmail) {
      setBottomSuccess(true);
      setTimeout(() => {
        setBottomSuccess(false);
        setBottomName('');
        setBottomEmail('');
        setBottomPhone('');
        setBottomCompany('');
        setBottomPort('');
        setBottomMsg('');
      }, 7000);
    }
  };

  return (
    <div className="w-full">
      
      {/* 1. FULL-WIDTH HERO SLIDER */}
      <section className="relative bg-[#0A192F] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background Image with High Contrast Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#0A192F]/90 to-[#0F2B48]/75"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EA580C]/20 border border-[#EA580C]/40 rounded text-xs font-black tracking-widest text-[#EA580C] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{heroSlides[currentSlide].tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] leading-tight tracking-tight text-white">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-[#EA580C] hover:bg-[#d94e09] text-white px-7 py-3.5 rounded font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>{heroSlides[currentSlide].primaryCTA}</span>
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs px-6 py-3.5 rounded font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>{heroSlides[currentSlide].secondaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-300 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015 &amp; CE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>EN 10204 3.1 Mill Certs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>SGS / BV Audited Exporter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Containerized &amp; Breakbulk Loading</span>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-[#EA580C] w-8' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. QUICK INQUIRY BAR (Interactive Instant Quotation Finder) */}
      <section className="relative z-30 -mt-8 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F2B48] uppercase tracking-wider">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></div>
              <span>Instant Commercial Quotation Finder</span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Destination: <strong className="text-slate-800">{DENTFULL_SALES_EMAIL}</strong>
            </span>
          </div>

          <form onSubmit={handleQuickInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                1. Select Material / Series
              </label>
              <select
                value={quickMaterial}
                onChange={(e) => setQuickMaterial(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-800 focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Hot Rolled Steel Coil (HRC)">Hot Rolled Steel Coil (HRC) - ASTM A36 / SS400</option>
                <option value="Cold Rolled Steel Coil (CRC)">Cold Rolled Steel Coil (CRC) - SPCC / DC01</option>
                <option value="Hot-Dip Galvanized Coil (GI)">Hot-Dip Galvanized Coil (GI) - Z30-Z275</option>
                <option value="Prepainted Steel Coil (PPGI)">Prepainted Steel Coil (PPGI) - RAL Colors</option>
                <option value="Stainless Steel 304/316L">Stainless Steel 304 / 316L Sheets &amp; Plates</option>
                <option value="Seamless Carbon Steel Pipe">Seamless Carbon Pipe - API 5L / ASTM A106</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                2. Target Dimensions / Gauge
              </label>
              <select
                value={quickDimension}
                onChange={(e) => setQuickDimension(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-800 focus:outline-none focus:border-[#EA580C]"
              >
                <option value="Thickness 2.0mm - 12.0mm, Width 1250mm">Thickness 2.0mm - 12.0mm, Width 1250mm</option>
                <option value="Thickness 0.3mm - 2.0mm (Precision Thin Gauge)">Thickness 0.3mm - 2.0mm (Precision Thin Gauge)</option>
                <option value="Heavy Plate: 15mm - 60mm Wall">Heavy Plate: 15mm - 60mm Wall</option>
                <option value="Pipe OD: 21.3mm - 610mm (SCH 40/80)">Pipe OD: 21.3mm - 610mm (SCH 40/80)</option>
                <option value="Custom Slitted Coils / Strip (Width 50-600mm)">Custom Slitted Coils / Strip (Width 50-600mm)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                3. Destination Port / Terms
              </label>
              <select
                value={quickPort}
                onChange={(e) => setQuickPort(e.target.value)}
                className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-800 focus:outline-none focus:border-[#EA580C]"
              >
                <option value="CIF Rotterdam Port, Europe">CIF Rotterdam Port, Europe</option>
                <option value="CIF Jebel Ali Port, UAE">CIF Jebel Ali Port, UAE</option>
                <option value="CIF Santos Port, Brazil">CIF Santos Port, Brazil</option>
                <option value="CIF Manila / Jakarta, SE Asia">CIF Manila / Jakarta, SE Asia</option>
                <option value="FOB Qingdao / Tianjin Port (China)">FOB Qingdao / Tianjin Port (China)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white p-3 rounded font-bold text-xs shadow hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
              >
                <SendHorizontal className="w-4 h-4" />
                <span>Get Instant Quote</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES (Modular 6-Card Grid) */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-1">
              Engineered Metallurgical Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Featured Industrial Product Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-[#2563EB] hover:text-[#0F2B48] flex items-center gap-1 group self-start md:self-auto"
          >
            <span>Explore Complete Specifications Hub</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Image with Hover Overlay */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0F2B48]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                  {product.categoryLabel}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
                  MOQ: {product.moq}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => onNavigate('product-detail', product.slug)}
                    className="font-bold text-[#0F2B48] text-base hover:text-[#EA580C] cursor-pointer transition-colors leading-snug"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs Pill List */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Standards:</span>
                    <span className="font-mono text-slate-600">{product.standards[0]}, {product.standards[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Gauge Range:</span>
                    <span className="font-mono text-slate-600">{product.thicknessRange}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => onNavigate('product-detail', product.slug)}
                    className="w-full text-xs font-semibold py-2 px-3 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors text-center"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="w-full text-xs font-bold py-2 px-3 text-white bg-[#EA580C] hover:bg-[#d94e09] rounded transition-colors text-center shadow-xs"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE DENTFULL: 4-COLUMN METRIC COUNTER */}
      <section className="bg-[#0F2B48] text-white py-16 px-4 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Enterprise Manufacturing Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1 font-['Montserrat',sans-serif]">
              Why Global Contractors Choose dentfull.com
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Combining integrated blast-furnace smelting, high-speed continuous rolling mills, and reliable global maritime logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Metric 1 */}
            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-[#EA580C]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-600/20 text-[#EA580C] flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-black font-['Montserrat',sans-serif] text-white">
                500,000+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mt-1">
                Metric Tons / Year
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Annual aggregate rolling output across hot strip, cold rolling, and color-coating mills.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-[#EA580C]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-black font-['Montserrat',sans-serif] text-white">
                80+
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mt-1">
                Export Destinations
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Proven supply chain into Europe, the Middle East, Southeast Asia, South America, and Africa.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-[#EA580C]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-black font-['Montserrat',sans-serif] text-white">
                ISO 9001
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mt-1">
                CE &amp; SGS Certified
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Every batch accompanied by EN 10204 3.1 Mill Test Certificates with full chemical/mechanical traceability.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800/80 hover:border-[#EA580C]/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-black font-['Montserrat',sans-serif] text-white">
                24/7
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mt-1">
                Technical Sales Desk
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Dedicated metallurgical engineers ready to review BOMs and provide CIF container freight calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE VIDEO / FACILITY TOUR SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Facility Tour Media Area */}
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-slate-950 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
              alt="dentfull plant rolling mills"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Video Play Overlay Box */}
            <div className="relative z-10 text-center p-6 space-y-4">
              <div 
                onClick={() => onNavigate('factory')}
                className="w-18 h-18 rounded-full bg-[#EA580C] hover:bg-[#d94e09] text-white flex items-center justify-center mx-auto cursor-pointer shadow-xl transform hover:scale-110 transition-transform"
                title="Watch Virtual Plant Tour"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  Virtual 3D Factory &amp; Rolling Mill Tour
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Take a digital walkthrough of our 1700mm Hot Strip Mill, Pickling Lines, and Automated High-Bay Storage.
                </p>
              </div>
            </div>

            {/* Live Status Badge */}
            <div className="absolute bottom-4 left-4 z-10 bg-slate-900/80 backdrop-blur-xs px-3 py-1.5 rounded border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Production Line Active • Shifts 1, 2 &amp; 3</span>
            </div>
          </div>

          {/* Plant Stats & Overview */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between text-white space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-1">
                Precision Equipment
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Montserrat',sans-serif]">
                Heavy Industrial Capacity &amp; Technology
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Operating three dedicated mill complexes spanning 180,000 square meters. Equipped with German SMS Siemag AGC hydraulic gauge controllers and continuous galvanizing lines.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300">Continuous Rolling Mill Speed:</span>
                <span className="font-bold text-white font-mono">22.5 m/sec (Computer Controlled)</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300">Slitting Tolerance:</span>
                <span className="font-bold text-[#EA580C] font-mono">±0.02 mm Width Precision</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center justify-between">
                <span className="text-slate-300">Export Packaging:</span>
                <span className="font-bold text-white">Eye-To-Sky / Eye-To-Wall Sea-Worthy</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('factory')}
                className="w-full bg-white hover:bg-slate-100 text-[#0F2B48] py-3 rounded font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Read Full Equipment &amp; Mill Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS & GLOBAL EXPORT MAP */}
      <section className="bg-slate-100 py-16 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Global Shipping Routes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              International Logistics &amp; Client Feedback
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From Qingdao &amp; Tianjin ports to global terminals with real-time bill of lading tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "We procured 3,500 MT of hot rolled coils S355JR for our bridge superstructure project in Antwerp. Tolerances were flawless, and the EN 10204 3.1 certificates matched our third-party SGS inspections with zero discrepancy."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                  BV
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-xs">Marc Vandenberg</div>
                  <div className="text-[11px] text-slate-500">Procurement Director, Flanders Heavy Infra BV</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "dentfull's cold rolled coils and 304 stainless sheets have been our core raw material for 4 consecutive years. Excellent surface brightness, no orange peel defect on deep draws, and punctual shipping."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                  TK
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-xs">Tariq Al-Kuwaiti</div>
                  <div className="text-[11px] text-slate-500">VP Supply Chain, Gulf Appliances Manufacturer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "Consistently reliable Z275 galvanized coils delivered to Santos Port with sea-worthy anti-rust paper and waterproof metallic hoods. Never had any white rust or shipping damage."
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs">
                  RS
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-xs">Rodrigo Silva</div>
                  <div className="text-[11px] text-slate-500">Chief Engineer, Siderúrgica do Sul, Brazil</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. RECENT NEWS & INDUSTRY INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EA580C] mb-1">
              Market Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F2B48] font-['Montserrat',sans-serif]">
              Recent News &amp; Steel Industry Insights
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('quality')}
            className="text-xs font-bold text-[#2563EB] hover:text-[#0F2B48] flex items-center gap-1"
          >
            <span>View Technical Whitepapers &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_INSIGHTS.map((news) => (
            <div 
              key={news.id} 
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-[#EA580C] uppercase tracking-wider">{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-[#0F2B48] text-base leading-snug hover:text-[#EA580C] cursor-pointer transition-colors">
                  {news.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {news.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {news.author}</span>
                <span className="font-semibold text-slate-700">{news.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PROMINENT BOTTOM RFQ FORM (CONNECTED TO sales@dentfull.com) */}
      <section className="bg-[#0F2B48] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              Direct Commercial Procurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-['Montserrat',sans-serif]">
              Submit Your Technical RFQ to sales@dentfull.com
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Our steel sales engineers will calculate FOB/CIF freight rates and compile formal Mill Test specs within 12 business hours.
            </p>
          </div>

          <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 sm:p-8 border-4 border-slate-800">
            {bottomSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-[#0F2B48]">
                  Inquiry Dispatched to sales@dentfull.com!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  "Thank you for contacting dentfull! Your inquiry has been received and routed to our sales team at sales@dentfull.com. An engineer will follow up with formal pricing within 12 hours."
                </p>
              </div>
            ) : (
              <form onSubmit={handleBottomRFQSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Smith"
                      value={bottomName}
                      onChange={(e) => setBottomName(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. EuroSteel Fabrication GmbH"
                      value={bottomCompany}
                      onChange={(e) => setBottomCompany(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. buyer@company.com"
                      value={bottomEmail}
                      onChange={(e) => setBottomEmail(e.target.value)}
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
                      placeholder="e.g. +49 151 2345678"
                      value={bottomPhone}
                      onChange={(e) => setBottomPhone(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Steel Product Required
                    </label>
                    <select
                      value={bottomProduct}
                      onChange={(e) => setBottomProduct(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    >
                      <option value="Prime Hot Rolled Steel Coil (HRC)">Prime Hot Rolled Steel Coil (HRC)</option>
                      <option value="High Precision Cold Rolled Steel Coil (CRC)">High Precision Cold Rolled Steel Coil (CRC)</option>
                      <option value="Austenitic 304 / 316L Stainless Steel">Austenitic 304 / 316L Stainless Steel</option>
                      <option value="Hot-Dip Galvanized Coil (GI)">Hot-Dip Galvanized Coil (GI)</option>
                      <option value="Prepainted Galvanized (PPGI)">Prepainted Galvanized (PPGI)</option>
                      <option value="Seamless Carbon Steel Pipe (API 5L)">Seamless Carbon Steel Pipe (API 5L)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Volume (MT)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 50"
                      value={bottomQty}
                      onChange={(e) => setBottomQty(e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Technical Specifications, Dimensions &amp; Destination Port
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter steel grades, thickness tolerances, surface oil requirements, and target port..."
                    value={bottomMsg}
                    onChange={(e) => setBottomMsg(e.target.value)}
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:border-[#EA580C]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA580C] hover:bg-[#d94e09] text-white py-3 rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>Send RFQ to sales@dentfull.com</span>
                </button>

                <div className="text-[11px] text-center text-slate-500">
                  Direct Inquiries: <a href={`mailto:${DENTFULL_SALES_EMAIL}`} className="text-[#EA580C] font-semibold">{DENTFULL_SALES_EMAIL}</a> | Tel: +86-531-88992211
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

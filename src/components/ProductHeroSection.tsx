import React, { useState, useRef } from "react";
import { 
  ShieldCheck, 
  Award, 
  FileCheck, 
  Send, 
  MessageSquare, 
  Download, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Truck, 
  Clock, 
  CheckCircle2, 
  Scale, 
  Layers, 
  ExternalLink,
  PhoneCall
} from "lucide-react";
import { GALLERY_IMAGES, PRODUCT_SPECS } from "../data/productData";
import { GalleryImage } from "../types";

interface ProductHeroSectionProps {
  onScrollToRfq: () => void;
  onOpenQuickModal: () => void;
  onOpenSpecModal: () => void;
  onSelectPreset: (presetSpec: string) => void;
}

export const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  onScrollToRfq,
  onOpenQuickModal,
  onOpenSpecModal,
  onSelectPreset,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const activeImage = GALLERY_IMAGES[activeImageIndex] || GALLERY_IMAGES[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="product-hero" className="py-8 lg:py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* LEFT COLUMN: Interactive Product Image Gallery (5 cols on lg, 6 on xl) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            {/* Main Image Viewport with Hover Zoom */}
            <div className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-300 shadow-md group">
              {/* Product Badges */}
              <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-700/90 backdrop-blur-xs text-white text-xs font-bold rounded uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
                  MTC EN 10204 3.1 Supplied
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-600/90 backdrop-blur-xs text-white text-[11px] font-bold rounded uppercase tracking-wider shadow-sm">
                  Factory Direct Stock
                </span>
              </div>

              {/* Action Overlay buttons */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                <button
                  id="fullscreen-gallery-btn"
                  onClick={() => setIsLightBoxOpen(true)}
                  className="p-2 rounded bg-slate-900/80 hover:bg-slate-900 text-white text-xs backdrop-blur-xs transition-colors cursor-pointer"
                  title="Inspect Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Large Viewport Image Container */}
              <div
                ref={imageContainerRef}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={handleMouseMove}
                className="relative h-[360px] sm:h-[440px] md:h-[480px] w-full overflow-hidden cursor-crosshair flex items-center justify-center bg-slate-950"
              >
                <img
                  id="main-product-gallery-image"
                  src={activeImage.url}
                  alt={activeImage.title}
                  className={`w-full h-full object-cover transition-transform duration-200 ${
                    isZooming ? "scale-175" : "scale-100"
                  }`}
                  style={
                    isZooming
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        }
                      : undefined
                  }
                  loading="eager"
                />

                {/* Hover zoom guide indicator for user */}
                {!isZooming && (
                  <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded pointer-events-none flex items-center gap-1">
                    <span>Hover to zoom into steel surface</span>
                  </div>
                )}

                {/* Arrow navigation overlays */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption bar */}
              <div className="bg-slate-900 px-4 py-2.5 text-xs text-slate-300 flex items-center justify-between border-t border-slate-800">
                <span className="font-semibold text-white truncate max-w-[80%]">
                  {activeImage.title}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {activeImageIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </div>

            {/* Synchronized Horizontal Thumbnail Carousel */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span>View Product Angles & Industrial Quality:</span>
                <span className="text-blue-700 font-semibold">{activeImage.category}</span>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {GALLERY_IMAGES.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-4/3 rounded overflow-hidden border-2 transition-all cursor-pointer bg-slate-100 ${
                        isActive
                          ? "border-blue-600 ring-2 ring-blue-400/40 scale-102"
                          : "border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100"
                      }`}
                      title={img.title}
                    >
                      <img
                        src={img.thumbUrl}
                        alt={img.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick action toolbar under gallery */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                id="download-tds-btn"
                onClick={onOpenSpecModal}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Tech Spec Sheet</span>
              </button>

              <a
                href="#tab-shipping"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors"
              >
                <Truck className="w-4 h-4 text-orange-600" />
                <span>Export Packaging Guide</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details, Specs Box & Conversion CTAs (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5">
            {/* Origin & Classification tag */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wide">
                Hot Rolled Carbon Steel Products
              </span>
              <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-xs">
                HS Code: 7208.38 / 7208.39
              </span>
              <span className="text-emerald-700 font-semibold text-xs flex items-center gap-1 ml-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                In Stock for Immediate Loading
              </span>
            </div>

            {/* Product Main Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Barlow'] leading-tight">
                Hot Rolled Steel Coil (HR Coil)
              </h1>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                Commercial & Structural Carbon Steel | Model / Grade: Q235B / SS400 / ASTM A36 / S235JR / S355JR
              </p>
            </div>

            {/* Enterprise Certifications & Highlights Ribbon */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="border-r border-slate-200 last:border-0 p-1">
                <span className="block font-bold text-slate-900">EN 10204 3.1</span>
                <span className="text-[11px] text-slate-500">MTC Certificate</span>
              </div>
              <div className="border-r border-slate-200 last:border-0 p-1">
                <span className="block font-bold text-slate-900">ISO 9001:2015</span>
                <span className="text-[11px] text-slate-500">Quality Certified</span>
              </div>
              <div className="border-r border-slate-200 last:border-0 p-1">
                <span className="block font-bold text-slate-900">SGS / BV / TUV</span>
                <span className="text-[11px] text-slate-500">3rd Party Inspection</span>
              </div>
              <div className="p-1">
                <span className="block font-bold text-emerald-700">&lt; 2 Hours</span>
                <span className="text-[11px] text-slate-500">Fast Quote SLA</span>
              </div>
            </div>

            {/* Key Specifications Summary Box (Mirroring reference structure) */}
            <div className="bg-white rounded-lg border border-slate-300 shadow-2xs overflow-hidden">
              <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-white">
                <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-orange-400" />
                  Quick Technical Specifications
                </span>
                <span className="text-[11px] text-slate-300">Standard Tolerances</span>
              </div>

              <div className="p-4 space-y-2.5 text-xs text-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Material Grade:</span>
                    <span className="font-bold text-slate-900">ASTM A36, Q235B, SS400, S235JR</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Standards:</span>
                    <span className="font-bold text-slate-900">ASTM, JIS, EN, GB/T, DIN</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Thickness Range:</span>
                    <span className="font-bold text-slate-900">1.20 mm - 25.40 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Width Range:</span>
                    <span className="font-bold text-slate-900">600 mm - 2000 mm</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Coil Weight:</span>
                    <span className="font-bold text-slate-900">3.0 MT - 28.0 MT (Typical 18-22 MT)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Coil Inner Dia:</span>
                    <span className="font-bold text-slate-900">508 mm (20") / 610 mm (24")</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Surface Finish:</span>
                    <span className="font-bold text-slate-900">Mill Finish (Black) / Pickled & Oiled</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500 font-medium">Edge Type:</span>
                    <span className="font-bold text-slate-900">Mill Edge / CNC Slit Edge</span>
                  </div>
                </div>

                {/* Pricing & Commercial terms bar */}
                <div className="pt-2 mt-2 border-t border-slate-200 flex flex-wrap items-baseline justify-between gap-2 bg-blue-50/70 p-3 rounded">
                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold block uppercase">Reference Price (FOB):</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl sm:text-2xl font-black text-blue-900 font-mono">
                        $580 - $720
                      </span>
                      <span className="text-xs text-slate-600 font-semibold">/ Metric Ton</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 font-semibold block uppercase">MOQ & Lead Time:</span>
                    <span className="text-xs font-bold text-slate-800">
                      MOQ: 10 MT · Delivery: 7-15 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Preset Buttons (1-click procurement shortcuts) */}
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Select Standard In-Stock Procurement Size:</span>
                <span className="text-blue-600 cursor-pointer" onClick={onScrollToRfq}>Custom spec?</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "ASTM A36 3.0mm × 1250mm",
                  "Q235B 4.5mm × 1500mm",
                  "S235JR 2.0mm × 1000mm P&O",
                  "SS400 6.0mm × 1500mm",
                  "S355JR 8.0mm × 1800mm",
                  "SAE 1006 1.8mm × 1219mm",
                ].map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => onSelectPreset(preset)}
                    className="p-2 rounded border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 text-slate-800 text-left text-xs font-semibold transition-all cursor-pointer truncate"
                    title={`Click to auto-fill inquiry for ${preset}`}
                  >
                    <span className="text-[10px] text-blue-600 block">Grade & Size:</span>
                    <span className="truncate">{preset}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prominent High-Converting CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="hero-inquire-now-btn"
                  onClick={onScrollToRfq}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm tracking-wide uppercase shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer border border-orange-700"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry (sales@dentfull.com)</span>
                </button>

                <a
                  href="https://wa.me/18329028877?text=Hello%20Dentfull%20Sales,%20I%20am%20inquiring%20about%20Hot%20Rolled%20Steel%20Coils"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow cursor-pointer border border-emerald-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

              {/* Direct email quick trigger */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Email inquiries dispatched directly to:</span>
                  <a href="mailto:sales@dentfull.com" className="font-bold text-slate-800 hover:text-blue-600 underline">
                    sales@dentfull.com
                  </a>
                </div>
                <button
                  onClick={onOpenQuickModal}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Quick Modal Quote
                </button>
              </div>
            </div>

            {/* Trust Badges Footer */}
            <div className="pt-2 border-t border-slate-200 grid grid-cols-3 gap-2 text-slate-600 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>2-Hour Quote Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mill Test Cert Provided</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>Global Seaworthy Freight</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isLightBoxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <span className="font-bold text-sm">{activeImage.title}</span>
              <button
                onClick={() => setIsLightBoxOpen(false)}
                className="text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded text-xs cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 bg-slate-900 text-xs text-slate-300 flex justify-between items-center">
              <p>{activeImage.caption}</p>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevImage}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextImage}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

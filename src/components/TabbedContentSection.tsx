import React, { useState } from "react";
import { 
  Table, 
  Settings, 
  Package, 
  Factory, 
  CheckCircle2, 
  FileCheck, 
  ShieldCheck, 
  Truck, 
  Anchor, 
  Cpu, 
  Building2, 
  Boxes, 
  AlertCircle, 
  Check, 
  ArrowRight,
  Download
} from "lucide-react";
import { 
  APPLICATION_SECTORS, 
  CHEMICAL_COMPOSITIONS, 
  DIMENSIONAL_TOLERANCES, 
  FACTORY_METRICS, 
  MANUFACTURING_STEPS, 
  MECHANICAL_PROPERTIES, 
  PACKAGING_SPECS, 
  PRODUCT_SPECS, 
  QUALITY_INSPECTION_TESTS 
} from "../data/productData";

interface TabbedContentSectionProps {
  onScrollToRfq: () => void;
  onOpenSpecModal: () => void;
}

export const TabbedContentSection: React.FC<TabbedContentSectionProps> = ({
  onScrollToRfq,
  onOpenSpecModal,
}) => {
  const [activeTab, setActiveTab] = useState<"specs" | "process" | "shipping" | "facility">("specs");

  const tabs = [
    { id: "specs", label: "Product Description & Specifications", icon: Table },
    { id: "process", label: "Manufacturing & Quality Inspection", icon: Settings },
    { id: "shipping", label: "Packaging, Storage & Global Shipping", icon: Package },
    { id: "facility", label: "Factory & Facility Showcase", icon: Factory },
  ];

  return (
    <section id="detailed-tabs-section" className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs Header */}
        <div className="border-b border-slate-300 flex overflow-x-auto no-scrollbar gap-2 bg-slate-200/60 p-1.5 rounded-t-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-md text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-blue-950 shadow-sm border border-slate-300/80 -mb-2 border-b-white pb-4 z-10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white border border-slate-300 border-t-0 rounded-b-lg p-6 sm:p-8 shadow-xs">
          
          {/* TAB 1: Specifications & Chemical / Mechanical Tables */}
          {activeTab === "specs" && (
            <div id="tab-specs" className="space-y-8 animate-in fade-in duration-200">
              {/* Product Overview Summary */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Barlow'] tracking-tight flex items-center gap-2">
                  <span>Product Overview & Metallurgical Characteristics</span>
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-4xl">
                  Dentfull’s <strong>Hot Rolled Steel Coils (HR Coils)</strong> are manufactured through computer-controlled continuous tandem rolling processes from continuous casting pure carbon steel slabs. Engineered for superior weldability, high tensile strength, uniform grain structure, and excellent cold-forming ductility, our coils strictly comply with international standards including <strong>ASTM A36, JIS G3101 SS400, EN 10025-2 S235JR/S355JR, and GB/T 700 Q235B</strong>. Available in mill finish (black) or pickled & oiled (P&O) condition with slit or mill edge.
                </p>
              </div>

              {/* Chemical Composition Table */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
                    Standard Chemical Composition Comparison (Mass %)
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Heat analysis testing per ASTM E415</span>
                </div>

                <div className="overflow-x-auto border border-slate-300 rounded-md shadow-2xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider">
                        <th className="p-3 border-r border-slate-800">Steel Grade</th>
                        <th className="p-3 border-r border-slate-800">Standard Spec</th>
                        <th className="p-3 border-r border-slate-800">C (%)</th>
                        <th className="p-3 border-r border-slate-800">Mn (%)</th>
                        <th className="p-3 border-r border-slate-800">Si (%)</th>
                        <th className="p-3 border-r border-slate-800">P (%) Max</th>
                        <th className="p-3 border-r border-slate-800">S (%) Max</th>
                        <th className="p-3">CEV (%) Max</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {CHEMICAL_COMPOSITIONS.map((comp, idx) => (
                        <tr
                          key={comp.grade}
                          className={idx % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50 hover:bg-slate-100"}
                        >
                          <td className="p-3 font-bold text-blue-900 border-r border-slate-200">{comp.grade}</td>
                          <td className="p-3 font-mono text-slate-600 border-r border-slate-200">{comp.standard}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{comp.c}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{comp.mn}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{comp.si}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{comp.p}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{comp.s}</td>
                          <td className="p-3 font-mono text-emerald-700 font-semibold">{comp.cev || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mechanical Properties Table */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-xs"></span>
                    Standard Mechanical Properties & Impact Toughness
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">Tensile test per ISO 6892-1 / ASTM A370</span>
                </div>

                <div className="overflow-x-auto border border-slate-300 rounded-md shadow-2xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider">
                        <th className="p-3 border-r border-slate-800">Grade</th>
                        <th className="p-3 border-r border-slate-800">Yield Strength Re (MPa)</th>
                        <th className="p-3 border-r border-slate-800">Tensile Strength Rm (MPa)</th>
                        <th className="p-3 border-r border-slate-800">Elongation A50 / A200 (%)</th>
                        <th className="p-3">Charpy V-Notch Impact (J)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {MECHANICAL_PROPERTIES.map((prop, idx) => (
                        <tr
                          key={prop.grade}
                          className={idx % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50 hover:bg-slate-100"}
                        >
                          <td className="p-3 font-bold text-blue-900 border-r border-slate-200">{prop.grade}</td>
                          <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{prop.yieldStrength}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{prop.tensileStrength}</td>
                          <td className="p-3 font-mono text-slate-800 border-r border-slate-200">{prop.elongation}</td>
                          <td className="p-3 font-mono text-emerald-700 font-semibold">{prop.impactCharpy}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Dimensional Tolerances Table */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-slate-700 rounded-xs"></span>
                  Dimensional & Thickness Tolerances (EN 10051 / ASTM A568)
                </h4>

                <div className="overflow-x-auto border border-slate-300 rounded-md">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold uppercase">
                        <th className="p-2.5 border-r border-slate-300">Nominal Thickness</th>
                        <th className="p-2.5 border-r border-slate-300">Thickness Tolerance</th>
                        <th className="p-2.5 border-r border-slate-300">Width Tolerance</th>
                        <th className="p-2.5">Camber Max Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DIMENSIONAL_TOLERANCES.map((dim, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-2.5 font-semibold text-slate-900 border-r border-slate-200">{dim.thicknessRange}</td>
                          <td className="p-2.5 font-mono text-blue-700 font-bold border-r border-slate-200">{dim.thicknessTolerance}</td>
                          <td className="p-2.5 font-mono text-slate-700 border-r border-slate-200">{dim.widthTolerance}</td>
                          <td className="p-2.5 font-mono text-slate-600">{dim.camber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Applications Breakdown */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-base font-bold text-slate-900">
                  Industrial Applications & Target End-Use Sectors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {APPLICATION_SECTORS.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:shadow-xs transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </div>
                        <h5 className="font-bold text-slate-900 text-sm">{sec.title}</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {sec.description}
                      </p>
                      <div className="text-[11px] text-blue-700 font-semibold bg-blue-50 px-2 py-1 rounded inline-block">
                        Grades: {sec.typicalGrades}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-5 bg-gradient-to-r from-slate-900 to-blue-950 rounded-lg text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base">Require Custom Slitting, Cut-to-Length or Pickling?</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Dentfull operates high-precision slitting lines capable of narrow strip cutting down to 30mm width with deburred edges.
                  </p>
                </div>
                <button
                  onClick={onScrollToRfq}
                  className="px-5 py-2.5 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Inquire Custom Slit Coils
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Manufacturing & Quality Inspection */}
          {activeTab === "process" && (
            <div id="tab-process" className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Barlow'] tracking-tight">
                  Step-by-Step Hot Rolling Manufacturing Workflow
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Every coil undergoes stringent thermodynamic processing from continuous-casting slab reheating through high-speed finishing and laminar runout cooling.
                </p>
              </div>

              {/* Visual Process Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MANUFACTURING_STEPS.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="border border-slate-300 rounded-lg overflow-hidden bg-white shadow-2xs flex flex-col group hover:border-blue-500 transition-colors"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src={step.imageUrl}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-blue-700 text-white font-black text-xs px-2.5 py-1 rounded shadow">
                        Step 0{step.stepNumber}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                        <span className="text-[11px] font-semibold text-orange-600 block mb-1">
                          {step.subtitle}
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500 bg-slate-50 p-2 rounded">
                        {step.parameters}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quality Testing Laboratory Table */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      In-House Metallurgical Testing & Quality Assurance Suite
                    </h4>
                    <p className="text-xs text-slate-500">
                      Certified CNAS / ISO 17025 accredited physical & chemical inspection laboratory.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded">
                    100% Heat Traceability Guarantee
                  </span>
                </div>

                <div className="overflow-x-auto border border-slate-300 rounded-md">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold uppercase">
                        <th className="p-3 border-r border-slate-800">Test Category</th>
                        <th className="p-3 border-r border-slate-800">Method</th>
                        <th className="p-3 border-r border-slate-800">Standard</th>
                        <th className="p-3 border-r border-slate-800">Inspection Frequency</th>
                        <th className="p-3">Testing Instrumentation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {QUALITY_INSPECTION_TESTS.map((test, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="p-3 font-bold text-slate-900 border-r border-slate-200">{test.name}</td>
                          <td className="p-3 text-slate-700 border-r border-slate-200">{test.method}</td>
                          <td className="p-3 font-mono text-blue-700 font-semibold border-r border-slate-200">{test.standard}</td>
                          <td className="p-3 text-slate-600 border-r border-slate-200">{test.frequency}</td>
                          <td className="p-3 font-medium text-slate-800">{test.equipment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MTC EN 10204 3.1 Certification Box */}
              <div className="p-6 rounded-lg bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-blue-700" />
                    <h5 className="font-extrabold text-slate-900 text-sm">Official Mill Test Certificate (MTC EN 10204 3.1)</h5>
                  </div>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    Every shipment is accompanied by an authenticated Mill Test Certificate detailing ladle heat chemistry, yield strength, ultimate tensile strength, elongation percentages, bending tests, and batch ultrasonic results.
                  </p>
                </div>
                <button
                  onClick={onOpenSpecModal}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-bold whitespace-nowrap cursor-pointer"
                >
                  View Sample MTC & Spec Sheet
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Packaging, Storage & Shipping */}
          {activeTab === "shipping" && (
            <div id="tab-shipping" className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Barlow'] tracking-tight">
                  Export Seaworthy Packaging, Port Logistics & Shipping
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Heavy industrial steel coils require specialized multi-barrier anti-corrosion protection and reinforced structural strapping to withstand ocean voyage moisture and handling vibrations.
                </p>
              </div>

              {/* Packaging Layer Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-600" />
                    Standard Multi-Layer Export Seaworthy Packaging
                  </h4>

                  <div className="space-y-3">
                    {PACKAGING_SPECS.map((spec, idx) => (
                      <div key={idx} className="p-3 rounded-md border border-slate-200 bg-slate-50 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <strong className="text-xs text-slate-900 block">{spec.item}</strong>
                          <span className="text-xs text-slate-600 leading-normal">{spec.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ocean Vessel & Container Logistics Specifications */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    Containerized (FCL) & Break-Bulk Charter Stowage
                  </h4>

                  <div className="bg-slate-900 text-white p-5 rounded-lg space-y-4 text-xs">
                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-orange-400 font-bold uppercase tracking-wider block text-[11px]">20-Foot Heavy Container (20GP Heavy):</span>
                      <p className="text-slate-300 mt-1">
                        Payload capacity up to <strong>27.0 Metric Tons</strong>. 1 to 2 heavy coils per container loaded on fumigated wooden saddle cradles with 16mm steel wire lashings anchored to ISO floor D-rings.
                      </p>
                    </div>

                    <div className="border-b border-slate-800 pb-3">
                      <span className="text-blue-400 font-bold uppercase tracking-wider block text-[11px]">Break-Bulk Vessel Stowage:</span>
                      <p className="text-slate-300 mt-1">
                        Ideal for high-volume procurement orders (&gt; 500 MT). Coils are stowed eye-to-wall or eye-to-sky in dry underdeck holds on treated softwood dunnage with anti-sliding timber wedges.
                      </p>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-bold uppercase tracking-wider block text-[11px]">Primary Ports of Loading (POL):</span>
                      <p className="text-slate-300 mt-1">
                        Port of Qingdao (Direct deepwater steel terminal) · Port of Tianjin (Xingang) · Port of Shanghai. Fast FOB dispatch with chartered shipping lines.
                      </p>
                    </div>
                  </div>

                  {/* Typical Port Transit Times Table */}
                  <div className="border border-slate-300 rounded-md p-3 bg-slate-50 text-xs">
                    <span className="font-bold text-slate-800 block mb-2">Estimated Ocean Transit Times to Major Global Terminals:</span>
                    <div className="grid grid-cols-2 gap-2 text-slate-600">
                      <div>• Southeast Asia: <strong>5 - 10 Days</strong></div>
                      <div>• Middle East (Jebel Ali): <strong>15 - 20 Days</strong></div>
                      <div>• Europe (Rotterdam/Antwerp): <strong>28 - 35 Days</strong></div>
                      <div>• North America (West Coast): <strong>14 - 18 Days</strong></div>
                      <div>• Latin America (Santos/Callao): <strong>30 - 38 Days</strong></div>
                      <div>• Africa (Durban/Lagos): <strong>25 - 32 Days</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Factory & Facility Showcase */}
          {activeTab === "facility" && (
            <div id="tab-facility" className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-['Barlow'] tracking-tight">
                  Dentfull Metallurgy Industrial Manufacturing Complex
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Our advanced metallurgical manufacturing complex integrates continuous blast furnace smelting, high-speed hot rolling mills, precision slitting lines, and bonded logistics yards.
                </p>
              </div>

              {/* Key Facility Metrics Bento Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {FACTORY_METRICS.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-slate-300 bg-slate-50 hover:bg-white transition-all shadow-2xs">
                    <span className="text-2xl font-black text-blue-950 font-['Barlow'] block">
                      {metric.value}
                    </span>
                    <strong className="text-xs text-slate-900 block mt-1">{metric.label}</strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">{metric.note}</span>
                  </div>
                ))}
              </div>

              {/* Production Lines Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div className="border border-slate-200 rounded-lg p-5 bg-white space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Factory className="w-4 h-4 text-blue-600" />
                    Hot Strip Mill (HSM) Capacity & Technology
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>3 continuous tandem hot rolling trains: 1580mm, 1780mm, and 2250mm</li>
                    <li>Equipped with automatic gauge control (AGC) and hydraulic loopers</li>
                    <li>CVC work roll shifting technology guaranteeing strip profile convexity &lt; 25 µm</li>
                    <li>Siemens computerized supervisory control & data acquisition (SCADA)</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-lg p-5 bg-white space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Audit Reports & International Certifications
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>ISO 9001:2015 Quality Management System Certification</li>
                    <li>ISO 14001:2015 Environmental Management System</li>
                    <li>CE Marking Compliance according to EN 10025-1:2004</li>
                    <li>Verified Factory Supplier by SGS, Bureau Veritas (BV), and TÜV Rheinland</li>
                  </ul>
                </div>
              </div>

              {/* Schedule a Factory Inspection Tour */}
              <div className="p-6 bg-slate-900 rounded-lg text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-base">Schedule an In-Person or Live Video Factory Audit</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    We welcome third-party inspectors (SGS, BV, Intertek) or client representatives for on-site witness inspections prior to shipment dispatch.
                  </p>
                </div>
                <button
                  onClick={onScrollToRfq}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase rounded transition-colors cursor-pointer"
                >
                  Request Factory Audit / Visit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

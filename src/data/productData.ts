import { ChemicalComposition, GalleryImage, InspectionTest, ManufacturingStep, MechanicalProperty, ProductSpec } from "../types";

export const PRODUCT_SPECS: ProductSpec = {
  material: "Carbon Steel & Low Alloy Structural Steel",
  standards: ["ASTM A36 / A1011", "JIS G3101 SS400", "EN 10025-2 S235JR / S355JR", "GB/T 700 Q235B / Q355B", "DIN 17100 St37-2"],
  thickness: "1.2 mm - 25.4 mm (0.047 in - 1.0 in)",
  width: "600 mm - 2000 mm (Standard: 1000, 1219, 1250, 1500, 1800, 2000 mm)",
  coilWeight: "3.0 MT - 28.0 MT (Typical 18 - 22 MT for containerized/bulk shipping)",
  coilId: "508 mm (20 in) / 610 mm (24 in) / 760 mm (30 in)",
  surfaceFinish: ["Mill Finish (Black)", "Pickled & Oiled (P&O)", "Skin-Passed / Levellled", "Shot Blasted"],
  edgeType: ["Mill Edge (Natural round rolled edge)", "Slit Edge (Precision CNC trimmed)"],
  moq: "10 Metric Tons (Sample test batch available upon inquiry)",
  deliveryTime: "7 - 15 Days for standard sizes; 20 - 25 days for custom slit specifications",
  priceRange: "$580 - $720 / Metric Ton (FOB Tianjin/Qingdao/Shanghai)",
  origin: "Dentfull Advanced Metallurgy Plant & Accredited Partner Mills",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "coil-main-warehouse",
    title: "Hot Rolled Steel Coils in Finished Inventory Yard",
    category: "Warehouse Stock",
    url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=240&auto=format&fit=crop",
    caption: "High-grade carbon steel coils stacked in climate-controlled export warehouse ready for strapping and containerization.",
  },
  {
    id: "coil-rolling-mill",
    title: "Continuous 4-High Tandem Hot Rolling Finishing Stand",
    category: "Production Line",
    url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=240&auto=format&fit=crop",
    caption: "Advanced high-speed finishing rolling line operating at 1,050°C with automated AGC (Automatic Gauge Control) laser thickness monitoring.",
  },
  {
    id: "coil-slitting-line",
    title: "Precision Slitting and Edge Trimming Center",
    category: "Processing",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=240&auto=format&fit=crop",
    caption: "Heavy-gauge longitudinal coil slitting line for slit coils and narrow steel strips to ±0.2mm tolerance.",
  },
  {
    id: "coil-packaging-export",
    title: "Standard Seaworthy Export Packaging with Radial Strapping",
    category: "Export Packaging",
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=240&auto=format&fit=crop",
    caption: "Multi-layer anti-rust VCI film wrapping with galvanized metal protective casing and high-tensile steel banding.",
  },
  {
    id: "coil-quality-lab",
    title: "Metallurgical Quality Inspection and Tensile Testing",
    category: "Quality Control",
    url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=240&auto=format&fit=crop",
    caption: "Universal mechanical testing laboratory validating yield point, elongation, and Charpy V-notch impact toughness.",
  },
  {
    id: "coil-container-logistics",
    title: "Heavy Cargo Loading and Port Terminal Dispatch",
    category: "Global Logistics",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    thumbUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=240&auto=format&fit=crop",
    caption: "Heavy 45-ton portal crane loading seaworthy coiled steel into 20GP heavy-duty containers with wooden saddles.",
  },
];

export const CHEMICAL_COMPOSITIONS: ChemicalComposition[] = [
  {
    grade: "ASTM A36",
    standard: "ASTM A36/A36M",
    c: "≤ 0.25",
    mn: "0.80 - 1.20",
    si: "≤ 0.40",
    p: "≤ 0.040",
    s: "≤ 0.050",
    cev: "≤ 0.42",
  },
  {
    grade: "SS400",
    standard: "JIS G3101",
    c: "≤ 0.20",
    mn: "≤ 1.40",
    si: "≤ 0.35",
    p: "≤ 0.050",
    s: "≤ 0.050",
    cev: "≤ 0.40",
  },
  {
    grade: "Q235B",
    standard: "GB/T 700",
    c: "0.12 - 0.20",
    mn: "0.30 - 0.70",
    si: "≤ 0.35",
    p: "≤ 0.045",
    s: "≤ 0.045",
    cev: "≤ 0.38",
  },
  {
    grade: "S235JR",
    standard: "EN 10025-2",
    c: "≤ 0.17",
    mn: "≤ 1.40",
    si: "≤ 0.35",
    p: "≤ 0.035",
    s: "≤ 0.035",
    cev: "≤ 0.35",
  },
  {
    grade: "S355JR",
    standard: "EN 10025-2",
    c: "≤ 0.24",
    mn: "≤ 1.60",
    si: "≤ 0.55",
    p: "≤ 0.035",
    s: "≤ 0.035",
    cev: "≤ 0.45",
  },
  {
    grade: "SAE 1006",
    standard: "ASTM A1011",
    c: "≤ 0.08",
    mn: "0.25 - 0.40",
    si: "≤ 0.10",
    p: "≤ 0.030",
    s: "≤ 0.035",
    cev: "≤ 0.28",
  },
];

export const MECHANICAL_PROPERTIES: MechanicalProperty[] = [
  {
    grade: "ASTM A36",
    yieldStrength: "≥ 250 MPa",
    tensileStrength: "400 - 550 MPa",
    elongation: "≥ 20 % (in 200mm)",
    impactCharpy: "≥ 27 J (at +20°C)",
  },
  {
    grade: "SS400",
    yieldStrength: "≥ 245 MPa",
    tensileStrength: "400 - 510 MPa",
    elongation: "≥ 21 %",
    impactCharpy: "Optional per test",
  },
  {
    grade: "Q235B",
    yieldStrength: "≥ 235 MPa",
    tensileStrength: "370 - 500 MPa",
    elongation: "≥ 26 %",
    impactCharpy: "≥ 27 J (at +20°C)",
  },
  {
    grade: "S235JR",
    yieldStrength: "≥ 235 MPa",
    tensileStrength: "360 - 510 MPa",
    elongation: "≥ 26 %",
    impactCharpy: "≥ 27 J (at +20°C)",
  },
  {
    grade: "S355JR",
    yieldStrength: "≥ 355 MPa",
    tensileStrength: "470 - 630 MPa",
    elongation: "≥ 22 %",
    impactCharpy: "≥ 27 J (at +20°C)",
  },
  {
    grade: "SAE 1006",
    yieldStrength: "≥ 170 MPa",
    tensileStrength: "≥ 300 MPa",
    elongation: "≥ 36 %",
    impactCharpy: "Deep Drawing Grade",
  },
];

export const DIMENSIONAL_TOLERANCES = [
  { thicknessRange: "1.20 - 2.00 mm", thicknessTolerance: "± 0.08 mm", widthTolerance: "+15 / -0 mm", camber: "≤ 3.0 mm per 2000 mm" },
  { thicknessRange: "2.01 - 3.50 mm", thicknessTolerance: "± 0.10 mm", widthTolerance: "+20 / -0 mm", camber: "≤ 3.0 mm per 2000 mm" },
  { thicknessRange: "3.51 - 6.00 mm", thicknessTolerance: "± 0.13 mm", widthTolerance: "+25 / -0 mm", camber: "≤ 2.5 mm per 2000 mm" },
  { thicknessRange: "6.01 - 12.00 mm", thicknessTolerance: "± 0.16 mm", widthTolerance: "+30 / -0 mm", camber: "≤ 2.5 mm per 2000 mm" },
  { thicknessRange: "12.01 - 25.40 mm", thicknessTolerance: "± 0.22 mm", widthTolerance: "+35 / -0 mm", camber: "≤ 2.0 mm per 2000 mm" },
];

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    stepNumber: 1,
    title: "Continuous Casting Slab & Reheating",
    subtitle: "Reheat Furnace Temperature: 1150°C - 1250°C",
    description: "High-purity continuous casting steel slabs are charged into a computerized walking beam reheating furnace to achieve uniform austenite crystallization and thermal homogeneity.",
    parameters: "Furnace residence time: 180 mins | Atmospheric deoxidization control",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  },
  {
    stepNumber: 2,
    title: "High-Pressure Hydraulic Descaling",
    subtitle: "Operating Pressure: 180 - 220 bar",
    description: "Multi-nozzle high-pressure water jets blast primary iron oxide scale from slab surfaces before rolling, preventing surface pitting and ensuring immaculate finish quality.",
    parameters: "Descaling efficiency > 99.4% | Recycled industrial water system",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    stepNumber: 3,
    title: "Roughing Rolling & Width Sizing",
    subtitle: "Reversible 4-High Roughing Stands with Vertical Edger",
    description: "The red-hot slab is reduced in thickness through 5 to 7 alternating passes while hydraulic vertical edgers precisely control slab width and edge profile.",
    parameters: "Intermediate transfer thickness: 28 - 45 mm | Pyrometer tracking",
    imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
  },
  {
    stepNumber: 4,
    title: "7-Stand Tandem Finishing Rolling",
    subtitle: "Hydraulic Automatic Gauge Control (HAGC)",
    description: "Continuous tandem finishing train equipped with work roll bending and dynamic CVC (Continuously Variable Crown) delivers strip to target thickness at speeds up to 22 m/s.",
    parameters: "Finishing exit temperature: 840°C - 880°C | Thickness accuracy: ±0.03mm",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
  },
  {
    stepNumber: 5,
    title: "Laminar Flow Water Cooling",
    subtitle: "Microstructure Phase Transformation Control",
    description: "Run-out table top-and-bottom laminar cooling headers rapidly quench the hot strip to achieve the target ferrite-pearlite grain structure and mechanical tensile strength.",
    parameters: "Coiling temperature: 560°C - 650°C | Automated closed-loop algorithm",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  },
  {
    stepNumber: 6,
    title: "Downcoiler & Automated Marking / Strapping",
    subtitle: "3-Roll Mandrel Hydraulic Carousel Downcoiler",
    description: "The cooled steel strip is wound into tight, high-density coils. Robot arms apply thermal spray matrix barcoding, heat number stencil, and 3 circumferential steel straps.",
    parameters: "Coil weight up to 28 MT | Automatic laser surface defect detection",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
];

export const QUALITY_INSPECTION_TESTS: InspectionTest[] = [
  {
    name: "Chemical Spectral Composition Analysis",
    method: "Spark Optical Emission Spectrometry (OES)",
    standard: "ASTM E415 / GB/T 4336",
    frequency: "Every heat & ladle batch",
    equipment: "Thermo Scientific ARL 4460 Spectrometer",
  },
  {
    name: "Mechanical Tensile & Yield Strength Test",
    method: "Room Temperature Axial Tensile Pull",
    standard: "ISO 6892-1 / ASTM A370",
    frequency: "2 specimens per coil lot (head & tail)",
    equipment: "MTS 1000kN Computer Controlled UTM",
  },
  {
    name: "Charpy V-Notch Impact Test",
    method: "Sub-zero and Ambient Dynamic Impact",
    standard: "ISO 148-1 / ASTM E23",
    frequency: "Per specification (0°C, -20°C, -40°C)",
    equipment: "ZwickRoell RKP450 Pendulum Machine",
  },
  {
    name: "Dimensional Laser Profile Scanning",
    method: "Continuous Online Laser Triangulation",
    standard: "EN 10051 / ASTM A568",
    frequency: "100% full strip length continuously",
    equipment: "IMS Laser Thickness & Crown Profiler",
  },
  {
    name: "Ultrasonic Internal Delamination Flaw Detection",
    method: "High-Frequency Pulse-Echo Ultrasonic",
    standard: "EN 10160 Level S1/E1 / ASTM A578",
    frequency: "Structural & heavy gauge grades",
    equipment: "Olympus OmniScan Phased Array System",
  },
  {
    name: "Surface Scale & Eddy Current Inspection",
    method: "Multi-Channel High Sensitivity Eddy Current",
    standard: "ISO 10893-2",
    frequency: "100% surface top and bottom",
    equipment: "Foerster Defectomat Automated Tester",
  },
];

export const APPLICATION_SECTORS = [
  {
    title: "Structural & Civil Engineering",
    description: "Fabrication of H-beams, welded box girders, transmission towers, pre-engineered buildings, and bridge superstructure plates.",
    typicalGrades: "Q235B, S235JR, ASTM A36, S355JR",
    icon: "Building2",
  },
  {
    title: "Automotive & Heavy Vehicles",
    description: "Commercial truck chassis frames, wheel rims, suspension cross-members, brake disc brackets, and stamped chassis pressings.",
    typicalGrades: "SAPH440, QSTE380TM, ASTM A1011",
    icon: "Truck",
  },
  {
    title: "Steel Pipes & ERW Tubes",
    description: "High-frequency ERW welded line pipes, structural hollow sections (SHS/RHS), casing tubes, and fluid transport conduits.",
    typicalGrades: "API 5L Gr.B / X42 / X52, Q235B, S235JR",
    icon: "Boxes",
  },
  {
    title: "Shipbuilding & Marine Structures",
    description: "Barge hulls, offshore platform decks, containerized bulkheads, shipping container corner castings, and marine pontoons.",
    typicalGrades: "CCS-A, ABS-A, BV-A, LR-A, ASTM A131",
    icon: "Anchor",
  },
  {
    title: "Industrial Machinery & Pressure Equipment",
    description: "Heavy agricultural machinery frames, hydraulic crane booms, storage silos, boiler tanks, and mining equipment conveyors.",
    typicalGrades: "Q355B, S355J2, P265GH, ASTM A516",
    icon: "Cog",
  },
  {
    title: "Cold Rolling & Re-Rolling Substrate",
    description: "Feedstock substrate for commercial cold rolling mills, hot-dip continuous galvanizing lines (GI), and prepainted lines (PPGI).",
    typicalGrades: "SPHC, SAE 1006, SAE 1008, DD11",
    icon: "Cpu",
  },
];

export const PACKAGING_SPECS = [
  {
    item: "Core Inner Protection",
    detail: "High-density heavy wall corrugated cardboard sleeve or steel inner sleeve to prevent internal eye deformation during sling handling.",
  },
  {
    item: "Rust-Preventive Film",
    detail: "Heavy-duty volatile corrosion inhibitor (VCI) anti-rust polyethene film wrapping sealing out sea spray moisture and ambient salinity.",
  },
  {
    item: "Outer Protective Sheath",
    detail: "High-strength galvanized corrugated metal wrapping on outer circumference and inner eye, with heavy pressed galvanized metal side rings.",
  },
  {
    item: "High-Tensile Strapping",
    detail: "Minimum 3 circumferential high-tensile blued steel straps (32mm × 0.9mm) + minimum 4 radial eye-through straps with heavy lock seals.",
  },
  {
    item: "Shipping Container Stowage",
    detail: "20GP heavy container payload: up to 27.0 MT. Secured on treated fumigated pine saddle cradles (ISPM 15) with steel wire lashing to floor D-rings.",
  },
  {
    item: "Break-Bulk Vessel Stowage",
    detail: "Eye-to-sky or eye-to-wall stowage on dunnage wood in dry vessel holds with anti-shift timber wedge shoring and moisture desiccants.",
  },
];

export const FACTORY_METRICS = [
  { label: "Total Manufacturing Footprint", value: "450,000 m²", note: "Integrated smelting, hot rolling, slitting & logistics park" },
  { label: "Annual Rolling Capacity", value: "1,800,000 MT", note: "Continuous 3-shift automated production capability" },
  { label: "Continuous Hot Rolling Lines", value: "3 Advanced Lines", note: "1580mm, 1780mm, and 2250mm high-speed tandem mills" },
  { label: "Warehouse Stock Availability", value: "65,000+ MT", note: "Standard sizes in stock for immediate 48-hour container loading" },
  { label: "Global Export Reach", value: "85+ Countries", note: "North America, Latin America, Europe, Middle East & Southeast Asia" },
  { label: "Accredited Laboratory", value: "CNAS & ISO/IEC 17025", note: "Full in-house physical, chemical and non-destructive testing" },
];

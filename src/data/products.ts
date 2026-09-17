import { Product } from '../types';

export const CATEGORIES = [
  {
    id: 'carbon-steel',
    name: 'Carbon Steel Products',
    shortName: 'Carbon Steel',
    description: 'Hot rolled, cold rolled, plates, structural sections and carbon seamless pipes manufactured to ASTM, EN, and JIS standards.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    itemCount: '12 Series',
    subcategories: ['Hot Rolled Coils/Sheets', 'Cold Rolled Coils', 'Steel Plates', 'Structural Steel', 'Steel Pipes']
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel Products',
    shortName: 'Stainless Steel',
    description: 'Austenitic and duplex stainless steel coils, plates, sheets, and bars in 304, 304L, 316L, 321, 310S, and 2205.',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1200&q=80',
    itemCount: '8 Series',
    subcategories: ['304/304L Coils & Sheets', '316L Marine Grade', 'Decorative Stainless', 'Stainless Bars & Wire']
  },
  {
    id: 'galvanized-steel',
    name: 'Galvanized & Prepainted Steel',
    shortName: 'Coated Steel (GI/PPGI)',
    description: 'High-corrosion resistance hot-dip zinc (GI), zinc-aluminum-magnesium (ZAM), Galvalume (GL), and prepainted RAL coated coils.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    itemCount: '9 Series',
    subcategories: ['Hot Dip Galvanized (GI)', 'Galvalume (GL)', 'Prepainted Steel (PPGI)', 'Color Coated Roofing Sheets']
  },
  {
    id: 'aluminum-alloys',
    name: 'Aluminum & Industrial Alloys',
    shortName: 'Alloy Products',
    description: 'Aerospace and marine grade aluminum sheets, extruded bars, boiler alloy pipes, and specialty high-pressure alloy components.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    itemCount: '6 Series',
    subcategories: ['5000/6000 Series Al Sheets', 'Extruded Alloy Sections', 'Pressure Vessel Plates', 'High Nickel Alloys']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'hot-rolled-steel-coil',
    slug: 'hot-rolled-steel-coil',
    name: 'Prime Hot Rolled Steel Coil (HRC)',
    category: 'carbon-steel',
    categoryLabel: 'Carbon Steel Products',
    subcategory: 'Hot Rolled Coils/Sheets',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'dentfull hot rolled steel coils are manufactured using premium blast-furnace molten iron and continuous hot strip rolling mills. Ideal for structural fabrication, pipe manufacturing, automotive chassis, yellow goods, and maritime engineering with uniform thickness and superior weldability.',
    standards: ['ASTM A36', 'ASTM A1011', 'JIS G3101 SS400', 'EN 10025 S235JR', 'DIN 17100', 'GB/T Q235B'],
    grades: ['SS400', 'Q235B', 'Q345B', 'A36', 'S235JR', 'S355JR', 'SPHC'],
    thicknessRange: '1.2mm - 25.4mm (0.047" - 1.00")',
    widthRange: '600mm - 2000mm (23.6" - 78.7")',
    lengthRange: 'Coil or custom cut-to-length sheets (1000mm - 12000mm)',
    surfaceFinish: ['Black / Mill Finish', 'Pickled & Oiled (P&O)', 'Patterned / Chequered Tear Drop'],
    applications: ['Structural building beams', 'Spiral and ERW pipe manufacturing', 'Automotive chassis & wheel rims', 'Heavy container fabrication', 'Agricultural machinery'],
    moq: '25 Metric Tons (1 x 20GP Container)',
    leadTime: '7 - 15 business days (Ex-stock: 3 days)',
    monthlyCapacity: '65,000 Metric Tons',
    specsTable: [
      { property: 'Product Name', value: 'Prime Hot Rolled Steel Coil / Sheet (HRC / HRS)' },
      { property: 'Production Standard', value: 'ASTM, JIS, EN, DIN, GB, ISO', standard: 'ASTM A36 / EN 10025' },
      { property: 'Steel Grade', value: 'Q235B, SS400, S235JR, A36, Q355B, S355JR, SPHC' },
      { property: 'Thickness Tolerance', value: '±0.02mm to ±0.05mm (Precision Controlled)' },
      { property: 'Width Tolerance', value: '+5mm / -0mm' },
      { property: 'Coil Inner Diameter (ID)', value: '508mm / 610mm / 760mm' },
      { property: 'Coil Weight', value: '5 - 28 Metric Tons per coil (Customizable)' },
      { property: 'Packaging Standard', value: 'Mill-standard sea-worthy export wrapping with steel hoops and eye-to-sky container loading' },
      { property: 'Inspection & Certification', value: 'Mill Test Certificate (EN 10204 3.1), Third party inspection (SGS, BV, TUV) accepted' }
    ],
    chemicalComposition: [
      { grade: 'ASTM A36', c: '≤ 0.25%', si: '≤ 0.40%', mn: '0.80 - 1.20%', p: '≤ 0.040%', s: '≤ 0.050%', other: 'Cu ≥ 0.20% (Optional)' },
      { grade: 'JIS SS400', c: '≤ 0.20%', si: '≤ 0.35%', mn: '≤ 1.40%', p: '≤ 0.050%', s: '≤ 0.050%', other: 'Fe balance' },
      { grade: 'EN S235JR', c: '≤ 0.17%', si: '≤ 0.35%', mn: '≤ 1.40%', p: '≤ 0.035%', s: '≤ 0.035%', other: 'N ≤ 0.012%' },
      { grade: 'GB Q235B', c: '0.12 - 0.20%', si: '≤ 0.30%', mn: '0.30 - 0.70%', p: '≤ 0.045%', s: '≤ 0.045%', other: 'Als ≥ 0.015%' },
      { grade: 'EN S355JR', c: '≤ 0.24%', si: '≤ 0.55%', mn: '≤ 1.60%', p: '≤ 0.035%', s: '≤ 0.035%', other: 'CEV ≤ 0.45%' }
    ],
    mechanicalProperties: [
      { grade: 'ASTM A36', yieldStrength: '≥ 250 MPa (36 ksi)', tensileStrength: '400 - 550 MPa (58-80 ksi)', elongation: '≥ 20%', impactEnergy: '27J @ 20°C' },
      { grade: 'JIS SS400', yieldStrength: '≥ 245 MPa', tensileStrength: '400 - 510 MPa', elongation: '≥ 21%', impactEnergy: '27J @ 20°C' },
      { grade: 'EN S235JR', yieldStrength: '≥ 235 MPa', tensileStrength: '360 - 510 MPa', elongation: '≥ 26%', impactEnergy: '27J @ 20°C' },
      { grade: 'GB Q235B', yieldStrength: '≥ 235 MPa', tensileStrength: '370 - 500 MPa', elongation: '≥ 25%', impactEnergy: '27J @ 20°C' },
      { grade: 'EN S355JR', yieldStrength: '≥ 355 MPa', tensileStrength: '470 - 630 MPa', elongation: '≥ 22%', impactEnergy: '27J @ 20°C' }
    ]
  },
  {
    id: 'cold-rolled-steel-coil',
    slug: 'cold-rolled-steel-coil',
    name: 'High Precision Cold Rolled Steel Coil (CRC)',
    category: 'carbon-steel',
    categoryLabel: 'Carbon Steel Products',
    subcategory: 'Cold Rolled Coils',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'dentfull cold rolled steel coils feature ultra-smooth surface uniformity, tight gauge tolerances, and high deep-drawing ductility. Extensively supplied to global home appliance, automotive outer panel, electrical cabinet, and precision stamping manufacturers.',
    standards: ['ASTM A1008', 'JIS G3141 SPCC/SPCD/SPCE', 'EN 10130 DC01/DC03/DC04', 'DIN 1623'],
    grades: ['SPCC', 'SPCD', 'DC01', 'DC03', 'DC04', 'ST12'],
    thicknessRange: '0.25mm - 3.50mm',
    widthRange: '600mm - 1800mm',
    lengthRange: 'Coils or leveled sheets (500mm - 6000mm)',
    surfaceFinish: ['Bright / Mirror', 'Matte (Roughness Ra 0.6-1.9 μm)', 'Slightly Oiled / Dry Passivated'],
    applications: ['Refrigerators, washing machines & microwave casings', 'Automobile doors & interior panels', 'Switchgear cabinets & electrical enclosures', 'Precision stamped hardware'],
    moq: '20 Metric Tons',
    leadTime: '10 - 20 business days',
    monthlyCapacity: '45,000 Metric Tons',
    specsTable: [
      { property: 'Surface Quality', value: 'Class FB (Standard) / Class FC (Superior Finish)' },
      { property: 'Hardness Level', value: '1/8 Hard, 1/4 Hard, 1/2 Hard, Full Hard (HRB 85+)' },
      { property: 'Coil ID', value: '508mm / 610mm' },
      { property: 'Oiling', value: 'Light oiled (0.5-1.5 g/m²), Medium oiled, or Vanishing oil' }
    ],
    chemicalComposition: [
      { grade: 'JIS SPCC', c: '≤ 0.12%', si: '≤ 0.05%', mn: '≤ 0.50%', p: '≤ 0.035%', s: '≤ 0.035%' },
      { grade: 'EN DC01', c: '≤ 0.12%', si: '≤ 0.05%', mn: '≤ 0.60%', p: '≤ 0.045%', s: '≤ 0.045%' },
      { grade: 'EN DC04 (Deep Drawing)', c: '≤ 0.08%', si: '≤ 0.03%', mn: '≤ 0.40%', p: '≤ 0.030%', s: '≤ 0.030%', other: 'Ti ≤ 0.05%' }
    ],
    mechanicalProperties: [
      { grade: 'SPCC', yieldStrength: '130 - 260 MPa', tensileStrength: '≥ 270 MPa', elongation: '≥ 32%' },
      { grade: 'DC01', yieldStrength: '140 - 280 MPa', tensileStrength: '270 - 410 MPa', elongation: '≥ 28%' },
      { grade: 'DC04', yieldStrength: '120 - 210 MPa', tensileStrength: '270 - 350 MPa', elongation: '≥ 38%' }
    ]
  },
  {
    id: 'stainless-steel-304-coil',
    slug: 'stainless-steel-304-coil',
    name: 'Austenitic 304 / 304L Stainless Steel Coil & Sheet',
    category: 'stainless-steel',
    categoryLabel: 'Stainless Steel Products',
    subcategory: '304/304L Coils & Sheets',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'High-purity Grade 304/304L (UNS S30400 / S30403) austenitic stainless steel. High chemical resistance, outstanding deep-draw formability, hygienic cleanability, and cryogenic durability. Widely exported to food equipment, chemical processing, and architectural projects worldwide.',
    standards: ['ASTM A240', 'ASTM A480', 'JIS G4305 SUS304', 'EN 10088-2 1.4301 / 1.4307'],
    grades: ['AISI 304', 'AISI 304L', 'SUS 304', '1.4301', '1.4307'],
    thicknessRange: '0.3mm - 12.0mm',
    widthRange: '1000mm, 1219mm (4ft), 1500mm (5ft), 2000mm',
    lengthRange: 'Coil or Cut Sheet (2000mm - 6000mm)',
    surfaceFinish: ['2B (Cold Rolled Annealed)', 'No.1 (Hot Rolled)', 'No.4 / Hairline', 'BA (Bright Annealed)', '8K Mirror'],
    applications: ['Food and beverage brewery vessels', 'Pharmaceutical cleanroom tanks', 'Kitchen catering equipment', 'Architectural facades & elevators', 'Chemical pipeline transfer'],
    moq: '5 Metric Tons',
    leadTime: '5 - 10 business days',
    monthlyCapacity: '30,000 Metric Tons',
    specsTable: [
      { property: 'Alloy Composition', value: 'Cr 18.0 - 20.0%, Ni 8.0 - 10.5%' },
      { property: 'Surface Protection', value: 'Laser PE Film / PVC Blue Film (50-100 microns)' },
      { property: 'Origin Mills', value: 'TISCO, Baosteel, POSCO, dentfull Integrated Mill' }
    ],
    chemicalComposition: [
      { grade: 'AISI 304', c: '≤ 0.08%', si: '≤ 0.75%', mn: '≤ 2.00%', p: '≤ 0.045%', s: '≤ 0.030%', other: 'Cr 18.0-20.0%, Ni 8.0-10.5%, N ≤ 0.10%' },
      { grade: 'AISI 304L', c: '≤ 0.03%', si: '≤ 0.75%', mn: '≤ 2.00%', p: '≤ 0.045%', s: '≤ 0.030%', other: 'Cr 18.0-20.0%, Ni 8.0-12.0%' }
    ],
    mechanicalProperties: [
      { grade: 'AISI 304', yieldStrength: '≥ 205 MPa', tensileStrength: '≥ 515 MPa', elongation: '≥ 40%', impactEnergy: '100J @ -196°C' },
      { grade: 'AISI 304L', yieldStrength: '≥ 170 MPa', tensileStrength: '≥ 485 MPa', elongation: '≥ 40%' }
    ]
  },
  {
    id: 'hot-dip-galvanized-steel-coil',
    slug: 'hot-dip-galvanized-steel-coil',
    name: 'Hot-Dip Galvanized Steel Coil (GI / HDG)',
    category: 'galvanized-steel',
    categoryLabel: 'Galvanized & Prepainted Steel',
    subcategory: 'Hot Dip Galvanized (GI)',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Continuous hot-dip galvanized steel with pure zinc coating weights ranging from Z30 to Z275 (30g/m² to 275g/m²). Available in zero spangle, minimized spangle, and regular spangle with anti-fingerprint and chromate passivation. Ideal for HVAC ducts, roofing, and solar mounting brackets.',
    standards: ['ASTM A653 / A653M', 'JIS G3302 SGCC', 'EN 10346 DX51D+Z / DX52D+Z', 'AS 1397'],
    grades: ['DX51D+Z', 'DX52D+Z', 'SGCC', 'CS Type A/B', 'G550 Structural'],
    thicknessRange: '0.12mm - 4.0mm',
    widthRange: '600mm - 1500mm',
    lengthRange: 'Coils / Cut Sheets / Corrugated Profiles',
    surfaceFinish: ['Zero Spangle', 'Regular Spangle', 'Skin Passed', 'Anti-Fingerprint (AFP)', 'Chromated & Oiled'],
    applications: ['HVAC ventilation ducting', 'Solar tracker racking systems', 'Cable trays & purlins', 'Light gauge steel framing', 'Corrugated agricultural silos'],
    moq: '25 Metric Tons',
    leadTime: '7 - 14 business days',
    monthlyCapacity: '50,000 Metric Tons',
    specsTable: [
      { property: 'Zinc Coating Weight', value: 'Z30, Z60, Z80, Z120, Z180, Z275 g/m² (Custom up to Z600)' },
      { property: 'Spangle Pattern', value: 'Zero Spangle / Minimized Spangle / Big Spangle' },
      { property: 'Surface Passivation', value: 'Trivalent Chromium (Cr3+), Hexavalent Chromium (Cr6+), or Chromium-Free AFP' },
      { property: 'Corrosion Resistance', value: 'Up to 25+ years in outdoor temperate environments' }
    ],
    chemicalComposition: [
      { grade: 'DX51D+Z', c: '≤ 0.12%', si: '≤ 0.50%', mn: '≤ 0.60%', p: '≤ 0.100%', s: '≤ 0.045%', other: 'Ti ≤ 0.30%' }
    ],
    mechanicalProperties: [
      { grade: 'DX51D+Z', yieldStrength: '140 - 300 MPa', tensileStrength: '270 - 500 MPa', elongation: '≥ 22%' },
      { grade: 'G550', yieldStrength: '≥ 550 MPa', tensileStrength: '≥ 570 MPa', elongation: '≥ 2%' }
    ]
  },
  {
    id: 'prepainted-galvanized-ppgi',
    slug: 'prepainted-galvanized-ppgi',
    name: 'Prepainted Galvanized Steel Coil (PPGI / Color Coated)',
    category: 'galvanized-steel',
    categoryLabel: 'Galvanized & Prepainted Steel',
    subcategory: 'Prepainted Steel (PPGI)',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Premium color-coated steel coil with PE, SMP, HDP, or PVDF topcoats over galvanized or Galvalume substrates. Offered in standard RAL colors (RAL 9002, 9003, 5015, 6005, 3020) and wood/stone printed patterns with 15-30 years color-retention guarantee.',
    standards: ['ASTM A755', 'JIS G3312 CGCC', 'EN 10169', 'GB/T 12754'],
    grades: ['CGCC', 'TDC51D+Z', 'TS280GD', 'DX51D+AZ'],
    thicknessRange: '0.13mm - 1.5mm',
    widthRange: '600mm - 1250mm',
    lengthRange: 'Coils or Trapezoidal Corrugated Sheets',
    surfaceFinish: ['Glossy (65-80%)', 'Matte (Wrinkle Finish)', 'Embossed Pattern', 'Protective Film Protected'],
    applications: ['Industrial warehouse wall cladding & roofing', 'Sandwich panels (PU/EPS/Rockwool)', 'Roller shutter doors', 'Domestic appliances'],
    moq: '25 Metric Tons',
    leadTime: '10 - 15 business days',
    monthlyCapacity: '40,000 Metric Tons',
    specsTable: [
      { property: 'Paint Type', value: 'Regular Polyester (PE), Silicon Modified Polyester (SMP), High Durability Polyester (HDP), PVDF' },
      { property: 'Top Coating', value: '15 - 25 microns (Primer 5μm + Topcoat 15-20μm)' },
      { property: 'Back Coating', value: '5 - 8 microns epoxy / polyester' },
      { property: 'Color Matching', value: 'RAL Classic System or Custom Client Sample Matching' }
    ],
    chemicalComposition: [
      { grade: 'CGCC Base', c: '≤ 0.12%', si: '≤ 0.05%', mn: '≤ 0.50%', p: '≤ 0.040%', s: '≤ 0.040%' }
    ],
    mechanicalProperties: [
      { grade: 'CGCC', yieldStrength: '220 - 380 MPa', tensileStrength: '340 - 480 MPa', elongation: '≥ 16%' }
    ]
  },
  {
    id: 'seamless-carbon-steel-pipe',
    slug: 'seamless-carbon-steel-pipe',
    name: 'Seamless Carbon Steel Pipe & Tube (API 5L / ASTM A106)',
    category: 'carbon-steel',
    categoryLabel: 'Carbon Steel Products',
    subcategory: 'Steel Pipes',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533106497176-45ae19e68ba8?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Hot-finished and cold-drawn heavy wall seamless steel pipes manufactured to API 5L, ASTM A106 Gr.B, and ASTM A53. 100% Eddy current and ultrasonic tested for high-pressure oil, gas, petroleum pipelines, boiler tubes, and structural piling.',
    standards: ['API 5L (PSL1/PSL2)', 'ASTM A106 / A53 Gr. B', 'ASTM A333 (Low Temp)', 'EN 10216-1'],
    grades: ['Gr. B', 'X42', 'X52', 'X60', 'X65', 'P235TR1', 'P265GH'],
    thicknessRange: 'SCH 10 to SCH XXS (2mm - 60mm wall thickness)',
    widthRange: 'Outer Diameter: 1/2" to 36" (21.3mm - 914.4mm)',
    lengthRange: '5.8m, 6.0m, 11.8m, 12m, SRL, DRL',
    surfaceFinish: ['Black Varnish Coated', 'Anti-Corrosion 3LPE / 3LPP', 'Hot Dip Galvanized', 'Bare/Oiled'],
    applications: ['Petroleum oil and gas transmission', 'High pressure steam boiler lines', 'Shipbuilding and marine pipelines', 'Heavy structural building columns'],
    moq: '15 Metric Tons',
    leadTime: '7 - 20 business days',
    monthlyCapacity: '35,000 Metric Tons',
    specsTable: [
      { property: 'Pipe End Types', value: 'Plain End (PE), Beveled End (BE 30°-35°), Threaded & Coupled (T&C)' },
      { property: 'Hydrostatic Test', value: '100% Tested under ASTM / API standards' },
      { property: 'Non-Destructive Testing (NDT)', value: 'Ultrasonic (UT), Magnetic Particle (MT), Eddy Current (ET)' }
    ],
    chemicalComposition: [
      { grade: 'ASTM A106 Gr. B', c: '≤ 0.30%', si: '≥ 0.10%', mn: '0.29 - 1.06%', p: '≤ 0.035%', s: '≤ 0.035%', other: 'Cu ≤ 0.40%, Ni ≤ 0.40%, Cr ≤ 0.40%' }
    ],
    mechanicalProperties: [
      { grade: 'A106 Gr. B', yieldStrength: '≥ 240 MPa (35 ksi)', tensileStrength: '≥ 415 MPa (60 ksi)', elongation: '≥ 30%' }
    ]
  },
  {
    id: 'marine-316l-stainless-plate',
    slug: 'marine-316l-stainless-plate',
    name: 'Marine Grade 316 / 316L Stainless Steel Plate & Sheet',
    category: 'stainless-steel',
    categoryLabel: 'Stainless Steel Products',
    subcategory: '316L Marine Grade',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Molybdenum-bearing austenitic stainless steel Grade 316/316L offering superior resistance to pitting and crevice corrosion in chloride and marine seawater environments. Widely utilized in offshore platforms, chemical reactors, paper pulping, and desalination plants.',
    standards: ['ASTM A240', 'ASME SA240', 'EN 10088-2 1.4404', 'JIS G4304 SUS316L'],
    grades: ['AISI 316L', '1.4404', 'SUS 316L', 'UNS S31603'],
    thicknessRange: '0.5mm - 60.0mm',
    widthRange: '1000mm, 1500mm, 1800mm, 2000mm, 2500mm',
    surfaceFinish: ['2B', 'No.1 Pickled', 'Hairline', 'Mirror 8K'],
    applications: ['Offshore oil exploration rigs', 'Seawater desalination plants', 'Pharmaceutical synthesis vessels', 'Marine propulsion shafting'],
    moq: '3 Metric Tons',
    leadTime: '5 - 12 business days',
    monthlyCapacity: '20,000 Metric Tons',
    specsTable: [
      { property: 'Chemical Addition', value: 'Molybdenum (Mo 2.0 - 3.0%) for pitting corrosion resistance' },
      { property: 'Pitting Resistance Equivalent (PREN)', value: '≥ 23.5 - 25.0' },
      { property: 'Testing Standard', value: 'ASTM A262 Practice E intergranular corrosion test passed' }
    ],
    chemicalComposition: [
      { grade: 'AISI 316L', c: '≤ 0.030%', si: '≤ 0.75%', mn: '≤ 2.00%', p: '≤ 0.045%', s: '≤ 0.030%', other: 'Cr 16.0-18.0%, Ni 10.0-14.0%, Mo 2.0-3.0%' }
    ],
    mechanicalProperties: [
      { grade: 'AISI 316L', yieldStrength: '≥ 220 MPa', tensileStrength: '≥ 520 MPa', elongation: '≥ 40%' }
    ]
  },
  {
    id: 'aluminum-5052-6061-sheet',
    slug: 'aluminum-5052-6061-sheet',
    name: 'Aerospace & Marine 5052 / 6061-T6 Aluminum Alloy Plate',
    category: 'aluminum-alloys',
    categoryLabel: 'Aluminum & Industrial Alloys',
    subcategory: '5000/6000 Series Al Sheets',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Precision rolled non-heat-treatable 5052-H32 and heat-treatable structural 6061-T6 aluminum alloy sheets. High strength-to-weight ratio, superb corrosion resistance in marine climates, and excellent anodizing performance for aerospace, defense, and maritime ship hulls.',
    standards: ['ASTM B209', 'EN 485', 'AMS 4027', 'GB/T 3880'],
    grades: ['5052-H32', '6061-T6 / T651', '7075-T6', '3003-H14'],
    thicknessRange: '0.5mm - 120.0mm',
    widthRange: '1000mm - 2600mm',
    surfaceFinish: ['Mill Finish', 'Brushed Anodized', 'Polished', 'PVC Film Coated'],
    applications: ['Shipbuilding hulls & bulkheads', 'Fuel tanks & pressure vessels', 'Aerospace brackets & tooling plates', 'High-speed rail carriage body'],
    moq: '5 Metric Tons',
    leadTime: '7 - 14 business days',
    monthlyCapacity: '25,000 Metric Tons',
    specsTable: [
      { property: 'Main Alloying Elements', value: '5052 (Mg 2.2-2.8%), 6061 (Mg 0.8-1.2%, Si 0.4-0.8%)' },
      { property: 'Weldability', value: 'TIG / MIG weldable without post-weld cracking' },
      { property: 'Ultrasonic Inspection', value: 'AMS-STD-2154 Class A tested' }
    ],
    chemicalComposition: [
      { grade: '6061-T6', c: '-', si: '0.40 - 0.80%', mn: '≤ 0.15%', p: '-', s: '-', other: 'Mg 0.8-1.2%, Cr 0.04-0.35%, Cu 0.15-0.40%, Al Bal' },
      { grade: '5052-H32', c: '-', si: '≤ 0.25%', mn: '≤ 0.10%', p: '-', s: '-', other: 'Mg 2.2-2.8%, Cr 0.15-0.35%, Fe ≤ 0.40%, Al Bal' }
    ],
    mechanicalProperties: [
      { grade: '6061-T6', yieldStrength: '≥ 240 MPa', tensileStrength: '≥ 290 MPa', elongation: '≥ 10%' },
      { grade: '5052-H32', yieldStrength: '≥ 195 MPa', tensileStrength: '230 - 280 MPa', elongation: '≥ 12%' }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'ISO 9001:2015',
    issuer: 'International Quality Management System',
    scope: 'Smelting, Hot Rolling, Cold Rolling, Coating, and Global Export of Structural Steel & Alloys',
    certNo: 'CN-199/2024-QMS-0988',
    validity: '2024 - 2027',
    badge: 'ISO 9001:2015 Certified'
  },
  {
    title: 'CE Certification (EN 10025)',
    issuer: 'EU Construction Products Regulation (CPR 305/2011)',
    scope: 'Hot Rolled Structural Steel Products for Civil Engineering & Metallic Structures',
    certNo: '0038/CPR/MUM/1410021/1',
    validity: 'Valid across European Union',
    badge: 'CE Conformity'
  },
  {
    title: 'SGS Audited Supplier',
    issuer: 'SGS-CSTC Standards Technical Services',
    scope: 'Production Facility Capacity, Chemical Lab Testing, and Pre-shipment Packaging Verification',
    certNo: 'SGS-AUD-2025-DF908',
    validity: 'Annual On-Site Audit',
    badge: 'SGS Verified'
  },
  {
    title: 'Bureau Veritas (BV) Classification',
    issuer: 'Bureau Veritas Marine & Offshore',
    scope: 'Marine Grade Steel Plates & Coils for Shipbuilding and Offshore Structures',
    certNo: 'BV-M&O-992147-B',
    validity: 'International Maritime Grade',
    badge: 'BV Approved'
  }
];

export const GLOBAL_PROJECTS = [
  {
    title: 'Middle East LNG Terminal Expansion',
    country: 'United Arab Emirates / Qatar',
    volume: '42,000 Metric Tons',
    product: 'ASTM A516 Gr.70 Pressure Vessel Plates & A106 Seamless Tubes',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    description: 'Supplied high-spec low-temperature impact tested cryogenic plates and cryogenic line pipes with 100% UT flaw detection.'
  },
  {
    title: 'Southeast Asia High-Speed Rail Viaducts',
    country: 'Indonesia / Malaysia',
    volume: '68,000 Metric Tons',
    product: 'Hot Rolled Q355B / S355JR Coils & Heavy Welded H-Beams',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Precision slitted structural coils and custom flange cut beams delivered on schedule to primary civil infrastructure contractors.'
  },
  {
    title: 'Latin America Solar Energy Park (1.2 GW)',
    country: 'Chile / Brazil',
    volume: '35,000 Metric Tons',
    product: 'HDG Galvanized Steel Coils (Z275) & Pre-punched Purlins',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    description: 'High-corrosion resistance zinc-coated structural purlins guaranteed for 25-year desert atmospheric salt and UV resistance.'
  },
  {
    title: 'European Marine Equipment & Brewery Fabrication',
    country: 'Germany / Netherlands / Italy',
    volume: '18,500 Metric Tons',
    product: 'Austenitic 304 / 316L Cold Rolled Stainless Steel Sheets (2B / BA)',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    description: 'Laser-cutting grade flatness stainless steel sheets with protective PE film for hygienic vessel and food-grade fermentation processing.'
  }
];

export const NEWS_INSIGHTS = [
  {
    id: 'news-1',
    title: 'Q1 Global Steel Market Outlook: Shifting Trends in Hot Rolled Coil Pricing',
    date: 'March 12, 2026',
    author: 'dentfull Market Intelligence Team',
    category: 'Market Trends',
    summary: 'Analysis of raw iron ore dynamics, global freight index corrections, and shifting demand patterns in European and Southeast Asian manufacturing hubs.',
    readTime: '4 min read'
  },
  {
    id: 'news-2',
    title: 'Understanding EN 10204 3.1 Mill Test Certificates (MTC) for Ocean Shipments',
    date: 'February 28, 2026',
    author: 'Quality Assurance Dept.',
    category: 'Technical Guide',
    summary: 'A step-by-step breakdown of mechanical yield indicators, chemical heat analysis, and metallurgical traceability mandatory for customs clearance.',
    readTime: '6 min read'
  },
  {
    id: 'news-3',
    title: 'New Green Hydrogen Annealing Line Commissioned at dentfull Plant No. 3',
    date: 'January 19, 2026',
    author: 'Corporate Newsroom',
    category: 'Company Expansion',
    summary: 'Our continuous cold rolling and galvanizing facility reduces carbon emissions by 28% while achieving ultra-uniform crystal grain orientation.',
    readTime: '3 min read'
  }
];

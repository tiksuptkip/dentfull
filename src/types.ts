export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'carbon-steel' | 'stainless-steel' | 'galvanized-steel' | 'aluminum-alloys';
  categoryLabel: string;
  subcategory: string;
  image: string;
  gallery: string[];
  description: string;
  standards: string[];
  grades: string[];
  thicknessRange: string;
  widthRange: string;
  lengthRange?: string;
  surfaceFinish: string[];
  applications: string[];
  moq: string;
  leadTime: string;
  monthlyCapacity: string;
  specsTable: {
    property: string;
    value: string;
    standard?: string;
  }[];
  chemicalComposition: {
    grade: string;
    c: string;
    si: string;
    mn: string;
    p: string;
    s: string;
    other?: string;
  }[];
  mechanicalProperties: {
    grade: string;
    yieldStrength: string;
    tensileStrength: string;
    elongation: string;
    impactEnergy?: string;
  }[];
}

export interface RFQSubmission {
  id: string;
  timestamp: string;
  fullName: string;
  companyName: string;
  email: string;
  phoneWhatsapp: string;
  country: string;
  productOfInterest: string;
  quantityMetricTons: string;
  targetPort: string;
  incoterms: 'FOB' | 'CIF' | 'CFR' | 'EXW' | 'DDP';
  message: string;
  attachmentName?: string;
  status: 'sent' | 'processing' | 'verified';
}

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'product-detail'
  | 'quality'
  | 'factory'
  | 'projects'
  | 'contact';

export type LanguageCode = 'EN' | 'ES' | 'AR' | 'RU' | 'FR';

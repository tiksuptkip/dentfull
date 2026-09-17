export interface ProductSpec {
  material: string;
  standards: string[];
  thickness: string;
  width: string;
  coilWeight: string;
  coilId: string;
  surfaceFinish: string[];
  edgeType: string[];
  moq: string;
  deliveryTime: string;
  priceRange: string;
  origin: string;
}

export interface ChemicalComposition {
  grade: string;
  standard: string;
  c: string;
  mn: string;
  si: string;
  p: string;
  s: string;
  cev?: string;
}

export interface MechanicalProperty {
  grade: string;
  yieldStrength: string;
  tensileStrength: string;
  elongation: string;
  impactCharpy?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  url: string;
  thumbUrl: string;
  caption: string;
}

export interface ManufacturingStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  parameters: string;
  imageUrl: string;
}

export interface InspectionTest {
  name: string;
  method: string;
  standard: string;
  frequency: string;
  equipment: string;
}

export interface RfqFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  quantity: string;
  specifications: string;
  productName: string;
  port: string;
  tradeTerms: string;
  message: string;
  attachmentName?: string;
  attachmentData?: string;
  honeypot?: string;
}

export interface RfqSubmissionResponse {
  success: boolean;
  rfqId: string;
  recipient: string;
  message: string;
  deliveryStatus: "dispatched" | "simulated" | "failed";
  statusDetails?: string;
  timestamp: string;
}

export interface StoredInquirySummary {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  quantity?: string;
  productName: string;
  specifications?: string;
  recipientEmail: string;
  deliveryStatus: "dispatched" | "simulated" | "failed";
  statusDetails?: string;
}

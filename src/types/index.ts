export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'ecu' | 'keys' | 'diagnostics' | 'coding';
  turnaroundTime: string;
  warranty: string;
  symptoms: string[];
  supportedProtocols: string[];
  imageUrl: string;
  iconName: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  vehicle: string;
  faultCode: string;
  issueDescription: string;
  resolutionDescription: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  category: string;
  savingsEstimate?: string;
}

export interface WorkshopStage {
  step: string;
  title: string;
  shortName: string;
  description: string;
  technicalDetails: string[];
  metrics: { label: string; value: string }[];
  imageUrl: string;
  badge: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  vehicle: string;
  rating: number;
  reviewText: string;
  source: 'Google Review' | 'Verified Client' | 'Direct Feedback';
  date: string;
  serviceType: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Bench Repair' | 'Keys & Immo' | 'Diagnostics' | 'Micro-Soldering';
  description: string;
  imageUrl: string;
  vehicle: string;
  equipmentUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Repair Process' | 'Postal Service' | 'Keys & Remapping';
}

export interface EnquirySubmission {
  name: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  regNumber?: string;
  serviceRequired: string;
  faultDescription: string;
  urgency: 'Standard (24-48h)' | 'Urgent Same-Day' | 'Postal Bench Assessment';
}

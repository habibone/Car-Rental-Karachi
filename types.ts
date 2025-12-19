import React from 'react';

export interface LeadFormData {
  businessName: string;
  ownerName: string;
  phone: string;
  whatsapp: string;
  city: string;
}

export interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}
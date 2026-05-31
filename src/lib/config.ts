export const SITE_CONFIG = {
  name: 'VSNEXOS',
  title: 'Free GST Calculator & Toolkit India',
  description: 'Calculate GST inclusive and exclusive tax splits, generate invoices, and browse tax guides.',
  url: 'https://free-gst-calculator.vsnexos.com',
  author: 'VSNEXOS Tax Team',
};

export const GST_RATES = [0, 3, 5, 12, 18, 28] as const;

export type GSTRate = (typeof GST_RATES)[number];

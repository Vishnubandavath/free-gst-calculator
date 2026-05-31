import React from 'react';
import { Metadata } from 'next';
import { InvoiceGeneratorForm } from '@/components/invoice-generator-form';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Free GST Invoice Generator Online | VSNEXOS',
  description: 'Create and download professional, GST-compliant tax invoices for your business. Supports dynamic item rows, auto calculations, CGST/SGST/IGST splits, and direct PDF downloads.',
};

export default function InvoiceGeneratorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-8">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Professional <span className="text-indigo-600">GST Invoice Generator</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Generate, print, and export GST-compliant business invoices instantly.
        </p>
      </div>

      <section className="max-w-5xl mx-auto">
        <InvoiceGeneratorForm />
      </section>
    </div>
  );
}

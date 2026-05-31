import React from 'react';
import { Metadata } from 'next';
import { FileText, ArrowRight, CheckCircle2, Calculator as CalcIcon } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Invoice Examples | Templates & Compliance Checklist',
  description: 'See real-world examples of GST compliant invoices. Learn what components are mandatory for B2B and B2C transactions in India.',
};

export default function GSTInvoiceExamplesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <FileText size={16} />
            Compliance Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST Invoice <span className="text-indigo-600">Examples</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Learn how to create legally valid GST invoices for your customers and clients.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Mandatory Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Name, address and GSTIN of the supplier',
              'Consecutive serial number (max 16 chars)',
              'Date of its issue',
              'Name and address of the recipient',
              'GSTIN or UIN of the recipient (if registered)',
              'HSN code (Goods) or SAC code (Services)',
              'Description of goods or services',
              'Quantity and unit of measure',
              'Total value of supply',
              'Taxable value after discounts',
              'Rate of tax (CGST, SGST, IGST)',
              'Amount of tax charged',
              'Place of supply',
              'Signature of authorized person'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Invoice Type Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 glass-card rounded-3xl space-y-4 border-l-4 border-indigo-600">
              <h3 className="text-2xl font-bold">Tax Invoice</h3>
              <p className="text-slate-600 dark:text-slate-400">Issued by a registered person when selling taxable goods or services. Essential for the buyer to claim Input Tax Credit.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl space-y-4 border-l-4 border-emerald-600">
              <h3 className="text-2xl font-bold">Bill of Supply</h3>
              <p className="text-slate-600 dark:text-slate-400">Issued by businesses under the Composition Scheme or those selling exempted goods. No tax is charged on this document.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Generate Your Report</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Need a professional breakdown for your next invoice? Use our calculator and download the calculation report as a PDF.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Go to Calculator <CalcIcon size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

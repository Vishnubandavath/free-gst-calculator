import React from 'react';
import { Metadata } from 'next';
import { AdvancedGSTCalculator } from '@/components/advanced-gst-calculator';
import { FileSpreadsheet, Download, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Advanced GST Calculator | Multi-Item Invoice Calculator',
  description: 'Professional multi-item GST calculator for Indian businesses. Add discounts, manage multiple products, and export your calculations to CSV or PDF.',
};

export default function AdvancedGSTCalculatorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Advanced <span className="text-indigo-600">GST Calculator</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Calculate GST for multiple items, apply discounts, and generate mini-invoices instantly.
        </p>
      </div>

      {/* Advanced Calculator Section */}
      <section className="max-w-6xl mx-auto">
        <AdvancedGSTCalculator />
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Multi-Item Support',
              description: 'Calculate tax for your entire order or invoice in one go. Add as many items as you need.',
              icon: FileSpreadsheet,
              color: 'text-indigo-600',
              bg: 'bg-indigo-50 dark:bg-indigo-900/20'
            },
            {
              title: 'Flexible Discounts',
              description: 'Apply percentage-based discounts to each item individually for accurate net pricing.',
              icon: ShieldCheck,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50 dark:bg-emerald-900/20'
            },
            {
              title: 'Instant Exports',
              description: 'Export your calculations to CSV for Excel/Google Sheets or download as a clean PDF.',
              icon: Download,
              color: 'text-cyan-600',
              bg: 'bg-cyan-50 dark:bg-cyan-900/20'
            }
          ].map((benefit, i) => (
            <div key={i} className="p-8 glass-card rounded-3xl space-y-6">
              <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center`}>
                <benefit.icon size={28} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-12 space-y-10">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why use our Advanced GST Calculator?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
             In business, you rarely deal with just one item. Our Advanced GST Calculator is designed for merchants, retailers, and wholesalers who need to calculate tax for multiple products at once. Whether you&apos;re creating a quick quote or checking an invoice, this tool saves you time and ensures 100% accuracy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">For Small Businesses</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Quickly calculate the total GST amount for your daily sales. The item-wise breakdown helps in maintaining clear records for your GST filing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">For Freelancers</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Create detailed project cost breakdowns with service-specific GST rates and professional discounts for your clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

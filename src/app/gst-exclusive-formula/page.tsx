import React from 'react';
import { Metadata } from 'next';
import { Percent, Calculator as CalcIcon } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Exclusive Formula | How to Add GST to Base Price',
  description: 'Learn the mathematical formula to calculate GST exclusive prices. Step-by-step guide on adding GST to your base costs for B2B and retail invoicing.',
};

export default function GSTExclusiveFormulaPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <Percent size={16} />
            Mathematical Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST <span className="text-indigo-600">Exclusive</span> Formula
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            The standard way to calculate tax for B2B invoices. Learn how to add GST to your base price correctly.
          </p>
        </section>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What is GST Exclusive?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              &ldquo;GST Exclusive&rdquo; refers to the value of a product or service before any tax has been added. In the business world, prices are almost always quoted as exclusive of tax. The buyer is then responsible for paying the base price plus the applicable GST amount. This method is straightforward and is the primary way tax is calculated on invoices.
            </p>
          </section>

          <section className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white space-y-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-400">The Mathematical Formula</h3>
            <div className="space-y-6 font-mono text-lg md:text-xl">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-slate-400 mb-2">{"// To find the GST Amount:"}</p>
                <p className="text-indigo-300">GST Amount = (Base Price * GST Rate) / 100</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-slate-400 mb-2">{"// To find the Total Price (Inclusive):"}</p>
                <p className="text-cyan-300">Total Amount = Base Price + GST Amount</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Step-by-Step Example</h2>
            <div className="p-8 glass-card rounded-3xl space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Let&apos;s say you are selling professional services for <strong>₹50,000</strong>, and the GST rate is <strong>18%</strong>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Calculate the GST Amount:</strong> (₹50,000 * 18) / 100 = ₹9,000</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Calculate the Total Amount:</strong> ₹50,000 + ₹9,000 = ₹59,000</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Invoice Breakdown:</strong> Base: ₹50,000, CGST: ₹4,500, SGST: ₹4,500.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-cyan-600 p-8 md:p-12 rounded-[2.5rem] text-white text-center space-y-8">
          <h2 className="text-3xl font-bold">Need to Add GST?</h2>
          <p className="text-cyan-50 max-w-2xl mx-auto">
            Use our professional GST Exclusive calculator to generate accurate tax breakdowns for your business invoices in seconds.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl font-black shadow-xl hover:bg-cyan-50 transition-all">
            Start Calculating <CalcIcon size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

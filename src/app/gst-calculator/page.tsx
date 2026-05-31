import React from 'react';
import { Metadata } from 'next';
import { GSTCalculator } from '@/components/gst-calculator';
import { Info, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Calculator India | Add or Remove GST Online',
  description: 'Use our professional GST calculator to calculate GST inclusive and exclusive amounts. Supports all Indian GST slabs: 5%, 12%, 18%, and 28%.',
};

export default function GSTCalculatorPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Professional <span className="text-indigo-600">GST Calculator</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Calculate GST for any amount with instant CGST, SGST, and IGST breakdown.
        </p>
      </div>

      {/* Calculator Section */}
      <section className="max-w-6xl mx-auto">
        <GSTCalculator />
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Info className="text-indigo-600" />
              How to use the GST Calculator?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our GST calculator is designed to be intuitive and fast. Follow these simple steps to calculate your tax:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Step 1: Select Type', text: 'Choose between "GST Exclusive" (to add tax) or "GST Inclusive" (to remove tax from total).' },
                { title: 'Step 2: Enter Amount', text: 'Input the base amount or total amount in the currency field.' },
                { title: 'Step 3: Select Rate', text: 'Choose the applicable GST rate (0%, 3%, 5%, 12%, 18%, or 28%).' },
                { title: 'Step 4: View Results', text: 'Instantly see the breakdown of Net Amount, GST Amount, CGST, SGST, and Total.' },
              ].map((step, i) => (
                <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-indigo-600 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Understanding GST Formulas</h2>
            <div className="space-y-6">
              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">1. GST Exclusive (Adding GST)</h4>
                <code className="block p-4 bg-white dark:bg-slate-900 rounded-xl text-indigo-600 dark:text-indigo-400 font-mono text-sm">
                  GST Amount = (Original Amount × GST %) / 100 <br />
                  Net Price = Original Amount + GST Amount
                </code>
              </div>
              <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">2. GST Inclusive (Removing GST)</h4>
                <code className="block p-4 bg-white dark:bg-slate-900 rounded-xl text-cyan-600 dark:text-cyan-400 font-mono text-sm">
                  GST Amount = Total Amount - [Total Amount × (100 / (100 + GST %))] <br />
                  Net Price = Total Amount - GST Amount
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why VSNEXOS is the best GST tool?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Real-time calculations as you type',
                'One-click result copying',
                'Downloadable PDF reports',
                'Supports all Indian GST slabs',
                'Mobile-first premium design',
                'Dark and Light mode support',
                'Inter-state (IGST) support',
                '100% free and accurate'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

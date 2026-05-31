import React from 'react';
import { Metadata } from 'next';
import { Percent, ArrowRight, Calculator as CalcIcon } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Inclusive Formula | How to Calculate Base Price from Total',
  description: 'Learn the mathematical formula to calculate GST inclusive prices. Includes step-by-step examples and a breakdown of the logic used in our calculator.',
};

export default function GSTInclusiveFormulaPage() {
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
            GST <span className="text-indigo-600">Inclusive</span> Formula
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Master the art of reverse-calculating the base price from a total amount that already includes GST.
          </p>
        </section>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What is GST Inclusive?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When a price is "GST Inclusive," it means the Goods and Services Tax has already been added to the base cost of the product or service. This is the final amount a consumer pays at a retail store. If you are a business owner, you often need to find the base price and the tax component from this total to file your returns.
            </p>
          </section>

          <section className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white space-y-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-indigo-400">The Mathematical Formula</h3>
            <div className="space-y-6 font-mono text-lg md:text-xl">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-slate-400 mb-2">// To find the GST Amount:</p>
                <p className="text-indigo-300">GST Amount = Total Amount - (Total Amount * (100 / (100 + GST Rate)))</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-slate-400 mb-2">// To find the Net Price (Base Price):</p>
                <p className="text-cyan-300">Net Price = Total Amount - GST Amount</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Step-by-Step Example</h2>
            <div className="p-8 glass-card rounded-3xl space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Let's say you bought a smartphone for <strong>₹23,600</strong>, and the GST rate is <strong>18%</strong>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Calculate the Base Price:</strong> ₹23,600 * (100 / 118) = ₹20,000</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Calculate the GST Amount:</strong> ₹23,600 - ₹20,000 = ₹3,600</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <p className="text-slate-700 dark:text-slate-300"><strong>Split the GST:</strong> Since it's intra-state, CGST is ₹1,800 and SGST is ₹1,800.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-indigo-600 p-8 md:p-12 rounded-[2.5rem] text-white text-center space-y-8">
          <h2 className="text-3xl font-bold">Try the Inclusive Calculator</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Don't want to do the math manually? Our tool handles the inclusive formula with 100% precision in real-time.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-black shadow-xl hover:bg-indigo-50 transition-all">
            Open Calculator <CalcIcon size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

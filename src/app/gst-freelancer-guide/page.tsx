import React from 'react';
import { Metadata } from 'next';
import { Smartphone, ArrowRight, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST for Freelancers India | Export & Service Guide',
  description: 'A complete guide for freelancers, designers, and developers in India. Learn about GST registration, zero-rated exports, and LUT.',
};

export default function GSTFreelancerGuidePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <Zap size={16} />
            Freelancer Resource
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST Guide for <span className="text-indigo-600">Freelancers</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Simplified tax information for the modern Indian independent professional.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Do You Need GST?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Most freelancers fall under the 'Service Provider' category. The mandatory registration threshold for services is <strong>₹20 Lakhs</strong> per financial year (₹10 Lakhs for special category states). If your total billing from all clients is below this limit, you are not required to register.
          </p>
          <div className="p-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-800 rounded-3xl">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-2">Important Note</h4>
            <p className="text-amber-800 dark:text-amber-500/80">If you provide services to a client outside of your home state (inter-state), registration used to be mandatory regardless of turnover. However, the government has since provided an exemption for inter-state service providers up to the ₹20 Lakhs limit.</p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Working with International Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 glass-card rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold">Zero-Rated Supply</h3>
              <p className="text-slate-600 dark:text-slate-400">Export of services is treated as zero-rated. This means you don't have to pay GST on your international invoices.</p>
            </div>
            <div className="p-8 glass-card rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950 text-cyan-600 rounded-xl flex items-center justify-center">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">Letter of Undertaking (LUT)</h3>
              <p className="text-slate-600 dark:text-slate-400">To export without paying tax, you must file an LUT annually on the GST portal. It's a simple, free process.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Claiming Input Tax Credit</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            As a freelancer, you pay GST on many things: your internet bill, your co-working space, your laptop, and professional software. If you are GST registered, you can claim all this tax back, which can save you 18% on your major business expenses.
          </p>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get Your Invoices Right</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Use our calculator to ensure your tax components are perfectly calculated before you send your next invoice.
          </p>
          <Link href="/" className="btn-primary">
            Open GST Calculator
          </Link>
        </section>
      </div>
    </div>
  );
}

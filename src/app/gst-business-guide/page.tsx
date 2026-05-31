import React from 'react';
import { Metadata } from 'next';
import { Building2, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST for Businesses India | Compliance & Benefits Guide',
  description: 'Complete GST guide for Indian businesses. Learn about registration limits, composition schemes, input tax credit, and how to remain compliant.',
};

export default function GSTBusinessGuidePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <Building2 size={16} />
            Business Resource
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST Guide for <span className="text-indigo-600">Businesses</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Navigate the complexities of Indian taxation and turn GST compliance into a business advantage.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold">Compliance</h3>
            <p className="text-slate-600 dark:text-slate-400">Stay on the right side of the law by understanding registration limits and return filing cycles.</p>
          </div>
          <div className="p-8 glass-card rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 rounded-xl flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold">Tax Savings</h3>
            <p className="text-slate-600 dark:text-slate-400">Maximize your cash flow by correctly claiming Input Tax Credit on all business expenses.</p>
          </div>
        </div>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Registration Thresholds</h2>
          <div className="overflow-hidden glass-card rounded-3xl">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900">
                <tr className="text-slate-500 text-xs font-bold uppercase">
                  <th className="px-6 py-4">Business Type</th>
                  <th className="px-6 py-4">General States</th>
                  <th className="px-6 py-4">Special Category States</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="px-6 py-4 font-bold">Suppliers of Goods</td>
                  <td className="px-6 py-4">₹40 Lakhs</td>
                  <td className="px-6 py-4">₹20 Lakhs</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold">Service Providers</td>
                  <td className="px-6 py-4">₹20 Lakhs</td>
                  <td className="px-6 py-4">₹10 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Composition Scheme</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Small businesses with an annual turnover up to ₹1.5 crore can opt for the Composition Scheme. This allows you to pay tax at a fixed percentage of your turnover and file quarterly returns, significantly reducing your administrative burden. However, you cannot claim Input Tax Credit or issue tax invoices to your customers under this scheme.
          </p>
        </section>

        <section className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Calculate Your GST?</h2>
            <p className="text-slate-400">Our professional tool is designed for Indian business owners like you.</p>
          </div>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Calculate Now <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

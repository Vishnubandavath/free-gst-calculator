import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Zap, Target, Users, Globe, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About VSNEXOS | India’s Trusted GST Tool Provider',
  description: 'Learn about VSNEXOS, our mission to simplify financial calculations for Indian businesses, and our commitment to providing free, high-quality tools.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Simplifying Finances for <span className="text-indigo-600">Millions</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          At VSNEXOS, we believe that professional financial tools should be accessible to everyone. Our mission is to build the most accurate, fast, and user-friendly calculators for the Indian market.
        </p>
      </section>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: ShieldCheck, title: '100% Accuracy', desc: 'Our GST engine is built on verified government formulas and updated regularly for 2026 standards.' },
          { icon: Zap, title: 'Lightning Fast', desc: 'No more waiting for page reloads. Get instant results as you type with our optimized React engine.' },
          { icon: Globe, title: 'Made for India', desc: 'Specifically designed to handle CGST, SGST, IGST, and all Indian tax slabs with precision.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-[2.5rem] space-y-4 text-center">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Our Commitment to Quality</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            VSNEXOS started with a simple idea: why should small business owners and freelancers struggle with complex spreadsheets when they could have a beautiful, free tool?
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Since our launch, we have helped over 500,000 users calculate their taxes with confidence. We are committed to remaining free, ad-supported, and always up-to-date with the latest tax laws.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-full text-sm font-bold">
              <Award size={18} /> Verified Formulas
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-full text-sm font-bold">
              <Users size={18} /> 500k+ Users
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="relative glass-card rounded-[3rem] p-12 border-slate-200/50 dark:border-slate-800/50 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold">The VSNEXOS Vision</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 italic text-lg leading-relaxed">
              "To empower every Indian entrepreneur with the tools they need to succeed in a digital-first economy."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { 
   Calculator, 
   Zap, 
   ShieldCheck, 
   Smartphone, 
   ArrowRight, 
   CheckCircle2
 } from 'lucide-react';
import { homeFaqs, features } from '@/data/home-content';
import { SEOContent } from '@/components/seo-content';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'VSNEXOS GST Calculator',
  'url': 'https://free-gst-calculator.vsnexos.com',
  'applicationCategory': 'FinanceApplication',
  'operatingSystem': 'Any',
  'description': 'Free professional GST calculator for India. Accurate and fast tax calculations.',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'INR'
  }
};

export default function HomePage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof f.answer === 'string' ? f.answer : String(f.answer),
      },
    })),
  };

  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 pb-8 md:pb-10">
      <Script
        id="ld-json-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-14 pb-10 md:pb-12 lg:pb-14 hero-gradient">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6 mb-6 md:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold"
            >
              <Zap size={16} />
              India’s #1 Free GST Calculator
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white"
            >
              Calculate GST with <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-cyan-500">
                Precision & Style.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              VSNEXOS brings you the most professional, accurate, and lightning-fast GST calculator. Built for businesses, freelancers, and individuals in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 pt-2 md:pt-4"
            >
              <Link href="/gst-calculator" className="btn-primary flex items-center gap-2 group">
                Start Calculating
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/gst-guide" className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                Read GST Guide
              </Link>
            </motion.div>
          </div>

          {/* Main Calculator Card *
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <GSTCalculator />
          </motion.div>*/}
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-5 md:p-7 glass-card rounded-4xl border-slate-200/50 dark:border-slate-800/50">
          {[
            { label: 'Calculations', value: '1M+' },
            { label: 'Accuracy', value: '100%' },
            { label: 'Users', value: '500k+' },
            { label: 'Cost', value: 'Free' },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Why choose VSNEXOS?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
             We&apos;ve built the ultimate GST tool with features that make your life easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-3xl glass-card border-slate-200/50 dark:border-slate-800/50 space-y-4 md:space-y-5"
            >
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {feature.icon === 'Zap' && <Zap size={28} />}
                {feature.icon === 'Target' && <ShieldCheck size={28} />}
                {feature.icon === 'Smartphone' && <Smartphone size={28} />}
                {feature.icon === 'Moon' && <Calculator size={28} />}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GST Slabs Section */}
      <section className="bg-slate-900 dark:bg-slate-950 py-10 md:py-12 lg:py-14 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Understand Indian <br />
                <span className="text-indigo-400">GST Slabs 2026</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                India follows a multi-tiered tax structure to ensure fair taxation across different categories of goods and services.
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  '0% - Essential items like food grains, milk, etc.',
                  '5% - Common use items like sugar, spices, tea.',
                  '12% - Standard rate for items like computers, processed food.',
                  '18% - Most goods and services like capital goods, industrial items.',
                  '28% - Luxury and demerit goods like cars, tobacco products.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/gst-guide" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                Learn more in our GST Guide <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[0, 5, 12, 18, 28, 3].map((rate) => (
                <div key={rate} className="p-5 md:p-6 bg-white/5 border border-white/10 rounded-3xl text-center group hover:bg-white/10 transition-all">
                  <p className="text-4xl font-black mb-2 text-indigo-400 group-hover:scale-110 transition-transform">{rate}%</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">GST Rate</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GST Resource Center - AdSense friendly high-quality content */}
      <section id="gst-resources" className="container mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          <SEOContent />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-linear-to-br from-indigo-600 to-cyan-600 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 lg:p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full -ml-48 -mb-48" />
          
          <div className="relative z-10 space-y-5 md:space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Ready to simplify your <br /> GST calculations?
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl">
              Join thousands of businesses who trust VSNEXOS for their daily tax calculations. Fast, free, and always accurate.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="/gst-calculator" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                Use Calculator Now
              </Link>
              <Link href="/contact" className="bg-indigo-700/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-700/50 transition-all">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

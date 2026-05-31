import React from 'react';
import { Metadata } from 'next';
import { Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Slabs India 2026 | Latest GST Rates & Categories',
  description: 'Complete guide to GST slabs in India (0%, 5%, 12%, 18%, 28%). Learn which products and services fall under each tax bracket for 2026.',
};

export default function GSTSlabsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <Tag size={16} />
            Updated for 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST Slabs in <span className="text-indigo-600">India</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive breakdown of all GST tax brackets, from essential commodities to luxury goods.
          </p>
        </section>

        <div className="space-y-12">
          {[
            {
              rate: '0% (Exempt)',
              title: 'Essential Goods & Services',
              desc: 'Items that are considered basic necessities for human survival are exempted from GST to keep them affordable for everyone.',
              items: ['Fresh fruits and vegetables', 'Milk, curd, and lassi', 'Unpacked food grains', 'Salt and Jaggery', 'Books and Newspapers', 'Health services by clinical establishments']
            },
            {
              rate: '5%',
              title: 'Mass Consumption Items',
              desc: 'Commonly used items that are not absolute essentials but are used by the majority of the population.',
              items: ['Sugar, spices, and tea', 'Edible oils', 'Life-saving drugs', 'Apparel below ₹1000', 'Footwear below ₹1000', 'Economy class air travel']
            },
            {
              rate: '12%',
              title: 'Standard Rate (Lower)',
              desc: 'Covers a wide range of processed foods and consumer durables.',
              items: ['Butter, cheese, and ghee', 'Dry fruits', 'Mobile phones', 'Business class air travel', 'Work contracts', 'Processed food items']
            },
            {
              rate: '18%',
              title: 'Standard Rate (Higher)',
              desc: 'The most common slab covering the majority of goods and professional services in India.',
              items: ['Capital goods and industrial intermediaries', 'Professional services (IT, Consulting)', 'Restaurants within hotels', 'Personal care items (Soaps, Hair oils)', 'Ice cream', 'Monitors and Printers']
            },
            {
              rate: '28%',
              title: 'Luxury & Sin Goods',
              desc: 'High-end luxury items and products that are considered harmful to health or society.',
              items: ['Luxury automobiles', 'Tobacco and Pan Masala', 'Aerated drinks', 'High-end electronics (ACs, Refrigerators)', 'Five-star hotel stays', 'Betting and Gambling']
            }
          ].map((slab) => (
            <div key={slab.rate} className="glass-card rounded-[2.5rem] p-8 md:p-12 space-y-8 overflow-hidden relative group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-6xl md:text-8xl font-black text-slate-100 dark:text-slate-900 group-hover:text-indigo-50 dark:group-hover:text-indigo-950/30 transition-colors">
                  {slab.rate.split(' ')[0]}
                </span>
              </div>
              
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{slab.title}</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">{slab.desc}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {slab.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Calculate GST Instantly</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Now that you know the rates, use our professional calculator to find the exact tax breakdown for your products or services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Go to Calculator
            </Link>
            <Link href="/gst-guide" className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Read Full Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

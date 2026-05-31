import React from 'react';
import { Metadata } from 'next';
import { HelpCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { homeFaqs } from '@/data/home-content';

export const metadata: Metadata = {
  title: 'GST FAQ India | Common GST Questions Answered - VSNEXOS',
  description: 'Find answers to your GST questions. Learn about registration, filing, tax slabs, formulas, CGST/SGST splits, and more.',
};

export default function GSTFAQPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <HelpCircle size={16} />
            Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST <span className="text-indigo-600">Frequently</span> Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Everything you need to know about GST in India, answered by experts.
          </p>
        </section>

        <div className="space-y-6">
          {homeFaqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-start gap-4">
                <span className="text-indigo-600">Q.</span>
                {faq.question}
              </h3>
              <div className="flex items-start gap-4">
                <span className="text-emerald-600 font-bold">A.</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          
          {/* Additional FAQs for content depth */}
          {[
            {
              q: "Can I revise a GST return once filed?",
              a: "Unlike Income Tax returns, GST returns (like GSTR-3B) cannot be revised. Any errors or omissions must be corrected in the return of the subsequent month/period."
            },
            {
              q: "What is the penalty for not registering for GST?",
              a: "If a business is required to register but fails to do so, a penalty of 10% of the tax amount due or ₹10,000, whichever is higher, can be imposed. For deliberate tax evasion, the penalty can be as high as 100% of the tax due."
            },
            {
              q: "Is GST applicable on export of goods?",
              a: "Exports are considered 'Zero Rated Supplies.' You can either export under a Letter of Undertaking (LUT) without paying IGST, or pay IGST and claim a refund later."
            },
            {
              q: "What is HSN code?",
              a: "HSN stands for Harmonized System of Nomenclature. it is an international 6-digit code system for classifying goods. India uses it to determine the GST rate for different products."
            }
          ].map((faq, index) => (
            <div key={`extra-${index}`} className="glass-card rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-start gap-4">
                <span className="text-indigo-600">Q.</span>
                {faq.q}
              </h3>
              <div className="flex items-start gap-4">
                <span className="text-emerald-600 font-bold">A.</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Still have more questions?</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Contact us at <a href="mailto:support@vsnexos.com" className="text-indigo-600 font-bold">support@vsnexos.com</a> and we&apos;ll be happy to help you.
          </p>
        </section>
      </div>
    </div>
  );
}

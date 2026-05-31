import React from 'react';
import { Metadata } from 'next';
import { UserPlus, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Registration Guide 2026 | Step-by-Step Process',
  description: 'Learn how to register for GST in India. Documents required, eligibility criteria, and a step-by-step guide to the online registration process.',
};

export default function GSTRegistrationGuidePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
            <UserPlus size={16} />
            Registration Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            GST <span className="text-indigo-600">Registration</span> Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Everything you need to know to get your GSTIN and start your business journey in India.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'PAN Card of the Business/Applicant',
              'Aadhaar Card of the Applicant',
              'Proof of Business Address (Electricity bill/Rent agreement)',
              'Bank Account Statement or Cancelled Cheque',
              'Digital Signature (for Companies/LLPs)',
              'Letter of Authorization for signatory'
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-4 p-6 glass-card rounded-2xl">
                <FileText className="text-indigo-600 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Step-by-Step Registration Process</h2>
          <div className="space-y-12">
            {[
              {
                step: '1',
                title: 'Generate TRN',
                desc: 'Visit the GST Portal and fill out Part A of Form GST REG-01 with your PAN, Mobile Number, and Email. You will receive a Temporary Reference Number (TRN).'
              },
              {
                step: '2',
                title: 'Submit Application',
                desc: 'Log in using your TRN and complete Part B of the application by uploading the required documents and business details.'
              },
              {
                step: '3',
                title: 'Verification',
                desc: 'An Application Reference Number (ARN) will be generated. The GST officer will verify your application and may ask for additional information if required.'
              },
              {
                step: '4',
                title: 'Receive GSTIN',
                desc: 'Once approved, you will receive your GST Identification Number (GSTIN) and a Registration Certificate in Form GST REG-06.'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-8 group">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-indigo-600 p-8 md:p-12 rounded-[2.5rem] text-white text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Start?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Once you have your GSTIN, use our professional calculator to manage your taxes with 100% accuracy.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-black shadow-xl hover:bg-indigo-50 transition-all">
            Open GST Calculator <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}

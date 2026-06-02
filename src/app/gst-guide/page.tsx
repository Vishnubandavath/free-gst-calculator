import React from 'react';
import { Metadata } from 'next';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ultimate GST Guide India | Everything You Need to Know',
  description: 'Learn about CGST, SGST, IGST, GST registration, filing, and the latest GST slabs in India. A comprehensive guide for businesses and individuals.',
};

export default function GSTGuidePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-bold">
          <BookOpen size={16} />
          Educational Resource
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
          The Ultimate <span className="text-indigo-600">GST Guide</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
           Master the concepts of Goods and Services Tax in India. From basic definitions to advanced compliance, we&apos;ve got you covered.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-24 h-fit space-y-6">
          <div className="p-6 glass-card rounded-3xl space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">On This Page</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'What is GST?', href: '#what-is-gst' },
                { name: 'Types of GST', href: '#types-of-gst' },
                { name: 'GST Slabs 2026', href: '#gst-slabs' },
                { name: 'GST Registration', href: '#gst-registration' },
                { name: 'Input Tax Credit', href: '#itc' },
                { name: 'GST Filing', href: '#gst-filing' }
              ].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="p-6 bg-indigo-600 rounded-3xl text-white space-y-4">
            <h4 className="font-bold">Need a Calculation?</h4>
            <p className="text-sm text-indigo-100">Use our professional tool for 100% accurate results.</p>
            <Link href="/gst-calculator" className="flex items-center justify-center gap-2 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all">
              Try Calculator <ArrowRight size={16} />
            </Link>
          </div>
        </aside>

        {/* Article Content */}
        <div className="lg:col-span-9 space-y-24">
          {/* Section 1 */}
          <section id="what-is-gst" className="space-y-8 scroll-mt-24">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">What is GST?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                 The Goods and Services Tax (GST) is a comprehensive, multi-stage, destination-based tax that is levied on every value addition in India. Launched on July 1, 2017, it replaced almost all other indirect taxes like VAT, Service Tax, and Excise Duty, creating a &quot;One Nation, One Tax&quot; system.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-indigo-600 mb-2">Comprehensive</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">It subsumed several central and state taxes under one umbrella.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-indigo-600 mb-2">Multi-stage</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Levied at every point of the supply chain, from manufacturer to consumer.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="types-of-gst" className="space-y-8 scroll-mt-24">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Types of GST in India</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                To manage tax distribution between the Central and State governments, GST is divided into four components:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'CGST', full: 'Central GST', desc: 'Collected by the Central Government on an intra-state sale (e.g., within Maharashtra).' },
                { title: 'SGST', full: 'State GST', desc: 'Collected by the State Government on an intra-state sale (e.g., within Karnataka).' },
                { title: 'IGST', full: 'Integrated GST', desc: 'Collected by the Central Government for inter-state transactions (e.g., Maharashtra to Gujarat).' },
                { title: 'UTGST', full: 'Union Territory GST', desc: 'Collected by the Union Territory Government on transactions within UTs.' }
              ].map((type) => (
                <div key={type.title} className="p-8 glass-card rounded-3xl space-y-4">
                  <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-black uppercase">
                    {type.title}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{type.full}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="gst-slabs" className="space-y-8 scroll-mt-24">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">GST Slabs 2026</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                The Indian government has categorized goods and services into five major tax brackets:
              </p>
            </div>
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap md:whitespace-normal">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr className="text-slate-500 text-xs font-bold uppercase">
                      <th className="px-6 py-4">Rate</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {[
                      { rate: '0%', cat: 'Exempted', ex: 'Milk, Bread, Eggs, Fresh Vegetables' },
                      { rate: '5%', cat: 'Necessities', ex: 'Tea, Coffee, Spices, Sugar' },
                      { rate: '12%', cat: 'Standard I', ex: 'Butter, Cheese, Ghee, Cell phones' },
                      { rate: '18%', cat: 'Standard II', ex: 'Capital Goods, Industrial Items' },
                      { rate: '28%', cat: 'Luxury', ex: 'Automobiles, High-end electronics' }
                    ].map((row) => (
                      <tr key={row.rate} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 font-black text-indigo-600">{row.rate}</td>
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.cat}</td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="gst-registration" className="space-y-8 scroll-mt-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">GST Registration</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Businesses with a turnover exceeding the threshold limit must register for GST. Currently, the limits are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-800 rounded-3xl">
                  <h4 className="text-2xl font-black text-emerald-600 mb-2">₹40 Lakhs</h4>
                  <p className="text-slate-600 dark:text-slate-400">For suppliers of goods (₹20 Lakhs for special category states).</p>
                </div>
                <div className="p-8 bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-800 rounded-3xl">
                  <h4 className="text-2xl font-black text-cyan-600 mb-2">₹20 Lakhs</h4>
                  <p className="text-slate-600 dark:text-slate-400">For service providers (₹10 Lakhs for special category states).</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 text-center space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Still have questions?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our FAQ page covers over 40+ common questions about GST, filing, and compliance in India.
            </p>
            <Link href="/gst-faq" className="btn-primary inline-flex items-center gap-2">
              Visit FAQ Page <ArrowRight size={20} />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

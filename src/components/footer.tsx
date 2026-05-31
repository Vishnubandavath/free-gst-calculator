'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaThreads, FaEnvelope } from "react-icons/fa6";

const footerLinks = {
  product: [
    { name: 'Home', href: '/' },
    { name: 'GST Calculator', href: '/gst-calculator' },
    { name: 'Advanced GST', href: '/advanced-gst-calculator' },
    { name: 'GST Guide', href: '/gst-guide' },
  ],
  resources: [
    { name: 'GST Slabs India', href: '/gst-slabs-india' },
    { name: 'Inclusive Formula', href: '/gst-inclusive-formula' },
    { name: 'Exclusive Formula', href: '/gst-exclusive-formula' },
    { name: 'Registration Guide', href: '/gst-registration-guide' },
  ],
  support: [
    { name: 'FAQ', href: '/gst-faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Indexing Status', href: '/indexing-status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

export function Footer() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
                <Calculator size={22} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">
                  VSNEXOS
                </span>
                <span className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mt-1 leading-none">
                  VSNEXOS GST CALCULATOR
                </span>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              India’s most professional and free GST calculator. Helping businesses and individuals calculate GST with precision and ease.
            </p>
            <div className="flex gap-4">
              <Link href="/redirect/instagram" target="_blank" rel="noopener noreferrer" aria-label="Follow VSNEXOS on Instagram" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 transition-transform transform hover:-translate-y-0.5">
                <FaInstagram size={18} />
              </Link>
              <Link href="/redirect/threads" target="_blank" rel="noopener noreferrer" aria-label="Follow VSNEXOS on Threads" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 transition-transform transform hover:-translate-y-0.5">
                <FaThreads size={18} />
              </Link>
              <Link href="/redirect/linkedin" target="_blank" rel="noopener noreferrer" aria-label="Connect with VSNEXOS on LinkedIn" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 transition-transform transform hover:-translate-y-0.5">
                <FaLinkedin size={18} />
              </Link>
              <Link href="/redirect/email" target="_blank" rel="noopener noreferrer" aria-label="Email VSNEXOS" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 transition-transform transform hover:-translate-y-0.5">
                <FaEnvelope size={18} />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Support</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {mounted ? currentYear : '2026'} VSNEXOS. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>Powered by VSNEXOS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

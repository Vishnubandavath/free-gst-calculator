'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaThreads, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500', href: '/redirect/instagram' },
  { icon: FaThreads, label: 'Threads', color: 'hover:text-gray-900', href: '/redirect/threads' },
  { icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-700', href: '/redirect/linkedin' },
  { icon: FaEnvelope, label: 'Email', color: 'hover:text-indigo-600', href: '/redirect/email' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 max-w-6xl mx-auto items-start">
        <div className="glass-card rounded-[2.5rem] p-6 md:p-8 lg:p-10 space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/40 px-4 py-2 text-sm font-bold text-indigo-600 dark:text-indigo-300">
              <Sparkles size={16} />
              Contact VSNEXOS
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight">
                Let&apos;s <span className="text-indigo-600">Connect</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Have feedback, spotted an issue, or want to suggest a new GST tool improvement? Send us a message and we&apos;ll route it to the right team quickly.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-600 text-white p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-100 mb-2">Primary Contact</p>
            <p className="text-xl font-black break-all">business@vsnexos.com</p>
            <p className="text-sm text-indigo-100 mt-3 leading-relaxed">
              Include a short subject and the page or tool you&apos;re referring to so we can prioritize your message faster.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Follow Us</h2>
              <p className="text-slate-500">Stay close to product updates and new GST resources.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 px-4 py-4 text-center font-bold text-slate-600 dark:text-slate-400 transition-all ${social.color}`}
                >
                  <social.icon size={20} />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2.5rem] p-6 md:p-8 lg:p-10 space-y-8">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-indigo-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a message</h2>
                <p className="text-slate-500">Share the details below and we&apos;ll reply as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                    <input required type="text" placeholder="John Doe" className="input-field w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                    <input required type="email" placeholder="john@example.com" className="input-field w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                  <input required type="text" placeholder="How can we help?" className="input-field w-full" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea required rows={6} placeholder="Your message here..." className="input-field w-full resize-none"></textarea>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

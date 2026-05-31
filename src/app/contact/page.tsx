'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaThreads, FaEnvelope } from "react-icons/fa6";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
          Let’s <span className="text-indigo-600">Connect</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Have feedback, a feature request, or just want to say hi? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-8">
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
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a message</h3>
                 <p className="text-slate-500">We&apos;ll get back to you within 24-48 hours.</p>
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
                  <textarea required rows={5} placeholder="Your message here..." className="input-field w-full resize-none"></textarea>
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

        {/* Contact Info */}
        <div className="space-y-8 py-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-6 glass-card rounded-2xl border-slate-200/50 dark:border-slate-800/50 group hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">business@vsnexos.com</p>
                </div>
              </div>

          
              <div className="flex items-center gap-4 p-6 glass-card rounded-2xl border-slate-200/50 dark:border-slate-800/50 group hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Business Inquiries</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">business@vsnexos.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Follow Us</h3>
           <div className="flex flex-wrap gap-4">
               {[
                 { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500', href: '/redirect/instagram' },
                 { icon: FaThreads, label: 'Threads', color: 'hover:text-gray-900', href: '/redirect/threads' },
                 { icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-700', href: '/redirect/linkedin' },
                 { icon: FaEnvelope, label: 'Email', color: 'hover:text-indigo-600', href: '/redirect/email' },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`flex items-center gap-2 px-6 py-3 glass-card rounded-xl font-bold text-slate-600 dark:text-slate-400 transition-all ${social.color}`}
                 >
                   <social.icon size={20} />
                   {social.label}
                 </a>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

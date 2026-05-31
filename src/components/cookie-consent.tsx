'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Settings, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('vsnexos-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPrefs = JSON.parse(consent);
      setPreferences(savedPrefs);
      applyConsent(savedPrefs);
    }
  }, []);

  const applyConsent = (prefs: typeof preferences) => {
    // Google Consent Mode v2 placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_user_data': prefs.marketing ? 'granted' : 'denied',
        'ad_personalization': prefs.marketing ? 'granted' : 'denied',
      });
    }
    console.log('Consent applied:', prefs);
  };

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('vsnexos-cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    applyConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const allRejected = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('vsnexos-cookie-consent', JSON.stringify(allRejected));
    setPreferences(allRejected);
    applyConsent(allRejected);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('vsnexos-cookie-consent', JSON.stringify(preferences));
    applyConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] max-w-4xl mx-auto"
        >
          <div className="glass-card p-6 md:p-8 rounded-[2.5rem] shadow-2xl border-indigo-500/20 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-indigo-600/10 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={32} />
            </div>
            
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">We value your privacy</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Settings size={18} /> Customize
              </button>
              <button 
                onClick={handleRejectAll}
                className="px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                Reject All
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/40 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card w-full max-w-lg rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-2xl font-black">Cookie Settings</h3>
              <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              {[
                { id: 'essential', title: 'Essential Cookies', desc: 'Required for the website to function properly.', required: true },
                { id: 'analytics', title: 'Analytics Cookies', desc: 'Help us understand how visitors interact with the website.', required: false },
                { id: 'marketing', title: 'Marketing Cookies', desc: 'Used to track visitors across websites to show relevant ads.', required: false },
              ].map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <button
                    disabled={item.required}
                    onClick={() => setPreferences(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof preferences] }))}
                    className={cn(
                      "w-12 h-6 rounded-full relative transition-colors",
                      preferences[item.id as keyof typeof preferences] ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-800",
                      item.required && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className={cn(
                      "absolute top-1 w-4 h-4 bg-white rounded-full transition-transform",
                      preferences[item.id as keyof typeof preferences] ? "translate-x-7" : "translate-x-1"
                    )} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/50 flex gap-4">
              <button 
                onClick={() => setShowSettings(false)}
                className="flex-1 py-4 font-bold text-slate-600"
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePreferences}
                className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

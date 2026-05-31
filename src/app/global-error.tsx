'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center font-sans antialiased p-4">
        <div className="bg-slate-900 border border-slate-800 max-w-md w-full p-8 md:p-10 rounded-[2.5rem] border-red-500/20 text-center space-y-8 shadow-2xl">
          <div className="w-20 h-20 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mx-auto">
            <AlertTriangle size={42} />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Critical Error!
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              A critical application error occurred. Please try reloading.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            <RefreshCw size={18} />
            Reset Application
          </button>
        </div>
      </body>
    </html>
  );
}

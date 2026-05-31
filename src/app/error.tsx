'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-24 flex items-center justify-center min-h-[60vh]">
      <div className="glass-card max-w-md w-full p-8 md:p-10 rounded-[2.5rem] border-red-500/20 text-center space-y-8 shadow-2xl">
        <div className="w-20 h-20 bg-red-600/10 text-red-500 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
          <AlertTriangle size={42} />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Something went wrong!
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            An unexpected runtime error occurred. Please try reloading the page.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-slate-900 text-slate-100 rounded-2xl font-bold hover:bg-slate-800 transition-all border border-slate-800 active:scale-95"
          >
            <Home size={18} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

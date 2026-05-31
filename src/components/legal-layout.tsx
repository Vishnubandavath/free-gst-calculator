import React from 'react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="space-y-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{title}</h1>
        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          Last Updated: {lastUpdated}
        </div>
      </div>
      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-black prose-h2:text-2xl prose-h2:mt-12 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-400">
        {children}
      </div>
    </div>
  );
}

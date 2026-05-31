'use client';

import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { ArrowRightLeft, Calculator } from 'lucide-react';
import { calculateGST, formatCurrency } from '@/lib/gst-logic';
import { cn } from '@/lib/utils';
import { GST_RATES } from '@/lib/config';

interface ArticleRendererProps {
  contentHtml: string;
}

export function ArticleRenderer({ contentHtml }: ArticleRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [portalContainers, setPortalContainers] = useState<Element[]>([]);

  // 1. Dynamic Widget Mounting via Portals
  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const elements = Array.from(containerRef.current.querySelectorAll('[data-widget="mini-calculator"]'));
      setPortalContainers(elements);
    }
  }, [contentHtml]);

  // 2. Client-side Navigation Click Interception
  useEffect(() => {
    if (!containerRef.current) return;

    const handleLinkClick = (e: MouseEvent) => {
      // Find the closest anchor tag in case of nested elements
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');

      // Check if it is an internal link (e.g. starts with '/' and not absolute URL '//')
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        router.push(href);
      }
    };

    const container = containerRef.current;
    container.addEventListener('click', handleLinkClick);

    return () => {
      container.removeEventListener('click', handleLinkClick);
    };
  }, [contentHtml, router]);

  return (
    <>
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        className="prose prose-slate dark:prose-invert max-w-none 
          prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-base
          prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
          prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
          prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:font-bold hover:prose-a:underline
          prose-table:w-full prose-table:border-collapse prose-table:my-8
          prose-th:bg-slate-100 dark:prose-th:bg-slate-900 prose-th:px-4 prose-th:py-3 prose-th:font-bold prose-th:text-xs prose-th:uppercase prose-th:text-slate-500
          prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-100 dark:prose-td:border-slate-800 prose-td:text-sm"
      />
      {portalContainers.map((container, idx) =>
        createPortal(<MiniGSTCalculator key={idx} />, container)
      )}
    </>
  );
}

// Sleek interactive inline GST calculator widget
function MiniGSTCalculator() {
  const [amount, setAmount] = useState<number | string>(1000);
  const [rate, setRate] = useState<number>(18);
  const [type, setType] = useState<'inclusive' | 'exclusive'>('exclusive');
  const [isInterState, setIsInterState] = useState<boolean>(false);

  const numAmount = typeof amount === 'string' ? parseFloat(amount) || 0 : amount;
  const result = calculateGST(numAmount, rate, type, isInterState);

  return (
    <div className="my-8 no-print glass-card border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 bg-slate-50/20 dark:bg-slate-950/20 shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-900 pb-4">
        <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
          <Calculator size={18} />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 leading-none">Interactive GST Calculator</h4>
          <span className="text-[10px] text-slate-500 font-semibold m-0 uppercase tracking-wider">Quick Calculation Tool</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* Amount field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-400">Amount (₹)</label>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 dark:text-white font-medium"
            />
          </div>

          {/* Tax Slabs dropdown */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-400">GST Slab</label>
            <select
              value={rate}
              onChange={(e) => setRate(parseInt(e.target.value))}
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900 dark:text-white font-medium"
            >
              {GST_RATES.map((r) => (
                <option key={r} value={r}>
                  {r}% GST
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {/* Toggle Type */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-400">Tax Type</label>
            <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-900">
              <button
                type="button"
                onClick={() => setType('exclusive')}
                className={cn(
                  "py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                  type === 'exclusive' ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-slate-500 hover:text-slate-800"
                )}
              >
                Exclusive
              </button>
              <button
                type="button"
                onClick={() => setType('inclusive')}
                className={cn(
                  "py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                  type === 'inclusive' ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm" : "text-slate-500 hover:text-slate-800"
                )}
              >
                Inclusive
              </button>
            </div>
          </div>

          {/* Inter-State checkbox */}
          <div className="flex items-center justify-between p-3.5 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-100/80 dark:border-slate-900">
            <div className="flex items-center gap-2">
              <ArrowRightLeft size={14} className="text-indigo-500" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">Inter-State (IGST)?</span>
            </div>
            <input
              type="checkbox"
              checked={isInterState}
              onChange={(e) => setIsInterState(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Results summary block */}
      <div className="p-4 bg-slate-900/40 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">Net Amount</p>
          <p className="text-sm font-bold text-slate-800 dark:text-white">{formatCurrency(result.netAmount)}</p>
        </div>
        {!isInterState ? (
          <>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">CGST</p>
              <p className="text-sm font-bold text-slate-800 dark:text-white">{formatCurrency(result.cgst)}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">SGST</p>
              <p className="text-sm font-bold text-slate-800 dark:text-white">{formatCurrency(result.sgst)}</p>
            </div>
          </>
        ) : (
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-0.5">IGST (Interstate)</p>
            <p className="text-sm font-bold text-slate-800 dark:text-white">{formatCurrency(result.igst)}</p>
          </div>
        )}
        <div className={cn(isInterState && "col-span-2")}>
          <p className="text-[10px] text-indigo-500 uppercase tracking-widest font-black mb-0.5">Grand Total</p>
          <p className="text-sm font-black text-indigo-600 dark:text-indigo-400">{formatCurrency(result.totalAmount)}</p>
        </div>
      </div>
    </div>
  );
}

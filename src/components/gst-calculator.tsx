'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Copy, RefreshCw, Share2, Download, Check, Info, ArrowRightLeft } from 'lucide-react';
import { calculateGST, formatCurrency, formatNumber } from '@/lib/gst-logic';
import { cn } from '@/lib/utils';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

const GST_RATES = [0, 3, 5, 12, 18, 28];

const generateReportId = () => {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `GST-${dateStr}-${random}`;
};

export function GSTCalculator() {
  const [amount, setAmount] = useState<string>('');
  const [rate, setRate] = useState<number>(18);
  const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [isInterState, setIsInterState] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [reportId, setReportId] = useState<string>('');
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setReportId(generateReportId());
  }, []);

  const result = calculateGST(parseFloat(amount) || 0, rate, type, isInterState);

  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return;

    try {
      const element = pdfRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      const now = new Date();
      const timestamp = now.toISOString().slice(0, 16).replace(/[:T]/g, '-');
      pdf.save(`gst-report-${timestamp}.pdf`);
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleCopy = () => {
    const text = `GST Calculation Result:
Net Amount: ${formatCurrency(result.netAmount)}
GST Rate: ${rate}%
GST Amount: ${formatCurrency(result.gstAmount)}
Total Amount: ${formatCurrency(result.totalAmount)}
Calculated via VSNEXOS GST Calculator`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4f46e5', '#06b6d4', '#10b981']
    });
  };

  const handlePrint = () => {
    const originalTitle = document.title;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    document.title = `gst-calculation-${timestamp}`;
    window.print();
    document.title = originalTitle;
  };

  const handleShare = async () => {
    const text = `GST Calculation Result:
Net Amount: ${formatCurrency(result.netAmount)}
GST Rate: ${rate}%
GST Amount: ${formatCurrency(result.gstAmount)}
Total Amount: ${formatCurrency(result.totalAmount)}
Calculated via VSNEXOS GST Calculator`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'GST Calculation Result',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopy();
    }
  };

  const reset = () => {
    setAmount('');
    setRate(18);
    setType('exclusive');
    setIsInterState(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Input Panel */}
      <div className="lg:col-span-7 space-y-6">
        <div className="glass-card rounded-3xl p-6 md:p-8 space-y-8">
          {/* Calculation Type Toggle */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button
              onClick={() => setType('exclusive')}
              aria-label="Switch to GST Exclusive calculation"
              className={cn(
                'flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300',
                type === 'exclusive'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              )}
            >
              GST Exclusive (Add GST)
            </button>
            <button
              onClick={() => setType('inclusive')}
              aria-label="Switch to GST Inclusive calculation"
              className={cn(
                'flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300',
                type === 'inclusive'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              )}
            >
              GST Inclusive (Remove GST)
            </button>
          </div>

          {/* Amount Input */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              Amount (₹)
              <span className="text-xs font-normal text-slate-400">(Enter total amount)</span>
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <span className="text-xl font-medium">₹</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-4 py-4 text-2xl font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                aria-label="Enter amount to calculate GST"
              />
            </div>
          </div>

          {/* GST Rates */}
          <div className="space-y-4">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">GST Rate (%)</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {GST_RATES.map((r) => (
                <button
                  key={r}
                  onClick={() => setRate(r)}
                  aria-label={`Select ${r} percent GST rate`}
                  className={cn(
                    'py-3 rounded-xl text-sm font-bold border transition-all duration-300',
                    rate === r
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-500 hover:text-indigo-500'
                  )}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>

          {/* Transaction Type */}
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                <ArrowRightLeft size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Inter-State Transaction?</p>
                <p className="text-xs text-slate-500">(Uses IGST instead of CGST+SGST)</p>
              </div>
            </div>
            <button
              onClick={() => setIsInterState(!isInterState)}
              className={cn(
                'w-14 h-8 rounded-full relative transition-colors duration-300',
                isInterState ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'
              )}
            >
              <motion.div
                animate={{ x: isInterState ? 26 : 4 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800"
            >
              <RefreshCw size={20} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Result Panel */}
      <div className="lg:col-span-5">
        <div className="bg-indigo-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl shadow-indigo-500/40 sticky top-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold flex items-center gap-2 opacity-90">
              <Calculator size={20} />
              Calculation Summary
            </h3>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">
              Live Update
            </div>
          </div>

          <div className="space-y-6">
            <div className="pb-6 border-b border-white/10">
              <p className="text-indigo-100 text-sm font-medium mb-1">
                {type === 'exclusive' ? 'Net Amount (Exclusive)' : 'Net Amount (Base)'}
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                {formatCurrency(result.netAmount)}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-indigo-100 text-xs font-medium mb-1">
                  {isInterState ? 'IGST' : 'CGST'} ({isInterState ? rate : rate / 2}%)
                </p>
                <p className="text-xl font-bold">
                  {formatCurrency(isInterState ? result.igst : result.cgst)}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-indigo-100 text-xs font-medium mb-1">
                  {isInterState ? 'UTGST' : 'SGST'} ({isInterState ? '0' : rate / 2}%)
                </p>
                <p className="text-xl font-bold">
                  {formatCurrency(isInterState ? 0 : result.sgst)}
                </p>
              </div>
            </div>

            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
              <div className="flex items-center justify-between mb-1">
                <p className="text-indigo-100 text-sm font-medium">Total GST Amount</p>
                <p className="bg-emerald-400 text-indigo-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +{rate}%
                </p>
              </div>
              <p className="text-2xl font-bold">{formatCurrency(result.gstAmount)}</p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-indigo-100 text-sm font-medium mb-1">Total Amount (Inclusive)</p>
              <h2 className="text-4xl font-black tracking-tight text-white">
                {formatCurrency(result.totalAmount)}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
              >
                <Download size={18} />
                Download PDF
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
              >
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional PDF Report Template (Hidden from UI) */}
      <div className="fixed left-[-9999px] top-0">
        <div 
          ref={pdfRef}
          className="w-[210mm] min-h-[297mm] p-[20mm] bg-white text-slate-900 font-sans"
          style={{ boxSizing: 'border-box' }}
        >
          {/* PDF Header */}
          <div className="text-center space-y-2 mb-12 border-b-2 border-slate-100 pb-8">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">VSNEXOS</h1>
            <p className="text-xl font-bold text-indigo-600 uppercase tracking-widest">GST Calculator India</p>
            <p className="text-sm font-medium text-slate-500">Professional GST Calculation Report</p>
            
            <div className="flex justify-between items-end mt-8 pt-4">
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Report ID</p>
                <p className="text-sm font-bold text-slate-900">{reportId}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generated On</p>
                <p className="text-sm font-bold text-slate-900">
                  {mounted ? new Date().toLocaleString('en-IN', { 
                    day: '2-digit', 
                    month: 'short', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  }) : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Report Summary Card */}
          <div className="bg-slate-50 rounded-3xl p-8 mb-10 border border-slate-100">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Calculation Summary</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Calculation Type</p>
                <p className="text-lg font-bold text-slate-900 capitalize">GST {type} (Indian Slabs)</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">GST Rate</p>
                <p className="text-lg font-bold text-slate-900">{rate}%</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Input Amount</p>
                <p className="text-lg font-bold text-slate-900">{formatCurrency(parseFloat(amount) || 0)}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Final Amount</p>
                <p className="text-lg font-bold text-indigo-600">{formatCurrency(result.totalAmount)}</p>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown Table */}
          <div className="mb-12">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Detailed Breakdown</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="text-left py-4 text-sm font-black uppercase tracking-widest">Description</th>
                  <th className="text-right py-4 text-sm font-black uppercase tracking-widest">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 text-slate-600 font-medium">Base Amount (Net)</td>
                  <td className="py-4 text-right font-bold text-slate-900">{formatCurrency(result.netAmount)}</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600 font-medium">GST Rate</td>
                  <td className="py-4 text-right font-bold text-slate-900">{rate}%</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600 font-medium">{isInterState ? 'IGST' : 'CGST'} ({isInterState ? rate : rate/2}%)</td>
                  <td className="py-4 text-right font-bold text-slate-900">{formatCurrency(isInterState ? result.igst : result.cgst)}</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600 font-medium">{isInterState ? 'UTGST' : 'SGST'} ({isInterState ? 0 : rate/2}%)</td>
                  <td className="py-4 text-right font-bold text-slate-900">{formatCurrency(isInterState ? 0 : result.sgst)}</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="py-4 px-4 text-slate-900 font-black">Total GST Amount</td>
                  <td className="py-4 px-4 text-right font-black text-slate-900">{formatCurrency(result.gstAmount)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Result Highlight */}
          <div className="bg-indigo-600 rounded-3xl p-10 text-white flex justify-between items-center shadow-xl shadow-indigo-200">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-100 mb-1">Total Payable</p>
              <h2 className="text-5xl font-black tracking-tight">{formatCurrency(result.totalAmount)}</h2>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">
                <Check size={14} /> Verified Calculation
              </div>
            </div>
          </div>

          {/* PDF Footer */}
          <div className="mt-20 pt-12 border-t border-slate-100 text-center space-y-4">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              Generated by VSNEXOS GST Calculator
            </p>
            <p className="text-sm font-bold text-indigo-600">free-gst-calculator.vsnexos.com</p>
            <p className="text-[10px] text-slate-300 max-w-md mx-auto leading-relaxed">
              Disclaimer: This report is for estimation purposes only. VSNEXOS is not responsible for any legal or financial discrepancies. Please consult with a tax professional for official filings.
            </p>
            <p className="text-[10px] text-slate-200 mt-8">
              © {mounted ? new Date().getFullYear() : '2026'} VSNEXOS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

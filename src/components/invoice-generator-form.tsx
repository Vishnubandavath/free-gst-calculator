'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus, Trash2, Download, RefreshCw, FileText, AlertTriangle, ArrowRightLeft } from 'lucide-react';
import { calculateLineItem, formatCurrency } from '@/lib/gst-logic';
import { cn } from '@/lib/utils';
import { GST_RATES } from '@/lib/config';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  gstRate: number;
}

interface InvoiceFormData {
  sellerName: string;
  sellerAddress: string;
  sellerGSTIN: string;
  buyerName: string;
  buyerAddress: string;
  buyerGSTIN: string;
  invoiceNumber: string;
  invoiceDate: string;
  isInterState: boolean;
  items: InvoiceItem[];
}

export function InvoiceGeneratorForm() {
  const [mounted, setMounted] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm<InvoiceFormData>({
    defaultValues: {
      sellerName: '',
      sellerAddress: '',
      sellerGSTIN: '',
      buyerName: '',
      buyerAddress: '',
      buyerGSTIN: '',
      invoiceNumber: '',
      invoiceDate: new Date().toISOString().slice(0, 10),
      isInterState: false,
      items: [{ name: '', quantity: 1, price: 0, gstRate: 18 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const watchItems = watch('items');
  const watchIsInterState = watch('isInterState');

  // Perform real-time calculations
  const calculateTotals = () => {
    if (!watchItems) {
      return { taxableAmount: 0, gstAmount: 0, cgst: 0, sgst: 0, igst: 0, grandTotal: 0 };
    }
    return watchItems.reduce(
      (
        acc: {
          taxableAmount: number;
          gstAmount: number;
          cgst: number;
          sgst: number;
          igst: number;
          grandTotal: number;
        },
        item: InvoiceItem
      ) => {
        // Enforce safe parsing of potentially raw string values from input fields
        const qty = Math.max(0, Number(item.quantity) || 0);
        const prc = Math.max(0, Number(item.price) || 0);
        const rate = Number(item.gstRate) || 0;

        const line = calculateLineItem({ quantity: qty, price: prc, gstRate: rate }, watchIsInterState);

        return {
          taxableAmount: acc.taxableAmount + line.taxableAmount,
          gstAmount: acc.gstAmount + line.gstAmount,
          cgst: acc.cgst + line.cgst,
          sgst: acc.sgst + line.sgst,
          igst: acc.igst + line.igst,
          grandTotal: acc.grandTotal + line.total,
        };
      },
      { taxableAmount: 0, gstAmount: 0, cgst: 0, sgst: 0, igst: 0, grandTotal: 0 }
    );
  };

  const totals = calculateTotals();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return;

    try {
      const element = pdfRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#020617', // Match dark theme page color
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      const invoiceNum = getValues('invoiceNumber') || 'draft';
      pdf.save(`invoice-${invoiceNum}.pdf`);

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#06b6d4', '#10b981'],
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const onSubmit = () => {
    // Validations passed, trigger PDF download or print automatically
    handleDownloadPDF();
  };

  const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  return (
    <div className="space-y-8">
      {/* Editor Panel (Hidden on print) */}
      <form onSubmit={handleSubmit(onSubmit)} className="no-print space-y-8">
        <div className="glass-card rounded-[2.5rem] p-6 md:p-10 border-slate-200/50 dark:border-slate-800/50 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="text-indigo-600" size={24} />
              Invoice Editor
            </h3>
            <button
              type="button"
              onClick={() => reset()}
              className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
              title="Reset Invoice"
            >
              <RefreshCw size={20} />
            </button>
          </div>

          {/* Invoice Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Invoice Number*</label>
              <input
                type="text"
                {...register('invoiceNumber', { required: 'Invoice Number is required' })}
                placeholder="INV-2026-001"
                className={cn(
                  "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2",
                  errors.invoiceNumber
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500"
                )}
              />
              {errors.invoiceNumber && (
                <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> {errors.invoiceNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Invoice Date*</label>
              <input
                type="date"
                {...register('invoiceDate', { required: 'Invoice Date is required' })}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                  <ArrowRightLeft size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Inter-State (IGST)?</p>
                  <p className="text-[10px] text-slate-500">Enable if buyer is outside your state</p>
                </div>
              </div>
              <input
                type="checkbox"
                {...register('isInterState')}
                className="w-12 h-6 rounded-full relative bg-slate-200 dark:bg-slate-800 appearance-none cursor-pointer after:absolute after:top-1 after:left-1 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all checked:bg-indigo-600 checked:after:translate-x-6"
              />
            </div>
          </div>

          {/* Seller & Buyer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Seller */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-3">Seller (Your Details)</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Business Name*</label>
                  <input
                    type="text"
                    {...register('sellerName', { required: 'Seller Name is required' })}
                    placeholder="Acme Corporates"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2",
                      errors.sellerName ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.sellerName && (
                    <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> {errors.sellerName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Business Address</label>
                  <textarea
                    rows={2}
                    {...register('sellerAddress')}
                    placeholder="123 Industrial Area, Phase II"
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Seller GSTIN</label>
                  <input
                    type="text"
                    {...register('sellerGSTIN', {
                      pattern: {
                        value: gstinRegex,
                        message: 'Invalid GSTIN format',
                      },
                    })}
                    placeholder="07AAAAA1111A1Z1"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 uppercase",
                      errors.sellerGSTIN ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.sellerGSTIN && (
                    <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> {errors.sellerGSTIN.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Buyer */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-3">Buyer (Recipient Details)</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Client Name*</label>
                  <input
                    type="text"
                    {...register('buyerName', { required: 'Buyer Name is required' })}
                    placeholder="Retail Client Ltd"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2",
                      errors.buyerName ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.buyerName && (
                    <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> {errors.buyerName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Client Address</label>
                  <textarea
                    rows={2}
                    {...register('buyerAddress')}
                    placeholder="456 Tech Park, Ring Road"
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Buyer GSTIN</label>
                  <input
                    type="text"
                    {...register('buyerGSTIN', {
                      pattern: {
                        value: gstinRegex,
                        message: 'Invalid GSTIN format',
                      },
                    })}
                    placeholder="07BBBBB2222B2Z2"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 uppercase",
                      errors.buyerGSTIN ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.buyerGSTIN && (
                    <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> {errors.buyerGSTIN.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-3">Invoice Items</h4>
              <button
                type="button"
                onClick={() => append({ name: '', quantity: 1, price: 0, gstRate: 18 })}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg"
              >
                <Plus size={14} /> Add Item
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="px-4 py-3">Description*</th>
                    <th className="px-4 py-3 w-24">Qty*</th>
                    <th className="px-4 py-3 w-32">Price (₹)*</th>
                    <th className="px-4 py-3 w-28">GST %</th>
                    <th className="px-4 py-3 w-28 text-right">Line Total (₹)</th>
                    <th className="px-4 py-3 w-12"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {fields.map((field, index: number) => {
                    const item = (watchItems && watchItems[index]) || { quantity: 0, price: 0, gstRate: 18 };
                    const line = calculateLineItem(
                      { quantity: Number(item.quantity) || 0, price: Number(item.price) || 0, gstRate: Number(item.gstRate) || 0 },
                      watchIsInterState
                    );

                    return (
                      <tr key={field.id} className="hover:bg-slate-50/20 dark:hover:bg-slate-900/20 transition-colors">
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            placeholder="Software Consultation"
                            {...register(`items.${index}.name` as const, { required: 'Required' })}
                            className={cn(
                              "w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium",
                              errors.items?.[index]?.name && "placeholder-red-400 text-red-500"
                            )}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            step="any"
                            min="0.001"
                            {...register(`items.${index}.quantity` as const, { required: true, min: 0.001 })}
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-500/20"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            step="any"
                            min="0.01"
                            {...register(`items.${index}.price` as const, { required: true, min: 0.01 })}
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-500/20"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <select
                            {...register(`items.${index}.gstRate` as const, { valueAsNumber: true })}
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-xs focus:ring-1"
                          >
                            {GST_RATES.map((r) => (
                              <option key={r} value={r}>{r}%</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900 dark:text-white text-sm">
                          {formatCurrency(line.total)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            type="button"
                            disabled={fields.length === 1}
                            onClick={() => remove(index)}
                            className="p-1.5 text-slate-300 hover:text-red-500 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {errors.items && (
              <p className="text-xs text-red-500 flex items-center gap-1"><AlertTriangle size={12} /> Please fill in descriptions and valid quantities/prices for all items.</p>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
            >
              Print Invoice
            </button>
            <button
              type="submit"
              className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={20} /> Download PDF Invoice
            </button>
          </div>
        </div>
      </form>

      {/* Invoice Output Template (Rendered offscreen or scaled, visible on print only) */}
      <div className="fixed left-[-2499.75px] top-0 print:relative print:left-0 no-print-bg">
        <div
          ref={pdfRef}
          className="w-[210mm] min-h-[297mm] p-[20mm] bg-slate-950 text-slate-100 font-sans flex flex-col justify-between"
          style={{ boxSizing: 'border-box' }}
        >
          <div>
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-800 pb-8">
              <div>
                <h2 className="text-3xl font-black text-indigo-400">INVOICE</h2>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Tax Invoice Summary</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xl font-bold text-slate-100">{watch('sellerName') || 'SELLER'}</p>
                <p className="text-xs text-slate-400">{watch('invoiceNumber') ? `Invoice No: ${watch('invoiceNumber')}` : 'Invoice No: DRAFT'}</p>
                <p className="text-xs text-slate-400">Date: {watch('invoiceDate') || 'N/A'}</p>
              </div>
            </div>

            {/* Seller and Buyer Columns */}
            <div className="grid grid-cols-2 gap-12 py-10 border-b border-slate-900">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">From (Seller)</p>
                <p className="text-sm font-bold text-slate-100">{watch('sellerName') || 'N/A'}</p>
                <p className="text-xs text-slate-400 whitespace-pre-line leading-relaxed">{watch('sellerAddress') || 'N/A'}</p>
                {watch('sellerGSTIN') && (
                  <p className="text-xs text-indigo-400 font-mono">GSTIN: {watch('sellerGSTIN').toUpperCase()}</p>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">To (Buyer)</p>
                <p className="text-sm font-bold text-slate-100">{watch('buyerName') || 'N/A'}</p>
                <p className="text-xs text-slate-400 whitespace-pre-line leading-relaxed">{watch('buyerAddress') || 'N/A'}</p>
                {watch('buyerGSTIN') && (
                  <p className="text-xs text-indigo-400 font-mono">GSTIN: {watch('buyerGSTIN').toUpperCase()}</p>
                )}
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse mt-8">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-4">Item Description</th>
                  <th className="py-4 w-16 text-right">Qty</th>
                  <th className="py-4 w-24 text-right">Unit Price</th>
                  <th className="py-4 w-16 text-right">GST %</th>
                  <th className="py-4 w-28 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-xs">
                {(watchItems || []).map((item: InvoiceItem, index: number) => {
                  const line = calculateLineItem(
                    { quantity: Number(item.quantity) || 0, price: Number(item.price) || 0, gstRate: Number(item.gstRate) || 0 },
                    watchIsInterState
                  );
                  return (
                    <tr key={index}>
                      <td className="py-4 text-slate-200 font-medium">{item.name || 'Untitled Item'}</td>
                      <td className="py-4 text-right text-slate-400">{item.quantity}</td>
                      <td className="py-4 text-right text-slate-400">{formatCurrency(Number(item.price) || 0)}</td>
                      <td className="py-4 text-right text-slate-400">{item.gstRate}%</td>
                      <td className="py-4 text-right font-bold text-slate-100">{formatCurrency(line.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer Calculations */}
          <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row items-end md:items-start justify-between gap-8">
            <div className="space-y-2 text-xs text-slate-500">
              <p className="uppercase tracking-widest text-[9px] font-bold">Tax Breakdown Mode</p>
              <p className="text-slate-400 font-semibold">{watchIsInterState ? 'Inter-State Transaction (IGST)' : 'Intra-State Transaction (CGST + SGST)'}</p>
              <p className="max-w-md leading-relaxed">This calculation summary is generated in compliance with GST standards. Recipient claims Input Tax Credit (ITC) if GSTIN is registered.</p>
            </div>

            <div className="w-80 space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-900">
              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span>Taxable Amount</span>
                <span className="text-slate-200">{formatCurrency(totals.taxableAmount)}</span>
              </div>

              {!watchIsInterState ? (
                <>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>CGST</span>
                    <span className="text-slate-200">{formatCurrency(totals.cgst)}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>SGST</span>
                    <span className="text-slate-200">{formatCurrency(totals.sgst)}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>IGST</span>
                  <span className="text-slate-200">{formatCurrency(totals.igst)}</span>
                </div>
              )}

              <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span>Total GST</span>
                <span className="text-slate-200">{formatCurrency(totals.gstAmount)}</span>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs font-black uppercase text-slate-100">Grand Total</span>
                <span className="text-2xl font-black text-indigo-400">{formatCurrency(totals.grandTotal)}</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 text-center text-[10px] text-slate-500">
            <p>Generated via VSNEXOS GST Invoice Generator (free-gst-calculator.vsnexos.com)</p>
            {mounted && (
              <p className="mt-1">© {new Date().getFullYear()} VSNEXOS. All rights reserved.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

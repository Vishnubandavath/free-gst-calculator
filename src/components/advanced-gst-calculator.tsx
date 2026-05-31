'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Download, FileSpreadsheet, RefreshCw, Calculator, Percent } from 'lucide-react';
import { formatCurrency } from '@/lib/gst-logic';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number | string;
  price: number | string;
  gstRate: number;
  discount: number | string;
}

export function AdvancedGSTCalculator() {
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 'item-1', description: 'Item 1', quantity: 1, price: 0, gstRate: 18, discount: 0 }
  ]);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: crypto.randomUUID(),
        description: `Item ${items.length + 1}`,
        quantity: 1,
        price: 0,
        gstRate: 18,
        discount: 0
      }
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        let sanitizedValue = value;
        if (field === 'quantity' || field === 'price' || field === 'discount') {
          const parsed = typeof value === 'string' ? parseFloat(value) : value;
          if (!isNaN(parsed) && parsed < 0) {
            sanitizedValue = 0;
          }
          if (field === 'discount' && !isNaN(parsed) && parsed > 100) {
            sanitizedValue = 100;
          }
        }
        return { ...item, [field]: sanitizedValue };
      }
      return item;
    }));
  };

  const calculateLineTotal = (item: InvoiceItem) => {
    const qty = Math.max(0, typeof item.quantity === 'string' ? parseFloat(item.quantity) || 0 : item.quantity);
    const prc = Math.max(0, typeof item.price === 'string' ? parseFloat(item.price) || 0 : item.price);
    const disc = Math.min(100, Math.max(0, typeof item.discount === 'string' ? parseFloat(item.discount) || 0 : item.discount));

    const lineTotal = qty * prc;
    const discountAmount = (lineTotal * disc) / 100;
    const taxableAmount = lineTotal - discountAmount;
    const gstAmount = (taxableAmount * item.gstRate) / 100;
    return {
      taxableAmount,
      gstAmount,
      discountAmount,
      total: taxableAmount + gstAmount
    };
  };

  const calculateTotals = () => {
    return items.reduce((acc, item) => {
      const line = calculateLineTotal(item);
      return {
        totalTaxable: acc.totalTaxable + line.taxableAmount,
        totalGST: acc.totalGST + line.gstAmount,
        totalDiscount: acc.totalDiscount + line.discountAmount,
        grandTotal: acc.grandTotal + line.total
      };
    }, { totalTaxable: 0, totalGST: 0, totalDiscount: 0, grandTotal: 0 });
  };

  const totals = calculateTotals();

  const exportCSV = () => {
    const headers = ['Description', 'Qty', 'Price', 'GST %', 'Discount %', 'Taxable', 'GST', 'Total'];
    const rows = items.map(item => {
      const line = calculateLineTotal(item);
      return [
        item.description,
        item.quantity,
        item.price,
        item.gstRate,
        item.discount,
        line.taxableAmount.toFixed(2),
        line.gstAmount.toFixed(2),
        line.total.toFixed(2)
      ];
    });

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `gst_calculation_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const originalTitle = document.title;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    document.title = `gst-calculation-${timestamp}`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className="space-y-8">
      <div className="no-print space-y-8">
        <div className="glass-card rounded-[2.5rem] overflow-hidden border-slate-200/50 dark:border-slate-800/50">
        <div className="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Calculator size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Multi-Item GST Table</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={addItem}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
            >
              <Plus size={18} /> Add Item
            </button>
            <button
              onClick={() => setItems([{ id: crypto.randomUUID(), description: 'Item 1', quantity: 1, price: 0, gstRate: 18, discount: 0 }])}
              className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
              title="Reset Table"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 w-24">Qty</th>
                <th className="px-6 py-4 w-32">Price (₹)</th>
                <th className="px-6 py-4 w-28">GST %</th>
                <th className="px-6 py-4 w-28">Discount %</th>
                <th className="px-6 py-4 w-32 text-right">Total (₹)</th>
                <th className="px-6 py-4 w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="group hover:bg-slate-50/30 dark:hover:bg-slate-900/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 font-medium text-slate-900 dark:text-white p-0"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="0"
                        value={item.price}
                        onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={item.gstRate}
                        onChange={(e) => updateItem(item.id, 'gstRate', parseInt(e.target.value))}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500/20"
                      >
                        {[0, 3, 5, 12, 18, 28].map(r => (
                          <option key={r} value={r}>{r}%</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={item.discount}
                        onChange={(e) => updateItem(item.id, 'discount', e.target.value)}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500/20"
                      />
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">
                      {(() => {
                        const line = calculateLineTotal(item);
                        return formatCurrency(line.total);
                      })()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card rounded-[2rem] p-8 space-y-6">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Percent size={20} className="text-indigo-600" />
              Advanced Options
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Discount Mode</p>
                <p className="text-xs text-slate-500">Currently applying discount before GST (Standard)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Rounding</p>
                <p className="text-xs text-slate-500">Automatically rounding to 2 decimal places</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={exportCSV}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-2xl font-bold border border-emerald-100 dark:border-emerald-800 hover:bg-emerald-100 transition-all"
              >
                <FileSpreadsheet size={20} /> Export CSV
              </button>
              <button 
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
              >
                <Download size={20} /> Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-500/40 sticky top-8">
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Calculator size={20} /> Final Summary
            </h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center text-indigo-100">
                <span>Taxable Amount</span>
                <span className="font-bold text-white">{formatCurrency(totals.totalTaxable)}</span>
              </div>
              <div className="flex justify-between items-center text-indigo-100">
                <span>Total GST</span>
                <span className="font-bold text-white">{formatCurrency(totals.totalGST)}</span>
              </div>
              <div className="flex justify-between items-center text-indigo-100">
                <span>Total Discount</span>
                <span className="font-bold text-white text-emerald-400">-{formatCurrency(totals.totalDiscount)}</span>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-lg font-bold">Grand Total</span>
                <span className="text-3xl font-black">{formatCurrency(totals.grandTotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Printable Area */}
    <div className="print-only p-8 space-y-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight">VSNEXOS</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Advanced GST Calculator</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-500">INVOICE SUMMARY</p>
            <p className="text-xs text-slate-400">{mounted ? new Date().toLocaleString('en-IN') : ''}</p>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
              <th className="py-4">Description</th>
              <th className="py-4 w-16">Qty</th>
              <th className="py-4 w-24">Price</th>
              <th className="py-4 w-16">GST</th>
              <th className="py-4 w-16">Disc</th>
              <th className="py-4 w-28 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => {
              const line = calculateLineTotal(item);
              return (
                <tr key={item.id} className="text-sm">
                  <td className="py-4 font-medium">{item.description}</td>
                  <td className="py-4">{item.quantity}</td>
                  <td className="py-4">{formatCurrency(typeof item.price === 'string' ? parseFloat(item.price) || 0 : item.price)}</td>
                  <td className="py-4">{item.gstRate}%</td>
                  <td className="py-4">{item.discount}%</td>
                  <td className="py-4 text-right font-bold">{formatCurrency(line.total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-end pt-8">
          <div className="w-64 space-y-4 bg-slate-50 p-6 rounded-2xl">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
              <span>Taxable Amount</span>
              <span className="text-slate-900">{formatCurrency(totals.totalTaxable)}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
              <span>Total GST</span>
              <span className="text-slate-900">{formatCurrency(totals.totalGST)}</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
              <span>Total Discount</span>
              <span className="text-emerald-600">-{formatCurrency(totals.totalDiscount)}</span>
            </div>
            <div className="pt-4 border-t border-slate-200 flex justify-between">
              <span className="text-sm font-black uppercase">Grand Total</span>
              <span className="text-xl font-black text-indigo-600">{formatCurrency(totals.grandTotal)}</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">Generated via free-gst-calculator.vsnexos.com</p>
          <p className="text-[10px] text-slate-300 mt-1">© {mounted ? new Date().getFullYear() : '2026'} VSNEXOS. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/gst-logic';

export interface SummaryRow {
  label: string;
  value: number;
  isBold?: boolean;
  highlightColor?: string;
  isDiscount?: boolean;
}

interface SummaryCardProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  rows: SummaryRow[];
  actions?: React.ReactNode;
  className?: string;
}

export function SummaryCard({
  title,
  icon,
  subtitle = 'Live Update',
  rows,
  actions,
  className
}: SummaryCardProps) {
  return (
    <div className={cn("bg-indigo-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl shadow-indigo-500/40 sticky top-24", className)}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold flex items-center gap-2 opacity-95">
          {icon}
          {title}
        </h3>
        {subtitle && (
          <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-md">
            {subtitle}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {rows.map((row, idx) => {
          const isLast = idx === rows.length - 1;
          return (
            <div
              key={idx}
              className={cn(
                "flex justify-between items-center",
                isLast ? "pt-6 border-t border-white/10" : ""
              )}
            >
              <span className={cn("text-indigo-100 text-sm", row.isBold && "font-bold text-white")}>
                {row.label}
              </span>
              <span
                className={cn(
                  "font-bold",
                  isLast ? "text-3xl font-black text-white" : "text-xl text-white",
                  row.highlightColor,
                  row.isDiscount && "text-emerald-400"
                )}
              >
                {row.isDiscount && "-"}
                {formatCurrency(row.value)}
              </span>
            </div>
          );
        })}

        {actions && <div className="pt-4">{actions}</div>}
      </div>
    </div>
  );
}

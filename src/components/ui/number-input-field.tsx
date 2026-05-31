import React from 'react';
import { cn } from '@/lib/utils';

interface NumberInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  helperText?: string;
  prefix?: string;
  error?: string;
  value: string | number;
  onChange: (val: string) => void;
}

export function NumberInputField({
  label,
  helperText,
  prefix = '₹',
  error,
  value,
  onChange,
  className,
  ...props
}: NumberInputFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
        {label}
        {helperText && <span className="text-xs font-normal text-slate-400">{helperText}</span>}
      </label>
      <div className="relative group">
        {prefix && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors pointer-events-none">
            <span className="text-xl font-medium">{prefix}</span>
          </div>
        )}
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className={cn(
            "w-full bg-slate-50 dark:bg-slate-900/50 border rounded-2xl pr-4 py-4 text-2xl font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700",
            prefix ? "pl-10" : "pl-4",
            error
              ? "border-red-500 focus:ring-red-500/20"
              : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500/20 focus:border-indigo-500"
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

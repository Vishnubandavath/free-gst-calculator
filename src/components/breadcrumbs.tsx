'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  if (pathSegments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
      <Link href="/" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
        <Home size={14} />
        <span>Home</span>
      </Link>
      
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;
        const name = segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <React.Fragment key={href}>
            <ChevronRight size={14} className="flex-shrink-0" />
            {isLast ? (
              <span className="font-bold text-slate-900 dark:text-white truncate" aria-current="page">
                {name}
              </span>
            ) : (
              <Link href={href} className="hover:text-indigo-600 transition-colors truncate">
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

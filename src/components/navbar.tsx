'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calculator, BookOpen, HelpCircle, FileText, Info, Mail, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const productLinks = [
  { name: 'GST Calculator', href: '/gst-calculator', icon: Calculator },
  { name: 'Advanced GST Calculator', href: '/advanced-gst-calculator', icon: Calculator },
  { name: 'Invoice Generator', href: '/invoice-generator', icon: FileText },
];

const navLinks = [
  { name: 'About', href: '/about', icon: Info },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'GST Guide', href: '/gst-guide', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
  { name: 'FAQ', href: '/gst-faq', icon: HelpCircle },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isProductsActive = productLinks.some((link) => pathname === link.href);

  useEffect(() => {
    // Only add scroll listener in browser environment
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      // Initial check in case page loads scrolled
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b h-20 flex items-center',
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-white dark:bg-slate-950 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <Calculator size={26} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                VSNEXOS
              </span>
              <div className="relative mt-1">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] leading-none block">
                  GST CALCULATOR
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
                pathname === '/'
                  ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                  : 'text-slate-600 dark:text-slate-400'
              )}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isProductsOpen}
                onClick={() => setIsProductsOpen((open) => !open)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
                  isProductsActive || isProductsOpen
                    ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'text-slate-600 dark:text-slate-400'
                )}
              >
                Products
                <ChevronDown
                  size={16}
                  className={cn('transition-transform duration-200', isProductsOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-full pt-3"
                  >
                    <div className="w-72 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl p-2">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                            pathname === link.href
                              ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                          )}
                        >
                          <link.icon size={18} />
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
                  pathname === link.href
                    ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'text-slate-600 dark:text-slate-400'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors',
                  pathname === '/'
                    ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                )}
              >
                <Calculator size={20} />
                Home
              </Link>

              <div className="rounded-2xl">
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen((open) => !open)}
                  className={cn(
                    'w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    isProductsActive || isMobileProductsOpen
                      ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <Calculator size={20} />
                    Products
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn('transition-transform duration-200', isMobileProductsOpen && 'rotate-180')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isMobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800 pl-3">
                        {productLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className={cn(
                              'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                              pathname === link.href
                                ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                            )}
                          >
                            <link.icon size={18} />
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  )}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

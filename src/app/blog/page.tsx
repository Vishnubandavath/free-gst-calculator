import React from 'react';
import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogFilter } from './blog-filter';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Guides, Slabs, and Tax Compliance Resources | VSNEXOS',
  description: 'Learn about Indian GST calculations, compliance guidelines, step-by-step registration guides, and tax slabs with professional articles from VSNEXOS.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-8">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight animate-fade-in">
          GST <span className="text-indigo-600">Knowledge Center</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Professional tax guides, invoice compliance checklists, and Indian GST regulations simplified.
        </p>
      </div>

      <section className="max-w-5xl mx-auto">
        <BlogFilter initialPosts={posts} />
      </section>
    </div>
  );
}

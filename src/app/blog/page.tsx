import React from 'react';
import { Metadata } from 'next';
import { getPaginatedPosts } from '@/lib/blog';
import { BlogFilter } from './blog-filter';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GST Guides, Slabs, and Tax Compliance Resources | VSNEXOS',
  description: 'Learn about Indian GST calculations, compliance guidelines, step-by-step registration guides, and tax slabs with professional articles from VSNEXOS.',
  alternates: {
    canonical: 'https://vsnexos.com/blog',
  },
};

interface BlogIndexPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page, 10) : 1;
  
  const { posts, currentPage, totalPages, totalPosts } = getPaginatedPosts(page);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 space-y-8">
      {/* SEO Pagination Links */}
      {currentPage > 1 && (
        <link rel="prev" href={`https://vsnexos.com/blog${currentPage > 2 ? `?page=${currentPage - 1}` : ''}`} />
      )}
      {currentPage < totalPages && (
        <link rel="next" href={`https://vsnexos.com/blog?page=${currentPage + 1}`} />
      )}

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
        <p className="text-sm text-slate-500 dark:text-slate-500">
          Showing {(currentPage - 1) * 12 + 1}–{Math.min(currentPage * 12, totalPosts)} of {totalPosts} guides
        </p>
      </div>

      <section className="max-w-5xl mx-auto">
        <BlogFilter 
          initialPosts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </div>
  );
}

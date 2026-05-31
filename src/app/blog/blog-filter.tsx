'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import { cn } from '@/lib/utils';

interface BlogFilterProps {
  initialPosts: BlogPost[];
}

export function BlogFilter({ initialPosts }: BlogFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract all categories dynamically
  const categories = ['All', ...Array.from(new Set(initialPosts.map((post) => post.category)))];

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10">
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search guides, tags, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Grid List */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-[2.5rem] p-8 md:p-10 border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/30 transition-all flex flex-col justify-between group hover:scale-[1.01] hover:shadow-xl hover:shadow-indigo-500/[0.02]"
            >
              <div className="space-y-6">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title.split('|')[0].trim()}
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {post.author}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50/50 dark:bg-slate-900/30 rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800">
          <p className="text-lg text-slate-500">No guides found matching your filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="mt-4 px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-all cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

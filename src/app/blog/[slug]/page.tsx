import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag, BookOpen, Calculator, FileText } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { ArticleRenderer } from '@/components/article-renderer';
import { Breadcrumbs } from '@/components/breadcrumbs';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const baseUrl = 'https://free-gst-calculator.vsnexos.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | VSNEXOS`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      section: post.category,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.featuredImage || '/images/og-image.jpg'],
    },
    keywords: post.tags,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  // Get 2 related posts (same category, or just other posts)
  let relatedPosts = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  if (relatedPosts.length < 2) {
    const extraPosts = allPosts.filter((p) => p.slug !== slug && p.category !== post.category).slice(0, 2 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...extraPosts];
  }

  const baseUrl = 'https://free-gst-calculator.vsnexos.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // Structured Data - Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'image': post.featuredImage || `${baseUrl}/images/og-image.jpg`,
    'datePublished': post.publishedAt,
    'dateModified': post.updatedAt || post.publishedAt,
    'author': {
      '@type': 'Organization',
      'name': 'VSNEXOS Tax Team',
      'url': baseUrl,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'VSNEXOS',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/icon.svg`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  // Structured Data - Breadcrumb JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': baseUrl,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title.split('|')[0].trim(),
        'item': postUrl,
      },
    ],
  };

  return (
    <>
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Breadcrumbs />
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-8">
            <header className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Tag size={12} />
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {post.title.split('|')[0].trim()}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {post.description}
              </p>

              {/* Author & Timestamp */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-y border-slate-100 dark:border-slate-800 py-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    {post.author.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  Published: {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </header>

            {/* Markdown compiled HTML rendering wrapper */}
            <div className="pt-4">
              <ArticleRenderer contentHtml={post.contentHtml} />
            </div>

            {/* Tags footer */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs rounded-lg font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar CTA & Ad Slots */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            {/* Widget 1: Interactive Tool CTA */}
            <div className="glass-card rounded-[2rem] p-6 border-slate-200/60 dark:border-slate-800/60 space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator size={18} className="text-indigo-600" />
                Useful Tools
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Compute single-item or multi-item splits instantly with our accurate tax calculators.
              </p>
              <div className="space-y-3">
                <Link
                  href="/gst-calculator"
                  className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-800 dark:text-white">GST Calculator</span>
                  <BookOpen size={14} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </Link>
                <Link
                  href="/invoice-generator"
                  className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors group"
                >
                  <span className="text-xs font-bold text-slate-800 dark:text-white">GST Invoice Generator</span>
                  <FileText size={14} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </Link>
              </div>
            </div>

            {/* Widget 2: AdSense/CTAs Placeholder */}
            <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-[2rem] p-8 border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-4">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto text-indigo-600">
                <BookOpen size={22} />
              </div>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Advertisement / CTA Slot</p>
              <p className="text-[10px] text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                Ready for Google AdSense placements or localized product recommendations.
              </p>
            </div>
          </aside>
        </div>

        {/* Related Articles Footer */}
        <section className="max-w-6xl mx-auto pt-16 border-t border-slate-100 dark:border-slate-800 space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Related Guides & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.slug}
                className="glass-card rounded-[2rem] p-6 border-slate-200/50 dark:border-slate-800/50 hover:border-indigo-500/20 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {rPost.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${rPost.slug}`}>{rPost.title.split('|')[0].trim()}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {rPost.description}
                  </p>
                </div>
                <Link
                  href={`/blog/${rPost.slug}`}
                  className="mt-6 text-xs font-bold text-indigo-600 flex items-center gap-1 hover:translate-x-1 transition-transform"
                >
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

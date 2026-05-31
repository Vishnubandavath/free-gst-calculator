import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://free-gst-calculator.vsnexos.com';
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/disclaimer',
    '/contact',
    '/gst-calculator',
    '/advanced-gst-calculator',
    '/invoice-generator',
    '/gst-guide',
    '/gst-faq',
    '/gst-slabs-india',
    '/gst-inclusive-formula',
    '/gst-exclusive-formula',
    '/gst-business-guide',
    '/gst-freelancer-guide',
    '/gst-registration-guide',
    '/gst-invoice-examples',
    '/blog',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPosts = getAllPosts();
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}

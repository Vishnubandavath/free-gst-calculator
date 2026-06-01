import { getAllPosts } from '@/lib/blog';

function generateSiteMap(staticEntries: any[], blogEntries: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticEntries
    .map(({ url, lastModified, changeFrequency, priority }) => {
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    })
    .join('')}
  ${blogEntries
    .map(({ url, lastModified, changeFrequency, priority }) => {
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    })
    .join('')}
</urlset>
`;
}

export async function GET() {
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
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPosts = getAllPosts();
  const blogEntries = blogPosts.map((post) => {
    let lastMod = new Date();
    const rawDate = post.updatedAt || post.publishedAt;
    if (rawDate) {
      const parsed = new Date(rawDate);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    }
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  const body = generateSiteMap(staticEntries, blogEntries);

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

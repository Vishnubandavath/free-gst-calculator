import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private', '/indexing-status'],
      },
    ],
    sitemap: 'https://free-gst-calculator.vsnexos.com/sitemap.xml',
  };
}

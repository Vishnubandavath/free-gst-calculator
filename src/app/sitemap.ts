import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://free-gst-calculator.vsnexos.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/disclaimer',
    '/contact',
    '/gst-calculator',
    '/advanced-gst-calculator',
    '/gst-guide',
    '/gst-faq',
    '/gst-slabs-india',
    '/gst-inclusive-formula',
    '/gst-exclusive-formula',
    '/gst-business-guide',
    '/gst-freelancer-guide',
    '/gst-registration-guide',
    '/gst-invoice-examples',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

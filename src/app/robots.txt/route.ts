export async function GET() {
  const body = `User-Agent: *
Allow: /
Disallow: /api/private
Disallow: /indexing-status

Sitemap: https://free-gst-calculator.vsnexos.com/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

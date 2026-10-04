import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const pages = [
    { path: '/' },
    { path: '/about' },
    { path: '/blog' },
    { path: '/contact' },
    ...posts.map(post => ({ path: `/blog/${post.id}`, lastmod: post.data.date })),
  ];

  // Paths without a trailing slash, matching the canonical tags.
  const urls = pages.map(({ path, lastmod }) => {
    const loc = `<loc>${new URL(path, site).href}</loc>`;
    return `  <url>${loc}${lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

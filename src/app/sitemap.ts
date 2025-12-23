import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://terminai.org';
  
  // List of static routes
  const routes = [
    '',
    '/why-gemini',
    '/use-cases',
    '/architecture',
    '/safety',
    '/privacy',
    '/manifesto',
    '/download',
    '/docs',
    '/community',
    '/case-studies',
    '/comparison',
    '/contribute',
    '/enterprise',
    '/roadmap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

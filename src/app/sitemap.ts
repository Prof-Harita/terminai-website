import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://terminai.org';
  
  // List of static routes
  const routes = [
    '',
    '/free',
    '/intelligence',
    '/extensibility',
    '/safety',
    '/install',
    '/use-cases',
    '/architecture',
    '/privacy',
    '/manifesto',
    '/docs',
    '/community',
    '/contribute',
    '/contact',
    '/enterprise',
    '/roadmap',
    '/recipes',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

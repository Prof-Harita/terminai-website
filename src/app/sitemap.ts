import { MetadataRoute } from 'next';
import { getAllUpdates } from '@/lib/updates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://terminai.org';
  
  // List of static routes
  const routes = [
    '',
    '/es',
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
    '/start',
    '/for/everyday',
    '/for/operators',
    '/for/developers',
    '/for/enterprise',
    '/community',
    '/contribute',
    '/contact',
    '/enterprise',
    '/roadmap',
    '/recipes',
    '/updates',
    '/updates/contribute',
    '/case-studies',
    '/comparison',
    '/trust',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const updates = getAllUpdates().map((update) => ({
    url: `${baseUrl}/updates/${update.slug}`,
    lastModified: update.meta.date ? new Date(update.meta.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...updates];
}

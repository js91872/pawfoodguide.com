import { MetadataRoute } from 'next';
import { FRUITS_DATABASE } from '@/lib/fruits-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pawfoodguide.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fruits`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/veterinary-standards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const fruitRoutes: MetadataRoute.Sitemap = FRUITS_DATABASE.map((fruit) => ({
    url: `${baseUrl}/fruits/${fruit.slug}`,
    lastModified: new Date(fruit.lastReviewedDate),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...fruitRoutes];
}

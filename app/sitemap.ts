import type { MetadataRoute } from 'next';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { FOOD_GUIDES } from '@/lib/food-guides';
const origin='https://pawfoodguide.com';
const updated=new Date('2026-11-04T00:00:00Z');
export default function sitemap():MetadataRoute.Sitemap{
 const pages=['','/foods','/fruits','/calculator','/emergency','/about','/veterinary-standards','/disclaimer','/privacy-policy','/terms'];
 const staticPages=pages.map((path)=>({url:`${origin}${path}`,lastModified:updated,changeFrequency:'monthly' as const,priority:path===''?1:path==='/foods'||path==='/fruits'?0.9:0.5}));
 const foods=FOOD_GUIDES.map(food=>({url:`${origin}/food/can-dogs-eat-${food.slug}`,lastModified:updated,changeFrequency:'monthly' as const,priority:0.8}));
 const fruits=FRUITS_DATABASE.map(fruit=>({url:`${origin}/food/can-dogs-eat-${fruit.slug}`,lastModified:updated,changeFrequency:'monthly' as const,priority:0.8}));
 return [...staticPages,...foods,...fruits];
}

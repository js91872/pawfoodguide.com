import Link from 'next/link';
import Image from 'next/image';
import type { FruitArticle } from '@/lib/fruits-data';
import { getFruitAdvice } from '@/lib/fruit-advice';
import { ArrowRight } from 'lucide-react';
export default function FruitCard({fruit}:{fruit:FruitArticle}){
 const advice=getFruitAdvice(fruit.slug);
 const status=advice?.status??'caution';
 return <Link href={`/food/can-dogs-eat-${fruit.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
   <div className="relative h-44 bg-slate-100"><Image src={fruit.heroImage} alt={fruit.imageAlt} fill sizes="(max-width: 640px) 100vw,(max-width:1024px) 50vw,33vw" className="object-cover"/></div>
   <div className="flex flex-1 flex-col p-5"><div className="flex flex-wrap items-center justify-between gap-2">
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800">{fruit.name}</h3>
      <span className={`rounded-full px-2 py-1 text-xs font-bold ${status==='unsafe'?'bg-red-100 text-red-900':status==='caution'?'bg-amber-100 text-amber-900':'bg-emerald-100 text-emerald-900'}`}>{status==='unsafe'?'Avoid':status==='caution'?'Use caution':'Small amounts'}</span>
   </div>
   <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{advice?.answer??'Read the safety guide before sharing this fruit.'}</p>
   <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">Read fruit guide <ArrowRight className="h-4 w-4"/></span></div>
 </Link>;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { FOOD_GUIDES, type FoodGroup } from '@/lib/food-guides';
export const metadata:Metadata={
 title:'Can Dogs Eat This? 22 Everyday Food Guides',
 description:'Explore dog food safety guides for vegetables, eggs, rice, chicken, peanut butter, chocolate, grapes and more. Practical preparation and when to call a veterinarian.',
 alternates:{canonical:'https://pawfoodguide.com/foods'},
};
const groups:FoodGroup[]=['Vegetables','Everyday foods','Proteins','Foods to avoid'];
export default function FoodHub(){
 return <main className="min-h-screen bg-slate-50">
  <header className="bg-gradient-to-r from-emerald-950 to-slate-900 px-4 py-16 text-white"><div className="mx-auto max-w-6xl">
  <p className="text-sm font-bold text-emerald-300">Worldwide dog food safety library</p>
  <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Can dogs eat this food?</h1>
  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">Get a clear answer before sharing a bite. Explore common vegetables, proteins, pantry foods and ingredients that dogs should avoid.</p>
  <div className="mt-6 flex flex-wrap gap-3"><Link href="/fruits" className="rounded-xl bg-white px-5 py-2.5 font-bold text-emerald-950">Browse fruit safety</Link><Link href="/emergency" className="rounded-xl border border-red-300 px-5 py-2.5 font-bold text-white">Possible poisoning?</Link></div>
  </div></header>
  <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
   <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-800"/><div><h2 className="text-lg font-bold text-emerald-950">Every dog is different</h2><p className="mt-2 text-sm leading-relaxed text-emerald-950">These guides provide general information for dog owners in any country. For health conditions, allergies, prescriptions and precise feeding portions, ask your local veterinarian. Treats should normally contribute 10% or less of daily energy, including all snacks and table scraps.</p></div></div></section>
   {groups.map(group=><section key={group} id={group.toLowerCase().replace(/\s+/g,'-')}>
    <h2 className="text-2xl font-extrabold text-slate-900">{group}</h2>
    <p className="mt-2 text-sm text-slate-600">{group==='Foods to avoid'?'Keep these ingredients out of reach and seek professional advice after suspected ingestion.':'Preparation, portion and ingredient details matter. Read the full guide before feeding.'}</p>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {FOOD_GUIDES.filter(food=>food.group===group).map(food=><Link key={food.slug} href={`/food/can-dogs-eat-${food.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
    <div className="flex items-center justify-between gap-2"><h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800">{food.name}</h3>{food.status==='unsafe'?<span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-900">Avoid</span>:food.status==='caution'?<span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-900">Check first</span>:<span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-900">Small amounts</span>}</div>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{food.answer}</p>
    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-800">Read safety guide <ArrowRight className="h-4 w-4"/></span>
    </Link>)}</div>
   </section>)}
   <section className="rounded-2xl border border-red-200 bg-red-50 p-6"><h2 className="flex items-center gap-2 text-xl font-bold text-red-950"><AlertTriangle className="h-6 w-6"/> Has your dog eaten something dangerous?</h2><p className="mt-2 text-sm leading-relaxed text-red-950">Call your local veterinarian or emergency animal hospital immediately. Do not wait for signs of poisoning and do not induce vomiting unless instructed by a veterinary professional.</p><Link href="/emergency" className="mt-4 inline-block font-bold text-red-800 underline">Emergency guidance for all countries</Link></section>
  </div>
 </main>;
}

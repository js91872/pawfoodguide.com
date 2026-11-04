import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertTriangle, ArrowLeft, BookOpen } from 'lucide-react';
import { FOOD_GUIDES, getFoodGuide, REFERENCES } from '@/lib/food-guides';

type Props={params:Promise<{slug:string}>};
export async function generateStaticParams(){return FOOD_GUIDES.map(item=>({slug:item.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {slug}=await params; const food=getFoodGuide(slug); if(!food)return {title:'Food guide not found'};
 const title=`Can Dogs Eat ${food.name}? What You Need to Know`;
 const description=`${food.answer} Read practical preparation, risks and emergency guidance.`;
 return {title,description,alternates:{canonical:`https://pawfoodguide.com/food/can-dogs-eat-${slug}`},openGraph:{title,description,type:'article',url:`https://pawfoodguide.com/food/can-dogs-eat-${slug}`}};
}
export default async function FoodArticle({params}:Props){
 const {slug}=await params;const food=getFoodGuide(slug);if(!food)notFound();
 const urgent=food.status==='unsafe', caution=food.status==='caution';
 const more=FOOD_GUIDES.filter(item=>item.slug!==slug&&item.group===food.group).slice(0,5);
 const url=`https://pawfoodguide.com/food/can-dogs-eat-${slug}`;
 const schema=[
 {'@context':'https://schema.org','@type':'Article',headline:`Can dogs eat ${food.name.toLowerCase()}?`,description:food.answer,mainEntityOfPage:url,author:{'@type':'Organization',name:'PawFoodGuide'},publisher:{'@type':'Organization',name:'PawFoodGuide',url:'https://pawfoodguide.com'}},
 {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
 {'@type':'ListItem',position:1,name:'Home',item:'https://pawfoodguide.com'},
 {'@type':'ListItem',position:2,name:'Foods dogs can eat',item:'https://pawfoodguide.com/foods'},
 {'@type':'ListItem',position:3,name:food.name,item:url},
 ]},
 ];
 return <main className="min-h-screen bg-slate-50 pb-16">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
 <div className="border-b border-slate-200 bg-white"><nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3 text-sm text-slate-600 sm:px-6"><Link href="/">Home</Link> / <Link href="/foods">All foods</Link> / <span className="text-slate-900">{food.name}</span></nav></div>
 <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
 <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
 <p className="font-semibold text-emerald-700">{food.group} · Dog food safety</p>
 <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-5xl">Can dogs eat {food.name.toLowerCase()}?</h1>
 <div className={`mt-6 rounded-xl border p-5 ${urgent?'border-red-300 bg-red-50':caution?'border-amber-300 bg-amber-50':'border-emerald-200 bg-emerald-50'}`}>
 <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">{(urgent||caution)&&<AlertTriangle className="h-5 w-5 text-red-700"/>} Quick answer</h2>
 <p className="mt-2 text-lg leading-relaxed text-slate-900">{food.answer}</p>
 </div></header>
 <div className="mt-7 grid gap-7 lg:grid-cols-3">
 <article className="space-y-7 lg:col-span-2">
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">What dog owners should know</h2><p className="mt-3 leading-7 text-slate-700">{food.explanation}</p><p className="mt-3 leading-7 text-slate-700">Every dog is different. Age, size, medical conditions, medications and prescribed diets can change whether a food is appropriate. When in doubt, check with your local veterinary team. The primary diet should be complete and balanced for your dog’s life stage.</p></section>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">{urgent?'How to keep dogs away from it':'How to prepare and serve it'}</h2><ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">{food.preparation.map(step=><li key={step} className="leading-7">{step}</li>)}</ol></section>
 <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">Ingredients and situations to avoid</h2><p className="mt-3 leading-7 text-slate-800">{food.avoid}</p></section>
 <section className="rounded-2xl border border-red-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">What if your dog already ate it?</h2><p className="mt-3 leading-7 text-slate-700">{food.ifEaten}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">If you suspect poisoning, a swallowed bone or a blockage, contact an emergency veterinarian promptly. Do not induce vomiting or give home remedies unless a professional instructs you.</p><Link href="/emergency" className="mt-4 inline-block font-bold text-red-700 underline">International emergency guidance</Link></section>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">How often and how much?</h2><p className="mt-3 leading-7 text-slate-700">{urgent?'Do not intentionally feed this food. No serving size is recommended.':'If your dog tolerates the food, offer only a small portion. WSAVA advises keeping all treats combined to 10% or less of a dog’s daily calories. That limit does not mean the full allowance should be spent on this food.'}</p><p className="mt-3 text-sm text-slate-600">Always count biscuits, training rewards and table scraps together. Ask a veterinarian for precise portions, especially for puppies or dogs with medical conditions.</p>{!urgent&&<Link href="/calculator" className="mt-4 inline-block font-bold text-emerald-700 underline">Estimate daily treat calories</Link>}</section>
 <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">Published guidance and further reading</h2><p className="mt-3 text-sm text-slate-700">These are general reference sources, not proof of an individualized veterinary review or endorsement.</p><ul className="mt-4 list-disc space-y-3 pl-6 text-sm">{[...new Set([...food.sourceUrls,REFERENCES.wsavaGuidelines])].map(source=><li key={source}><a className="break-all font-semibold text-emerald-700 underline" href={source} target="_blank" rel="noopener noreferrer">{source}</a></li>)}</ul><Link href="/veterinary-standards" className="mt-4 inline-block text-sm font-bold text-emerald-700 underline">How we research our guides</Link></section>
 </article>
 <aside className="space-y-6"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><BookOpen className="h-5 w-5 text-emerald-700"/> Related food questions</h2><ul className="mt-4 space-y-3">{more.map(item=><li key={item.slug}><Link href={`/food/can-dogs-eat-${item.slug}`} className="text-sm font-semibold text-emerald-800 hover:underline">Can dogs eat {item.name.toLowerCase()}?</Link></li>)}</ul><Link href="/foods" className="mt-5 inline-block text-sm font-bold text-emerald-700 underline">Browse all foods</Link></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-bold text-slate-900">Fruit safety</h2><p className="mt-2 text-sm text-slate-600">Explore apples, grapes, bananas, mangoes and other fruit guides.</p><Link href="/fruits" className="mt-3 inline-block font-bold text-emerald-700 underline">See 16 fruit guides</Link></div></aside>
 </div><Link href="/foods" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-800"><ArrowLeft className="h-4 w-4"/> Back to all foods</Link></div></main>;
}

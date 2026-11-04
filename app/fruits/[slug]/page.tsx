import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AlertTriangle, ArrowLeft, BookOpen, ShieldCheck } from 'lucide-react';
import { getFruitBySlug, getAllFruitSlugs } from '@/lib/fruits-data';
import { getFruitAdvice } from '@/lib/fruit-advice';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { REFERENCES } from '@/lib/food-guides';
import TreatCalculator from '@/components/TreatCalculator';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllFruitSlugs().map(slug => ({slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const fruit = getFruitBySlug(slug);
  const advice = getFruitAdvice(slug);
  if (!fruit || !advice) return {title:'Fruit guide not found'};
  const title = `Can Dogs Eat ${fruit.name}? Safety, Risks & Preparation`;
  const description = `${advice.answer} Learn what parts to avoid, preparation tips and when to speak to a veterinarian.`;
  return {
    title, description,
    alternates:{canonical:`https://pawfoodguide.com/fruits/${slug}`},
    openGraph:{title,description,type:'article',url:`https://pawfoodguide.com/fruits/${slug}`,images:[{url:fruit.heroImage,alt:fruit.imageAlt}]},
  };
}

export default async function FruitPage({params}:Props) {
  const {slug} = await params;
  const fruit = getFruitBySlug(slug);
  const advice = getFruitAdvice(slug);
  if (!fruit || !advice) notFound();
  const unsafe = advice.status === 'unsafe';
  const caution = advice.status === 'caution';
  const related = FRUITS_DATABASE.filter(item=>item.slug!==slug).slice(0,6);
  const title = `Can dogs eat ${fruit.name.toLowerCase()}?`;
  const url = `https://pawfoodguide.com/fruits/${slug}`;
  const schema = {
    '@context':'https://schema.org','@type':'Article',headline:title,
    description:advice.answer,mainEntityOfPage:url,image:fruit.heroImage,
    author:{'@type':'Organization',name:'PawFoodGuide'},
    publisher:{'@type':'Organization',name:'PawFoodGuide',url:'https://pawfoodguide.com'},
  };
  const breadcrumb = {'@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:'https://pawfoodguide.com'},
      {'@type':'ListItem',position:2,name:'Fruit guides',item:'https://pawfoodguide.com/fruits'},
      {'@type':'ListItem',position:3,name:fruit.name,item:url},
    ],
  };
  return <main className="min-h-screen bg-slate-50 pb-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([schema,breadcrumb]).replace(/</g,'\\u003c')}} />
    <div className="border-b border-slate-200 bg-white"><nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3 text-sm text-slate-600 sm:px-6"><Link href="/" className="hover:text-emerald-700">Home</Link> / <Link href="/fruits" className="hover:text-emerald-700">Fruit guides</Link> / <span className="text-slate-900">{fruit.name}</span></nav></div>
    <article className="mx-auto max-w-5xl space-y-7 px-4 pt-8 sm:px-6">
      <header className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="p-6 sm:p-9">
          <p className="text-sm font-semibold text-emerald-700">Dog fruit safety guide</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">General pet-owner information · Reviewed against published reference guidance, not individually veterinarian-certified</p>
          <div className={`mt-6 rounded-xl border p-5 ${unsafe?'border-red-300 bg-red-50':caution?'border-amber-300 bg-amber-50':'border-emerald-200 bg-emerald-50'}`}>
            <div className="flex items-center gap-2 font-bold text-slate-900">{(unsafe||caution)&&<AlertTriangle className="h-5 w-5 text-red-700"/>} Quick answer</div>
            <p className="mt-2 text-lg leading-relaxed text-slate-900">{advice.answer}</p>
          </div>
        </div>
        <div className="relative h-56 bg-slate-100 sm:h-80"><Image src={fruit.heroImage} alt={fruit.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 900px" className="object-cover"/></div>
      </header>

      <div className="grid gap-7 lg:grid-cols-3">
        <div className="space-y-7 lg:col-span-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">What dog owners should know</h2>
            <p className="mt-3 leading-7 text-slate-700">{advice.why}</p>
            <p className="mt-3 leading-7 text-slate-700">Dogs have different nutritional needs from people. Even foods that are generally suitable should only be extras within a complete, balanced diet. Dogs with pancreatitis, diabetes, food allergies, a prescribed diet, or other medical conditions need individual advice from their veterinarian.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">A general guideline from the World Small Animal Veterinary Association is that treats, including fruit, should provide no more than 10% of a healthy dog&apos;s daily calories. This is a combined limit for all extras, not a recommended serving size for this specific fruit.</p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">{unsafe?'How to prevent accidental exposure':'How to prepare it safely'}</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">{advice.serve.map(step=><li key={step} className="leading-7">{step}</li>)}</ol>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900"><AlertTriangle className="h-6 w-6 text-amber-700"/> Risks and things to avoid</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-800">{advice.risks.map(r=><li key={r} className="leading-7">{r}</li>)}</ul>
          </section>
          <section className="rounded-2xl border border-red-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">What if your dog already ate it?</h2>
            <p className="mt-3 leading-7 text-slate-700">{advice.emergency}</p>
            <p className="mt-3 text-sm text-slate-600">For a possible poisoning or obstruction, contact your local veterinarian or emergency animal hospital immediately. Do not give home remedies or induce vomiting without professional instruction.</p>
            <Link href="/emergency" className="mt-4 inline-block font-bold text-red-700 underline">Emergency advice for dog owners worldwide</Link>
          </section>
          {!unsafe && <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Plan your dog&apos;s treat calories</h2>
            <p className="mt-2 text-sm text-slate-600">This estimator shows an approximate calorie budget. It does not decide whether an individual food or portion is medically suitable.</p>
            <div className="mt-5"><TreatCalculator initialFruitSlug={slug}/></div>
          </section>}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Sources and how we use them</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">These organizations publish general food safety and nutrition resources. Linking them does not mean they reviewed or endorsed this page. Nutritional values and animal tolerance can vary.</p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-sm">{[...new Set([...advice.sources,REFERENCES.wsavaGuidelines])].map(link=><li key={link}><a href={link} target="_blank" rel="noopener noreferrer" className="break-all font-semibold text-emerald-800 underline">{link}</a></li>)}</ul>
            <Link href="/veterinary-standards" className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-700"><ShieldCheck className="h-4 w-4"/> Our editorial standards</Link>
          </section>
        </div>
        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900"><BookOpen className="h-5 w-5 text-emerald-700"/> More fruit questions</h2>
            <ul className="mt-4 space-y-3">{related.map(item=><li key={item.slug}><Link href={`/fruits/${item.slug}`} className="text-sm font-semibold text-emerald-800 hover:underline">Can dogs eat {item.name.toLowerCase()}?</Link></li>)}</ul>
            <Link href="/fruits" className="mt-5 inline-block text-sm font-bold text-emerald-700 underline">See all 16 fruits</Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-lg font-bold text-slate-900">Beyond fruit</h2><p className="mt-2 text-sm text-slate-600">Explore vegetables, rice, eggs, chicken, chocolate, onions, xylitol, and other common ingredients.</p><Link href="/foods" className="mt-3 inline-block font-bold text-emerald-700 underline">Browse all food guides</Link></div>
        </aside>
      </div>
      <Link href="/fruits" className="inline-flex items-center gap-2 font-semibold text-emerald-800"><ArrowLeft className="h-4 w-4"/> Back to fruit guides</Link>
    </article>
  </main>;
}

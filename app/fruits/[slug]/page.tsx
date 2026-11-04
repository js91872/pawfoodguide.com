import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getFruitBySlug, getAllFruitSlugs } from '@/lib/fruits-data';
import NutritionalTable from '@/components/NutritionalTable';
import PreparationChecklist from '@/components/PreparationChecklist';
import AccordionFaq from '@/components/AccordionFaq';
import TreatCalculator from '@/components/TreatCalculator';
import JsonLd from '@/components/JsonLd';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllFruitSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fruit = getFruitBySlug(slug);

  if (!fruit) {
    return {
      title: 'Fruit Not Found | PawFoodGuide',
    };
  }

  const isToxic = fruit.safetyStatus === 'toxic';

  const title = isToxic
    ? `Can Dogs Eat ${fruit.name}? Safety Risks and What to Do`
    : `Can Dogs Eat ${fruit.name}? Safety, Preparation and Portions`;

  const description = fruit.zeroClickAnswer;

  return {
    title,
    description,
    alternates: {
      canonical: `https://pawfoodguide.com/fruits/${fruit.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://pawfoodguide.com/fruits/${fruit.slug}`,
      type: 'article',
      images: [
        {
          url: fruit.heroImage,
          width: 1200,
          height: 630,
          alt: fruit.imageAlt,
        },
      ],
      section: 'Canine Nutrition',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fruit.heroImage],
    },
  };
}

export default async function FruitArticlePage({ params }: Props) {
  const { slug } = await params;
  const fruit = getFruitBySlug(slug);

  if (!fruit) {
    notFound();
  }

  const isToxic = fruit.safetyStatus === 'toxic';
  const isCaution = fruit.safetyStatus === 'caution';
  const isSuperfood = fruit.safetyStatus === 'superfood';

  return (
    <>
      <JsonLd fruit={fruit} />

      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Breadcrumb & Navigation Bar */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-emerald-700 transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/fruits" className="hover:text-emerald-700 transition">
                Fruit Safety Database
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">{fruit.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-8 space-y-8">
          {/* Article Header & Hero Banner */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Safety Status Pill */}
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider ${
                  isToxic
                    ? 'bg-red-600 text-white'
                    : isCaution
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : isSuperfood
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}
              >
                {isToxic ? (
                  <AlertOctagon className="h-4 w-4" />
                ) : isCaution ? (
                  <AlertTriangle className="h-4 w-4" />
                ) : isSuperfood ? (
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                )}
                {fruit.safetyLabel}
              </span>

              {/* FDC ID Badge */}
              <span className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-slate-600">
                Nutrition per 100 g (reference data)
              </span>
            </div>

            {/* Main H1 Title */}
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-tight">
                Can Dogs Eat {fruit.name}?
              </h1>
              <p className="mt-2 text-sm sm:text-base font-medium text-slate-500 italic">
                Botanical classification: {fruit.scientificName}
              </p>
            </div>

            {/* Article guidance and transparency */}
            <div className="border-y border-slate-100 py-3 text-sm text-slate-600">
              <span>Food safety guidance for dog owners · </span>
              <Link href="/veterinary-standards" className="font-semibold text-emerald-700 hover:underline">How we research our guides</Link>
              <span> · Always ask your veterinarian for individual medical advice.</span>
            </div>

            {/* FEATURE 1: DIRECT ZERO-CLICK ANSWER BLOCK FOR GOOGLE AI OVERVIEWS */}
            <div
              className={`rounded-2xl p-6 border-2 shadow-sm ${
                isToxic
                  ? 'border-red-300 bg-red-50 text-red-950'
                  : 'border-emerald-200 bg-gradient-to-r from-emerald-50/70 to-white text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
                {isToxic ? (
                  <AlertOctagon className="h-4 w-4 text-red-600" />
                ) : (
                  <Sparkles className="h-4 w-4 text-emerald-700" />
                )}
                <span className={isToxic ? 'text-red-900' : 'text-emerald-900'}>
                  Quick answer
                </span>
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {fruit.zeroClickAnswer}
              </p>
            </div>

            {/* High-Res Hero Image */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src={fruit.heroImage}
                alt={fruit.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur-xs">
                Photo: {fruit.imageCredit}
              </div>
            </div>
          </div>

          {/* FEATURE 4: TOXICOLOGY RISKS & WARNING BOX */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 shadow-sm ${
              isToxic
                ? 'border-red-400 bg-red-50/90'
                : isCaution
                ? 'border-amber-300 bg-amber-50/70'
                : 'border-emerald-200 bg-white'
            }`}
          >
            <div className="flex items-center gap-3 border-b pb-4 mb-4 border-slate-200/80">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isToxic
                    ? 'bg-red-600 text-white'
                    : isCaution
                    ? 'bg-amber-500 text-white'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {isToxic ? (
                  <AlertOctagon className="h-6 w-6" />
                ) : isCaution ? (
                  <AlertTriangle className="h-6 w-6" />
                ) : (
                  <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  What dog owners should know about risks
                </h3>
                <span className="text-xs text-slate-500">
                  Potential risk: <strong className="text-slate-800">{fruit.toxicologyRisks.toxicAgent}</strong>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">
              {fruit.toxicologyRisks.description}
            </p>

            {/* Clinical signs */}
            <div className="mt-4 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Symptoms or warning signs to watch for:
              </span>
              <div className="flex flex-wrap gap-2">
                {fruit.toxicologyRisks.clinicalSigns.map((sign) => (
                  <span
                    key={sign}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-2xs"
                  >
                    ⚠️ {sign}
                  </span>
                ))}
              </div>
            </div>

            {/* Emergency Action */}
            <div className="mt-5 rounded-xl bg-slate-900 p-4 text-white space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                <PhoneCall className="h-4 w-4" />
                <span>If your dog may be unwell:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {fruit.toxicologyRisks.emergencyAction}
              </p>
              <div className="pt-1">
                <a
                  href="tel:8884264435"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700 transition"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call ASPCA Poison Control (888) 426-4435</span>
                </a>
              </div>
            </div>
          </div>

          {/* FEATURE 3: USDA FOODDATA CENTRAL NUTRITIONAL PROFILE */}
          <NutritionalTable usda={fruit.usda} fruitName={fruit.name} />

          {/* CANINE BIOLOGICAL BENEFITS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Nutrition notes for dogs
                </h3>
                <p className="text-xs text-slate-500">
                  Nutrients in this food do not replace a complete and balanced diet
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fruit.canineBiologicalBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {benefit.impactArea}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-2">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURE 5 & 6: PREPARATION CHECKLIST & WEIGHT-TIERED SERVING BREAKDOWN */}
          <PreparationChecklist fruit={fruit} />

          {/* INTERACTIVE CALORIE CALCULATOR PRE-SET FOR THIS FRUIT */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900">
                Interactive {fruit.name} Calorie & Treat Limit Calculator
              </h3>
              <span className="text-xs font-semibold text-emerald-700">
                Treats: up to 10% of daily calories
              </span>
            </div>
            <TreatCalculator initialFruitSlug={fruit.slug} />
          </div>

          {/* FEATURE 7: ACCORDION FAQ SECTION */}
          <AccordionFaq faqList={fruit.faqList} fruitName={fruit.name} />

          {/* Source transparency: external references are not endorsements */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            <h2 className="text-lg font-bold text-slate-900">Sources and further reading</h2>
            <p className="mt-2">For dog food poisoning questions, consult a veterinarian promptly. We use public information from established veterinary and nutrition resources; this article has not been individually certified by those organizations.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><a href="https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">ASPCA: People foods to avoid feeding pets</a></li>
              <li><a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">WSAVA: Global nutrition guidelines</a></li>
              <li><a href="https://fdc.nal.usda.gov/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">USDA FoodData Central: Food composition reference</a></li>
              {fruit.slug === 'grapes' && <li><a href="https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/grape-and-raisin-toxicity" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">Cornell: Grape and raisin toxicity in dogs</a></li>}
            </ul>
          </section>

          <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">Explore more dog food questions</h3>
            <p className="mt-2 text-sm text-slate-700">Discover everyday foods, dangerous ingredients, and simple feeding tips.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/foods" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white">Dog food safety guide</Link>
              <Link href="/fruits" className="rounded-lg border border-emerald-400 bg-white px-4 py-2 text-sm font-bold text-emerald-900">Compare fruits</Link>
            </div>
          </aside>

          {/* Bottom Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/fruits"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Browse all fruit guides</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

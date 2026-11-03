import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FRUITS_DATABASE, getFruitBySlug, getAllFruitSlugs } from '@/lib/fruits-data';
import MarketMetricsCard from '@/components/MarketMetricsCard';
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
  Calendar,
  UserCheck,
  ShieldCheck,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  ExternalLink,
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

  const primaryKeyword = fruit.marketMetrics.primaryKeyword;
  const isToxic = fruit.safetyStatus === 'toxic';

  const title = isToxic
    ? `Can Dogs Eat ${fruit.name}? ⛔ TOXIC WARNING & Emergency Vet Guide`
    : `Can Dogs Eat ${fruit.name}? Vet Safety, USDA Nutrition & Serving Limits`;

  const description = `${fruit.zeroClickAnswer} Verified with USDA FoodData Central (#${fruit.usda.fdcId}) and veterinary clinical guidelines.`;

  return {
    title,
    description,
    keywords: [
      primaryKeyword,
      `are ${fruit.name.toLowerCase()} safe for dogs`,
      `can puppies eat ${fruit.name.toLowerCase()}`,
      `dog ${fruit.name.toLowerCase()} toxicity`,
      ...fruit.marketMetrics.highIntentVariants.map((v) => v.keyword),
    ],
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
      publishedTime: '2024-01-15T08:00:00.000Z',
      modifiedTime: `${fruit.lastReviewedDate}T12:00:00.000Z`,
      authors: [fruit.reviewerName],
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
                USDA FoodData Central #{fruit.usda.fdcId}
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

            {/* Author / Clinical Reviewer Metadata Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 border-y border-slate-100 py-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-emerald-600" />
                <span>
                  Clinically Reviewed by <strong>{fruit.reviewerName}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>{fruit.reviewerTitle}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span>Updated: {fruit.lastReviewedDate}</span>
              </div>
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
                  Direct Veterinary Zero-Click Answer (AI Overview Benchmark)
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

          {/* FEATURE 2: UBERSUGGEST MARKET METRICS PANEL */}
          <MarketMetricsCard metrics={fruit.marketMetrics} fruitName={fruit.name} />

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
                  Toxicology Assessment & Canine Health Warnings
                </h3>
                <span className="text-xs text-slate-500">
                  Active toxic agent: <strong className="text-slate-800">{fruit.toxicologyRisks.toxicAgent}</strong>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">
              {fruit.toxicologyRisks.description}
            </p>

            {/* Clinical signs */}
            <div className="mt-4 pt-4 border-t border-slate-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Clinical Signs of Distress to Monitor:
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
                <span>Veterinary Emergency Protocol:</span>
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
                  Canine Biological & Physiological Benefits
                </h3>
                <p className="text-xs text-slate-500">
                  Documented veterinary impacts on canine systems
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
                10% Treat Rule Engine
              </span>
            </div>
            <TreatCalculator initialFruitSlug={fruit.slug} />
          </div>

          {/* FEATURE 7: ACCORDION FAQ SECTION */}
          <AccordionFaq faqList={fruit.faqList} fruitName={fruit.name} />

          {/* PEER-REVIEWED CITATIONS & REFERENCES */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-xs text-slate-600 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-emerald-700" />
              Peer-Reviewed Veterinary Citations & Source Documentation:
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
              {fruit.veterinaryCitations.map((citation) => (
                <li key={citation.title}>
                  <strong>{citation.source}</strong> ({citation.year}): &quot;{citation.title}&quot;.
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              Content adheres strictly to the American College of Veterinary Internal Medicine (ACVIM) and World Small Animal Veterinary Association (WSAVA) scientific guidelines.
            </p>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/fruits"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Complete 16-Fruit Database Index</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

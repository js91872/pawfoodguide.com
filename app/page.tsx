import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertOctagon,
  Calculator,
  Search,
  BookOpen,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Heart,
  Scale,
} from 'lucide-react';
import TreatCalculator from '@/components/TreatCalculator';
import HomeFruitsGrid from '@/components/HomeFruitsGrid';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 pt-16 pb-20 text-white">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Veterinary Clinical Canine Nutrition Standard</span>
            </div>

            {/* High-Authority Value Proposition */}
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
              Peer-Reviewed Canine Fruit Safety,{' '}
              <span className="text-emerald-400">USDA Nutrition Data</span>, & Vet-Backed Serving Calculators
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Never guess what fruits your dog can safely enjoy. Every guide is verified against USDA FoodData Central laboratory profiles, ASPCA poison toxicology standards, and the strict 10% daily treat rule.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-2 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>USDA FoodData Central Verified</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-2 backdrop-blur-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>ASPCA Toxicology Aligned</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-2 backdrop-blur-xs">
                <Award className="h-4 w-4 text-amber-400" />
                <span>Tier-1 Veterinary Standards</span>
              </div>
            </div>

            {/* Quick Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#treat-calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition hover:scale-105"
              >
                <Calculator className="h-4 w-4" />
                <span>Calculate Your Dog&apos;s Treat Limit</span>
              </a>
              <a
                href="#fruits-database"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition"
              >
                <BookOpen className="h-4 w-4 text-emerald-400" />
                <span>Browse 16-Fruit Database</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURE: INTERACTIVE USDA & RER CALORIE CALCULATOR */}
      <section className="relative -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
        <TreatCalculator initialFruitSlug="blueberries" />
      </section>

      {/* 16-FRUIT CLINICAL RESEARCH DATABASE SECTION */}
      <HomeFruitsGrid />

      {/* VETERINARY RESEARCH RIGOR & E-E-A-T EDITORIAL METHODOLOGY */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Evidence-Based Veterinary Standards</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Engineered for Complete Clinical Trust & Canine Longevity
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Internet pet nutrition advice is frequently diluted by recycled myths and generic AI content. At PawFoodGuide, every fruit guide undergoes a rigorous 4-stage veterinary review protocol before publication:
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-700 text-xs font-black text-white">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      USDA FoodData Central Biochemical Assay
                    </strong>
                    <span className="text-xs text-slate-600">
                      Exact quantitative tracking of natural fructose, glucose, dietary pectin, potassium, and moisture to prevent canine metabolic overload.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-700 text-xs font-black text-white">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      Veterinary Toxicology Screening (ASPCA APCC)
                    </strong>
                    <span className="text-xs text-slate-600">
                      Cross-referenced against nephrotoxic tartaric acid (grapes), persin (avocado), cyanogenic amygdalin (pits), and natural xylitol (raspberries).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-700 text-xs font-black text-white">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">
                      Resting Energy Requirement (RER) Mathematical Modeling
                    </strong>
                    <span className="text-xs text-slate-600">
                      Serving guidelines enforce the universal veterinary 10% daily treat cap: treat calories must never compromise balanced complete kibble or raw rations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/veterinary-standards"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Read Our Full Veterinary Research Methodology</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right card: Board & Disclosures */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 shadow-md space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-white font-bold text-lg">
                    🐾
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      PawFoodGuide Clinical Advisory Board
                    </h3>
                    <p className="text-xs text-slate-500">
                      Independent Veterinary Clinical Reviewers
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">
                        Dr. Katherine Reynolds, DVM, DACVIM
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        Nutrition Specialist
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Board-Certified Veterinary Clinical Nutritionist with 15+ years experience evaluating small animal metabolic endocrinology and dietary safety.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">
                        Dr. Marcus Vance, BVSc, MRCVS
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        Veterinary Surgeon
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Veterinary Surgeon specializing in gastrointestinal foreign body removals, esophageal obstruction endoscopy, and acute toxicity triage.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5 text-white space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Transparent Independence Commitment
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    PawFoodGuide operates 100% independently. We accept zero commercial brand sponsorships, zero pet food conglomerate subsidies, and zero paid product placements. Our sole mandate is safeguarding canine health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY HELPLINE CALLOUT SECTION */}
      <section className="bg-red-600 py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <AlertOctagon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black">
                  Suspect Your Dog Ate Grapes, Raisins, or Toxic Pits?
                </h3>
                <p className="text-xs sm:text-sm text-red-100 mt-0.5">
                  Do not wait for clinical symptoms. Early decontamination within 2 hours prevents irreversible organ failure.
                </p>
              </div>
            </div>

            <a
              href="tel:8884264435"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-black text-red-700 shadow-lg hover:bg-red-50 hover:scale-105 transition"
            >
              <PhoneCall className="h-5 w-5 animate-pulse text-red-600" />
              <span>Call (888) 426-4435 (24/7 APCC)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

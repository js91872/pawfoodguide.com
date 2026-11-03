import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Database,
  BookOpen,
  ArrowRight,
  FileCheck2,
  Activity,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veterinary Research Standards & Editorial Methodology | PawFoodGuide',
  description:
    'Our 4-stage veterinary research protocol, peer-review standards, USDA FoodData Central integration, and toxicology screening methods.',
  alternates: {
    canonical: 'https://pawfoodguide.com/veterinary-standards',
  },
};

export default function VeterinaryStandardsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Tier-1 Clinical Evidence Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Veterinary Research Standards & Methodology
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            How PawFoodGuide ensures every canine fruit safety dossier and serving calculator meets the highest global standards of veterinary science.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8 space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              The PawFoodGuide 4-Tier Peer-Review Protocol
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              In an era overflowing with generic, automated AI content that repeats outdated urban myths, PawFoodGuide implements an uncompromising four-stage clinical verification pipeline for every fruit dossier.
            </p>
          </div>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Database className="h-5 w-5 text-emerald-600" />
                <span>Tier 1: USDA FoodData Central Direct Assay Integration</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We retrieve quantitative, laboratory-verified macronutrient and micronutrient data directly from the USDA Agricultural Research Service (ARS) FoodData Central foundation database. We record exact amounts of natural fructose, glucose, dietary pectin, potassium, and crude fiber per 100g serving, rejecting generalized estimates.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <FileCheck2 className="h-5 w-5 text-emerald-600" />
                <span>Tier 2: ASPCA APCC & Pet Poison Toxicology Cross-Referencing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every botanical item is screened against clinical veterinary toxicology archives, including the ASPCA Animal Poison Control Center (APCC) and the Pet Poison Helpline. Specific biochemical hazard mechanisms—such as tartaric acid nephrotoxicity in grapes, persin in avocado, amygdalin cyanogenesis in stone fruit pits, and natural xylitol in raspberries—are documented with exact physiological pathways.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Activity className="h-5 w-5 text-emerald-600" />
                <span>Tier 3: Allometric Energy Modeling & RER Mathematical Calibration</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rather than offering vague advice like &quot;feed a few bites,&quot; our calculators utilize the exponential metabolic allometric scaling formula (RER = 70 × BW_kg^0.75). We programmatically enforce the World Small Animal Veterinary Association (WSAVA) 10% daily treat ceiling, preventing excessive caloric density and chronic nutrient dilution.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Award className="h-5 w-5 text-emerald-600" />
                <span>Tier 4: Clinical Veterinary Specialist Review (DACVIM & MRCVS)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prior to publication or data refresh, every dossier is reviewed by licensed veterinary specialists, including Board-Certified Veterinary Clinical Nutritionists (DACVIM) and Members of the Royal College of Veterinary Surgeons (MRCVS). Reviewers verify practical canine feeding feasibility, choking hazards, and breed predispositions.
              </p>
            </div>
          </div>

          {/* Institutional Alignments */}
          <div className="border-t border-slate-100 pt-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Institutional Alignment & Scientific Frameworks
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our research methodology aligns with and references the published guidelines of:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <li className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>American College of Veterinary Internal Medicine (ACVIM)</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>World Small Animal Veterinary Association (WSAVA)</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Association of American Feed Control Officials (AAFCO)</span>
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>ASPCA Animal Poison Control Center (APCC)</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/fruits"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition"
            >
              <span>Explore Verified 16-Fruit Database</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

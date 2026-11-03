import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Heart,
  Users,
  Sparkles,
  ArrowRight,
  UserCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PawFoodGuide | Independent Canine Clinical Nutrition Database',
  description:
    'Learn about PawFoodGuide’s veterinary clinical advisory board, editorial standards, USDA FoodData Central integration, and zero-sponsorship independence pledge.',
  alternates: {
    canonical: 'https://pawfoodguide.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Users className="h-3.5 w-3.5 text-emerald-400" />
            <span>Editorial Board & Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            About PawFoodGuide
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            An independent, peer-reviewed canine nutrition database founded to eliminate guesswork, debunk urban myths, and protect dogs worldwide.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8 space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Founding Mission</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every day, millions of dog owners search the web asking: <em>&quot;Can my dog eat this?&quot;</em> Too often, the search results deliver either recycled AI summaries, conflicting advice, or alarming misinformation that fails to differentiate between harmless fruit flesh and lethal pits or seeds.
            </p>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              PawFoodGuide was established by a collaborative network of veterinary clinicians, canine nutritional researchers, and pet health data architects. Our sole mandate is to provide instant, definitive, and scientifically sound answers powered by direct USDA chemical assays and veterinary toxicology.
            </p>
          </div>

          {/* Clinical Advisory Board */}
          <div className="border-t border-slate-100 pt-8 space-y-6">
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Clinical Veterinary Advisory Board
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reviewer 1 */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-base">
                    Dr. Katherine Reynolds
                  </h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    DVM, DACVIM
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-900">
                  Board-Certified Veterinary Clinical Nutritionist
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dr. Reynolds completed her doctorate at Cornell University College of Veterinary Medicine followed by residency training in veterinary clinical nutrition. She has authored over 20 peer-reviewed papers on canine metabolic energy regulation and dietary interventions for obesity and kidney disease.
                </p>
              </div>

              {/* Reviewer 2 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-base">
                    Dr. Marcus Vance
                  </h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded-full">
                    BVSc, MRCVS
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-800">
                  Veterinary Surgeon & Emergency Triage Specialist
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dr. Vance is a Member of the Royal College of Veterinary Surgeons with 12 years of emergency trauma and soft-tissue surgical experience in the UK and Australia. He brings critical surgical insight into gastrointestinal foreign bodies, stone pit obstructions, and acute toxicosis triage.
                </p>
              </div>
            </div>
          </div>

          {/* Independence Disclosure */}
          <div className="rounded-2xl bg-slate-900 p-6 text-white space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>100% Commercial Independence Guarantee</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Zero Corporate Brand Sponsorships
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              PawFoodGuide does not accept funding, sponsorship, or promotional commissions from pet food manufacturers, conglomerate conglomerates, or supplement brands. All research citations and serving calculators are prepared with total editorial independence.
            </p>
          </div>

          {/* Editorial Integrity */}
          <div className="border-t border-slate-100 pt-6 space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Our Editorial Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="rounded-xl border border-slate-200 p-4">
                <strong className="block text-slate-900 font-bold mb-1">Empathetic Tone</strong>
                <span className="text-slate-600">Written with warmth, respect, and deep understanding of pet parents’ love for their dogs.</span>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <strong className="block text-slate-900 font-bold mb-1">Zero Placeholders</strong>
                <span className="text-slate-600">Every single guide provides authentic, complete data without superficial filler or shortcuts.</span>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <strong className="block text-slate-900 font-bold mb-1">Continuous Updates</strong>
                <span className="text-slate-600">Dossiers are regularly refreshed as new veterinary toxicology studies and assays are published.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/fruits"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition"
            >
              <span>Explore the Fruit Safety Database</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import TreatCalculator from '@/components/TreatCalculator';
import {
  Calculator,
  ShieldCheck,
  Scale,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Info,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veterinary Canine Calorie & 10% Treat Limit Calculator | PawFoodGuide',
  description:
    'Free veterinary dog calorie calculator. Computes Resting Energy Requirement (RER) and Maintenance Energy Requirement (MER) to determine safe fruit treat portion limits.',
  alternates: {
    canonical: 'https://pawfoodguide.com/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Calculator className="h-3.5 w-3.5 text-emerald-400" />
            <span>Veterinary Metabolic Energy Standard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Canine Calorie & Treat Limit Calculator
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Determine exact safe daily treat calories and fruit gram allowances using WSAVA-approved Resting Energy Requirement (RER) formulas and the strict 10% daily treat rule.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-8 space-y-12">
        {/* Core Calculator Tool */}
        <TreatCalculator initialFruitSlug="bananas" />

        {/* In-Depth Veterinary Guide on Canine Metabolic Equations */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-2">
              <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
              Clinical Nutrition Science
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Understanding the Veterinary 10% Daily Treat Rule
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Every board-certified veterinary nutritionist adheres to the 10% rule: complementary foods, fruits, training treats, and table scraps must never exceed 10% of a dog&apos;s total daily caloric intake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Flame className="h-4 w-4 text-amber-500" />
                Why the 10% Rule is Essential
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete and balanced commercial dog foods (or carefully formulated veterinary raw diets) are precisely engineered with essential amino acids, fatty acids, vitamins, and minerals. When treats exceed 10% of total calories, they dilute critical nutrients, leading to subclinical deficiencies and metabolic obesity.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Scale className="h-4 w-4 text-emerald-600" />
                The RER Mathematical Equation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Resting Energy Requirement (RER) represents the baseline energy needed for basic cellular and cardiovascular function at rest:
              </p>
              <div className="rounded-lg bg-white p-2.5 font-mono text-xs text-emerald-800 border border-slate-200">
                RER = 70 × (Body Weight in kg)<sup>0.75</sup>
              </div>
              <p className="text-[11px] text-slate-500">
                This exponential allometric scaling accounts for the fact that metabolic rate does not scale linearly with body weight.
              </p>
            </div>
          </div>

          {/* Life-Stage Multipliers Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Veterinary Maintenance Energy Multipliers (MER)
            </h3>
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4 font-bold">Canine Physiological Life Stage</th>
                    <th className="py-3 px-4 font-bold">MER Multiplier</th>
                    <th className="py-3 px-4 font-bold hidden sm:table-cell">Metabolic Consideration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Neutered Adult Dog</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">1.6 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Standard metabolic rate for spayed/neutered household dogs.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Intact Adult Dog</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">1.8 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Higher resting expenditure from endogenous sex hormones.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Active / Working / Agility Dog</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">2.0 – 3.0 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Requires elevated caloric intake for intense physical stamina.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Senior Dog (Geriatric)</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">1.4 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Reduced basal metabolic rate and diminished skeletal muscle mass.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Puppy (&lt; 4 months old)</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">3.0 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Rapid skeletal and cellular organ growth phase.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-slate-900">Weight Loss Management</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">1.0 – 1.2 × RER</td>
                    <td className="py-2.5 px-4 hidden sm:table-cell">Controlled deficit to induce steady, safe fat loss without muscle wasting.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Body Condition Scoring Overview */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 space-y-3">
            <h3 className="text-base font-bold text-emerald-950">
              The 9-Point Body Condition Scoring (BCS) Check
            </h3>
            <p className="text-xs text-emerald-900/90 leading-relaxed">
              Calculators provide mathematical estimates, but your dog&apos;s physical Body Condition Score (BCS) is the ultimate metric. In an ideal dog (BCS 4 or 5 out of 9):
            </p>
            <ul className="list-disc pl-5 text-xs text-emerald-900 space-y-1">
              <li>Ribs should be easily palpable under a thin layer of fat, with no excess fat covering.</li>
              <li>An observable waistline should be clearly visible when viewed from above.</li>
              <li>An abdominal tuck should be evident when viewed from the side profile.</li>
            </ul>
            <p className="text-[11px] text-emerald-800 pt-1">
              If your dog is BCS 6+ (overweight), restrict treat calories strictly and choose ultra-low-calorie fruits like fresh blueberries or seedless watermelon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

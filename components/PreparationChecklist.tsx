import React from 'react';
import { FruitArticle } from '@/lib/types';
import { Check, X, ShieldAlert, Sparkles, ChefHat } from 'lucide-react';

interface PreparationChecklistProps {
  fruit: FruitArticle;
}

export default function PreparationChecklist({ fruit }: PreparationChecklistProps) {
  const isToxic = fruit.safetyStatus === 'toxic';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
          <ChefHat className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Canine Culinary Preparation & Safety Checklist
          </h3>
          <p className="text-xs text-slate-500">
            Veterinary guidelines to avoid choking hazards, cyanide pits, and digestive distress
          </p>
        </div>
      </div>

      {/* Safe vs Forbidden Parts Matrix */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Safe Parts */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
            <Check className="h-4 w-4 text-emerald-600" />
            Approved Safe Edible Components
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {fruit.toxicologyRisks.safeParts.map((part) => (
              <li key={part} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{part}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Forbidden / Dangerous Parts */}
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-900 mb-2">
            <X className="h-4 w-4 text-red-600" />
            Strictly Prohibited / Hazardous Parts
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {fruit.toxicologyRisks.dangerousParts.map((part) => (
              <li key={part} className="flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span>{part}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Step by Step Action Checklist */}
      <div className="mt-6 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Step-by-Step Preparation Protocol:
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {fruit.preparationSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 transition hover:bg-slate-50"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xs font-black text-white">
                {step.stepNumber}
              </div>
              <div className="space-y-1 flex-1">
                <h5 className="text-sm font-bold text-slate-900">{step.title}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{step.instruction}</p>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-emerald-800 border border-emerald-100 mt-1">
                  <Sparkles className="h-3 w-3 text-emerald-600" />
                  <span>Vet Pro Tip: {step.vetTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weight Tiered Serving Breakdown */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <h4 className="text-sm font-bold text-slate-900 mb-3">
          Veterinary Weight-Tiered Portion Limits:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <span className="block font-bold text-slate-900">Toy Breeds (&lt; 20 lbs)</span>
            <span className="text-[10px] text-slate-500 block mb-1">e.g. Chihuahua, Yorkie, Pug</span>
            <p className="font-semibold text-emerald-800 text-xs leading-snug">
              {fruit.weightServingBreakdown.toy}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <span className="block font-bold text-slate-900">Small/Medium (20-50 lbs)</span>
            <span className="text-[10px] text-slate-500 block mb-1">e.g. Beagle, Corgi, Spaniel</span>
            <p className="font-semibold text-emerald-800 text-xs leading-snug">
              {fruit.weightServingBreakdown.smallMedium}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <span className="block font-bold text-slate-900">Large Breeds (50-90 lbs)</span>
            <span className="text-[10px] text-slate-500 block mb-1">e.g. Lab, Golden, Shepherd</span>
            <p className="font-semibold text-emerald-800 text-xs leading-snug">
              {fruit.weightServingBreakdown.large}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs">
            <span className="block font-bold text-slate-900">Giant Breeds (90+ lbs)</span>
            <span className="text-[10px] text-slate-500 block mb-1">e.g. Mastiff, Great Dane</span>
            <p className="font-semibold text-emerald-800 text-xs leading-snug">
              {fruit.weightServingBreakdown.giant}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-slate-500">
          <strong>Feeding Frequency:</strong> {fruit.weightServingBreakdown.frequency}
        </p>
      </div>
    </div>
  );
}

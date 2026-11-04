import React from 'react';
import { UsdaNutrition } from '@/lib/types';
import { Database, Activity, Check } from 'lucide-react';

interface NutritionalTableProps {
  usda: UsdaNutrition;
  fruitName: string;
}

export default function NutritionalTable({ usda, fruitName }: NutritionalTableProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Database className="h-3.5 w-3.5" />
            Food nutrition reference (per 100 g)
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {fruitName} Nutritional Composition (per 100g raw)
          </h3>
        </div>

        <div className="self-start sm:self-auto rounded-lg bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-900 border border-emerald-200">
          FDC ID: #{usda.fdcId}
        </div>
      </div>

      {/* Primary Macro Cards */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Energy</span>
          <div className="text-2xl font-black text-slate-900 mt-0.5">{usda.calories}</div>
          <span className="text-[10px] text-slate-500">kcal / 100g</span>
        </div>

        <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Natural Sugar</span>
          <div className="text-2xl font-black text-slate-900 mt-0.5">{usda.sugar}g</div>
          <span className="text-[10px] text-slate-500">fructose & glucose</span>
        </div>

        <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Dietary Fiber</span>
          <div className="text-2xl font-black text-slate-900 mt-0.5">{usda.fiber}g</div>
          <span className="text-[10px] text-slate-500">soluble & insoluble</span>
        </div>

        <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Hydration</span>
          <div className="text-2xl font-black text-slate-900 mt-0.5">{usda.water}%</div>
          <span className="text-[10px] text-slate-500">pure water content</span>
        </div>
      </div>

      {/* Detailed Nutrient Breakdown Table */}
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="py-2.5 px-4 font-bold">Nutrient Analyte</th>
              <th className="py-2.5 px-4 font-bold">Amount (per 100g)</th>
              <th className="py-2.5 px-4 font-bold hidden sm:table-cell">Canine Physiological Impact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="py-2.5 px-4 font-semibold text-slate-900">Potassium (K)</td>
              <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">{usda.potassium} mg</td>
              <td className="py-2.5 px-4 hidden sm:table-cell text-slate-600">
                Regulates heart rhythm, nerve impulse transmission, and cellular hydration balance.
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-slate-900">Vitamin C (Ascorbic Acid)</td>
              <td className="py-2.5 px-4 font-mono font-bold text-emerald-800">{usda.vitaminC} mg</td>
              <td className="py-2.5 px-4 hidden sm:table-cell text-slate-600">
                Neutralizes reactive oxygen radicals and supports collagen connective tissue synthesis.
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-slate-900">Crude Protein</td>
              <td className="py-2.5 px-4 font-mono">{usda.protein} g</td>
              <td className="py-2.5 px-4 hidden sm:table-cell text-slate-600">
                Plant-based supplementary amino acids (minimal nitrogenous renal burden).
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-slate-900">Crude Fat / Lipids</td>
              <td className="py-2.5 px-4 font-mono">{usda.fat} g</td>
              <td className="py-2.5 px-4 hidden sm:table-cell text-slate-600">
                Low lipid load (safe for breeds prone to hyperlipidemia and acute pancreatitis).
              </td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-semibold text-slate-900">Total Carbohydrates</td>
              <td className="py-2.5 px-4 font-mono">{usda.carbohydrates} g</td>
              <td className="py-2.5 px-4 hidden sm:table-cell text-slate-600">
                Provides gentle readily convertible glycogen for exercising sporting dogs.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Micronutrients List */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-bold text-slate-600">Active Phytochemicals:</span>
        {usda.keyMicronutrients.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-800"
          >
            <Check className="h-3 w-3 text-emerald-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

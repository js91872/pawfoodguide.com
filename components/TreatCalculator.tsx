'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import {
  BREED_PRESETS,
  LIFE_STAGE_MULTIPLIERS,
  calculateCanineCalorieAndFruitAllowance,
} from '@/lib/calculator-utils';
import {
  Calculator,
  Scale,
  Flame,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  Info,
  Sparkles,
  PhoneCall,
} from 'lucide-react';

interface TreatCalculatorProps {
  initialFruitSlug?: string;
  className?: string;
  compact?: boolean;
}

export default function TreatCalculator({
  initialFruitSlug = 'blueberries',
  className = '',
  compact = false,
}: TreatCalculatorProps) {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [weight, setWeight] = useState<number>(unit === 'lbs' ? 45 : 20.4);
  const [multiplier, setMultiplier] = useState<number>(1.6);
  const [selectedFruitSlug, setSelectedFruitSlug] = useState<string>(initialFruitSlug);
  const [showFormulaDetails, setShowFormulaDetails] = useState<boolean>(false);

  const selectedFruit = useMemo(() => {
    return (
      FRUITS_DATABASE.find((f) => f.slug === selectedFruitSlug) ||
      FRUITS_DATABASE[0]
    );
  }, [selectedFruitSlug]);

  const handleUnitToggle = (newUnit: 'lbs' | 'kg') => {
    if (newUnit === unit) return;
    if (newUnit === 'kg') {
      const newWeight = Math.round(weight * 0.45359237 * 10) / 10;
      setWeight(newWeight);
    } else {
      const newWeight = Math.round((weight / 0.45359237) * 10) / 10;
      setWeight(newWeight);
    }
    setUnit(newUnit);
  };

  const handlePresetClick = (preset: (typeof BREED_PRESETS)[0]) => {
    if (unit === 'lbs') {
      setWeight(preset.lbs);
    } else {
      setWeight(preset.kg);
    }
  };

  const isFruitToxic = selectedFruit.safetyStatus === 'toxic';

  const result = useMemo(() => {
    return calculateCanineCalorieAndFruitAllowance(
      weight,
      unit,
      multiplier,
      selectedFruit.usda.calories,
      isFruitToxic,
      selectedFruit.usda.sugar,
      selectedFruit.usda.fiber
    );
  }, [weight, unit, multiplier, selectedFruit, isFruitToxic]);

  return (
    <div
      id="treat-calculator"
      className={`rounded-3xl border border-slate-200/80 bg-white/95 p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            <Calculator className="h-3.5 w-3.5 text-emerald-600" />
            <span>Veterinary Nutrition Calculator</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            USDA Canine Calorie & Treat Calculator
          </h3>
          <p className="mt-1 text-sm text-slate-550 text-slate-600">
            Calculates Resting Energy Requirement (RER) and enforces the strict veterinary 10% treat rule.
          </p>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center gap-1 self-start rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => handleUnitToggle('lbs')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              unit === 'lbs'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pounds (lbs)
          </button>
          <button
            type="button"
            onClick={() => handleUnitToggle('kg')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
              unit === 'kg'
                ? 'bg-white text-emerald-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kilograms (kg)
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs vs Output */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Breed Presets */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Quick Breed Presets
            </label>
            <div className="flex flex-wrap gap-2">
              {BREED_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-800"
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Weight Input & Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="dog-weight-input" className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Scale className="h-4 w-4 text-emerald-600" />
                Dog Body Weight ({unit})
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="dog-weight-input"
                  type="number"
                  min={unit === 'lbs' ? 2 : 1}
                  max={unit === 'lbs' ? 220 : 100}
                  step={unit === 'lbs' ? 1 : 0.5}
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-20 rounded-lg border border-slate-300 px-2.5 py-1 text-right text-base font-bold text-slate-900 shadow-inner focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <span className="text-sm font-medium text-slate-600">{unit}</span>
              </div>
            </div>

            <input
              type="range"
              min={unit === 'lbs' ? 2 : 1}
              max={unit === 'lbs' ? 180 : 80}
              step={0.5}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-emerald-600"
              aria-label="Adjust dog weight"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>{unit === 'lbs' ? '2 lbs (Toy)' : '1 kg (Toy)'}</span>
              <span>{unit === 'lbs' ? '45 lbs (Avg)' : '20 kg (Avg)'}</span>
              <span>{unit === 'lbs' ? '180 lbs (Giant)' : '80 kg (Giant)'}</span>
            </div>
          </div>

          {/* Life Stage Multiplier */}
          <div>
            <label htmlFor="life-stage-select" className="text-sm font-semibold text-slate-800 block mb-2">
              Dog Life Stage & Activity Level
            </label>
            <select
              id="life-stage-select"
              value={multiplier}
              onChange={(e) => setMultiplier(parseFloat(e.target.value))}
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              {LIFE_STAGE_MULTIPLIERS.map((stage) => (
                <option key={stage.key} value={stage.value}>
                  {stage.label} ({stage.value}× RER)
                </option>
              ))}
            </select>
          </div>

          {/* Fruit Selector */}
          <div>
            <label htmlFor="fruit-select" className="text-sm font-semibold text-slate-800 block mb-2">
              Select Fruit for Calorie Calculation
            </label>
            <div className="relative">
              <select
                id="fruit-select"
                value={selectedFruitSlug}
                onChange={(e) => setSelectedFruitSlug(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                {FRUITS_DATABASE.map((fruit) => (
                  <option key={fruit.slug} value={fruit.slug}>
                    {fruit.name} — {fruit.safetyLabel} ({fruit.usda.calories} kcal/100g)
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-1.5 text-xs text-slate-500">
              Nutritional values pulled directly from verified USDA FoodData Central profile (FDC ID #{selectedFruit.usda.fdcId}).
            </p>
          </div>

          {/* Formula disclosure button */}
          <button
            type="button"
            onClick={() => setShowFormulaDetails(!showFormulaDetails)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <Info className="h-3.5 w-3.5" />
            <span>{showFormulaDetails ? 'Hide' : 'Show'} Veterinary Math Formula Details</span>
          </button>

          {showFormulaDetails && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs text-emerald-950 space-y-2">
              <p className="font-semibold text-emerald-900">Veterinary Metabolic Energy Equations:</p>
              <ul className="list-disc pl-4 space-y-1 text-emerald-900/90 font-mono text-[11px]">
                <li>Resting Energy Requirement (RER) = 70 × (Weight in kg)<sup>0.75</sup></li>
                <li>Maintenance Energy (MER) = RER × {multiplier} (Activity Multiplier)</li>
                <li>Max 10% Treat Rule = MER × 0.10</li>
                <li>Max Fruit Grams = Treat Allowance ÷ (Fruit kcal per gram)</li>
              </ul>
              <p className="text-[11px] text-emerald-800 pt-1">
                Aligned with American Animal Hospital Association (AAHA) and WSAVA Global Nutrition Guidelines.
              </p>
            </div>
          )}
        </div>

        {/* Right column: Results Card */}
        <div className="lg:col-span-5">
          <div
            className={`rounded-2xl border p-6 transition-all duration-300 ${
              isFruitToxic
                ? 'border-red-300 bg-red-50/90 shadow-red-100'
                : 'border-emerald-200 bg-gradient-to-b from-emerald-50/50 to-white shadow-emerald-50'
            }`}
          >
            {/* Status Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Calculation Verdict
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                  isFruitToxic
                    ? 'bg-red-600 text-white'
                    : selectedFruit.safetyStatus === 'caution'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                }`}
              >
                {isFruitToxic ? (
                  <AlertOctagon className="h-3.5 w-3.5" />
                ) : selectedFruit.safetyStatus === 'caution' ? (
                  <AlertTriangle className="h-3.5 w-3.5" />
                ) : (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                )}
                {selectedFruit.safetyLabel}
              </span>
            </div>

            {/* Toxic Alert View */}
            {isFruitToxic ? (
              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-red-600 p-4 text-white text-center">
                  <AlertOctagon className="h-8 w-8 mx-auto mb-1 animate-pulse" />
                  <h4 className="text-lg font-extrabold uppercase tracking-wide">
                    0 Grams Safe Allowance
                  </h4>
                  <p className="text-xs font-medium text-red-100 mt-1">
                    DO NOT FEED {selectedFruit.name.toUpperCase()} TO DOGS.
                  </p>
                </div>

                <div className="text-xs text-red-950 space-y-2 bg-white/80 rounded-xl p-4 border border-red-200">
                  <p className="font-bold text-red-900">
                    Clinical Danger: {selectedFruit.toxicologyRisks.toxicAgent}
                  </p>
                  <p className="leading-relaxed">
                    {selectedFruit.toxicologyRisks.description}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 text-white space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                    <PhoneCall className="h-4 w-4" />
                    Emergency Toxic Hotline
                  </div>
                  <p className="text-xs text-slate-300">
                    If your dog consumed {selectedFruit.name}, call Animal Poison Control immediately:
                  </p>
                  <a
                    href="tel:8884264435"
                    className="block text-center rounded-lg bg-red-600 py-2 text-sm font-black text-white hover:bg-red-700 transition"
                  >
                    (888) 426-4435 (ASPCA APCC 24/7)
                  </a>
                </div>
              </div>
            ) : (
              /* Safe / Caution Calculation View */
              <div className="mt-4 space-y-4">
                {/* Max Safe Grams Output */}
                <div className="rounded-xl bg-white p-4 border border-slate-200 text-center shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Recommended Daily Cap for {selectedFruit.name}
                  </span>
                  <div className="mt-1 flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl font-extrabold text-emerald-800 tracking-tight">
                      {result.recommendedGrams}
                    </span>
                    <span className="text-lg font-bold text-slate-600">grams/day</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    {result.portionVisualDescription}
                  </p>
                </div>

                {/* Energy Breakdown Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                    <div className="text-slate-500 text-[11px]">Daily Treat Budget</div>
                    <div className="text-base font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                      <Flame className="h-4 w-4 text-amber-500" />
                      {result.treatCalorieBudget} kcal
                    </div>
                    <div className="text-[10px] text-slate-400">10% of total diet</div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                    <div className="text-slate-500 text-[11px]">Total Daily Calories</div>
                    <div className="text-base font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                      <Sparkles className="h-4 w-4 text-emerald-600" />
                      {result.mer} kcal
                    </div>
                    <div className="text-[10px] text-slate-400">RER: {result.rer} kcal</div>
                  </div>
                </div>

                {/* Sugar & Fiber Stats */}
                <div className="rounded-xl bg-white p-3.5 border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Natural Sugar in portion:</span>
                    <span className="font-bold text-slate-900">{result.sugarGrams}g</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Prebiotic Fiber in portion:</span>
                    <span className="font-bold text-slate-900">{result.fiberGrams}g</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>USDA FDC ID:</span>
                    <span className="font-mono text-[11px] text-emerald-700 font-semibold">
                      #{selectedFruit.usda.fdcId}
                    </span>
                  </div>
                </div>

                {/* Link to deep dive */}
                <Link
                  href={`/fruits/${selectedFruit.slug}`}
                  className="block text-center rounded-xl bg-emerald-700 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-800 transition"
                >
                  Read Complete {selectedFruit.name} Veterinary Dossier →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

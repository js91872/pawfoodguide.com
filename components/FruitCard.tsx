import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FruitArticle } from '@/lib/types';
import { CheckCircle2, AlertTriangle, AlertOctagon, Sparkles, ArrowRight } from 'lucide-react';

interface FruitCardProps {
  fruit: FruitArticle;
}

export default function FruitCard({ fruit }: FruitCardProps) {
  const isToxic = fruit.safetyStatus === 'toxic';
  const isCaution = fruit.safetyStatus === 'caution';
  const isSuperfood = fruit.safetyStatus === 'superfood';

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl">
      {/* Image container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={fruit.heroImage}
          alt={fruit.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* Safety Badge Floating */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black shadow-md backdrop-blur-md ${
              isToxic
                ? 'bg-red-600 text-white shadow-red-900/20'
                : isCaution
                ? 'bg-amber-500 text-white shadow-amber-900/20'
                : isSuperfood
                ? 'bg-emerald-600 text-white shadow-emerald-900/20'
                : 'bg-emerald-700 text-white shadow-emerald-900/20'
            }`}
          >
            {isToxic ? (
              <AlertOctagon className="h-3.5 w-3.5" />
            ) : isCaution ? (
              <AlertTriangle className="h-3.5 w-3.5" />
            ) : isSuperfood ? (
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5" />
            )}
            {fruit.safetyLabel}
          </span>
        </div>

        {/* USDA Calorie tag floating bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="font-medium text-slate-200 drop-shadow-sm">
            {fruit.scientificName}
          </span>
          <span className="rounded-md bg-black/50 px-2 py-0.5 font-bold backdrop-blur-xs">
            {fruit.usda.calories} kcal / 100g
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition">
            {fruit.name}
          </h3>
          <span className="text-[11px] font-semibold text-slate-600">
            Nutrition per 100g
          </span>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {fruit.zeroClickAnswer}
        </p>

        {/* Quick Nutrition Micro-Chips */}
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center text-xs">
          <div className="rounded-lg bg-slate-50 p-1.5">
            <span className="block text-[10px] text-slate-600">Sugar</span>
            <span className="font-bold text-slate-800">{fruit.usda.sugar}g</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-1.5">
            <span className="block text-[10px] text-slate-600">Fiber</span>
            <span className="font-bold text-slate-800">{fruit.usda.fiber}g</span>
          </div>
          <div className="rounded-lg bg-slate-50 p-1.5">
            <span className="block text-[10px] text-slate-600">Water</span>
            <span className="font-bold text-slate-800">{fruit.usda.water}%</span>
          </div>
        </div>

        {/* Primary Search Query and CTA */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
            Read safety and serving tips
          </span>
          <Link
            href={`/fruits/${fruit.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Dossier</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

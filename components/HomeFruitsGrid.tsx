'use client';

import React, { useState } from 'react';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import FruitCard from './FruitCard';
import { Sparkles, CheckCircle2, AlertTriangle, AlertOctagon, Filter } from 'lucide-react';

export default function HomeFruitsGrid() {
  const [filter, setFilter] = useState<'all' | 'superfood' | 'safe' | 'caution' | 'toxic'>('all');

  const filteredFruits = FRUITS_DATABASE.filter((fruit) => {
    if (filter === 'all') return true;
    return fruit.safetyStatus === filter;
  });

  return (
    <section id="fruits-database" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              Fruit food-safety guides
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Can dogs eat these fruits?
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Find common warnings, safe preparation tips, and estimated nutrition. Choose a safety category to explore:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-slate-100 p-1.5 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 16 Fruits ({FRUITS_DATABASE.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('superfood')}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                filter === 'superfood'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-800 hover:bg-emerald-50'
              }`}
            >
              <Sparkles className="h-3 w-3" />
              Fruit treats
            </button>
            <button
              type="button"
              onClick={() => setFilter('safe')}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                filter === 'safe'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="h-3 w-3" />
              Safe in Moderation
            </button>
            <button
              type="button"
              onClick={() => setFilter('caution')}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                filter === 'caution'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-amber-800 hover:bg-amber-50'
              }`}
            >
              <AlertTriangle className="h-3 w-3" />
              Caution
            </button>
            <button
              type="button"
              onClick={() => setFilter('toxic')}
              className={`inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                filter === 'toxic'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-red-700 hover:bg-red-50'
              }`}
            >
              <AlertOctagon className="h-3 w-3" />
              Unsafe foods
            </button>
          </div>
        </div>

        {/* Fruit Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFruits.map((fruit) => (
            <FruitCard key={fruit.slug} fruit={fruit} />
          ))}
        </div>
      </div>
    </section>
  );
}

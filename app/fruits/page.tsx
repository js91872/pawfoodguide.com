import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import FruitCard from '@/components/FruitCard';
import { Sparkles, Database, ShieldCheck, Search, Filter } from 'lucide-react';
import FruitsDirectoryClient from './FruitsDirectoryClient';

export const metadata: Metadata = {
  title: 'Canine Fruit Safety Database (16-Fruit Clinical Index) | PawFoodGuide',
  description:
    'Comprehensive directory of canine fruit safety. Verified USDA FoodData Central nutritional breakdowns, toxicity risks, and safe serving sizes for dogs.',
  alternates: {
    canonical: 'https://pawfoodguide.com/fruits',
  },
};

export default function FruitsDirectoryPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Database className="h-3.5 w-3.5 text-emerald-400" />
            <span>Complete 16-Fruit Clinical Nutrition Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Canine Fruit Safety & Nutritional Database
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Instant answers on what fruits dogs can and cannot eat. Fully cross-referenced with USDA FoodData Central chemical assays and ASPCA poison control protocols.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              16 Comprehensive Dossiers
            </span>
            <span>•</span>
            <span>Zero AI Filler</span>
            <span>•</span>
            <span>100% Peer-Reviewed</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Directory */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <FruitsDirectoryClient />
      </div>
    </div>
  );
}

import React from 'react';
import { MarketMetrics } from '@/lib/types';
import { TrendingUp, DollarSign, BarChart3, Globe2, Search } from 'lucide-react';

interface MarketMetricsCardProps {
  metrics: MarketMetrics;
  fruitName: string;
}

export default function MarketMetricsCard({ metrics, fruitName }: MarketMetricsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Canine Search Intent & Organic Market Intel
            </h4>
            <p className="text-xs text-slate-500">
              Ubersuggest Tier-1 search volumes and advertiser CPC benchmarks
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
          <Search className="h-3 w-3 text-emerald-600" />
          <span>Intent: {metrics.searchIntent}</span>
        </div>
      </div>

      {/* Metrics Stat Grid */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* US Volume */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
          <span className="text-[11px] font-semibold text-slate-500 block">US Monthly Searches</span>
          <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
            {metrics.monthlySearchVolumeUS.toLocaleString()}
          </span>
          <span className="text-[10px] text-emerald-600 font-medium">High Intent Tier-1</span>
        </div>

        {/* UK Volume */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
          <span className="text-[11px] font-semibold text-slate-500 block">UK Monthly Searches</span>
          <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
            {metrics.monthlySearchVolumeUK.toLocaleString()}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">Commonwealth</span>
        </div>

        {/* Global Volume */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
          <span className="text-[11px] font-semibold text-slate-500 block">Global Monthly Query</span>
          <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
            {metrics.globalSearchVolume.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-slate-400">
            <Globe2 className="h-3 w-3" />
            <span>Worldwide</span>
          </div>
        </div>

        {/* CPC & Difficulty */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs">
          <span className="text-[11px] font-semibold text-slate-500 block">CPC / SEO Difficulty</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-xl font-extrabold text-emerald-800">
              ${metrics.cpcUSD.toFixed(2)}
            </span>
            <span className="text-xs font-semibold text-slate-400">/ SD {metrics.seoDifficulty}</span>
          </div>
          <span className="text-[10px] text-slate-400">Commercial Ad Value</span>
        </div>
      </div>

      {/* High Intent Long Tail Variants */}
      {metrics.highIntentVariants && metrics.highIntentVariants.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-700 block mb-2">
            Top High-CPC Semantic Search Variations:
          </span>
          <div className="flex flex-wrap gap-2">
            {metrics.highIntentVariants.map((item) => (
              <div
                key={item.keyword}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 shadow-2xs"
              >
                <span className="font-medium text-slate-900">&quot;{item.keyword}&quot;</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                  {item.volume.toLocaleString()}/mo • ${item.cpc.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

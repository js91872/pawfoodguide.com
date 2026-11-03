'use client';

import React, { useState, useMemo } from 'react';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import FruitCard from '@/components/FruitCard';
import {
  Search,
  Filter,
  ArrowUpDown,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  X,
} from 'lucide-react';

export default function FruitsDirectoryClient() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'superfood' | 'safe' | 'caution' | 'toxic'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'calories_asc' | 'calories_desc' | 'sugar_asc' | 'fiber_desc'>('name');

  const processedFruits = useMemo(() => {
    return FRUITS_DATABASE.filter((fruit) => {
      const matchesSearch =
        fruit.name.toLowerCase().includes(search.toLowerCase()) ||
        fruit.scientificName.toLowerCase().includes(search.toLowerCase()) ||
        fruit.zeroClickAnswer.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' ? true : fruit.safetyStatus === statusFilter;

      return matchesSearch && matchesStatus;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'calories_asc') return a.usda.calories - b.usda.calories;
      if (sortBy === 'calories_desc') return b.usda.calories - a.usda.calories;
      if (sortBy === 'sugar_asc') return a.usda.sugar - b.usda.sugar;
      if (sortBy === 'fiber_desc') return b.usda.fiber - a.usda.fiber;
      return 0;
    });
  }, [search, statusFilter, sortBy]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Toolbar */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by fruit name (e.g. Watermelon, Blueberries, Cherries)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="md:col-span-4 relative">
            <div className="flex items-center gap-1.5 w-full">
              <ArrowUpDown className="h-4 w-4 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-semibold text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="name">Sort by Name (A-Z)</option>
                <option value="calories_asc">Calories: Low to High</option>
                <option value="calories_desc">Calories: High to Low</option>
                <option value="sugar_asc">Sugar: Low to High</option>
                <option value="fiber_desc">Fiber: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Safety Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Filter Safety:
          </span>
          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Fruits ({FRUITS_DATABASE.length})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('superfood')}
            className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === 'superfood'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            Superfoods (3)
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('safe')}
            className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === 'safe'
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="h-3 w-3" />
            Safe in Moderation (9)
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('caution')}
            className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === 'caution'
                ? 'bg-amber-600 text-white'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
            }`}
          >
            <AlertTriangle className="h-3 w-3" />
            Caution Required (2)
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('toxic')}
            className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              statusFilter === 'toxic'
                ? 'bg-red-600 text-white'
                : 'bg-red-50 text-red-900 hover:bg-red-100'
            }`}
          >
            <AlertOctagon className="h-3 w-3" />
            Deadly Toxic (2)
          </button>
        </div>
      </div>

      {/* Results Count & Grid */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <span>
            Showing <strong>{processedFruits.length}</strong> of {FRUITS_DATABASE.length} fruits
          </span>
          {statusFilter !== 'all' && (
            <button
              type="button"
              onClick={() => {
                setStatusFilter('all');
                setSearch('');
              }}
              className="text-emerald-700 font-bold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {processedFruits.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
            <p className="text-base font-semibold text-slate-800">No fruits found matching your search</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your filters or searching for another fruit.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {processedFruits.map((fruit) => (
              <FruitCard key={fruit.slug} fruit={fruit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { Search, X, AlertOctagon, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const searchInputId = useId();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredFruits = FRUITS_DATABASE.filter((fruit) => {
    const q = query.toLowerCase();
    return (
      fruit.name.toLowerCase().includes(q) ||
      fruit.scientificName.toLowerCase().includes(q) ||
      fruit.zeroClickAnswer.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200">
          <label htmlFor={searchInputId} className="sr-only">
            Search food safety guides
          </label>
          <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
          <input
            id={searchInputId}
            type="text"
            autoFocus
            placeholder="Search fruit guides (e.g., bananas, grapes, apples)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg mr-2"
              aria-label="Clear search input"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-100">
          {filteredFruits.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              <p>No matching fruit guide for &quot;{query}&quot;.</p>
              <p className="mt-2">For vegetables, prepared foods, and common dangerous ingredients, visit our general food safety guide.</p>
              <Link href="/foods" onClick={onClose} className="mt-4 inline-block rounded-lg bg-emerald-700 px-4 py-2 font-bold text-white">Browse foods dogs can eat</Link>
            </div>
          ) : (
            filteredFruits.map((fruit) => {
              const isToxic = fruit.safetyStatus === 'toxic';
              const isCaution = fruit.safetyStatus === 'caution';
              return (
                <Link
                  key={fruit.slug}
                  href={`/fruits/${fruit.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition group"
                >
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={fruit.heroImage}
                      alt={fruit.name}
                      fill
                      sizes="48px"
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition">
                        {fruit.name}
                      </span>
                      <span className="text-xs text-slate-400 italic hidden sm:inline">
                        {fruit.scientificName}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {fruit.zeroClickAnswer}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        isToxic
                          ? 'bg-red-100 text-red-800'
                          : isCaution
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {isToxic ? (
                        <AlertOctagon className="h-3 w-3" />
                      ) : isCaution ? (
                        <AlertTriangle className="h-3 w-3" />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" />
                      )}
                      {fruit.safetyLabel}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-emerald-600 transition" />
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Quick canine nutrition lookup</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}

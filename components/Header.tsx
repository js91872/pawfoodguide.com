'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  Menu,
  X,
  ShieldAlert,
  Calculator,
  BookOpen,
  Info,
  ShieldCheck,
} from 'lucide-react';
import SearchModal from './SearchModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Foods Dogs Can Eat', href: '/foods', icon: BookOpen },
    { name: 'Fruit Guide', href: '/fruits', icon: BookOpen },
    { name: 'Treat Calculator', href: '/calculator', icon: Calculator },
    { name: 'Our Sources', href: '/veterinary-standards', icon: ShieldCheck },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Emergency', href: '/emergency', icon: ShieldAlert },
  ];

  return (
    <>
      <div className="border-b border-red-900 bg-red-800 py-2 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 text-center text-xs font-semibold sm:text-sm">
          <ShieldAlert className="h-4 w-4"/>
          <span>Dog ate something dangerous? Call your local emergency veterinarian.</span>
          <Link href="/emergency" className="font-bold underline hover:text-red-100">Emergency guidance</Link>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Custom Vector SVG Animal Paw Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="PawFoodGuide Homepage"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
                {/* Custom Vector Paw with Golden Pads & Emerald Leaf Accent */}
                <svg
                  viewBox="0 0 100 100"
                  className="h-8 w-8 drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer glow circle */}
                  <circle cx="50" cy="50" r="46" fill="#047857" opacity="0.15" />
                  
                  {/* Paw Toe Pads in Soft Golden Amber */}
                  <ellipse cx="28" cy="34" rx="9" ry="12" fill="#fbbf24" transform="rotate(-18 28 34)" />
                  <ellipse cx="44" cy="24" rx="9" ry="13" fill="#f59e0b" />
                  <ellipse cx="62" cy="25" rx="9" ry="13" fill="#f59e0b" />
                  <ellipse cx="78" cy="36" rx="9" ry="12" fill="#fbbf24" transform="rotate(18 78 36)" />
                  
                  {/* Central Metacarpal Pad (Golden Amber with Soft Gradient) */}
                  <path
                    d="M32 58 C32 46, 74 46, 74 58 C74 72, 64 78, 53 78 C42 78, 32 72, 32 58 Z"
                    fill="#d97706"
                  />
                  
                  {/* Emerald Botanical Leaf Accent sprouting from paw pad */}
                  <path
                    d="M53 72 C53 72, 70 66, 78 52 C78 52, 76 68, 62 76 C55 80, 53 72, 53 72 Z"
                    fill="#34d399"
                  />
                  <path
                    d="M59 71 Q 68 64 73 57"
                    stroke="#065f46"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900">
                    PawFood<span className="text-emerald-700">Guide</span>
                  </span>
                  <span className="rounded-md bg-emerald-100/80 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-800">
                    Food safety
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-wide text-slate-500">
                  Everyday food safety for dogs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-xs xl:text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 font-bold'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons: Quick Search & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-emerald-300 hover:bg-white hover:text-slate-900 transition shadow-xs"
                aria-label="Search dog food guides"
              >
                <Search className="h-4 w-4 text-emerald-700" />
                <span className="hidden sm:inline">Find food guides...</span>
                <kbd className="hidden sm:inline-block rounded bg-slate-200/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-600">
                  Search
                </kbd>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4 text-emerald-700" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <Link href="/emergency" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-red-700 py-3 text-sm font-bold text-white">
                <ShieldAlert className="h-4 w-4"/> Emergency advice
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}

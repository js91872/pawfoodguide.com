import React from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { FRUITS_DATABASE } from '@/lib/fruits-data';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Trust Badges & Emergency Ribbon */}
      <div className="border-b border-slate-800 bg-slate-950/70 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Trust badge 1 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">USDA FoodData Central</div>
                <div className="text-xs text-slate-400">Exact laboratory nutrient profiles</div>
              </div>
            </div>

            {/* Trust badge 2 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">ASPCA Toxicology Aligned</div>
                <div className="text-xs text-slate-400">Peer-reviewed poison prevention standards</div>
              </div>
            </div>

            {/* Trust badge 3 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Veterinary Board Reviewed</div>
                <div className="text-xs text-slate-400">DACVIM & MRCVS clinical oversight</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white font-bold">
                🐾
              </div>
              <span className="text-xl font-black text-white">
                PawFood<span className="text-emerald-400">Guide</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              PawFoodGuide is an independent canine clinical nutrition research portal engineered to provide dog parents with peer-reviewed fruit safety data, USDA macronutrient breakdowns, and real-time metabolic energy (RER) treat calculators.
            </p>

            {/* Emergency Hotline Box */}
            <div className="rounded-xl border border-red-900/50 bg-red-950/40 p-3.5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                <PhoneCall className="h-3.5 w-3.5" />
                <span>24/7 Animal Poison Control Helplines</span>
              </div>
              <p className="text-[11px] text-slate-300">
                ASPCA APCC: <a href="tel:8884264435" className="font-bold text-white hover:underline">(888) 426-4435</a>
              </p>
              <p className="text-[11px] text-slate-300">
                Pet Poison Helpline: <a href="tel:8557647661" className="font-bold text-white hover:underline">(855) 764-7661</a>
              </p>
            </div>
          </div>

          {/* Fruit Database Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Fruit Guides (A-Z)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {FRUITS_DATABASE.slice(0, 8).map((fruit) => (
                <li key={fruit.slug}>
                  <Link
                    href={`/fruits/${fruit.slug}`}
                    className="hover:text-emerald-400 transition"
                  >
                    Can Dogs Eat {fruit.name}?
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              More Fruit Dossiers
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {FRUITS_DATABASE.slice(8, 16).map((fruit) => (
                <li key={fruit.slug}>
                  <Link
                    href={`/fruits/${fruit.slug}`}
                    className="hover:text-emerald-400 transition"
                  >
                    Can Dogs Eat {fruit.name}?
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Standards & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/fruits" className="hover:text-emerald-400 transition">
                  16-Fruit Database Index
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition">
                  RER Treat Calculator
                </Link>
              </li>
              <li>
                <Link href="/veterinary-standards" className="hover:text-emerald-400 transition">
                  Research Standards
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Our Board
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-emerald-400 transition text-amber-300">
                  Veterinary Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition">
                  Privacy Policy (GDPR/AdSense)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Medical Disclaimer notice */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong>CLINICAL VETERINARY DISCLAIMER:</strong> The information published on PawFoodGuide.com is provided strictly for educational and informational purposes. It does not constitute formal veterinary medical advice, diagnosis, or individualized treatment plans. Always consult with a licensed, board-certified veterinary medical practitioner or veterinary clinical nutritionist regarding your dog’s specific dietary allergies, health conditions, or after suspected ingestion of toxic botanicals.
          </p>
        </div>

        {/* Bottom copyright & compliance */}
        <div className="mt-8 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} PawFoodGuide.com. All rights reserved. Peer-reviewed canine nutritional database.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>USDA FoodData Central Synced</span>
            <span>•</span>
            <span>Zero Commercial Brand Sponsorship</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | PawFoodGuide',
  description:
    'Terms of service and acceptable use agreement for PawFoodGuide. Covers intellectual property rights, non-clinical disclaimers, and user obligations.',
  alternates: {
    canonical: 'https://pawfoodguide.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using the PawFoodGuide website and calorie calculation tools.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>https://pawfoodguide.com</strong> (the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not access the Service.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Intellectual Property Rights</h2>
          <p>
            All original text, interactive calculators, software code, custom vector logos, research organization, and graphical designs on PawFoodGuide are the exclusive intellectual property of PawFoodGuide and are protected by international copyright, trademark, and intellectual property laws.
          </p>
          <p>
            You may print or share individual excerpts for personal, non-commercial use provided that full attribution with a clickable hyperlink to <code>https://pawfoodguide.com</code> is retained. Scraping, republishing entire dossiers, or training automated AI agents on our copyrighted proprietary databases without express written consent is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. No Veterinary Medical Advice</h2>
          <p>
            You expressly acknowledge and agree that PawFoodGuide is an informational and educational research resource. The content and calculators provided do not constitute veterinary medical diagnosis, prescription, or clinical treatment plans. Always consult with a licensed veterinarian before altering your pet&apos;s diet or after suspected poisoning.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Limitation of Liability</h2>
          <p>
            In no event shall PawFoodGuide, its founders, operators, employees, or veterinary medical reviewers be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, or consequential damages of any kind, including without limitation veterinary medical bills, arising from your use of or reliance upon any information provided on this platform.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Governing Law</h2>
          <p>
            These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with standard international commerce regulations.
          </p>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>PawFoodGuide Legal Office</span>
            <Link href="/" className="text-emerald-700 hover:underline">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

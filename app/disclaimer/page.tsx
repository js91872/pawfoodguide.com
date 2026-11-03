import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldAlert,
  PhoneCall,
  AlertOctagon,
  HeartPulse,
  Info,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veterinary Medical Disclaimer & Emergency Protocols | PawFoodGuide',
  description:
    'Important veterinary disclaimer regarding informational use of PawFoodGuide. Includes 24/7 emergency poison hotline contacts and clinical protocol guidance.',
  alternates: {
    canonical: 'https://pawfoodguide.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-b from-red-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-900/40 px-3.5 py-1 text-xs font-semibold text-red-300 mb-4">
            <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
            <span>Clinical Notice & Emergency Guidance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Veterinary Medical Disclaimer
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Please review this critical notice regarding the non-clinical, educational nature of PawFoodGuide content and our emergency poisoning triage protocols.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8 space-y-8">
        {/* Urgent Emergency Callout Box */}
        <div className="rounded-3xl border-2 border-red-500 bg-red-50 p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
              <AlertOctagon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-xl font-black text-red-950">
                Is Your Dog In Immediate Medical Distress?
              </h2>
              <p className="text-xs text-red-800">
                Do not rely on this website for emergency diagnosis. Contact a veterinary poison specialist immediately.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href="tel:8884264435"
              className="flex items-center justify-between rounded-xl bg-red-600 p-4 text-white hover:bg-red-700 transition shadow-sm"
            >
              <div>
                <span className="block text-[11px] font-semibold text-red-100 uppercase">
                  ASPCA Animal Poison Control (APCC)
                </span>
                <span className="text-lg font-black">(888) 426-4435</span>
              </div>
              <PhoneCall className="h-5 w-5 shrink-0" />
            </a>

            <a
              href="tel:8557647661"
              className="flex items-center justify-between rounded-xl bg-slate-900 p-4 text-white hover:bg-slate-800 transition shadow-sm"
            >
              <div>
                <span className="block text-[11px] font-semibold text-slate-400 uppercase">
                  Pet Poison Helpline
                </span>
                <span className="text-lg font-black">(855) 764-7661</span>
              </div>
              <PhoneCall className="h-5 w-5 shrink-0 text-amber-400" />
            </a>
          </div>
          <p className="text-[11px] text-red-800">
            *Helpline consultation fees may apply. Available 24 hours a day, 365 days a year across North America and globally.
          </p>
        </div>

        {/* Detailed Medical Disclaimer */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h3 className="text-xl font-bold text-slate-900">
            1. Nature of Website Content: Educational & Informational Only
          </h3>
          <p>
            The content, formulas, calculators, and articles published on <strong>https://pawfoodguide.com</strong> are provided exclusively for educational, general informational, and research purposes. Content on this website is engineered to reflect veterinary nutrition science, but it <strong>does not constitute personalized veterinary medical advice, diagnosis, prescription, or clinical treatment plans</strong>.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-2">
            2. No Veterinarian-Client-Patient Relationship (VCPR)
          </h3>
          <p>
            Browsing this site, using our interactive calorie and treat calculators, or reading our nutritional dossiers does not establish a Veterinarian-Client-Patient Relationship (VCPR) between you, your canine companion, and any of PawFoodGuide&apos;s editors, authors, or clinical reviewers.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-2">
            3. Individual Canine Idiosyncrasies & Health Conditions
          </h3>
          <p>
            Every canine is biologically unique. Factors such as underlying chronic kidney disease (CKD), diabetes mellitus, congestive heart failure, acute or chronic pancreatitis, inflammatory bowel disease (IBD), urinary urolithiasis (bladder stones), age, and known food allergies can alter how an individual dog metabolizes specific fruits.
          </p>
          <p>
            Never introduce a new food, even an item classified as a &quot;safe superfood&quot; (such as blueberries or strawberries), without consulting your dog&apos;s primary licensed veterinarian if your pet is on prescription therapeutic diets or medications.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-2">
            4. Limitation of Liability
          </h3>
          <p>
            Under no circumstances shall PawFoodGuide, its owners, operators, writers, or board-certified clinical reviewers be held liable for any direct, indirect, incidental, consequential, special, or exemplary damages, illnesses, surgical emergencies, or veterinary medical expenses arising out of the use, interpretation, or reliance upon any material published on this platform.
          </p>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>← Return to Home</span>
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Explore Calorie Calculator →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

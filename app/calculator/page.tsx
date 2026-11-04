import type { Metadata } from 'next';
import TreatCalculator from '@/components/TreatCalculator';
import Link from 'next/link';
export const metadata:Metadata={
 title:'Dog Treat Calorie Calculator (kg & lb)',
 description:'Estimate your adult dog’s daily calories, total treat budget and calories in a planned fruit portion. Supports kilograms and pounds.',
 alternates:{canonical:'https://pawfoodguide.com/calculator'},
};
export default function CalculatorPage(){return <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6"><div className="mx-auto max-w-4xl space-y-7">
  <header><p className="font-bold text-emerald-700">Free dog feeding tool</p><h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-5xl">Dog treat calorie calculator</h1><p className="mt-4 text-lg leading-relaxed text-slate-600">Estimate a daily calorie budget for all treats and see how much energy is in a planned fruit portion. Metric and imperial weight units are supported.</p></header>
  <TreatCalculator/>
  <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-bold text-slate-900">How does the calculator work?</h2><p className="mt-3 leading-relaxed text-slate-700">First, it estimates resting energy requirements from body weight. Next, it applies a broad adult-dog activity factor, then calculates 10% of that estimate as an indicative combined treat budget. It estimates calories in the entered fruit amount based on approximate per-100-gram reference values.</p><p className="mt-3 leading-relaxed text-slate-700">The result is not a safe maximum serving for any particular ingredient. Large fruit portions can cause digestive upset even when calories appear acceptable. The tool cannot assess allergies, medical conditions, body condition, pregnancy, growth or special diets.</p><p className="mt-3 text-sm leading-relaxed text-slate-600">For accurate calorie recommendations, speak with your veterinarian, especially if your dog is not a healthy adult. WSAVA’s <a href="https://wsava.org/global-guidelines/global-nutrition-guidelines/" className="font-semibold text-emerald-700 underline">nutrition guidelines</a> explain the importance of individual nutrition assessment.</p></section>
  <p className="text-sm text-slate-600">Looking for a specific food? <Link href="/foods" className="font-semibold text-emerald-700 underline">Browse foods dogs can and cannot eat.</Link></p>
 </div></main>}

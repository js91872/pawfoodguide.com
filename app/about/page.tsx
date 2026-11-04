import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
 title: 'About PawFoodGuide | Dog Food Safety Made Simple',
 description: 'Why PawFoodGuide exists and how we help dog owners understand everyday food safety.',
 alternates: { canonical: 'https://pawfoodguide.com/about' },
};
export default function AboutPage() {
 return <main className="min-h-screen bg-slate-50 px-4 py-14">
  <div className="mx-auto max-w-3xl space-y-8">
   <header><p className="font-bold text-emerald-700">About us</p><h1 className="mt-2 text-4xl font-extrabold text-slate-900">Helping dog owners make safer food choices</h1><p className="mt-4 text-lg leading-relaxed text-slate-600">PawFoodGuide is a practical resource for everyday questions such as “Can my dog eat this?”</p></header>
   <section className="rounded-2xl border border-slate-200 bg-white p-7 space-y-4 text-slate-700">
    <h2 className="text-2xl font-bold text-slate-900">What you will find here</h2>
    <p>Our guides focus on whether a food is appropriate for dogs, which parts to avoid, common warning signs, and how to prepare an occasional treat. We also offer a treat-calorie estimator and food nutrition reference tables.</p>
    <p>We aim to make this information easy to read and useful on a phone, whether you are checking fruit, vegetables, or everyday ingredients.</p>
    <h2 className="pt-3 text-2xl font-bold text-slate-900">Evidence and veterinary input</h2>
    <p>We refer readers to established sources such as the ASPCA, Cornell University College of Veterinary Medicine, WSAVA, and USDA FoodData Central. These organizations do not sponsor or endorse PawFoodGuide.</p>
    <p>Information on the site is educational, not a diagnosis or a substitute for your veterinarian. We do not claim a guide has been individually veterinarian-reviewed unless its reviewer and review date are documented.</p>
    <p>We welcome qualified veterinary review and will identify the reviewing professional with permission once a review is completed.</p>
    <h2 className="pt-3 text-2xl font-bold text-slate-900">Our commitment</h2>
    <p>We prioritize clear safety answers over sensational claims. Advertising or affiliate relationships, if introduced, will be disclosed and must not determine our safety recommendations.</p>
    <div className="flex flex-wrap gap-3 pt-3"><Link href="/foods" className="rounded-lg bg-emerald-700 px-4 py-2 font-bold text-white">Explore food safety</Link><Link href="/veterinary-standards" className="rounded-lg border border-slate-300 px-4 py-2 font-bold text-emerald-800">Our sources and standards</Link></div>
   </section>
  </div>
 </main>;
}

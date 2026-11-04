import Link from 'next/link';
import { ArrowRight, AlertTriangle, Calculator, BookOpen, ShieldCheck } from 'lucide-react';
import HomeFruitsGrid from '@/components/HomeFruitsGrid';
import TreatCalculator from '@/components/TreatCalculator';

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold text-emerald-200">Simple dog food answers, in one place</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            Can dogs eat this food?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-emerald-50 sm:text-lg">
            Check common foods before sharing a bite. Find safety warnings, preparation tips, and practical treat guidance for your dog.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/foods" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-950 hover:bg-emerald-50">Explore foods <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/fruits" className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 px-6 py-3 font-bold text-white hover:bg-emerald-800">Can dogs eat fruit? <BookOpen className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Popular questions about dog food</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Start with these common foods and ingredients. When in doubt, ask your veterinarian.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Can dogs eat bananas?', href: '/fruits/bananas', detail: 'How to serve small, peeled pieces' },
            { name: 'Can dogs eat apples?', href: '/fruits/apples', detail: 'What to do with the core and seeds' },
            { name: 'Can dogs eat grapes?', href: '/fruits/grapes', detail: 'Important poisoning warning' },
            { name: 'Can dogs eat blueberries?', href: '/fruits/blueberries', detail: 'Preparation and treat portions' },
            { name: 'Can dogs eat watermelon?', href: '/fruits/watermelon', detail: 'Remove rind and seeds' },
            { name: 'What foods should dogs avoid?', href: '/foods', detail: 'Common foods and ingredients to check' },
          ].map(item => (
            <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-emerald-300">
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">Read guide <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>

      <HomeFruitsGrid />

      <section id="treat-calculator" className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-center gap-3">
            <Calculator className="h-7 w-7 text-emerald-700" />
            <div><h2 className="text-2xl font-extrabold text-slate-900">How many treats can my dog have?</h2>
            <p className="mt-1 text-sm text-slate-600">Estimate a daily treat allowance. This is a starting point, not a veterinary feeding plan.</p></div>
          </div>
          <TreatCalculator initialFruitSlug="blueberries" />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <ShieldCheck className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-3 text-xl font-bold text-slate-900">How we approach food safety</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Our guides summarize food preparation, common hazards, and nutrition references. We link to established sources and distinguish general guidance from individual veterinary advice.</p>
            <Link href="/veterinary-standards" className="mt-4 inline-flex items-center gap-1 font-bold text-emerald-700">Read our editorial approach <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-7">
            <AlertTriangle className="h-7 w-7 text-red-700" />
            <h2 className="mt-3 text-xl font-bold text-red-950">Has your dog eaten something dangerous?</h2>
            <p className="mt-2 text-sm leading-relaxed text-red-900">For suspected poisoning, contact a veterinarian immediately. In the US, ASPCA Animal Poison Control is available at (888) 426-4435; consultation fees may apply.</p>
            <a href="tel:8884264435" className="mt-4 inline-block font-bold text-red-800 underline">Call ASPCA Poison Control (US)</a>
          </div>
        </div>
      </section>
    </div>
  );
}

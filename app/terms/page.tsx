import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata:Metadata={title:'Terms of Use | PawFoodGuide',description:'Terms for using PawFoodGuide information and tools.',alternates:{canonical:'https://pawfoodguide.com/terms'}};
export default function TermsPage(){return <main className="min-h-screen bg-slate-50 px-4 py-14"><section className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-slate-200 bg-white p-7 text-slate-700">
<h1 className="text-4xl font-extrabold text-slate-900">Terms of use</h1>
<p>Last updated: November 4, 2026.</p>
<h2 className="text-xl font-bold text-slate-900">Educational use</h2><p>PawFoodGuide provides general information about dog foods, hazards and treats. The information is not a substitute for veterinary diagnosis or treatment. Always seek local veterinary advice after suspected poisoning.</p>
<h2 className="text-xl font-bold text-slate-900">Calculator estimates</h2><p>Results are approximate and depend on information entered by visitors. The site cannot determine safe serving amounts or medical suitability for your dog.</p>
<h2 className="text-xl font-bold text-slate-900">External resources</h2><p>Links to public agencies and veterinary organizations are for reference only. We are not affiliated with or endorsed by them. External sites have their own terms and privacy policies.</p>
<h2 className="text-xl font-bold text-slate-900">Content and availability</h2><p>We aim to provide accurate and accessible information, but cannot guarantee completeness, uninterrupted availability or suitability for every dog. Information may be revised without notice.</p>
<h2 className="text-xl font-bold text-slate-900">Intellectual property</h2><p>Original website text, layout and code may be protected by applicable law. Third-party trademarks, photographs and reference works belong to their respective owners.</p>
<p className="border-t border-slate-200 pt-4 text-sm">See our <Link href="/privacy-policy" className="font-semibold text-emerald-700 underline">privacy policy</Link> and <Link href="/disclaimer" className="font-semibold text-emerald-700 underline">veterinary disclaimer</Link>.</p>
</section></main>}

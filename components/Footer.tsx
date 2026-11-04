import Link from 'next/link';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
export default function Footer(){
 return <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
   <div className="grid gap-8 md:grid-cols-4">
    <div><Link href="/" className="text-xl font-black text-white">PawFood<span className="text-emerald-400">Guide</span></Link>
     <p className="mt-3 text-sm leading-relaxed text-slate-400">Practical information about everyday foods, preparation and treats for dog owners around the world.</p>
     <p className="mt-4 text-sm text-slate-400">For possible poisoning or a swallowed object, call your local veterinarian or emergency animal hospital right away.</p>
     <Link href="/emergency" className="mt-3 inline-block text-sm font-bold text-red-300 underline">Emergency guidance by region</Link>
    </div>
    <div><h2 className="font-bold text-white">Food safety</h2><ul className="mt-3 space-y-2 text-sm"><li><Link href="/foods" className="hover:text-white">All food guides</Link></li><li><Link href="/foods#foods-to-avoid" className="hover:text-white">Foods to avoid</Link></li><li><Link href="/fruits" className="hover:text-white">Fruit guides</Link></li><li><Link href="/calculator" className="hover:text-white">Treat calculator</Link></li></ul></div>
    <div><h2 className="font-bold text-white">Fruit questions</h2><ul className="mt-3 space-y-2 text-sm">{FRUITS_DATABASE.slice(0,7).map(f=><li key={f.slug}><Link href={`/fruits/${f.slug}`} className="hover:text-white">Can dogs eat {f.name.toLowerCase()}?</Link></li>)}</ul></div>
    <div><h2 className="font-bold text-white">Our website</h2><ul className="mt-3 space-y-2 text-sm"><li><Link href="/about" className="hover:text-white">About PawFoodGuide</Link></li><li><Link href="/veterinary-standards" className="hover:text-white">Sources and editorial standards</Link></li><li><Link href="/disclaimer" className="hover:text-white">Medical disclaimer</Link></li><li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li><li><Link href="/terms" className="hover:text-white">Terms of use</Link></li></ul></div>
   </div>
   <div className="mt-10 border-t border-slate-700 pt-5 text-xs leading-relaxed text-slate-400">© {new Date().getFullYear()} PawFoodGuide. Educational resource for an international audience. Not individualized veterinary advice. References are provided for transparency and do not imply endorsement.</div>
  </div>
 </footer>;
}

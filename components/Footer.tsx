import Link from 'next/link';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
export default function Footer() {
 return <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
   <div className="grid gap-8 md:grid-cols-4">
    <div><Link href="/" className="text-xl font-black text-white">PawFood<span className="text-emerald-400">Guide</span></Link>
    <p className="mt-3 text-sm leading-relaxed text-slate-400">Simple food safety answers, preparation tips, and occasional treat guidance for dog owners.</p>
    <p className="mt-4 text-xs text-slate-400">If your dog may have eaten something poisonous, call your veterinarian promptly. US ASPCA Poison Control: <a href="tel:8884264435" className="font-bold text-white underline">(888) 426-4435</a> (fees may apply).</p></div>
    <div><h2 className="font-bold text-white">Explore</h2><ul className="mt-3 space-y-2 text-sm">
     <li><Link href="/foods" className="hover:text-white">Foods dogs can eat</Link></li><li><Link href="/fruits" className="hover:text-white">Fruit safety guide</Link></li><li><Link href="/calculator" className="hover:text-white">Treat calculator</Link></li>
    </ul></div>
    <div><h2 className="font-bold text-white">Common fruit questions</h2><ul className="mt-3 space-y-2 text-sm">{FRUITS_DATABASE.slice(0,7).map(f=><li key={f.slug}><Link href={`/fruits/${f.slug}`} className="hover:text-white">Can dogs eat {f.name.toLowerCase()}?</Link></li>)}</ul></div>
    <div><h2 className="font-bold text-white">About and policies</h2><ul className="mt-3 space-y-2 text-sm">
      <li><Link href="/about" className="hover:text-white">About PawFoodGuide</Link></li><li><Link href="/veterinary-standards" className="hover:text-white">Editorial sources</Link></li><li><Link href="/disclaimer" className="hover:text-white">Medical disclaimer</Link></li><li><Link href="/privacy-policy" className="hover:text-white">Privacy policy</Link></li><li><Link href="/terms" className="hover:text-white">Terms of use</Link></li>
    </ul></div>
   </div>
   <div className="mt-10 border-t border-slate-700 pt-5 text-xs text-slate-400"><p>© {new Date().getFullYear()} PawFoodGuide. Educational information only; not veterinary advice. The site is not affiliated with or endorsed by the referenced organizations.</p></div>
  </div>
 </footer>;
}

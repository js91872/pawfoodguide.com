import Link from 'next/link';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import FruitCard from '@/components/FruitCard';
export default function HomeFruitsGrid(){return <section id="fruits-database" className="border-t border-slate-200 bg-slate-50 py-14">
 <div className="mx-auto max-w-7xl px-4 sm:px-6">
 <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Can dogs eat these fruits?</h2>
 <p className="mt-2 max-w-2xl text-slate-600">Check preparation, choking hazards, seeds, pits and poisoning risks before serving.</p>
 <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{FRUITS_DATABASE.slice(0,8).map(fruit=><FruitCard key={fruit.slug} fruit={fruit}/>)}</div>
 <Link href="/fruits" className="mt-6 inline-block rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800">See all 16 fruit guides</Link>
 </div></section>}

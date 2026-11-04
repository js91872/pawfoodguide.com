import type { Metadata } from 'next';
import FruitsDirectoryClient from './FruitsDirectoryClient';
export const metadata:Metadata={title:'Can Dogs Eat Fruit? 16 Fruit Safety Guides',description:'Apples, grapes, mangoes, bananas, berries and more: check which fruits dogs can eat and what seeds, pits or skins to avoid.',alternates:{canonical:'https://pawfoodguide.com/fruits'}};
export default function FruitsDirectoryPage(){return <main className="min-h-screen bg-slate-50 pb-16">
 <header className="bg-gradient-to-r from-emerald-950 to-slate-900 px-4 py-14 text-white"><div className="mx-auto max-w-6xl">
 <p className="font-semibold text-emerald-300">Fruit safety library</p><h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Can dogs eat fruit?</h1><p className="mt-4 max-w-2xl text-lg text-slate-200">Learn which fruits dogs can try in small amounts, which need extra care and which must be avoided.</p></div></header>
 <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6"><FruitsDirectoryClient/></div>
 </main>}

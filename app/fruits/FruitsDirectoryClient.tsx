'use client';
import { useMemo,useState } from 'react';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { getFruitAdvice } from '@/lib/fruit-advice';
import FruitCard from '@/components/FruitCard';
export default function FruitsDirectoryClient(){
 const [search,setSearch]=useState('');
 const [status,setStatus]=useState<'all'|'safe'|'caution'|'unsafe'>('all');
 const matching=useMemo(()=>FRUITS_DATABASE.filter(f=>{
  const a=getFruitAdvice(f.slug);
  return (f.name.toLowerCase().includes(search.toLowerCase())||a?.answer.toLowerCase().includes(search.toLowerCase()))&&(status==='all'||a?.status===status);
 }).sort((a,b)=>a.name.localeCompare(b.name)),[search,status]);
 return <div>
 <div className="rounded-2xl border border-slate-200 bg-white p-5">
  <label htmlFor="fruit-search" className="block text-sm font-bold text-slate-800">Find a fruit</label>
  <input id="fruit-search" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Try apples, kiwi, grapes..." className="mt-2 w-full rounded-xl border border-slate-300 p-3 text-slate-900 focus:border-emerald-500 focus:outline-none"/>
  <div className="mt-4 flex flex-wrap gap-2">{([['all','All fruits'],['safe','Small amounts'],['caution','Use caution'],['unsafe','Avoid']] as const).map(([id,label])=><button key={id} type="button" onClick={()=>setStatus(id)} aria-pressed={status===id} className={`rounded-full px-4 py-2 text-sm font-semibold ${status===id?'bg-emerald-800 text-white':'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{label}</button>)}</div>
 </div>
 <p className="mt-5 text-sm text-slate-600">{matching.length} of {FRUITS_DATABASE.length} fruit guides</p>
 {matching.length?<div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{matching.map(f=><FruitCard key={f.slug} fruit={f}/>)}</div>:<p className="mt-5 rounded-xl bg-white p-6 text-slate-700">No matching fruit. Try another name or clear the filter.</p>}
 </div>;
}

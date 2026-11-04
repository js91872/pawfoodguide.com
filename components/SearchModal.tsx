'use client';
import { useEffect,useId,useMemo,useState } from 'react';
import Link from 'next/link';
import { Search,X } from 'lucide-react';
import { FOOD_GUIDES } from '@/lib/food-guides';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { getFruitAdvice } from '@/lib/fruit-advice';
type Props={isOpen:boolean;onClose:()=>void};
export default function SearchModal({isOpen,onClose}:Props){
 const [query,setQuery]=useState('');
 const inputId=useId();
 useEffect(()=>{
  const key=(event:KeyboardEvent)=>{if(event.key==='Escape')onClose();};
  document.addEventListener('keydown',key);
  return ()=>document.removeEventListener('keydown',key);
 },[onClose]);
 const matches=useMemo(()=>{
  const q=query.trim().toLowerCase();
  const items=[
   ...FOOD_GUIDES.map(food=>({name:food.name,url:`/food/can-dogs-eat-${food.slug}`,summary:food.answer,keywords:food.aliases?.join(' ')??''})),
   ...FRUITS_DATABASE.map(fruit=>({name:fruit.name,url:`/food/can-dogs-eat-${fruit.slug}`,summary:getFruitAdvice(fruit.slug)?.answer??'',keywords:''})),
  ];
  if(!q)return items.slice(0,12);
  return items.filter(item=>`${item.name} ${item.summary} ${item.keywords}`.toLowerCase().includes(q)).slice(0,18);
 },[query]);
 if(!isOpen)return null;
 return <div role="presentation" className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/70 px-4 pt-12 sm:pt-20" onMouseDown={event=>{if(event.target===event.currentTarget)onClose();}}>
  <div role="dialog" aria-modal="true" aria-label="Find a food safety guide" className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
   <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4"><Search className="h-5 w-5 text-emerald-700"/><label htmlFor={inputId} className="sr-only">Find a food safety guide</label>
   <input autoFocus id={inputId} type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search carrots, rice, mango, chocolate..." className="min-w-0 flex-1 bg-transparent text-base text-slate-900 outline-none"/>
   <button type="button" onClick={onClose} aria-label="Close food search" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"><X className="h-5 w-5"/></button></div>
   <div className="max-h-[65vh] overflow-y-auto p-3">
    {matches.length?<ul className="space-y-1">{matches.map(item=><li key={item.url}><Link href={item.url} onClick={onClose} className="block rounded-xl px-4 py-3 hover:bg-emerald-50"><strong className="block text-sm text-slate-900">Can dogs eat {item.name.toLowerCase()}?</strong><span className="mt-1 block text-xs leading-relaxed text-slate-600">{item.summary}</span></Link></li>)}</ul>:<div className="p-6 text-center"><p className="text-sm font-semibold text-slate-800">No exact guide found.</p><p className="mt-2 text-sm text-slate-600">Try a shorter food name or browse all foods.</p></div>}
   </div><div className="border-t border-slate-100 bg-slate-50 p-3 text-center"><Link href="/foods" onClick={onClose} className="text-sm font-bold text-emerald-700 underline">Browse all food guides</Link></div>
  </div>
 </div>;
}

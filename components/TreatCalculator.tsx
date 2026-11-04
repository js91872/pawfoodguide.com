'use client';
import { useMemo, useState } from 'react';
import { FRUITS_DATABASE } from '@/lib/fruits-data';
import { getFruitAdvice } from '@/lib/fruit-advice';

const SAFE_FRUITS=FRUITS_DATABASE.filter(f=>getFruitAdvice(f.slug)?.status==='safe');
const DOG_FACTORS=[
 {key:'adult',name:'Typical neutered adult (estimate)',factor:1.6},
 {key:'intact',name:'Typical intact adult (estimate)',factor:1.8},
 {key:'less-active',name:'Less active adult (estimate)',factor:1.4},
 {key:'active',name:'Active adult (estimate)',factor:2.0},
];
export default function TreatCalculator({initialFruitSlug='blueberries'}:{initialFruitSlug?:string}){
 const [unit,setUnit]=useState<'kg'|'lb'>('kg');
 const [weight,setWeight]=useState('10');
 const [activity,setActivity]=useState('adult');
 const [fruitSlug,setFruitSlug]=useState(()=>SAFE_FRUITS.some(f=>f.slug===initialFruitSlug)?initialFruitSlug:'blueberries');
 const [grams,setGrams]=useState('15');
 const result=useMemo(()=>{
  const w=Number(weight),g=Number(grams),factor=DOG_FACTORS.find(x=>x.key===activity)?.factor??1.6;
  if(!Number.isFinite(w)||w<=0||w>150||(unit==='lb'&&w>330)||!Number.isFinite(g)||g<0||g>2000)return null;
  const kg=unit==='kg'?w:w*0.45359237;
  if(kg<0.5||kg>150)return null;
  const rer=70*Math.pow(kg,0.75);
  const daily=rer*factor;
  const budget=daily*0.1;
  const selected=SAFE_FRUITS.find(f=>f.slug===fruitSlug)??SAFE_FRUITS[0];
  const portion=(selected?.caloriesPer100g??0)*g/100;
  return {daily:Math.round(daily),budget:Math.round(budget),portion:Math.round(portion*10)/10,remaining:Math.max(0,Math.round((budget-portion)*10)/10),exceeds:portion>budget,name:selected?.name??'fruit',kg};
 },[weight,unit,activity,fruitSlug,grams]);
 return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
  <h3 className="text-xl font-bold text-slate-900">Dog treat calorie estimator</h3>
  <p className="mt-2 text-sm leading-relaxed text-slate-600">Estimate calories available for <strong>all treats combined</strong>, then check how many calories are in your planned fruit portion. This is not a recommended portion or an individual feeding plan.</p>
  <div className="mt-5 grid gap-4 sm:grid-cols-2">
   <div><label htmlFor="dog-weight" className="block text-sm font-semibold text-slate-800">Dog&apos;s weight</label><div className="mt-2 flex gap-2"><input id="dog-weight" inputMode="decimal" type="number" min="0.5" max={unit==='kg'?150:330} step="0.1" value={weight} onChange={e=>setWeight(e.target.value)} className="min-w-0 flex-1 rounded-lg border border-slate-300 p-2.5 text-slate-900"/><select aria-label="Weight unit" value={unit} onChange={e=>{const next=e.target.value as 'kg'|'lb';const w=Number(weight);setWeight(Number.isFinite(w)&&w>0?String(Math.round((next==='lb'?w*2.2046226218:w/2.2046226218)*10)/10):weight);setUnit(next);}} className="rounded-lg border border-slate-300 p-2 text-slate-900"><option value="kg">kg</option><option value="lb">lb</option></select></div></div>
   <div><label htmlFor="activity" className="block text-sm font-semibold text-slate-800">Adult dog activity</label><select id="activity" value={activity} onChange={e=>setActivity(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-2.5 text-slate-900">{DOG_FACTORS.map(x=><option key={x.key} value={x.key}>{x.name}</option>)}</select></div>
   <div><label htmlFor="fruit" className="block text-sm font-semibold text-slate-800">Fruit (plain, prepared flesh)</label><select id="fruit" value={fruitSlug} onChange={e=>setFruitSlug(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-2.5 text-slate-900">{SAFE_FRUITS.map(f=><option key={f.slug} value={f.slug}>{f.name}</option>)}</select></div>
   <div><label htmlFor="fruit-grams" className="block text-sm font-semibold text-slate-800">Planned fruit amount (grams)</label><input id="fruit-grams" type="number" inputMode="decimal" min="0" max="2000" value={grams} onChange={e=>setGrams(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 p-2.5 text-slate-900"/></div>
  </div>
  {result?<div aria-live="polite" className="mt-5 grid gap-3 sm:grid-cols-3">
   <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs font-semibold text-slate-600">Estimated daily calories</p><p className="mt-1 text-2xl font-extrabold text-slate-900">{result.daily} kcal</p></div>
   <div className="rounded-xl bg-emerald-50 p-4"><p className="text-xs font-semibold text-emerald-900">All-treat allowance (10%)</p><p className="mt-1 text-2xl font-extrabold text-emerald-900">{result.budget} kcal</p></div>
   <div className={`rounded-xl p-4 ${result.exceeds?'bg-red-50':'bg-slate-50'}`}><p className="text-xs font-semibold text-slate-700">Planned {result.name.toLowerCase()} portion</p><p className="mt-1 text-2xl font-extrabold text-slate-900">{result.portion} kcal</p></div>
  </div>:<p role="alert" className="mt-4 text-sm font-semibold text-red-700">Enter a valid weight (0.5–150 kg) and a planned amount between 0 and 2,000 g.</p>}
  {result&&<p className={`mt-4 rounded-xl p-3 text-sm leading-relaxed ${result.exceeds?'bg-red-50 text-red-900':'bg-emerald-50 text-emerald-950'}`}>{result.exceeds?'Your planned portion alone exceeds the estimated daily allowance for all treats.':'Your planned portion is within the estimated calorie budget for all treats.'} Even when the calories fit, this does not establish a safe portion size; avoid large amounts, choking hazards, seeds and pits. Count other treats too.</p>}
  <p className="mt-4 text-xs leading-relaxed text-slate-600">Calculation: RER = 70 × body weight in kg to the power of 0.75. Indicative daily calories = RER × activity factor. Individual needs vary widely, and the estimated 10% allowance is not a dietary prescription. Not intended for puppies, pregnant or nursing dogs, dogs with medical conditions, or weight-loss programmes. Fruit calories are approximate reference values for raw edible flesh.</p>
  <p className="mt-2 text-xs text-slate-600">Source: <a href="https://wsava.org/wp-content/uploads/2024/06/Feeding-treats-to-your-dog-v2.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">WSAVA – Feeding treats to your dog</a>.</p>
 </div>;
}

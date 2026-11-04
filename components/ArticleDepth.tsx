import Link from 'next/link';
import { FOOD_DETAILS, FRUIT_DETAILS } from '@/lib/article-details';
import type { FoodSafety } from '@/lib/food-guides';

type Props={
 name:string;slug:string;kind:'food'|'fruit';status:FoodSafety;
 answer:string;preparation:string[];avoid:string;emergency:string;
};

export default function ArticleDepth({name,slug,kind,status,answer,preparation,avoid,emergency}:Props){
 const detail=(kind==='fruit'?FRUIT_DETAILS:FOOD_DETAILS)[slug];
 const isUnsafe=status==='unsafe';
 const isCaution=status==='caution';
 const label=name.toLowerCase();
 const faqs=[
  {
   q:`Can dogs eat ${label} safely?`,
   a:answer+' '+(isUnsafe?'Do not offer any amount as a treat.':isCaution?'Check ingredients, preparation and your dog’s health before considering it.':'Offer it only as an occasional extra to a complete, balanced diet.'),
  },
  {
   q:`How much ${label} can a dog eat?`,
   a:isUnsafe?'No amount is recommended. Keep this food out of reach and contact a veterinarian after suspected ingestion.':'There is no universal safe number of pieces or grams for every dog. A dog’s size, body condition, medical conditions, usual diet and other treats all matter. Start very small; the WSAVA 10% guideline is for all treats combined, not a target quantity of this food.',
  },
  {
   q:`Can puppies eat ${label}?`,
   a:isUnsafe?'No. Puppies should never be deliberately given this food, and suspected ingestion needs urgent veterinary assessment.':'Growing puppies need a complete and balanced puppy diet. New treats may be unsuitable for very young puppies or those with digestive problems. Ask your veterinarian before introducing new foods, and never replace puppy meals with treats.',
  },
  {
   q:`Is ${label} better raw or cooked for dogs?`,
   a:isUnsafe?'Neither raw nor cooked versions should be fed deliberately. Preparation does not necessarily remove the hazard.':kind==='fruit'?'The guidance here is for plain, appropriately prepared fruit. '+preparation[0]+' Avoid cooking with sugar, spices or artificial sweeteners.':'It depends on the ingredient. '+preparation.slice(0,2).join(' ')+' Do not add salt, oil, seasonings or sauces unless your veterinarian has specifically advised otherwise.',
  },
  {
   q:`What should I avoid when giving ${label} to my dog?`,
   a:avoid,
  },
  {
   q:`What if my dog already ate ${label}?`,
   a:emergency+' If your dog is struggling to breathe, choking, collapsing, trembling or repeatedly vomiting, contact an emergency veterinary service immediately. Do not try to induce vomiting without veterinary instruction.',
  },
  {
   q:`Can dogs with allergies or medical conditions eat ${label}?`,
   a:'Do not assume general feeding advice applies to dogs with diabetes, pancreatitis, kidney disease, food allergies, obesity or a prescribed veterinary diet. Their treatment plan and individual health needs take priority. Ask the treating veterinarian before offering new foods.',
  },
 ];
 return <div className="space-y-7">
  <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
   <h2 className="text-2xl font-extrabold text-slate-900">Why preparation and portion size matter</h2>
   <p className="mt-4 leading-7 text-slate-700">{detail?.context??'The suitability of a food depends on which part is eaten, how it is prepared, other ingredients and the dog’s individual needs.'}</p>
   <p className="mt-4 leading-7 text-slate-700">{detail?.practical??preparation.join(' ')}</p>
   <h3 className="mt-6 text-lg font-bold text-slate-900">Before sharing food from your plate</h3>
   <p className="mt-2 leading-7 text-slate-700">{detail?.shopping??'Check the complete ingredient list. Plain foods differ from prepared dishes with sauces, spices and sweeteners.'}</p>
   <p className="mt-4 leading-7 text-slate-700">{isUnsafe?`For ${label}, prevention is more useful than portion estimates. Keep the ingredient, leftovers and packaging out of reach, especially when cooking or entertaining.`:isCaution?`For ${label}, both the amount and preparation matter. If there is uncertainty about the ingredients or the dog’s health, choose a known suitable dog treat instead.`:`For ${label}, a few small pieces are a better starting point than a full portion meant for a person. A dog can enjoy occasional food variety without relying on human food for required nutrients.`}</p>
  </section>
  <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
   <h2 className="text-2xl font-extrabold text-slate-900">A practical checklist for dog owners</h2>
   <ul className="mt-4 space-y-3 text-slate-700">
    {[
      'Identify the exact ingredient and check whether skin, seeds, pits, stems, bones or other parts are different from the edible portion.',
      'Read ingredient labels for added sugar substitutes, onion, garlic, chocolate, alcohol or excessive salt where relevant.',
      'Choose an amount appropriate to the dog’s size and feeding history; do not use calorie estimates as a guarantee of safety.',
      'Introduce new treats gradually, and stop feeding if vomiting, diarrhoea, itching or unusual behaviour appears.',
      'Keep a complete, balanced dog diet as the main source of nutrition and provide fresh drinking water.',
    ].map((line,i)=><li key={line} className="flex gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">{i+1}</span><span className="leading-7">{line}</span></li>)}
   </ul>
   <p className="mt-5 text-sm leading-6 text-slate-600">The checklist is general information. If the food is known to be toxic, do not try a small amount as a test.</p>
  </section>
  <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
   <h2 className="text-2xl font-extrabold text-slate-900">Frequently asked questions about {label}</h2>
   <p className="mt-2 text-sm text-slate-600">Answers focus on everyday feeding decisions, not medical diagnosis.</p>
   <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
    {faqs.map(({q,a},i)=><details key={q} className="group py-4" open={i===0}>
      <summary className="cursor-pointer list-none pr-5 text-base font-bold text-slate-900 marker:content-none">
       {q} <span aria-hidden className="float-right text-emerald-700 group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 pr-5 text-sm leading-7 text-slate-700">{a}</p>
    </details>)}
   </div>
  </section>
  <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
   <h2 className="text-xl font-bold text-slate-900">Still unsure about this food?</h2>
   <p className="mt-2 leading-7 text-slate-700">If you do not know exactly what your dog ate, or your dog has an illness or a prescribed diet, contact your local veterinarian. For possible poisoning or swallowed pits, bones or other objects, get urgent advice rather than relying on a search result.</p>
   <div className="mt-4 flex flex-wrap gap-3">
     <Link href="/emergency" className="rounded-lg bg-red-700 px-4 py-2 text-sm font-bold text-white">Emergency guidance</Link>
     <Link href={kind==='fruit'?'/fruits':'/foods'} className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-bold text-emerald-900">Browse more foods</Link>
   </div>
  </section>
 </div>;
}

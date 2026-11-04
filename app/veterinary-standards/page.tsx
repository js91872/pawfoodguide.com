import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {title:'Editorial Standards & Sources | PawFoodGuide',description:'How PawFoodGuide researches food safety advice and what veterinary review means.',alternates:{canonical:'https://pawfoodguide.com/veterinary-standards'}};
const sources=[
 {name:'ASPCA Animal Poison Control',url:'https://www.aspca.org/pet-care/aspca-poison-control',detail:'Poisoning concerns and emergency guidance'},
 {name:'Cornell University – grape and raisin toxicity',url:'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/grape-and-raisin-toxicity',detail:'Urgent guidance for dog owners'},
 {name:'WSAVA Global Nutrition Guidelines',url:'https://wsava.org/global-guidelines/global-nutrition-guidelines/',detail:'Individual nutrition assessment and feeding advice'},
 {name:'USDA FoodData Central',url:'https://fdc.nal.usda.gov/',detail:'Reference nutrient values for human foods'},
 {name:'FDA – Complete and Balanced Pet Food',url:'https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food',detail:'Understanding the nutritional adequacy statement'},
];
export default function StandardsPage(){return <main className="min-h-screen bg-slate-50 px-4 py-14"><div className="mx-auto max-w-3xl space-y-8">
<header><p className="font-bold text-emerald-700">Editorial approach</p><h1 className="mt-2 text-4xl font-extrabold text-slate-900">How we research dog food guides</h1><p className="mt-4 text-slate-600">Safety first, plain language, and transparent limits on what our information can tell you.</p></header>
<section className="rounded-2xl border border-slate-200 bg-white p-7 space-y-5 text-slate-700">
<h2 className="text-2xl font-bold text-slate-900">What goes into a guide</h2>
<ol className="list-decimal space-y-3 pl-6"><li>Identify the food and whether different parts (flesh, skin, seed, pit, stem) carry different risks.</li><li>Separate established poisoning hazards from ordinary preparation and choking concerns.</li><li>Use food composition data as general reference, not as a prediction of benefits for an individual dog.</li><li>Explain that treats are extras and should generally provide no more than 10% of daily calories.</li><li>Prompt owners to contact their veterinarian for emergencies, medical conditions, allergies, or prescribed diets.</li></ol>
<h2 className="pt-2 text-2xl font-bold text-slate-900">Veterinary review status</h2><p>We do not present the site as independently peer-reviewed or endorsed by professional associations. A named reviewer and date will be displayed only after a verifiable review has taken place. Existing content should be treated as general educational information until such review.</p>
<h2 className="pt-2 text-2xl font-bold text-slate-900">Independent reference sources</h2><ul className="space-y-3">{sources.map(s=><li key={s.url}><a target="_blank" rel="noopener noreferrer" href={s.url} className="font-bold text-emerald-700 underline">{s.name}</a><p className="text-sm text-slate-600">{s.detail}</p></li>)}</ul>
<p className="border-t border-slate-200 pt-4 text-sm">Citing a source does not mean that source has checked or endorsed this website. Nutrient values vary by variety, ripeness, and preparation.</p>
</section><Link className="font-bold text-emerald-700" href="/foods">Browse dog food guidance →</Link>
</div></main>}

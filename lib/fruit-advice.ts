import { REFERENCES } from './food-guides';

export type FruitAdvice = {
  answer: string;
  why: string;
  serve: string[];
  risks: string[];
  emergency: string;
  sources: string[];
  status: 'safe' | 'caution' | 'unsafe';
};

export const FRUIT_ADVICE: Record<string, FruitAdvice> = {
 bananas: {
  status:'safe',answer:'Yes. Dogs can eat small amounts of peeled, ripe banana.',why:'Banana is an occasional treat, not a necessary part of a dog’s diet. Its sugars and calories still count toward the daily treat allowance.',
  serve:['Peel completely.','Cut into small bite-sized pieces.','Start with a small amount and observe how your dog tolerates it.'],
  risks:['Large amounts may cause digestive upset.','The peel can be difficult to digest and large pieces can obstruct the gut.'],
  emergency:'Contact a veterinarian if your dog swallowed a large peel or has repeated vomiting, pain or difficulty passing stool.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 strawberries: {
  status:'safe',answer:'Yes. Fresh, washed strawberries can be offered to many dogs in small amounts.',why:'They are a treat, not a substitute for balanced dog food. The amount matters more than claims about specific nutrients.',
  serve:['Wash thoroughly and remove leaves and stems.','Cut into small pieces for your dog’s size.','Serve plain and start with one or two bites.'],
  risks:['Large amounts can cause stomach upset.','Strawberry desserts, syrups and jams often contain too much sugar or unsafe ingredients.'],
  emergency:'Seek veterinary advice if an unsafe sweetener was present or symptoms persist.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 apples: {
  status:'safe',answer:'Yes. Dogs can eat small pieces of washed apple flesh with the core and seeds removed.',why:'Apple slices offer a crunchy treat, but large portions still add sugar and calories.',
  serve:['Wash the apple.','Remove the core, seeds and stem.','Cut the flesh into small pieces; peel if needed for tolerance.'],
  risks:['The core is a choking or blockage hazard.','Apple seeds contain compounds that can release cyanide when chewed; do not feed them deliberately.'],
  emergency:'Contact a veterinarian if a core was swallowed and your dog seems unwell, or if a large number of seeds were chewed.',
  sources:[REFERENCES.aspca,REFERENCES.rspca,REFERENCES.wsava],
 },
 blueberries: {
  status:'safe',answer:'Yes. Plain blueberries are an occasional treat for most healthy dogs.',why:'Small berries make convenient treats, but even low-calorie foods are extras, not a meal.',
  serve:['Wash the berries.','For tiny dogs or fast eaters, crush or cut berries to reduce choking risk.','Start with a few, not a large bowl.'],
  risks:['Whole berries can be a choking risk for some dogs.','Muffins and sweetened blueberry products often contain additional ingredients.'],
  emergency:'Seek help for choking, persistent vomiting or an unsafe ingredient in a blueberry product.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 pineapple: {
  status:'safe',answer:'Yes. A little fresh pineapple flesh is generally suitable for dogs.',why:'It is sweet and acidic; some dogs develop loose stools if fed too much.',
  serve:['Remove the tough peel, spiny crown and hard core.','Cut only the soft flesh into small pieces.','Offer plain and sparingly.'],
  risks:['Hard rind and core can pose choking or obstruction hazards.','Sweetened canned pineapple or syrup adds unnecessary sugar.'],
  emergency:'Contact a veterinarian if hard pieces were swallowed or your dog is distressed.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 mango: {
  status:'safe',answer:'Yes. Small pieces of ripe mango flesh can be offered after removing skin and pit.',why:'Mango is naturally sweet and should be treated as an occasional extra rather than a staple food.',
  serve:['Peel and remove the large stone completely.','Cut ripe flesh into bite-sized pieces.','Feed only small amounts.'],
  risks:['The large pit can cause choking or an intestinal blockage.','Large servings may cause digestive upset.'],
  emergency:'If the stone was swallowed, contact your veterinarian urgently, even before symptoms appear.',
  sources:[REFERENCES.rspca,REFERENCES.wsava],
 },
 grapes: {
  status:'unsafe',answer:'No. Grapes, raisins, sultanas and related dried grapes can cause serious kidney injury in dogs.',why:'The amount that causes poisoning is unpredictable. Do not rely on an absence of early symptoms.',
  serve:['Do not feed grapes or raisins to dogs.','Check baked goods and snack mixes for dried grapes.','Store these foods securely.'],
  risks:['Acute kidney injury can develop.','Even small amounts may be dangerous for some dogs.'],
  emergency:'Contact an emergency veterinarian immediately after any suspected ingestion. Do not induce vomiting unless a veterinary professional instructs you to.',
  sources:[REFERENCES.aspca,REFERENCES.pdsa,'https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/conditions/grape-raisin-currant-and-sultana-poisoning-in-dogs'],
 },
 avocado: {
  status:'caution',answer:'Avocado is best avoided as a dog treat, particularly the pit, skin and high-fat flesh.',why:'Avocado flesh is not generally as poisonous to dogs as it is to some other animals, but its fat content can upset the digestive tract. The large pit is an obstruction hazard.',
  serve:['Choose a different simple treat instead.','Keep the pit, skin and guacamole out of reach.','Check guacamole for onion and garlic, which are toxic to dogs.'],
  risks:['The pit can lodge in the digestive tract.','Fatty flesh can cause stomach upset, and guacamole can contain dangerous alliums.'],
  emergency:'If the pit was swallowed or guacamole containing onion or garlic was eaten, call your veterinarian promptly.',
  sources:[REFERENCES.fda,REFERENCES.pdsa,REFERENCES.aspca],
 },
 watermelon: {
  status:'safe',answer:'Yes. Plain watermelon flesh without rind or seeds can be a small occasional treat.',why:'Watermelon contains substantial water, but is not needed for hydration when fresh water is available.',
  serve:['Remove the hard rind.','Remove seeds where practical and cut the flesh into small pieces.','Offer plain, without added sugar or seasoning.'],
  risks:['Hard rind can cause digestive blockage.','Large amounts may cause loose stools.'],
  emergency:'Call your veterinarian if your dog swallowed a large piece of rind or shows persistent pain or vomiting.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 oranges: {
  status:'caution',answer:'Some dogs tolerate a few pieces of peeled orange flesh; others find it too acidic.',why:'Citrus fruit is not necessary for canine nutrition and the acidity or sugar may upset some dogs.',
  serve:['Remove peel, seeds and thick membranes.','Offer a tiny piece of flesh first.','Stop if your dog dislikes it or develops stomach upset.'],
  risks:['Peel and essential oils may irritate the digestive tract.','Avoid citrus concentrates and sweetened juice.'],
  emergency:'Consult a veterinarian if a large amount of peel or citrus oil was ingested or symptoms persist.',
  sources:[REFERENCES.aspca,REFERENCES.wsava],
 },
 pears: {
  status:'safe',answer:'Yes. Ripe pear flesh can be offered in small pieces once the core and seeds are removed.',why:'Pears are sweet treats; serving size depends on the rest of your dog’s diet.',
  serve:['Wash and remove the stem, core and seeds.','Cut ripe flesh into small pieces.','Offer plain, not in syrup.'],
  risks:['The core can cause choking.','Seeds should not be deliberately fed, and syrup-packed fruit adds sugar.'],
  emergency:'Contact a veterinarian if a large core was swallowed or symptoms develop.',
  sources:[REFERENCES.rspca,REFERENCES.wsava],
 },
 peaches: {
  status:'safe',answer:'Yes. A little fresh peach flesh is generally suitable after the stone and stem are removed.',why:'The greatest concern is the hard pit, which can obstruct the digestive tract and contains cyanogenic compounds.',
  serve:['Wash and completely remove the pit.','Cut ripe flesh into small pieces.','Give plain fruit sparingly.'],
  risks:['Peach stones can lodge in the gut or damage teeth.','Syrup-packed peaches add excess sugar.'],
  emergency:'Seek urgent veterinary advice if a peach stone was swallowed or chewed.',
  sources:[REFERENCES.aspca,REFERENCES.rspca],
 },
 raspberries: {
  status:'safe',answer:'Yes. A few plain raspberries can be an occasional treat for most healthy dogs.',why:'Raspberries contain trace naturally occurring xylitol, but this is not equivalent to feeding a product sweetened with concentrated xylitol. Keep portions small because of fibre and digestive tolerance.',
  serve:['Wash the berries.','Offer a few whole or crushed berries appropriate to your dog’s size.','Avoid sweetened or processed raspberry desserts.'],
  risks:['Too many berries can cause digestive upset.','Products with added xylitol (birch sugar) are dangerous.'],
  emergency:'Seek emergency help if a processed product containing added xylitol was eaten.',
  sources:[REFERENCES.wsava,REFERENCES.aspca],
 },
 cherries: {
  status:'caution',answer:'Avoid offering whole cherries to dogs. The pit, stem and leaves present hazards.',why:'Cherry flesh without the pit is not the main toxicity concern, but removing all pits reliably is difficult; cherries are not worth the risk as a routine treat.',
  serve:['Choose another fruit treat.','Never let your dog chew cherry pits.','Keep stems and leaves out of reach.'],
  risks:['Pits can choke or obstruct the digestive tract.','Chewed pits, stems and leaves contain compounds that can release cyanide.'],
  emergency:'Contact your veterinarian promptly if pits were chewed or swallowed, especially if your dog develops symptoms.',
  sources:[REFERENCES.aspca,REFERENCES.rspca],
 },
 kiwi: {
  status:'caution',answer:'A little peeled kiwi flesh may be suitable for some dogs, but it is not a necessary treat.',why:'Kiwi is acidic and high in fibre, so it can upset digestion in sensitive dogs.',
  serve:['Peel the fruit.','Cut into very small pieces.','Start with one bite to check tolerance.'],
  risks:['The skin can be difficult to chew and digest.','Large quantities may cause diarrhoea.'],
  emergency:'Seek veterinary advice if your dog has repeated symptoms or choked on a piece.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
 papaya: {
  status:'safe',answer:'Small amounts of ripe papaya flesh may be offered to dogs once seeds and skin are removed.',why:'Papaya is a fruit treat, not a digestive treatment or replacement for balanced food.',
  serve:['Remove all skin and seeds.','Cut the soft ripe flesh into small pieces.','Start with a small amount.'],
  risks:['Large portions may cause loose stools.','Skin and seeds are not recommended as treats.'],
  emergency:'Call a veterinarian if a large amount of peel was swallowed or your dog becomes unwell.',
  sources:[REFERENCES.wsava,REFERENCES.rspca],
 },
};
export function getFruitAdvice(slug: string): FruitAdvice | undefined { return FRUIT_ADVICE[slug]; }

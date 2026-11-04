// Public, deliberately compact food inventory. Safety copy lives in fruit-advice.ts.
// Calorie numbers are approximate per 100 g of raw edible flesh, not a serving recommendation.
export type FruitArticle = {slug:string;name:string;heroImage:string;imageAlt:string;caloriesPer100g:number};
export const FRUITS_DATABASE: FruitArticle[] = [
  {
    "slug": "bananas",
    "name": "Bananas",
    "heroImage": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh sliced ripe bananas on a clean prep board for canine treats",
    "caloriesPer100g": 89
  },
  {
    "slug": "strawberries",
    "name": "Strawberries",
    "heroImage": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh organic ripe strawberries cut into safe canine portions",
    "caloriesPer100g": 32
  },
  {
    "slug": "apples",
    "name": "Apples",
    "heroImage": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Crisp red apple slices prepared without seeds or core for dogs",
    "caloriesPer100g": 52
  },
  {
    "slug": "blueberries",
    "name": "Blueberries",
    "heroImage": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh plump blueberries in a wooden bowl for healthy dog treats",
    "caloriesPer100g": 57
  },
  {
    "slug": "pineapple",
    "name": "Pineapple",
    "heroImage": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Freshly diced golden pineapple chunks safe for canine consumption",
    "caloriesPer100g": 50
  },
  {
    "slug": "mango",
    "name": "Mango",
    "heroImage": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Succulent fresh mango slices peeled and prepared pit-free for dogs",
    "caloriesPer100g": 60
  },
  {
    "slug": "grapes",
    "name": "Grapes",
    "heroImage": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh grapes which are deadly toxic to canines and cause acute kidney failure",
    "caloriesPer100g": 69
  },
  {
    "slug": "avocado",
    "name": "Avocado",
    "heroImage": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh avocado showing green flesh and dangerous large pit",
    "caloriesPer100g": 160
  },
  {
    "slug": "watermelon",
    "name": "Watermelon",
    "heroImage": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Crisp slices of seedless red watermelon for refreshing dog treats",
    "caloriesPer100g": 30
  },
  {
    "slug": "oranges",
    "name": "Oranges",
    "heroImage": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Peeled fresh juicy orange slices for dogs",
    "caloriesPer100g": 47
  },
  {
    "slug": "pears",
    "name": "Pears",
    "heroImage": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh sliced green pears cored and prepared for canine snacks",
    "caloriesPer100g": 57
  },
  {
    "slug": "peaches",
    "name": "Peaches",
    "heroImage": "https://images.unsplash.com/photo-1595758799924-d9bc70c79133?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh sliced ripe peaches without pits for dog snacks",
    "caloriesPer100g": 39
  },
  {
    "slug": "raspberries",
    "name": "Raspberries",
    "heroImage": "https://images.unsplash.com/photo-1577069808021-0a60429d2919?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh red raspberries in a wooden bowl for canine treats",
    "caloriesPer100g": 52
  },
  {
    "slug": "cherries",
    "name": "Cherries",
    "heroImage": "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh red cherries with stems and pits which pose cyanide hazards for dogs",
    "caloriesPer100g": 63
  },
  {
    "slug": "kiwi",
    "name": "Kiwi",
    "heroImage": "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh sliced green kiwi fruit peeled for safe canine consumption",
    "caloriesPer100g": 61
  },
  {
    "slug": "papaya",
    "name": "Papaya",
    "heroImage": "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=1200&q=80",
    "imageAlt": "Fresh tropical papaya sliced with seeds scooped out for canine treats",
    "caloriesPer100g": 43
  }
];
export const getFruitBySlug=(slug:string)=>FRUITS_DATABASE.find(x=>x.slug===slug);
export const getAllFruitSlugs=()=>FRUITS_DATABASE.map(x=>x.slug);

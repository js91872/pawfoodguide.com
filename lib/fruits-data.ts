// Local fruit-specific illustrations avoid broken third-party images.
// Calories are approximate per 100 g edible flesh, not a serving recommendation.
export type FruitArticle={slug:string;name:string;heroImage:string;imageAlt:string;caloriesPer100g:number};
export const FRUITS_DATABASE: FruitArticle[] = [
  {
    "slug": "bananas",
    "name": "Bananas",
    "heroImage": "/images/fruits/bananas.svg",
    "imageAlt": "Illustration of bananas",
    "caloriesPer100g": 89
  },
  {
    "slug": "strawberries",
    "name": "Strawberries",
    "heroImage": "/images/fruits/strawberries.svg",
    "imageAlt": "Illustration of strawberries",
    "caloriesPer100g": 32
  },
  {
    "slug": "apples",
    "name": "Apples",
    "heroImage": "/images/fruits/apples.svg",
    "imageAlt": "Illustration of apples",
    "caloriesPer100g": 52
  },
  {
    "slug": "blueberries",
    "name": "Blueberries",
    "heroImage": "/images/fruits/blueberries.svg",
    "imageAlt": "Illustration of blueberries",
    "caloriesPer100g": 57
  },
  {
    "slug": "pineapple",
    "name": "Pineapple",
    "heroImage": "/images/fruits/pineapple.svg",
    "imageAlt": "Illustration of pineapple",
    "caloriesPer100g": 50
  },
  {
    "slug": "mango",
    "name": "Mango",
    "heroImage": "/images/fruits/mango.svg",
    "imageAlt": "Illustration of mango",
    "caloriesPer100g": 60
  },
  {
    "slug": "grapes",
    "name": "Grapes",
    "heroImage": "/images/fruits/grapes.svg",
    "imageAlt": "Illustration of grapes",
    "caloriesPer100g": 69
  },
  {
    "slug": "avocado",
    "name": "Avocado",
    "heroImage": "/images/fruits/avocado.svg",
    "imageAlt": "Illustration of avocado",
    "caloriesPer100g": 160
  },
  {
    "slug": "watermelon",
    "name": "Watermelon",
    "heroImage": "/images/fruits/watermelon.svg",
    "imageAlt": "Illustration of watermelon",
    "caloriesPer100g": 30
  },
  {
    "slug": "oranges",
    "name": "Oranges",
    "heroImage": "/images/fruits/oranges.svg",
    "imageAlt": "Illustration of oranges",
    "caloriesPer100g": 47
  },
  {
    "slug": "pears",
    "name": "Pears",
    "heroImage": "/images/fruits/pears.svg",
    "imageAlt": "Illustration of pears",
    "caloriesPer100g": 57
  },
  {
    "slug": "peaches",
    "name": "Peaches",
    "heroImage": "/images/fruits/peaches.svg",
    "imageAlt": "Illustration of peaches",
    "caloriesPer100g": 39
  },
  {
    "slug": "raspberries",
    "name": "Raspberries",
    "heroImage": "/images/fruits/raspberries.svg",
    "imageAlt": "Illustration of raspberries",
    "caloriesPer100g": 52
  },
  {
    "slug": "cherries",
    "name": "Cherries",
    "heroImage": "/images/fruits/cherries.svg",
    "imageAlt": "Illustration of cherries",
    "caloriesPer100g": 63
  },
  {
    "slug": "kiwi",
    "name": "Kiwi",
    "heroImage": "/images/fruits/kiwi.svg",
    "imageAlt": "Illustration of kiwi",
    "caloriesPer100g": 61
  },
  {
    "slug": "papaya",
    "name": "Papaya",
    "heroImage": "/images/fruits/papaya.svg",
    "imageAlt": "Illustration of papaya",
    "caloriesPer100g": 43
  }
];
export const getFruitBySlug=(slug:string)=>FRUITS_DATABASE.find(x=>x.slug===slug);
export const getAllFruitSlugs=()=>FRUITS_DATABASE.map(x=>x.slug);

export interface CalculationResult {
  weightKg: number;
  weightLbs: number;
  rer: number; // Resting Energy Requirement in kcal
  mer: number; // Maintenance Energy Requirement in kcal
  treatCalorieBudget: number; // 10% treat rule in kcal
  isToxic: boolean;
  maxGrams: number;
  recommendedGrams: number;
  fruitCaloriesPer100g: number;
  sugarGrams: number;
  fiberGrams: number;
  portionVisualDescription: string;
}

export const BREED_PRESETS = [
  { name: 'Chihuahua / Toy', lbs: 6, kg: 2.7, description: 'Toy breeds (<10 lbs)' },
  { name: 'Beagle / Small', lbs: 24, kg: 10.9, description: 'Small breeds (10-30 lbs)' },
  { name: 'Golden Retriever / Medium', lbs: 65, kg: 29.5, description: 'Medium/Large breeds (50-70 lbs)' },
  { name: 'German Shepherd / Large', lbs: 75, kg: 34.0, description: 'Large breeds (70-90 lbs)' },
  { name: 'Mastiff / Giant', lbs: 150, kg: 68.0, description: 'Giant breeds (90+ lbs)' },
];

export const LIFE_STAGE_MULTIPLIERS = [
  { label: 'Neutered Adult (Normal Activity)', value: 1.6, key: 'neutered_adult' },
  { label: 'Intact Adult (Normal Activity)', value: 1.8, key: 'intact_adult' },
  { label: 'High Activity / Working / Sporting', value: 2.2, key: 'active' },
  { label: 'Senior Dog (Geriatric / Slower Metabolism)', value: 1.4, key: 'senior' },
  { label: 'Young Puppy (< 4 months old)', value: 3.0, key: 'puppy_young' },
  { label: 'Older Puppy (4+ months old)', value: 2.0, key: 'puppy_older' },
  { label: 'Weight Management / Inactive / Prone to Obesity', value: 1.2, key: 'weight_loss' },
];

export function calculateCanineCalorieAndFruitAllowance(
  weight: number,
  unit: 'lbs' | 'kg',
  multiplier: number,
  fruitCaloriesPer100g: number,
  isFruitToxic: boolean,
  fruitSugarPer100g: number = 0,
  fruitFiberPer100g: number = 0
): CalculationResult {
  const weightKg = unit === 'kg' ? Math.max(0.5, weight) : Math.max(0.5, weight * 0.45359237);
  const weightLbs = unit === 'lbs' ? Math.max(1, weight) : Math.max(1, weight / 0.45359237);

  // RER = 70 * (body weight in kg)^0.75
  const rer = Math.round(70 * Math.pow(weightKg, 0.75));
  const mer = Math.round(rer * multiplier);
  const treatCalorieBudget = Math.round(mer * 0.10);

  if (isFruitToxic) {
    return {
      weightKg: Number(weightKg.toFixed(1)),
      weightLbs: Number(weightLbs.toFixed(1)),
      rer,
      mer,
      treatCalorieBudget,
      isToxic: true,
      maxGrams: 0,
      recommendedGrams: 0,
      fruitCaloriesPer100g,
      sugarGrams: 0,
      fiberGrams: 0,
      portionVisualDescription: '0 grams (LETHAL HAZARD - NEVER FEED)',
    };
  }

  // Pure theoretical max if 100% of treat budget was spent on this fruit
  const calPerGram = Math.max(0.1, fruitCaloriesPer100g / 100);
  const rawMaxGrams = Math.round(treatCalorieBudget / calPerGram);

  // Realistic veterinary cap: fruit contains sugar & water, so don't fill 100% of treat allowance solely with heavy fruit bulk
  // Typically 50% of treat budget for fruits is ideal to leave room for other rewards and prevent diarrhea
  const recommendedGrams = Math.min(rawMaxGrams, Math.round(rawMaxGrams * 0.6));
  const sugarGrams = Number(((recommendedGrams / 100) * fruitSugarPer100g).toFixed(1));
  const fiberGrams = Number(((recommendedGrams / 100) * fruitFiberPer100g).toFixed(1));

  let portionVisualDescription = `${recommendedGrams}g portion`;
  if (recommendedGrams <= 15) {
    portionVisualDescription = `Approx. 1-2 thin slices or small morsels (${recommendedGrams}g)`;
  } else if (recommendedGrams <= 35) {
    portionVisualDescription = `Approx. 3-4 bite-sized cubes (${recommendedGrams}g)`;
  } else if (recommendedGrams <= 60) {
    portionVisualDescription = `Approx. a quarter cup or 5-6 bite-sized pieces (${recommendedGrams}g)`;
  } else {
    portionVisualDescription = `Approx. half a cup prepared chunks (${recommendedGrams}g)`;
  }

  return {
    weightKg: Number(weightKg.toFixed(1)),
    weightLbs: Number(weightLbs.toFixed(1)),
    rer,
    mer,
    treatCalorieBudget,
    isToxic: false,
    maxGrams: rawMaxGrams,
    recommendedGrams,
    fruitCaloriesPer100g,
    sugarGrams,
    fiberGrams,
    portionVisualDescription,
  };
}

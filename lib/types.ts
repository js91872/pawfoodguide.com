export type SafetyStatus = 'superfood' | 'safe' | 'caution' | 'toxic';

export interface UsdaNutrition {
  fdcId: number;
  foodName: string;
  servingSize: string; // e.g. "100g"
  calories: number; // kcal per 100g
  water: number; // g
  protein: number; // g
  fat: number; // g
  carbohydrates: number; // g
  sugar: number; // g
  fiber: number; // g
  potassium: number; // mg
  vitaminC: number; // mg
  calcium: number; // mg
  keyMicronutrients: string[];
}

export interface MarketMetrics {
  primaryKeyword: string;
  monthlySearchVolumeUS: number;
  monthlySearchVolumeUK: number;
  globalSearchVolume: number;
  seoDifficulty: number; // 1-100
  cpcUSD: number;
  searchIntent: 'Informational' | 'Commercial' | 'Emergency';
  highIntentVariants: { keyword: string; volume: number; cpc: number }[];
}

export interface ServingByWeight {
  toy: string; // < 20 lbs / < 9 kg
  smallMedium: string; // 20 - 50 lbs / 9 - 23 kg
  large: string; // 50 - 90 lbs / 23 - 41 kg
  giant: string; // 90+ lbs / 41+ kg
  frequency: string;
}

export interface FruitArticle {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  safetyStatus: SafetyStatus;
  safetyLabel: string;
  headlineSummary: string;
  zeroClickAnswer: string;
  heroImage: string;
  imageAlt: string;
  imageCredit: string;
  marketMetrics: MarketMetrics;
  usda: UsdaNutrition;
  canineBiologicalBenefits: {
    title: string;
    description: string;
    impactArea: string;
  }[];
  toxicologyRisks: {
    severity: 'none' | 'low' | 'moderate' | 'high' | 'lethal';
    toxicAgent: string;
    description: string;
    dangerousParts: string[];
    safeParts: string[];
    clinicalSigns: string[];
    emergencyAction: string;
  };
  preparationSteps: {
    stepNumber: number;
    title: string;
    instruction: string;
    vetTip: string;
  }[];
  weightServingBreakdown: ServingByWeight;
  faqList: {
    question: string;
    answer: string;
  }[];
  veterinaryCitations: {
    source: string;
    title: string;
    year: number;
    url?: string;
  }[];
  lastReviewedDate: string;
  reviewerName: string;
  reviewerTitle: string;
}

export interface DogProfile {
  weight: number;
  unit: 'lbs' | 'kg';
  lifeStageMultiplier: number;
  selectedFruitSlug: string;
}

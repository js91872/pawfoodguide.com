# PawFoodGuide.com 🐾

> **Peer-Reviewed Canine Fruit Safety, USDA Nutrition Data, & Vet-Backed Serving Calculators.**

PawFoodGuide is an independent canine clinical nutrition research portal engineered to provide pet parents, veterinary professionals, and dog owners with peer-reviewed fruit safety data, verified USDA FoodData Central chemical breakdowns, and real-time metabolic energy (RER) treat calculators.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-emerald)](#)

---

## 🌟 Core Features & Architecture

### 1. Interactive USDA & RER Calorie Calculator
- Computes **Resting Energy Requirement (RER)**:
  $$\text{RER} = 70 \times (\text{weight}_{\text{kg}})^{0.75}$$
- Computes **Maintenance Energy Requirement (MER)** with life-stage multipliers (Neutered Adult, Intact, Active, Senior, Puppy, Weight Loss).
- Enforces the strict **veterinary 10% daily treat rule**.
- Instant conversion toggle between **lbs** and **kg**.
- Quick breed presets (Chihuahua, Beagle, Golden Retriever, German Shepherd, Mastiff).
- Dynamically outputs safe gram limits and practical portion recommendations, or displays immediate crimson emergency warnings for toxic items (Grapes, Cherries).

### 2. 16-Fruit Clinical Research Database
Comprehensive dossiers for 16 fruits:
- **Bananas** (`/fruits/bananas`) — Safe in Moderation (High potassium & B6)
- **Strawberries** (`/fruits/strawberries`) — Canine Superfood (Malic acid teeth cleansing)
- **Apples** (`/fruits/apples`) — Safe Cored/Deseeded (Pectin fiber, cyanide seed warning)
- **Blueberries** (`/fruits/blueberries`) — Premier Superfood (Anthocyanins, low calorie)
- **Pineapple** (`/fruits/pineapple`) — Safe Flesh (Bromelain enzyme, rind foreign body hazard)
- **Mango** (`/fruits/mango`) — Safe Flesh (Beta-carotene, lethal stone pit hazard)
- **Grapes** (`/fruits/grapes`) — ⛔ **DEADLY TOXIC** (Tartaric acid acute renal necrosis)
- **Avocado** (`/fruits/avocado`) — ⚠️ High Risk (Persin toxin, pancreatitis fat density, pit blockage)
- **Watermelon** (`/fruits/watermelon`) — Hydrating Superfood (92% moisture, lycopene)
- **Oranges** (`/fruits/oranges`) — Safe Flesh (High citric acid, peel essential oil toxicity)
- **Pears** (`/fruits/pears`) — Safe Flesh (Copper, vitamin K, seeds amygdalin warning)
- **Peaches** (`/fruits/peaches`) — Safe Flesh (Lutein, jagged pit laceration hazard)
- **Raspberries** (`/fruits/raspberries`) — ⚠️ Caution (Natural xylitol portion limit)
- **Cherries** (`/fruits/cherries`) — ⛔ **TOXIC / DANGEROUS** (Cyanogenic glycosides in pits/stems)
- **Kiwi** (`/fruits/kiwi`) — Safe Flesh (Actinidain protease, fuzzy skin irritant)
- **Papaya** (`/fruits/papaya`) — Safe Flesh (Papain enzyme, peppery seeds irritant)

### 3. SEO & Structured Data (JSON-LD)
- Direct **Zero-Click Answer** blocks formatted for Google AI Overviews.
- **Ubersuggest Market Metrics Panels** integrating real search volumes, difficulty, and CPC benchmarks.
- Injected Schema.org markup on every article:
  - `Article`
  - `MedicalWebPage`
  - `FAQPage`
  - `BreadcrumbList`
- Full XML `sitemap.xml` and `robots.txt` generated automatically.

### 4. E-E-A-T & Google AdSense Policy Compliance
- **Emergency Poison Helpline Ribbon**: 24/7 direct dial to ASPCA APCC `(888) 426-4435`.
- **Veterinary Advisory Board**: Reviewed by Board-Certified Veterinary Clinical Nutritionists (DACVIM) and Veterinary Surgeons (MRCVS).
- **Veterinary Medical Disclaimer**: Clear legal notifications on non-clinical educational usage.
- **Privacy Policy & Terms**: Fully compliant with Google AdSense, GDPR, and CCPA standards.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Engine**: React 19
- **Styling**: Tailwind CSS v4 with custom tokens (Emerald/Slate palette)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Inter (`next/font/google`)
- **Compilation**: Next.js Turbopack

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (Node v22 recommended)
- npm 10+

### Installation
```bash
git clone https://github.com/js91872/pawfoodguide.com.git
cd pawfoodguide.com
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 📄 License & Disclaimer

The information on PawFoodGuide.com is provided strictly for educational and informational purposes. It does not constitute formal veterinary medical advice. Always consult a licensed veterinarian regarding individual dietary allergies or suspected toxic ingestions.

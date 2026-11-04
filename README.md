# PawFoodGuide

**Food safety answers for dog owners around the world.** PawFoodGuide is an English-language, consumer-oriented resource about everyday foods dogs can and cannot eat, practical preparation, common hazards and occasional treats.

## Published routes

- `/` — homepage, frequently asked food questions and guides
- `/foods` — 22 common food guides by category
- `/food/can-dogs-eat-[name]` — individual food and fruit articles
- `/fruits` — directory of 16 fruit guides
- `/calculator` — estimated adult dog calorie and treat allowance, metric-first with pounds option
- `/emergency` — worldwide emergency orientation with clearly labeled regional references
- `/veterinary-standards` — sources and editorial approach
- `/about`, `/disclaimer`, `/privacy-policy`, `/terms`

## Code and running locally

Next.js 16.4.4, React 19, Tailwind CSS 4, TypeScript and the standard Tailwind PostCSS integration.

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm run dev -- -p 3006
```

Open http://localhost:3006.

GitHub Actions performs a reproducible `npm ci`, ESLint, TypeScript and production build check on pull requests and `main`.

## Editorial policy

PawFoodGuide is an independent educational site, **not a veterinary hospital, professional review board or emergency service**. Do not add fictional reviewers, unverified dates, claimed endorsements, invented qualifications or false government approvals.

Safety guidance should be grounded in resources from reputable bodies such as WSAVA, ASPCA, FDA, PDSA and RSPCA. Linking to an agency does not mean it approved PawFoodGuide or reviewed a specific article. Food questions often require nuance: safe flesh may coexist with unsafe pits, seeds or added ingredients. Especially risky food consumption must direct readers to local veterinary help immediately.

The 10% rule is an overall guideline for *all treats combined*, not a safe gram-based portion of any specific food. Calculator output is an approximation for generally healthy adult dogs, not an individual veterinary diet plan.

## International scope

Do not assume visitors are in the USA. Use clear international English, metric as the default with imperial available, regional product names where useful, and local-vet-first poisoning advice. US, UK and Australian resources may be linked when clearly labeled. Do not invent local emergency telephone numbers or imply a US service covers other jurisdictions.

## SEO and monetization

Write for the person asking the question, not for an SEO dashboard. Keep public pages free of monthly search volumes, advertiser CPC, difficulty numbers, AdSense application status and private strategy notes. Each article should answer the question clearly, explain preparation, identify hazards, link to reputable published guidance and provide helpful related links.

Advertising or affiliate partnerships can be considered later. Disclose arrangements accurately and implement legally appropriate cookie/consent choices before switching them on. No site should claim ad-network approval without evidence.

## Before advertising or launch

- Verify actual production analytics, cookies, logs and consent handling against the privacy policy.
- Set up and test a genuine contact address or private support method; do not publish a nonfunctional mailbox.
- Independently verify source URLs and safety nuances before expanding the library, including individual body-condition advice and food-specific allergies.
- Verify usage rights/attribution for external photographs; replace unsuitable images.
- Add a genuine veterinary reviewer only after an actual documented review and explicit permission to display credentials.
- Monitor search performance privately in Search Console; do not expose analytics values to website visitors.

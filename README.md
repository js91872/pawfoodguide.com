# PawFoodGuide

PawFoodGuide is a reader-focused resource for people asking whether common foods are safe for dogs. The site combines plain-language safety guides, preparation tips, nutrition reference information, and a treat portion calculator.

## Reader experience

- `/` — Food-safety homepage and popular questions
- `/foods` — Everyday food safety and foods to avoid
- `/fruits` — 16 fruit guide directory
- `/fruits/[slug]` — Individual fruit guides
- `/calculator` — Estimated calorie and treat allowance
- `/about`, `/veterinary-standards`, `/privacy-policy` — Transparency and policies

## Stack

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before merging, run `npm run lint` and `npm run build`.

## Editorial and safety standards

**This is an educational website, not veterinary advice.** References to USDA, ASPCA, WSAVA, Cornell or FDA are source links, not endorsements or a claim of clinical review. No page should display a named veterinarian or a reviewed-by date without that professional's documented, authorized review.

A nutrition database entry for a human food is not proof that a food is safe for dogs. Treats should not replace complete and balanced food. If a potentially toxic ingredient has been ingested, contact a veterinarian immediately.

## Before production

- Verify the source, accuracy and preparation safety of each of the 16 original fruit entries, particularly cherry pits, grape/raisin toxicity, avocado, raspberry, and portion recommendations.
- Have the planned licensed BVSc/AH veterinarian independently review safety-sensitive pages. Publish the name, credentials, scope and date only with written permission.
- Check reference links, food photos and attribution.
- Check actual cookies, analytics, logs and third-party services against the privacy policy.
- Verify mobile layout, accessibility, forms/search and metadata, sitemap, and all navigation links.
- If using ads or affiliate links later, implement applicable disclosures and consent controls. Do not claim AdSense approval before it happens.
- Keep keyword volumes, CPC, search traffic and monetization research in private files/workflows, **not visitor-facing pages or client-shipped content**.

## Useful source references

- https://wsava.org/global-guidelines/global-nutrition-guidelines/
- https://www.aspca.org/pet-care/aspca-poison-control
- https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food
- https://fdc.nal.usda.gov/

Content and software are maintained independently by the site operator.

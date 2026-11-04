import React from 'react';
import { FruitArticle } from '@/lib/types';

interface JsonLdProps {
  fruit: FruitArticle;
}

export default function JsonLd({ fruit }: JsonLdProps) {
  const domain = 'https://pawfoodguide.com';
  const url = `${domain}/fruits/${fruit.slug}`;

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: `Can Dogs Eat ${fruit.name}? Veterinary Safety, USDA Data & Serving Limits`,
    description: fruit.zeroClickAnswer,
    image: [fruit.heroImage],
    author: { '@type': 'Organization', name: 'PawFoodGuide' },
    publisher: {
      '@type': 'Organization',
      name: 'PawFoodGuide',
      url: domain,
    },
  };

  // MedicalWebPage Schema
  const medicalWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `Can Dogs Eat ${fruit.name}? Canine Clinical Nutrition Dossier`,
    url: url,
    description: fruit.headlineSummary,
    aspect: [
      'Canine Food Safety',
      'Toxicology Risks',
      'USDA Nutritional Composition',
      'Weight-Based Serving Guidelines',
    ],
    specialty: 'https://schema.org/VeterinaryMedicine',
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Pet Owners and Canine Caregivers',
    },
    about: {
      '@type': 'Thing',
      name: fruit.name,
      alternateName: fruit.scientificName,
      description: fruit.zeroClickAnswer,
    },
  };

  // FAQPage Schema
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fruit.faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Fruit Safety Database',
        item: `${domain}/fruits`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: fruit.name,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

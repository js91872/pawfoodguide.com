import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pawfoodguide.com'),
  title: {
    default: 'PawFoodGuide — Canine Fruit Safety, USDA Nutrition & Vet-Backed Calculators',
    template: '%s | PawFoodGuide',
  },
  description:
    'Peer-reviewed canine fruit safety database, verified USDA FoodData Central nutritional profiles, and veterinary RER 10% treat calculators for dogs.',
  keywords: [
    'can dogs eat fruit',
    'dog fruit safety guide',
    'can dogs eat bananas',
    'can dogs eat apples',
    'can dogs eat blueberries',
    'dog calorie calculator',
    'veterinary canine nutrition',
    'dog treat 10 percent rule',
  ],
  authors: [{ name: 'PawFoodGuide Veterinary Editorial Board' }],
  creator: 'PawFoodGuide',
  publisher: 'PawFoodGuide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pawfoodguide.com',
    siteName: 'PawFoodGuide',
    title: 'PawFoodGuide — Canine Fruit Safety & USDA Treat Nutrition Database',
    description:
      'Peer-reviewed canine fruit safety database, verified USDA FoodData Central nutritional profiles, and veterinary RER 10% treat calculators.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Fresh dog-friendly fruits and blueberries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PawFoodGuide — Canine Fruit Safety & USDA Nutrition',
    description:
      'Peer-reviewed canine fruit safety database, verified USDA FoodData Central nutritional profiles, and veterinary RER calculators.',
    images: ['https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

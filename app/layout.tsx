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
    default: 'PawFoodGuide — Can Dogs Eat This?',
    template: '%s | PawFoodGuide',
  },
  description:
    'Find out which common foods dogs can eat, what to avoid, how to prepare safe treats, and how to understand treat calories.',
  keywords: ['can dogs eat this', 'foods dogs can eat', 'dog food safety', 'can dogs eat grapes', 'dog treat calculator'],
  authors: [{ name: 'PawFoodGuide' }],
  creator: 'PawFoodGuide',
  publisher: 'PawFoodGuide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://pawfoodguide.com',
    siteName: 'PawFoodGuide',
    title: 'PawFoodGuide — What Can Dogs Eat?',
    description:
      'Clear dog food safety guides, preparation tips, and a practical treat portion calculator.',
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
    title: 'PawFoodGuide — Can Dogs Eat This?',
    description:
      'Everyday dog food safety answers and treat portion guidance.',
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

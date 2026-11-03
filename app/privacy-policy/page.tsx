import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Google AdSense, GDPR & CCPA Compliant | PawFoodGuide',
  description:
    'Comprehensive privacy policy for PawFoodGuide. Explains data protection practices, Google AdSense cookie policies, GDPR rights, and California Consumer Privacy Act disclosures.',
  alternates: {
    canonical: 'https://pawfoodguide.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-900/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            <span>AdSense, GDPR & CCPA Compliant Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Last Updated: October 2026. How PawFoodGuide protects your personal data, utilizes cookies, and maintains transparency with advertising partners.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 -mt-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Introduction & Overview</h2>
          <p>
            At <strong>PawFoodGuide</strong> (accessible from <a href="https://pawfoodguide.com" className="text-emerald-700 font-medium hover:underline">https://pawfoodguide.com</a>), the privacy of our visitors is of paramount importance to us. This Privacy Policy outlines the types of personal information that is collected and recorded by PawFoodGuide and how we responsibly utilize, process, and safeguard it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, please contact our Data Protection Team at <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">privacy@pawfoodguide.com</code>.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Google AdSense & Third-Party Advertising Vendors</h2>
          <p>
            PawFoodGuide partners with Google AdSense and third-party advertising networks to display relevant, policy-compliant contextual advertisements to users.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
            <li>
              <strong>Google DART Cookies:</strong> Google, as a third-party vendor, uses cookies to serve ads on PawFoodGuide. Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and other sites on the Internet.
            </li>
            <li>
              <strong>Opt-Out of Personalized Ads:</strong> Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Google Ads Settings</a> or through the Network Advertising Initiative opt-out page at <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">www.networkadvertising.org</a>.
            </li>
            <li>
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on PawFoodGuide. They automatically receive your IP address when this occurs.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Log Files & Analytics</h2>
          <p>
            PawFoodGuide follows standard procedures for utilizing server log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and the number of clicks. These are not linked to any personally identifiable information and are strictly analyzed to evaluate technical website performance, optimize page load speed, and administer the site.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. General Data Protection Regulation (GDPR) Data Subject Rights</h2>
          <p>
            If you reside in the European Economic Area (EEA) or the United Kingdom, you are entitled to specific rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> You have the right to request deletion of your personal data under certain conditions.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request limitation of data processing.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to request transfer of your data to another organization.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. California Consumer Privacy Act (CCPA) Disclosures</h2>
          <p>
            Under the CCPA, California consumers possess the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Request disclosure of categories and specific pieces of personal data collected about consumers.</li>
            <li>Request deletion of any personal data collected.</li>
            <li><strong>Do Not Sell My Personal Information:</strong> We do not sell consumer personal information to third parties.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-4">6. Children&apos;s Online Privacy Protection (COPPA)</h2>
          <p>
            Protecting the privacy of children online is especially crucial. PawFoodGuide does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will promptly remove such records from our databases.
          </p>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>PawFoodGuide Privacy Compliance Office</span>
            <Link href="/" className="text-emerald-700 hover:underline">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

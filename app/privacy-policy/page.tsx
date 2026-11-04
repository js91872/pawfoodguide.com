import type { Metadata } from 'next';
export const metadata:Metadata={
 title:'Privacy Policy | PawFoodGuide',
 description:'Read about technical website logs, third-party links and how PawFoodGuide handles your data.',
 alternates:{canonical:'https://pawfoodguide.com/privacy-policy'},
};
export default function PrivacyPolicyPage(){return <main className="min-h-screen bg-slate-50 px-4 py-14"><div className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-slate-200 bg-white p-7 leading-relaxed text-slate-700">
 <h1 className="text-4xl font-extrabold text-slate-900">Privacy policy</h1>
 <p className="text-sm text-slate-600">Last updated: 4 November 2026.</p>
 <p>We want PawFoodGuide to be straightforward to use. You can browse the food guides without creating an account or providing your name.</p>
 <h2 className="text-xl font-bold text-slate-900">Calculator inputs</h2><p>The treat calculator works in your browser. It uses the weight, activity level and fruit amount you enter to show estimates. These inputs are not intentionally sent to PawFoodGuide as a user profile or stored in an account.</p>
 <h2 className="text-xl font-bold text-slate-900">Technical information</h2><p>As with many websites, the hosting service may process technical information such as IP addresses, browser details and access times to deliver pages, prevent abuse and investigate technical problems. Retention depends on the hosting service configuration.</p>
 <h2 className="text-xl font-bold text-slate-900">External services</h2><p>Some images on the site come from third-party image providers. Clicking links to external veterinary associations, charities or public agencies opens their websites, which have independent privacy practices.</p>
 <h2 className="text-xl font-bold text-slate-900">Cookies, analytics and advertising</h2><p>The current website code does not include advertising scripts or a visitor-account system. If analytics, advertising cookies or affiliate technology are introduced, this policy and relevant consent mechanisms must be updated to describe the services used and choices available to visitors.</p>
 <h2 className="text-xl font-bold text-slate-900">Your browser controls</h2><p>You can use your browser settings to manage or clear cookies. Blocking some browser features may affect how websites operate.</p>
 <p className="border-t border-slate-200 pt-5 text-sm text-slate-600">This privacy notice describes the website implementation represented by the current code. Actual hosting records, any separately configured analytics and applicable local privacy rights should be assessed whenever the production configuration changes.</p>
 </div></main>}

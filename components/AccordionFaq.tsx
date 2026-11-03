'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionFaqProps {
  faqList: FaqItem[];
  fruitName: string;
}

export default function AccordionFaq({ faqList, fruitName }: AccordionFaqProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first item by default

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Frequently Asked Veterinary Questions: {fruitName}
          </h3>
          <p className="text-xs text-slate-500">
            High-intent questions reviewed by clinical canine nutritionists
          </p>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {faqList.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left font-semibold text-slate-900 hover:text-emerald-700 transition"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6 animate-in fade-in duration-150">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

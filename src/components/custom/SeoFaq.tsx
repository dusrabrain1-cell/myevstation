"use client";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export default function SeoFaq({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQs",
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[#f7f9f6] py-14 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#0b7652]">{eyebrow}</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-black text-[#172d21] sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#647067]">Clear answers to common questions. Final charger selection, costs, permissions and returns depend on the specific site and written proposal.</p>
        </div>
        <div className="divide-y divide-[#dce6dd] overflow-hidden rounded-2xl border border-[#dce6dd] bg-white">
          {items.map((item, index) => (
            <details key={item.question} className="group px-5 py-5 sm:px-7">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-extrabold text-[#20382b] marker:hidden">
                <span className="flex gap-3"><MessageCircleQuestion size={20} className="mt-0.5 shrink-0 text-[#0b7652]" /><span>{item.question}</span></span>
                <ChevronDown size={20} className="mt-0.5 shrink-0 text-[#0b7652] transition-transform group-open:rotate-180" />
              </summary>
              <p className="ml-8 mt-3 max-w-3xl text-sm leading-7 text-[#5b685f]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

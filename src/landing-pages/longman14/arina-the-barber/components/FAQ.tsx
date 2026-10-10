"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "./data";
import { Eyebrow, Reveal } from "./shared";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-16 bg-[#f5efe6] px-5 py-24 text-stone-900 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl">
            Frequently <span className="italic">asked</span>
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-stone-300 border-y border-stone-300">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-serif text-xl md:text-2xl">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-[#9a7a2e]" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-[#9a7a2e]" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden leading-relaxed text-stone-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

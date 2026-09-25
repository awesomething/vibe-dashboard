import React from "react";
import { Plus } from "lucide-react";
import { heading } from "./constants";
import { Reveal } from "./Reveal";

const questions = [
  {
    question: "How quickly can someone come out?",
    answer: "During the day, we usually return calls within the hour and schedule the next available visit. Tell us if the issue is urgent when you call.",
  },
  {
    question: "Do you share the price before starting?",
    answer: "Yes. We diagnose the issue first, explain the work, and give you a clear price to approve before repairs begin.",
  },
  {
    question: "What plumbing jobs do you take on?",
    answer: "We handle leaks, drains, fixtures, water heaters, repairs, and smaller remodel plumbing for homes and businesses across Atlanta.",
  },
  {
    question: "Do you clean up after the work?",
    answer: "Always. We protect the work area, remove the old parts and debris, and leave the space ready to use.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#F6C544]">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.75fr_1.25fr] md:px-10">
        <Reveal>
          <p className="text-[10px] font-800 uppercase tracking-[0.16em] text-[#5C4810]">04 / Good to know</p>
          <h2 className={`${heading} mt-8 max-w-xs text-4xl font-800 leading-[0.94] tracking-tighter`}>
            Questions before we start?
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#4A3A12]">
            A few straight answers about visits, pricing, and the kind of work we do.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-[#141210]">
            {questions.map((item) => (
              <details key={item.question} className="group border-b border-[#141210]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-800 text-[#141210] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-xl pb-5 pr-10 text-sm leading-relaxed text-[#4A3A12]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

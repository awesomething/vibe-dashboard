import React from "react";
import { CheckCircle2 } from "lucide-react";
import { heading, valueProps } from "./constants";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="bg-[#141210] text-[#F6F1E6]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <Reveal>
          <h2 className={`${heading} text-3xl font-800 md:text-4xl`}>
            Why Atlanta calls RP Plumbing Atlanta
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-[#2A2723] p-6 transition-colors duration-300 hover:border-[#FF4A1E]">
                <CheckCircle2 className="h-5 w-5 text-[#FF7A4E]" strokeWidth={1.75} />
                <h3 className={`${heading} mt-4 text-lg font-700`}>{v.title}</h3>
                <p className="mt-2 text-sm text-[#B7B2A6]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <p className="mt-10 max-w-xl border-t border-[#2A2723] pt-6 text-sm text-[#B7B2A6]">
            When one Atlanta family's water main broke, they say RP Plumbing Atlanta
            was the first company to call back — and the one they'd call again.{" "}
            <span className="text-[#8A857A]">— based on a customer review on Yelp</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
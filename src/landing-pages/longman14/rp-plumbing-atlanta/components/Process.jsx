import React from "react";
import { heading, processSteps } from "./constants";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1200px] px-6 py-20">
      <Reveal>
        <h2 className={`${heading} text-3xl font-800 text-[#141210] md:text-4xl`}>
          How it works
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {processSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <div className="h-full rounded-2xl bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
              <span className={`${heading} text-3xl font-800 text-[#FF4A1E]`}>
                {s.n}
              </span>
              <h3 className={`${heading} mt-3 text-base font-700 text-[#141210]`}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#5A564C]">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
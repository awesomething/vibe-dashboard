import React from "react";
import { highlights } from "./constants";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 80}>
            <div
              className="flex h-full items-center rounded-2xl px-4 py-5 text-sm font-700 transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: h.bg, color: h.fg }}
            >
              {h.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
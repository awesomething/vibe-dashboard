import React from "react";
import { heading, services } from "./constants";
import { Reveal } from "./Reveal";

export function ServiceStrip() {
  return (
    <section id="services" className="border-b border-[#D8D5CB] bg-[#F6F1E6]">
      <Reveal>
        <div className="mx-auto grid max-w-300 grid-cols-2 sm:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group flex items-center gap-3 border-r border-[#D8D5CB] px-5 py-6 transition-colors duration-300 first:border-l hover:bg-[#F6C544] sm:justify-center"
              >
                <span className="flex h-9 w-9 items-center justify-center bg-[#141210] transition-colors duration-300 group-hover:bg-[#FF4A1E]">
                  <Icon className="h-4 w-4 text-[#F6F1E6]" strokeWidth={1.75} />
                </span>
                <span className={`${heading} text-xs font-700 uppercase tracking-[0.06em]`}>{s.label}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
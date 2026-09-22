import React from 'react';
import { slab, steps } from './constants';

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1160px] px-6 py-20">
      <h2 className={`${slab} text-4xl font-700 text-[#1B1B1A] md:text-5xl`}>
        How a job goes
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n}>
            <span
              className={`${slab} flex h-11 w-11 items-center justify-center bg-[#1B1B1A] text-lg font-700 text-[#C9541F]`}
            >
              {s.n}
            </span>
            <h3 className={`${slab} mt-4 text-base font-700 text-[#1B1B1A]`}>
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-[#4A4C46]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
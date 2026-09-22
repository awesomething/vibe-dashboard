import React from 'react';
import { display, steps } from './constants';

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1160px] px-6 py-20">
      <h2 className={`${display} text-4xl font-700 text-[#0E1B22] md:text-5xl`}>
        How a job goes
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.n} className="relative pl-0">
            <div className="flex items-center gap-3">
              <span
                className={`${display} flex h-10 w-10 items-center justify-center rounded-full border border-[#B9803F] text-lg font-700 text-[#B9803F]`}
              >
                {s.n}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-[#D7DBD8] md:block" />
              )}
            </div>
            <h3 className="mt-4 text-base font-700 text-[#0E1B22]">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-[#4A585D]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
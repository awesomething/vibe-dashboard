import React from 'react';
import { slab, services } from './constants';

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1160px] px-6 py-20">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className={`${slab} text-4xl font-700 text-[#1B1B1A] md:text-5xl`}>
          What we take on
        </h2>
        <p className="max-w-sm text-sm text-[#4A4C46]">
          From a single fixed leak to a full tear-off, told to you straight
          before we start.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#D3D4CF] sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="flex flex-col gap-3 border-l-4 border-[#C9541F] bg-[#E6E7E4] p-6"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-[#1B1B1A]" strokeWidth={1.75} />
                <span className="text-[10px] font-600 uppercase tracking-[0.12em] text-[#8A8C86]">
                  {s.tag}
                </span>
              </div>
              <h3 className={`${slab} text-lg font-700 text-[#1B1B1A]`}>{s.name}</h3>
              <p className="text-sm text-[#4A4C46]">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import React from 'react';
import { display, services } from './constants';

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1160px] px-6 py-20">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className={`${display} text-4xl font-700 text-[#0E1B22] md:text-5xl`}>
          What we fix
        </h2>
        <p className="max-w-sm text-sm text-[#4A585D]">
          Six job types make up most of what we're called for. If yours
          isn't listed, call anyway — we'll tell you straight if it's
          something else you need.
        </p>
      </div>

      <div className="border-t border-[#D7DBD8]">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.n}
              className="grid grid-cols-[auto_auto_1fr] items-start gap-5 border-b border-[#D7DBD8] py-6 md:grid-cols-[3rem_2.5rem_14rem_1fr] md:items-center"
            >
              <span className={`${display} text-lg text-[#B9803F] font-700`}>
                {s.n}
              </span>
              <Icon className="h-5 w-5 text-[#1F3D4D]" strokeWidth={1.75} />
              <h3 className="text-base font-700 text-[#0E1B22] md:text-lg">
                {s.name}
              </h3>
              <p className="col-span-3 text-sm text-[#4A585D] md:col-span-1">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
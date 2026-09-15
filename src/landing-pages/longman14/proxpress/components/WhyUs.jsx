import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { display, PIPES_IMG, trustPoints } from './constants';

export function WhyUs() {
  return (
    <section className="relative bg-[#0E1B22] text-[#EDF0EE]">
      <img
        src={PIPES_IMG}
        alt="Close-up of steel pipes and valves"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      <div className="relative mx-auto max-w-[1160px] px-6 py-20">
        <h2 className={`${display} max-w-lg text-3xl font-700 md:text-4xl`}>
          Why Atlanta calls ProXpress twice
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#2A3F47] pt-8 sm:grid-cols-2">
          {trustPoints.map((t) => (
            <div key={t} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#B9803F]"
                strokeWidth={1.75}
              />
              <span className="text-[15px] text-[#C7D0CD]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
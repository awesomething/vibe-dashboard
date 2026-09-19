import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { slab, HOUSE_IMG, trustPoints } from './constants';

export function WhyUs() {
  return (
    <section className="relative bg-[#1B1B1A] text-[#E6E7E4]">
      <img
        src={HOUSE_IMG}
        alt="House exterior with a shingled roof"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      <div className="relative mx-auto max-w-[1160px] px-6 py-20">
        <h2 className={`${slab} max-w-lg text-3xl font-700 md:text-4xl`}>
          What you get with a Home Forge crew
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#33352F] pt-8 sm:grid-cols-2">
          {trustPoints.map((t) => (
            <div key={t} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C9541F]"
                strokeWidth={1.75}
              />
              <span className="text-[15px] text-[#B9BBB6]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
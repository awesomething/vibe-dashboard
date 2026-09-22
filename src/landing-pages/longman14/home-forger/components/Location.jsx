import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { slab, HAMMER_IMG, MAP_URL, PHONE_DISPLAY, PHONE_TEL } from './constants';

export function Location() {
  return (
    <section className="relative bg-[#33352F] text-[#E6E7E4]">
      <img
        src={HAMMER_IMG}
        alt="Hand holding a hammer, driving a nail"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className={`${slab} text-3xl font-700 md:text-4xl`}>
            Decatur's roofs, one at a time.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[#B9BBB6]">
            Based in Decatur, working across the metro. Call anytime — if
            it's a leak that's actively getting worse, tell us when you
            call.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-l border-[#4A4C46] pl-8">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 text-lg font-700"
          >
            <Phone className="h-5 w-5 text-[#C9541F]" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#B9BBB6] underline hover:text-[#E6E7E4]"
          >
            View on Google Maps
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
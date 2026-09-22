import React from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { display, FAUCET_IMG, MAP_URL, ADDRESS, PHONE_DISPLAY, PHONE_TEL } from './constants';

export function Location() {
  return (
    <section className="relative bg-[#1F3D4D] text-[#EDF0EE]">
      <img
        src={FAUCET_IMG}
        alt="Water running from a faucet"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className={`${display} text-3xl font-700 md:text-4xl`}>
            Serving Atlanta, one call at a time.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[#C7D0CD]">
            Based on the south side, dispatched across the metro. Reach us
            anytime — if it's urgent, say so when you call.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-l border-[#3A5462] pl-8">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 text-lg font-700"
          >
            <Phone className="h-5 w-5 text-[#B9803F]" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-[#C7D0CD] hover:text-[#EDF0EE]"
          >
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#B9803F]" />
            <span>
              {ADDRESS}
              <span className="ml-2 inline-flex items-center gap-1 text-[#B9803F] underline">
                Get directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
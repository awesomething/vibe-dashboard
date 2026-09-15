import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { display, HERO_IMG, PHONE_DISPLAY, PHONE_TEL } from './constants';
import { StarRow } from './StarRow';

export function Hero() {
  return (
    <section id="top" className="bg-[#0E1B22] text-[#EDF0EE]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col justify-center">
          <h1
            className={`${display} text-[13vw] leading-[0.95] tracking-tight font-800 sm:text-6xl md:text-[4.2rem]`}
          >
            Atlanta&rsquo;s drains
            <br />
            don&rsquo;t wait.
            <br />
            <span className="text-[#B9803F]">Neither do we.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#C7D0CD]">
            ProXpress Plumbing sends a technician to clear clogs, stop
            leaks, and fix water heaters across Atlanta — with a clear
            price agreed before any tool touches your pipes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 rounded-[2px] bg-[#B9803F] px-6 py-3 text-sm font-700 text-[#0E1B22] hover:bg-[#c98f4c]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#request"
              className="rounded-[2px] border border-[#3A5462] px-6 py-3 text-sm font-600 text-[#EDF0EE] hover:border-[#B9803F]"
            >
              Request service
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-[#1F3D4D] pt-6 text-sm text-[#C7D0CD]">
            <StarRow rating={4.3} size={16} />
            <span className="font-700 text-[#EDF0EE]">4.3</span>
            <span className="text-[#7E9099]">·</span>
            <span>30 Google reviews</span>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[2px] md:min-h-[420px]">
          <img
            src={HERO_IMG}
            alt="Technician repairing a pipe under a cabinet"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B22]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#B9803F]/40 bg-[#0E1B22]/80 px-4 py-3 text-xs text-[#C7D0CD]">
            <span>On site today, most Atlanta zip codes</span>
            <ArrowUpRight className="h-4 w-4 text-[#B9803F]" />
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { slab, HERO_IMG, PHONE_DISPLAY, PHONE_TEL } from './constants';

export function Hero() {
  return (
    <section id="top" className="bg-[#1B1B1A] text-[#E6E7E4]">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="flex flex-col justify-center">
          <h1
            className={`${slab} text-[11vw] leading-[1.02] tracking-tight font-700 sm:text-5xl md:text-[3.6rem]`}
          >
            A roof is only as
            <br />
            good as the crew
            <br />
            that <span className="text-[#C9541F]">builds it.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#B9BBB6]">
            Home Forge Roofing repairs, replaces, and installs roofs around
            Decatur — one crew, one point of contact, and a written
            estimate before anything comes off your house.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 rounded-[2px] bg-[#C9541F] px-6 py-3 text-sm font-700 text-[#1B1B1A] hover:bg-[#d6672f]"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#estimate"
              className="rounded-[2px] border border-[#44463F] px-6 py-3 text-sm font-600 text-[#E6E7E4] hover:border-[#C9541F]"
            >
              Get a written estimate
            </a>
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-[2px] md:min-h-[420px]">
          <img
            src={HERO_IMG}
            alt="Roof under construction with new tiles being laid"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1A]/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[#C9541F]/40 bg-[#1B1B1A]/80 px-4 py-3 text-xs text-[#B9BBB6]">
            <span>Serving Decatur &amp; the metro Atlanta area</span>
            <ArrowUpRight className="h-4 w-4 text-[#C9541F]" />
          </div>
        </div>
      </div>

      {/* roofline divider — a shallow pitched edge, not decoration for its own sake */}
      <svg
        viewBox="0 0 120 6"
        preserveAspectRatio="none"
        className="block h-6 w-full text-[#E6E7E4]"
      >
        <polygon
          points="0,6 0,3 10,0 20,3 30,0 40,3 50,0 60,3 70,0 80,3 90,0 100,3 110,0 120,3 120,6"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
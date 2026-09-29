import React from "react";
import { ArrowRight } from "lucide-react";
import { heading, VALVES_IMG, FAUCET_IMG } from "./constants";
import { Reveal } from "./Reveal";

export function ColoredPanels({ scrollToRequest }) {
  return (
    <section className="mx-auto max-w-300 px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-0 overflow-hidden border border-[#141210] sm:grid-cols-2">
        <Reveal className="flex flex-col justify-between gap-8 border-b border-[#141210] bg-[#AFAE95] p-8 sm:border-b-0 sm:border-r sm:p-10">
          <div>
            <p className="mb-12 text-[10px] font-800 uppercase tracking-[0.16em] text-[#4B4B3F]">01 / The problem</p>
            <h3 className={`${heading} max-w-60 text-3xl font-800 leading-[0.95] tracking-tighter text-[#141210]`}>
              Solve home issues fast.
            </h3>
            <p className="mt-3 text-sm text-[#33322A]">
              We've got you — from a dripping tap to a backed-up line.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={VALVES_IMG}
              alt="Close-up of pipes and valves"
              className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <a
            href="#request"
            onClick={scrollToRequest}
            className="group flex items-center gap-1.5 text-sm font-700 text-[#141210]"
          >
            Fix it now
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-between gap-8 bg-[#F6C544] p-8 sm:p-10">
          <div>
            <p className="mb-12 text-[10px] font-800 uppercase tracking-[0.16em] text-[#5C4810]">02 / The promise</p>
            <h3 className={`${heading} max-w-65 text-3xl font-800 leading-[0.95] tracking-tighter text-[#141210]`}>
              Lasting repairs for your peace of mind.
            </h3>
            <p className="mt-3 text-sm text-[#4A3A12]">
              Fixed right the first time, so it stays fixed.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={FAUCET_IMG}
              alt="Water running from a faucet"
              className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 text-sm font-700 text-[#141210]"
          >
            Reach out today
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
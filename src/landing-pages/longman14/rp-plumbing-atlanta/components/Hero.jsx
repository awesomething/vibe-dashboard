import React from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { heading, PIPE_WORK_IMG, FAUCET_IMG } from "./constants";
import { Reveal } from "./Reveal";

export function Hero({ scrollToRequest }) {
  return (
    <section id="top" className="bg-[#FF4A1E] text-[#141210]">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-stretch md:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between px-6 py-14 md:px-10 md:py-16">
            <div>
              <p className="mb-8 text-[11px] font-800 uppercase tracking-[0.16em] text-[#5A2116]">
                Atlanta plumbing / since 2014
              </p>
              <h1 className={`${heading} max-w-[560px] text-[14vw] font-800 leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-[5.4rem]`}>
                Repairs,
                <br />
                installs
                <br />
                <span className="text-[#F6F1E6]">done right.</span>
              </h1>

              <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-[#3A2A1F]">
                Fix, install, maintain. Straight answers and lasting work for Atlanta homes.
              </p>
            </div>

            <form onSubmit={scrollToRequest} className="mt-10 flex max-w-lg flex-col gap-2 sm:flex-row">
              <button type="submit" className="flex items-center justify-between gap-8 bg-[#141210] px-5 py-3 text-left text-sm font-700 text-[#F6F1E6] transition-transform hover:-translate-y-0.5">
                Tell us what needs fixing <ArrowRight className="h-4 w-4 shrink-0 text-[#FF4A1E]" />
              </button>
              <a href={`tel:+14046365033`} className="flex items-center justify-center gap-2 border border-[#141210] px-5 py-3 text-sm font-700 text-[#141210] transition-colors hover:bg-[#F6F1E6]">
                <Phone className="h-4 w-4" /> Call now
              </a>
            </form>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative min-h-[420px] overflow-hidden bg-[#F6C544] md:min-h-0">
          <div className="absolute inset-7 border border-[#141210]/30 md:inset-10" />
          <div className="absolute inset-x-10 bottom-0 top-16 overflow-hidden border-4 border-[#F6F1E6] md:inset-x-16 md:top-20">
            <img
              src={PIPE_WORK_IMG}
              alt="Plumber repairing a pipe"
              className="h-full w-full object-cover object-center lg:object-top grayscale-[0.1]"
            />
          </div>

          <div className="absolute right-7 top-7 h-28 w-28 overflow-hidden rounded-full border-4 border-[#F6F1E6] shadow-lg md:right-10 md:top-10 md:h-32 md:w-32">
            <img
              src={FAUCET_IMG}
              alt="Water running from a faucet"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="float-badge absolute bottom-7 left-7 flex items-center gap-2 bg-[#141210] px-4 py-3 text-[#F6F1E6] shadow-xl md:bottom-10 md:left-10">
            <Sparkles className="h-4 w-4 text-[#F6C544]" />
            <span className="text-xs font-700 uppercase tracking-[0.08em]">Locally owned</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
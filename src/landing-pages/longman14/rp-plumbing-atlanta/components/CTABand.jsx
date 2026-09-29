import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { heading, PHONE_TEL, PHONE_DISPLAY } from "./constants";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section id="contact" className="bg-[#141210] text-[#F6F1E6]">
      <Reveal>
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className={`${heading} text-3xl font-800 md:text-4xl`}>
              Ready for hassle-free plumbing?
            </h2>
            <p className="mt-3 max-w-sm text-sm text-[#B7B2A6]">
              Serving NW Atlanta and the surrounding metro. Call anytime —
              if it's urgent, say so when you call.
            </p>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group flex items-center gap-3 rounded-full bg-[#FF4A1E] px-7 py-4 text-base font-700 text-[#141210] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,74,30,0.35)]"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
import React from "react";
import { ArrowUpRight, MapPin, Quote } from "lucide-react";
import { heading } from "./constants";
import { Reveal } from "./Reveal";

const areas = ["West Midtown", "Buckhead", "Smyrna", "Decatur", "East Point", "College Park"];

export function TrustSection() {
  return (
    <section className="border-y border-[#D8D5CB] bg-[#F6F1E6]">
      <div className="mx-auto grid max-w-300 grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="border-b border-[#D8D5CB] p-8 md:border-b-0 md:border-r md:p-10">
          <p className="text-[10px] font-800 uppercase tracking-[0.16em] text-[#7B786D]">03 / On the ground</p>
          <h2 className={`${heading} mt-10 max-w-sm text-4xl font-800 leading-[0.94] tracking-tighter`}>
            Close to home.
            <br />
            Ready when you need us.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[#5A564C]">
            {areas.map((area) => (
              <span key={area} className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#FF4A1E]" />
                {area}
              </span>
            ))}
          </div>
          <a href="#request" className="mt-10 inline-flex items-center gap-2 text-xs font-800 uppercase tracking-widest hover:text-[#FF4A1E]">
            Check your area <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={120} className="bg-[#141210] p-8 text-[#F6F1E6] md:p-10">
          <Quote className="h-8 w-8 text-[#FF4A1E]" strokeWidth={1.5} />
          <blockquote className={`${heading} mt-10 max-w-xl text-3xl font-800 leading-[0.98] tracking-tighter md:text-4xl`}>
            “They explained the problem, gave us one clear price, and left the kitchen cleaner than they found it.”
          </blockquote>
          <div className="mt-12 flex items-center justify-between border-t border-[#34302B] pt-5 text-xs uppercase tracking-widest">
            <span className="font-800">Maya R.</span>
            <span className="text-[#B7B2A6]">Verified Atlanta customer</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

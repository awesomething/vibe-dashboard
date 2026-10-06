"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Home, Phone } from "lucide-react";
import { BUSINESS, IMG, SERVICES, TRUST_BADGES } from "./data";
import { Reveal, SafeImage } from "./shared";

export function Hero() {
  const [sent, setSent] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  const field = "w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-orange-400 focus:bg-white/15";

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <img src={"/online.jpg"} alt="Roofer installing shingles" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/40" />
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-zinc-950/30" />
      <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px bg-white/10 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[38%] hidden w-px bg-white/10 xl:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-16 hidden h-px bg-white/10 md:block" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-28 pt-32 md:px-8 lg:grid-cols-[1.35fr_1fr] lg:pl-[calc(6%+2rem)]">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> Atlanta's roofing specialists
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[84px]">
              Roofs built to<br /><span className="font-normal text-orange-400">outlast</span> every<br />Georgia storm.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Replacement, repair and storm restoration from a crew that treats your home like their own. Start with a free, no-pressure inspection.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#inspection" className="group flex items-center gap-3 rounded-md bg-orange-500 px-6 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              Book free inspection <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={`tel:${BUSINESS.tel}`} className="flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </Reveal>
          <Reveal delay={480} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            {TRUST_BADGES.map((badge) => <span key={badge} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400" /> {badge}</span>)}
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div id="inspection" className="scroll-mt-28 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            {sent ? (
              <div className="flex min-h-85 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-orange-400" />
                <h2 className="mt-4 text-2xl font-medium">You're on the list!</h2>
                <p className="mt-2 text-white/75">We'll call you shortly to schedule your free inspection.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3.5">
                <h2 className="text-2xl font-medium">Free roof inspection</h2>
                <p className="pb-2 text-sm text-white/70">Tell us a little and we'll reach out to schedule.</p>
                <input required placeholder="Full name" aria-label="Full name" className={field} />
                <input required type="tel" placeholder="Phone number" aria-label="Phone number" className={field} />
                <input placeholder="Property address" aria-label="Property address" className={field} />
                <select required defaultValue="" aria-label="What do you need?" className={`${field} [&>option]:text-zinc-900`}>
                  <option value="" disabled>What do you need?</option>
                  {SERVICES.map((service) => <option key={service.title}>{service.title}</option>)}
                </select>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
                  Request my inspection <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-white/50">No cost. No obligation.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-between px-5 text-[11px] uppercase tracking-[0.18em] text-white/65 md:px-8">
        <a href="#services" className="flex items-center gap-2 hover:text-white"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> (Scroll down)</a>
        <span className="hidden items-center gap-2 sm:flex"><Home className="h-3 w-3" /> {BUSINESS.name}</span>
      </div>
    </section>
  );
}
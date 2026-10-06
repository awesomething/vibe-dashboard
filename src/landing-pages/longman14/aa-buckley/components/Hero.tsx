"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { BUSINESS, SLIDES } from "./data";
import { Reveal } from "./shared";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const total = SLIDES.length;
  const pad = (value: number) => String(value).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((current) => (current + 1) % total), 6500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0a2f57] text-white">
      {SLIDES.map((slide, index) => <div key={slide.title} aria-hidden="true" className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.img} alt="" className="h-full w-full object-cover" onError={(event) => { event.currentTarget.style.display = "none"; }} />
      </div>)}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a6e]/95 via-[#0d4a86]/70 to-[#0d4a86]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2f57]/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-white/15 md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[32%] hidden w-px bg-white/15 lg:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-16 hidden h-px bg-white/15 md:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-28 pt-32 md:px-8 md:pl-[calc(8%+2rem)]">
        <Reveal><p className="mb-6 text-xs uppercase tracking-[0.22em] text-white/75 md:text-sm">Atlanta's trusted local plumbers</p></Reveal>
        <Reveal delay={120}><h1 className="max-w-3xl text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">Plumbing done<br />right, first time.</h1></Reveal>
        <Reveal delay={240}><p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">From midnight burst pipes to full-home repiping, A A Buckley Plumbing keeps Atlanta's water running clean, safe and stress-free.</p></Reveal>
        <Reveal delay={360} className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#contact" className="group flex items-center gap-3 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#0a2f57]! transition hover:bg-sky-100">Get a free quote<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
          <a href={`tel:${BUSINESS.tel}`} className="flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"><Phone className="h-4 w-4" />{BUSINESS.phone}</a>
        </Reveal>
      </div>

      <div className="absolute right-8 top-28 hidden text-right text-sm uppercase leading-7 tracking-wider text-white/90 xl:block"><p>Fast response.</p><p>Honest pricing.</p><p>Spotless work.</p></div>
      <div className="absolute bottom-24 right-5 hidden w-[320px] md:block lg:right-8">
        <a href="#work" className="mb-3 flex items-center justify-end gap-1 text-sm text-white/90 hover:text-white">View our work<ArrowUpRight className="h-4 w-4" /></a>
        <div className="rounded-md border border-white/20 bg-white/15 p-4 backdrop-blur-md">
          <p className="min-h-[44px] text-[17px] leading-snug">{SLIDES[activeSlide].title}</p>
          <div className="mt-4 flex items-center justify-between">
            <button aria-label="Previous project" onClick={() => setActiveSlide((activeSlide - 1 + total) % total)} className="flex h-9 w-9 items-center justify-center rounded bg-white/90 text-slate-900 hover:bg-white"><ChevronLeft className="h-4 w-4" /></button>
            <div className="flex items-center gap-3 text-xs text-white/80"><span>({pad(activeSlide + 1)})</span><span className="h-px w-16 bg-white/40" /><span>{pad(total)}</span></div>
            <button aria-label="Next project" onClick={() => setActiveSlide((activeSlide + 1) % total)} className="flex h-9 w-9 items-center justify-center rounded bg-white/90 text-slate-900 hover:bg-white"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-between px-5 text-[11px] uppercase tracking-[0.18em] text-white/70 md:px-8">
        <a href="#services" className="flex items-center gap-2 hover:text-white"><span className="h-1.5 w-1.5 rounded-full bg-sky-300" />(Scroll down)</a>
        <span className="hidden sm:block">{BUSINESS.name}</span>
      </div>
    </section>
  );
}
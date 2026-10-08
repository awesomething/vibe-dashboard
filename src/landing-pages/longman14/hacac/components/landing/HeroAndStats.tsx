"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Gauge } from "lucide-react";
import { BUSINESS, IMG, SafeImage, Reveal, ModeToggle, useTheme, type Mode } from "../Shared";
import styles from "../../page.module.css";

export function Hero() {
  const { mode, t } = useTheme();
  const copy =
    mode === "cool"
      ? { kicker: "Beat the Atlanta heat", h1a: "Stay cool.", h1b: "Stay comfortable.", p: "Fast AC repair, honest advice and high-efficiency installs from technicians who respect your time and your home." }
      : { kicker: "Warm up for winter", h1a: "Stay warm.", h1b: "Stay worry-free.", p: "Furnace and heat pump repair, tune-ups and installs so cold snaps never catch your family off guard." };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {(["cool", "heat"] as Mode[]).map((m) => (
        <div key={m} className={`absolute inset-0 transition-opacity duration-1000 ${mode === m ? "opacity-100" : "opacity-0"}`}>
          <SafeImage src={m === "cool" ? IMG.heroCool : IMG.heroHeat} alt="Comfortable home interior" className="h-full w-full object-cover" />
        </div>
      ))}

      <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-1000 ${t.overlay}`} />
      <div className={`pointer-events-none absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full blur-3xl transition-colors duration-1000 ${t.glow}`} />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-32 pt-32 md:px-8 md:pl-[calc(6%+2rem)]">
        <Reveal>
          <ModeToggle />
        </Reveal>

        <div key={mode} className={styles.fadeUp}>
          <p className={`mt-8 text-xs font-semibold uppercase tracking-[0.25em] md:text-sm ${t.textOnDark}`}>{copy.kicker}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            {copy.h1a}
            <br />
            <span className="font-semibold">{copy.h1b}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{copy.p}</p>
        </div>

        <Reveal delay={200} className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#book" className={`group flex items-center gap-3 rounded-md px-7 py-4 text-sm font-semibold transition-colors duration-500 ${t.btn}`}>
            Schedule service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#diagnose" className="flex items-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-semibold transition hover:bg-white/10">
            <Gauge className="h-4 w-4" /> What's wrong with my system?
          </a>
        </Reveal>

        <Reveal delay={320} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
          {["Licensed & insured", "Upfront pricing", "Emergency service"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2 className={`h-4 w-4 ${t.textOnDark}`} /> {item}
            </span>
          ))}
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-between px-5 text-[11px] uppercase tracking-[0.18em] text-white/65 md:px-8">
        
        <span className="hidden sm:block">{BUSINESS.name}</span>
      </div>
    </section>
  );
}

export function Stats() {
  const { t } = useTheme();
  const stats = [
    { value: "24/7", label: "Emergency calls" },
    { value: "Same-day", label: "Service available" },
    { value: "100%", label: "Upfront quotes" },
    { value: "All major", label: "Brands serviced" },
  ];

  return (
    <section className={`bg-gradient-to-r px-5 py-14 text-white transition-all duration-700 md:px-8 ${t.band}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <p className="text-4xl font-light md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-white/80">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BUSINESS, IMAGES } from "./data";
import { Eyebrow, PoleStripe, Reveal, SafeImage } from "./shared";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-stone-950 text-[#f5efe6]"
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${y * 0.25}px) scale(1.08)` }}
      >
        <SafeImage
          src={IMAGES.hero}
          alt="Barber at work"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(12,10,9,0.7)_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center md:px-8">
        <Reveal>
          <Eyebrow light>Decatur, Georgia · Est. Barbershop</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 font-serif text-[clamp(3.2rem,12vw,10rem)] font-medium leading-[0.92] tracking-tight">
            Sharp cuts.
            <br />
            <span className="italic text-[#c9a24b]">Clean lines.</span>
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#f5efe6]/80 md:text-lg">
            Precision fades, sculpted beards and hot towel shaves from Arina, a
            barber who gives every client the time and detail they deserve.
          </p>
        </Reveal>
        <Reveal
          delay={380}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#book"
            className="group flex items-center gap-3 rounded-sm bg-[#c9a24b] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-950 transition hover:bg-[#dcb862]"
          >
            Book your chair{" "}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${BUSINESS.tel}`}
            className="flex items-center gap-2 rounded-sm border border-[#f5efe6]/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="flex items-center justify-between px-5 pb-4 text-[11px] uppercase tracking-[0.25em] text-[#f5efe6]/60 md:px-8">
          <a href="#services" className="flex items-center gap-2 hover:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a24b]" /> (Scroll
            down)
          </a>
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-3.5 w-3.5" /> Lawrenceville Hwy, Decatur
          </span>
        </div>
        <PoleStripe />
      </div>
    </section>
  );
}

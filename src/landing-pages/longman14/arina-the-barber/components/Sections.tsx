"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Quote,
  Scissors,
  Star,
} from "lucide-react";
import styles from "../arina-the-barber.module.css";
import {
  EXPERIENCE,
  GALLERY,
  GALLERY_CATEGORIES,
  IMAGES,
  REVIEWS,
  SERVICES,
} from "./data";
import { Eyebrow, Reveal, SafeImage } from "./shared";

export function Marquee() {
  const words = [
    "Skin Fades",
    "Tapers",
    "Beard Sculpting",
    "Line-Ups",
    "Hot Towel Shaves",
    "Kids Cuts",
    "Scissor Cuts",
  ];
  const items = [...words, ...words];

  return (
    <div className="overflow-hidden bg-[#f5efe6] py-5">
      <div
        className={`flex w-max items-center gap-10 whitespace-nowrap ${styles.serviceMarquee}`}
      >
        {items.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="flex items-center gap-10 font-serif text-2xl italic text-stone-900 md:text-3xl"
          >
            {word} <Scissors className="h-5 w-5 text-[#9a7a2e]" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-16 bg-[#f5efe6] px-5 py-24 text-stone-900 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.7fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>The menu</Eyebrow>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-6xl">
            Services &amp; <span className="italic">pricing</span>
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-stone-600">
            Every service includes a consultation and a clean finish. Not sure
            what to book? Call and we&apos;ll point you right.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-stone-900 pb-1 text-sm font-semibold uppercase tracking-widest transition hover:border-[#9a7a2e] hover:text-[#9a7a2e]"
          >
            Reserve a time <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {SERVICES.map((service, index) => (
            <Reveal key={service.name} delay={index * 60}>
              <div className="group flex items-start gap-5 py-7 transition hover:bg-white/60 md:px-4">
                <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition group-hover:border-[#c9a24b] group-hover:bg-[#c9a24b] group-hover:text-stone-950">
                  <service.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-serif text-2xl md:text-3xl">
                      {service.name}
                    </h3>
                    <span className="mb-1 hidden flex-1 border-b border-dotted border-stone-400 sm:block" />
                    <span className="font-serif text-2xl text-[#9a7a2e] md:text-3xl">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-md text-stone-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const [category, setCategory] = useState("All");
  const items = GALLERY.filter(
    (item) => category === "All" || item.cat === category,
  );

  return (
    <section
      id="gallery"
      className="scroll-mt-16 bg-stone-950 px-5 py-24 text-[#f5efe6] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow light>The portfolio</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-6xl">
              Fresh off <span className="italic text-[#c9a24b]">the chair</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition ${
                  category === item
                    ? "border-[#c9a24b] bg-[#c9a24b] text-stone-950"
                    : "border-white/25 text-white/70 hover:border-[#c9a24b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 lg:columns-3">
          {items.map((item) => (
            <figure
              key={item.label}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm"
            >
              <SafeImage
                src={item.img}
                alt={item.label}
                className={`w-full object-cover transition duration-700 group-hover:scale-105 ${item.ratio}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9a24b]">
                  {item.cat}
                </p>
                <p className="font-serif text-xl">{item.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-[#f5efe6] px-5 py-24 text-stone-900 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <SafeImage
                src={IMAGES.about}
                alt="Arina at the chair"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <div className="absolute -bottom-5 -right-2 hidden rounded-sm bg-stone-950 p-6 text-[#f5efe6] shadow-2xl sm:block md:-right-6">
                <Quote className="h-6 w-6 text-[#c9a24b]" />
                <p className="mt-2 max-w-[220px] font-serif text-lg italic leading-snug">
                  A great cut is a quiet confidence.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Eyebrow>Meet your barber</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-6xl">
              Craft, patience &amp; <span className="italic">detail.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              At Arina The Barber, you&apos;re never just another appointment.
              Every cut starts with a conversation and ends with a result
              you&apos;re proud to show off, whether it&apos;s a razor-sharp fade,
              a sculpted beard or a classic scissor cut.
            </p>
            <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
              {EXPERIENCE.map((item) => (
                <div key={item.n} className="flex gap-6 py-6">
                  <span className="font-serif text-4xl italic text-[#9a7a2e]">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl">{item.t}</h3>
                    <p className="mt-1 text-stone-600">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="scroll-mt-16 overflow-hidden bg-stone-900 py-24 text-[#f5efe6] md:py-32"
    >
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow light>Word on the street</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] md:text-6xl">
          Clients who{" "}
          <span className="italic text-[#c9a24b]">keep coming back</span>
        </h2>
      </Reveal>
      <div
        className={`mt-14 flex w-max gap-5 hover:[animation-play-state:paused] ${styles.reviewsMarquee}`}
      >
        {items.map((review, index) => (
          <div
            key={`${review.n}-${index}`}
            className="w-[320px] shrink-0 rounded-sm border border-white/10 bg-stone-950 p-7 md:w-[380px]"
          >
            <div className="flex gap-1 text-[#c9a24b]">
              {[...Array(5)].map((_, star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 font-serif text-xl leading-snug">
              &quot;{review.t}&quot;
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">
              {review.n}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

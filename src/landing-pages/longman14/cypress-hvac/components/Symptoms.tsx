"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { symptoms } from "../utils";
import { Reveal } from "./Reveal";

export function Symptoms() {
  const [active, setActive] = useState(0);
  const s = symptoms[active];

  function book() {
    window.dispatchEvent(
      new CustomEvent("prefill-booking", {
        detail: { service: s.service, notes: `Symptom: ${s.label}` },
      }),
    );
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            What&apos;s going on?
          </span>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Not sure what&apos;s wrong? Start here.
          </h2>
          <p className="mt-4 max-w-xl text-ink/65">
            Tap what you&apos;re noticing for a likely cause. It&apos;s a starting point, not a diagnosis. A
            technician will confirm in person.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-wrap content-start gap-2.5">
            {symptoms.map((x, i) => (
              <button
                key={x.label}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  i === active
                    ? "border-brand bg-brand text-white shadow-lg shadow-brand/25"
                    : "border-ink/15 hover:border-brand hover:text-brand"
                }`}
              >
                {x.label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-ice p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Likely cause</p>
            <h3 className="mt-2 text-2xl font-bold">{s.label}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{s.cause}</p>
            <button
              onClick={book}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 font-semibold text-white transition hover:bg-brand"
            >
              Book {s.service.toLowerCase()}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

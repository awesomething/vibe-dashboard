"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Calendar, CheckCircle2, Clock, Phone } from "lucide-react";
import { BUSINESS, SERVICES } from "./data";
import { Reveal } from "./shared";

export function BookingSection() {
  const [sent, setSent] = useState(false);
  const field =
    "w-full border-0 border-b border-stone-400 bg-transparent px-0 py-3 text-stone-900 placeholder-stone-500 outline-none transition focus:border-[#9a7a2e]";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="book"
      className="scroll-mt-16 bg-[#c9a24b] px-5 py-24 text-stone-950 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-900/70">
            Book your chair
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
            Your next <span className="italic">best cut</span> is one call away.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-900/80">
            Send a request and we&apos;ll confirm your time, or skip the form and
            call us directly.
          </p>
          <a
            href={`tel:${BUSINESS.tel}`}
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe6] transition hover:bg-stone-800"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-sm bg-[#f5efe6] p-8 shadow-2xl md:p-10">
            {sent ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-[#9a7a2e]" />
                <h3 className="mt-4 font-serif text-3xl">Request received!</h3>
                <p className="mt-2 text-stone-600">
                  We&apos;ll confirm your appointment shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <input required placeholder="Your name" className={field} />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className={field}
                />
                <select required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service.name}>{service.name}</option>
                  ))}
                </select>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-2 border-b border-stone-400 text-stone-500 focus-within:border-[#9a7a2e]">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <input
                      required
                      type="date"
                      className="w-full bg-transparent py-3 text-stone-900 outline-none"
                    />
                  </label>
                  <label className="flex items-center gap-2 border-b border-stone-400 text-stone-500 focus-within:border-[#9a7a2e]">
                    <Clock className="h-4 w-4 shrink-0" />
                    <input
                      required
                      type="time"
                      className="w-full bg-transparent py-3 text-stone-900 outline-none"
                    />
                  </label>
                </div>
                <textarea
                  rows={3}
                  placeholder="Notes or reference style (optional)"
                  className={field}
                />
                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center gap-3 rounded-sm bg-stone-950 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5efe6] transition hover:bg-stone-800"
                >
                  Request appointment <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowRight, BadgeCheck, PhoneCall } from "lucide-react";
import { site } from "../utils";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ice pb-16 pt-28 sm:pt-32 lg:pb-20">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            AC &amp; heating repair · Atlanta, GA
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl">
            Your comfort,
            <br />
            <span className="text-brand">fixed fast.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
            When the Atlanta heat hits and your AC quits, you need someone who shows up, explains the
            problem plainly, and gets it working.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-600"
            >
              Book a technician
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${site.tel}`}
              className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-5 py-3.5 font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <PhoneCall className="size-4" />
              Call now
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/75">
            <BadgeCheck className="size-5 shrink-0 text-brand" />
            Upfront diagnosis before any repair
          </p>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="relative aspect-[1.55] overflow-hidden rounded-3xl bg-navy/10">
            <img
              src="https://media.istockphoto.com/id/2122076165/photo/air-conditioner-service-outdoor-checking-fix-repair-air-conditioner-cleaning-technician-he.jpg?s=612x612&w=0&k=20&c=SM-tKNDbCJZoTzbG-Ik-7Zc4H0sf3phR66cw__86tuU="
              alt="Technician working on a residential electrical control panel"
              className="size-full object-cover object-center"
              fetchPriority="high"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex min-h-44 flex-col justify-between rounded-2xl bg-white p-5 sm:p-6">
              <BadgeCheck className="size-7 text-brand" strokeWidth={1.8} />
              <div>
                <h2 className="font-display text-lg font-bold">Clear answers. No pressure.</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65!">
                  We explain what is wrong and walk through your options before work begins.
                </p>
              </div>
            </div>

            <a
              href={`tel:${site.tel}`}
              className="group flex min-h-44 flex-col justify-between rounded-2xl bg-brand p-5 text-white! transition-colors hover:bg-brand-600 sm:p-6"
            >
              <span className="flex items-center justify-between">
                <PhoneCall className="size-7" strokeWidth={1.8} />
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold">Need quick help?</span>
                <span className="mt-1.5 block text-sm text-white/85">
                  Call our Atlanta team
                </span>
                <span className="mt-3 block text-sm font-bold">{site.phone}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

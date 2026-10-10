import { ArrowRight, MapPin, Phone } from "lucide-react";
import { site } from "../utils";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Don&apos;t sweat it.
            <br />
            <span className="text-sky-300">We&apos;ll cool it down.</span>
          </h2>
          <a
            href={`tel:${site.tel}`}
            className="mt-8 inline-flex items-center gap-3 font-display text-3xl font-bold hover:text-sky-300 sm:text-4xl"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-brand">
              <Phone className="size-6" />
            </span>
            {site.phone}
          </a>
          <p className="mt-6 flex items-start gap-2 text-white/75">
            <MapPin className="mt-1 size-5 shrink-0 text-sky-300" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-4 font-semibold transition hover:bg-brand-600"
            >
              Book online <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/25 px-6 py-4 font-semibold transition hover:bg-white/10"
            >
              Get directions
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-80 overflow-hidden rounded-3xl ring-1 ring-white/15 lg:h-full lg:min-h-96">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapsEmbed}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

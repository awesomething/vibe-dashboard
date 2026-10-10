import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS, HOURS, MAP_EMBED } from "./data";
import { Eyebrow, Reveal } from "./shared";

export function VisitSection() {
  return (
    <section
      id="visit"
      className="scroll-mt-16 bg-stone-950 px-5 py-24 text-[#f5efe6] md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow light>Visit the shop</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.05] md:text-6xl">
            Find us on{" "}
            <span className="italic text-[#c9a24b]">Lawrenceville Hwy</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 lg:grid-cols-[1fr_1.8fr]">
            <div className="flex flex-col justify-between gap-10 bg-stone-900 p-8 md:p-10">
              <div className="space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c9a24b]" />
                  <p className="text-lg leading-snug">{BUSINESS.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#c9a24b]" />
                  <a
                    href={`tel:${BUSINESS.tel}`}
                    className="text-lg hover:text-[#c9a24b]"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#c9a24b]" />
                  <ul className="w-full space-y-2 text-sm">
                    {HOURS.map((hour) => (
                      <li
                        key={hour.d}
                        className="flex justify-between gap-4 border-b border-white/10 pb-2"
                      >
                        <span className="text-white/60">{hour.d}</span>
                        <span>{hour.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-sm bg-[#c9a24b] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-[#dcb862]"
              >
                <Navigation className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
            <iframe
              title={`Map showing ${BUSINESS.name}`}
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[380px] w-full border-0 grayscale-[0.3] lg:h-full lg:min-h-[520px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

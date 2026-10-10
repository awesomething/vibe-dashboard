import { ExternalLink, Quote, Star } from "lucide-react";
import { reviews, site } from "../utils";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            Customer feedback
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Hear it from your neighbors</h2>
        </Reveal>

        {reviews.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="h-full rounded-2xl bg-ice p-6">
                  <Quote className="size-8 text-brand/40" />
                  <blockquote className="mt-3 leading-relaxed text-ink/80">{r.text}</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold">
                    {r.name}
                    {r.detail && <span className="font-normal text-ink/55"> · {r.detail}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-start justify-between gap-8 rounded-3xl bg-ice p-8 sm:p-12 md:flex-row md:items-center">
              <div className="max-w-xl">
                <div className="flex gap-1 text-heat">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-6 fill-current" />
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">See what customers say on Google</h3>
                <p className="mt-2 text-ink/65">
                  Real reviews from real Atlanta customers, straight from our Google listing.
                </p>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy px-6 py-4 font-semibold text-white! transition hover:bg-brand"
              >
                Read our reviews <ExternalLink className="size-4" />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

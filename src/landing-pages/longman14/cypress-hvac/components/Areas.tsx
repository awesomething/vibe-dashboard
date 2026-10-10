import { MapPin } from "lucide-react";
import { areas } from "../utils";
import { Reveal } from "./Reveal";

export function Areas() {
  return (
    <section id="areas" className="bg-ice py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            Service area
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Serving Atlanta and nearby neighborhoods</h2>
          <p className="mt-4 text-ink/65">
            Don&apos;t see your area? Call us. We may still be able to help.
          </p>
        </Reveal>
        <Reveal delay={100} className="mt-10 flex flex-wrap gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:text-brand"
            >
              <MapPin className="size-4 text-brand" /> {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

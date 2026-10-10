import { Plus } from "lucide-react";
import { faqs } from "../utils"
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section id="faq" className="bg-ice py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Good questions</h2>
          <p className="mt-4 text-ink/65">Can&apos;t find your answer? Call us and ask.</p>
        </Reveal>
        <Reveal delay={100} className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 open:ring-brand/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-brand transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

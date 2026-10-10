import { CheckCircle2 } from "lucide-react";
import { reasons } from "../utils";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-800 to-brand p-8 text-white sm:p-10">
            <div className="absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-2xl" />
            <p className="text-xs font-bold uppercase tracking-wider text-sky-200">The Cypress promise</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-snug sm:text-4xl">
              Explain it plainly. Fix it properly. Leave you comfortable.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="grid size-12 place-items-center rounded-xl bg-white text-brand">
                <CheckCircle2 className="size-7" />
              </div>
              <p className="text-sm text-white/85">
                No jargon, no pressure. You decide what happens with your system.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Why choose us
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Prompt service, honest advice</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink/10 p-5 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                  <CheckCircle2 className="size-6 text-brand" />
                  <h3 className="mt-3 font-bold">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

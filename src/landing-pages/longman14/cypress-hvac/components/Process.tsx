import { steps } from "../utils";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="how" className="bg-ice py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">From &ldquo;it&apos;s broken&rdquo; to fixed in four steps</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
                <div className="relative z-10 grid size-14 place-items-center rounded-2xl bg-brand font-display text-xl font-bold text-white shadow-lg shadow-brand/30">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

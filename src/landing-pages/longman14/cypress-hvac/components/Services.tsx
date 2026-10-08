import {
    Fan, Flame, Gauge, Snowflake, Wind, Wrench, ArrowUpRight,
  } from "lucide-react";
  import { services } from "../utils";
import { Reveal } from "./Reveal";

 
  
  const icons = { snowflake: Snowflake, flame: Flame, wrench: Wrench, fan: Fan, wind: Wind, gauge: Gauge };
  
  export function Services() {
    return (
      <section id="services" className="relative bg-navy py-24 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <span className="rounded-md bg-brand/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300">
              What we do
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
              Heating, cooling and everything in between
            </h2>
          </Reveal>
  
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <a
                    href="#book"
                    className="group relative flex h-full min-h-64 flex-col border border-white/10 p-7 transition-colors duration-300 hover:bg-white hover:text-ink"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-white/50 group-hover:text-ink/50">
                      <span>0{i + 1}</span>
                      <ArrowUpRight className="size-5 opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <Icon className="mt-8 size-12 text-brand" strokeWidth={1.4} />
                    <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65 group-hover:text-ink/65">
                      {s.blurb}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CloudLightning,
  GripVertical,
  MapPin,
  Minus,
  Navigation,
  Phone,
  Plus,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  BENEFITS,
  BUSINESS,
  FAQS,
  IMG,
  MAP_DIRECTIONS,
  MAP_EMBED,
  MATERIALS,
  PROJECTS,
  REVIEWS,
  SERVICES,
  STEPS,
  STORM_SUPPORT,
  TRUST,
} from "./data";
import { Label, Reveal, SafeImage } from "./shared";

export function TrustStrip() {
  return (
    <>
      <style jsx global>{`@keyframes roofing-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="overflow-hidden border-y border-zinc-800 bg-zinc-900 py-4 text-white">
        <div className="flex w-max animate-[roofing-marquee_35s_linear_infinite] gap-12 whitespace-nowrap motion-reduce:animate-none">
          {[...TRUST, ...TRUST].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-3 text-sm uppercase tracking-widest text-white/70">
              <ShieldCheck className="h-4 w-4 text-orange-400" /> {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export function PromiseSection() {
  const promises = [
    {
      title: "Know what your roof needs",
      text: "A free inspection and photo report make the condition and next steps clear.",
    },
    {
      title: "Choose the right system",
      text: "Compare shingle, metal, and low-slope options for your home or building.",
    },
    {
      title: "Get the work in writing",
      text: "Review a clear estimate, planned work, and written workmanship warranty.",
    },
  ];

  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <h2 className="max-w-4xl text-5xl font-light leading-[1.02] text-zinc-950 sm:text-6xl md:text-7xl">
              Protection starts <span className="font-medium text-orange-500">above your ceiling.</span>
            </h2>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-relaxed text-zinc-600">
                Atlanta roofs take on heat, humidity, heavy rain, and wind. We help you understand your roof's condition,
                compare suitable materials, and choose the right repair or replacement with clear written pricing.
              </p>
              <a href="#inspection" className="mt-6 inline-flex items-center gap-2 border-b border-orange-500 pb-2 text-sm font-semibold text-zinc-950 transition-colors hover:text-orange-600">
                Start with a free inspection <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 grid border-t border-zinc-200 sm:grid-cols-3">
          {promises.map((promise) => (
            <article key={promise.title} className="border-b border-zinc-200 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 md:py-8">
              <h3 className="text-lg font-semibold text-zinc-950">{promise.title}</h3>
              <p className="mt-2 max-w-sm leading-relaxed text-zinc-600">{promise.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-zinc-50 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Label>What we do</Label>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">From first leak to final shingle.</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="group h-full rounded-xl border border-zinc-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-zinc-900">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{service.text}</p>
                <a href="#inspection" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-orange-600 opacity-0 transition group-hover:opacity-100">
                  Get a quote <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  return (
    <section className="bg-zinc-950 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Label dark>The difference</Label>
          <h2 className="mt-5 text-4xl font-light tracking-tight md:text-5xl">See what a new roof does for your home.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">Curb appeal, energy savings and peace of mind, all in one project. Drag the slider to compare.</p>
          <ul className="mt-8 space-y-3 text-white/85">
            {BENEFITS.map((benefit) => <li key={benefit} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-orange-400" /> {benefit}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-4/3 w-full select-none overflow-hidden rounded-2xl">
            <SafeImage src={IMG.after} alt="New roof" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <SafeImage src={IMG.after} alt="Aged roof comparison" className="h-full w-full object-cover" style={{ filter: "grayscale(0.9) sepia(0.4) contrast(0.85) brightness(0.7)" }} />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">Before</span>
            <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs uppercase tracking-widest">After</span>
            <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${position}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-900 shadow-xl"><GripVertical className="h-5 w-5" /></span>
            </div>
            <input type="range" min={0} max={100} value={position} aria-label="Before and after comparison" onChange={(event) => setPosition(Number(event.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Materials() {
  const [active, setActive] = useState(0);
  const material = MATERIALS[active];
  return (
    <section id="materials" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Label>Materials</Label>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">The right roof for your home and budget.</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap gap-3" role="tablist" aria-label="Roofing materials">
            {MATERIALS.map((item, index) => (
              <button key={item.key} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)} className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition ${index === active ? "border-orange-500 bg-orange-500 text-white" : "border-zinc-300 text-zinc-700 hover:border-orange-300"}`}>
                <item.icon className="h-4 w-4" /> {item.key}
              </button>
            ))}
          </div>
          <div key={material.key} className="mt-8 grid gap-8 rounded-2xl bg-zinc-50 p-8 md:grid-cols-2 md:p-12">
            <div>
              <material.icon className="h-10 w-10 text-orange-500" />
              <h3 className="mt-5 text-3xl font-light text-zinc-900">{material.key}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-zinc-600">{material.blurb}</p>
              <a href="#inspection" className="mt-7 inline-flex items-center gap-2 rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white! transition hover:bg-orange-600">Get a material quote <ArrowRight className="h-4 w-4" /></a>
            </div>
            <ul className="space-y-4 self-center">
              {material.points.map((point) => <li key={point} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" /><span className="text-zinc-800">{point}</span></li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-zinc-50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><Label>Recent projects</Label><h2 className="mt-5 max-w-xl text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">Roofs we're proud to put our name on.</h2></Reveal>
        <div className="mt-14 grid auto-rows-55 grid-cols-2 gap-4 md:auto-rows-65 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 80} className={project.tall ? "row-span-2" : ""}>
              <figure className="group relative h-full overflow-hidden rounded-xl">
                <SafeImage src={project.img} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <p className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-orange-300"><MapPin className="h-3 w-3" /> {project.area}</p>
                  <p className="mt-1 text-base md:text-lg">{project.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StormCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-orange-500 to-orange-700 px-5 py-20 text-white md:px-8">
      <CloudLightning className="absolute -right-10 -top-10 h-72 w-72 text-white/10" />
      <Reveal>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-white/85"><CloudLightning className="h-4 w-4" /> Storm damage?</p>
            <h2 className="mt-3 text-3xl font-light md:text-5xl">We'll tarp it, document it and help you file the claim.</h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-white/90">
              {STORM_SUPPORT.map(({ icon: Icon, text }) => <span key={text} className="flex items-center gap-2"><Icon className="h-5 w-5" /> {text}</span>)}
            </div>
          </div>
          <a href={`tel:${BUSINESS.tel}`} className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-5 text-lg font-semibold text-orange-700! shadow-2xl transition hover:scale-[1.03]"><Phone className="h-5 w-5" /> {BUSINESS.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><Label>How it works</Label><h2 className="mt-5 text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">A roof project without the headache.</h2></Reveal>
        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-zinc-200 lg:block" />
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 120}>
              <div className="relative">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><step.icon className="h-6 w-6" /></span>
                <p className="mt-5 text-xs uppercase tracking-widest text-zinc-400">Step 0{index + 1}</p>
                <h3 className="mt-1 text-xl font-medium text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-zinc-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % REVIEWS.length), 7000);
    return () => window.clearInterval(timer);
  }, []);
  const review = REVIEWS[active];
  return (
    <section id="reviews" className="scroll-mt-20 bg-zinc-950 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <Label dark>Homeowner stories</Label>
          <h2 className="mt-5 text-4xl font-light tracking-tight md:text-5xl">Neighbors who sleep better now.</h2>
          <div className="mt-8 flex gap-2">
            <button type="button" aria-label="Previous review" onClick={() => setActive((index) => (index - 1 + REVIEWS.length) % REVIEWS.length)} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 hover:bg-white/10"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" aria-label="Next review" onClick={() => setActive((index) => (index + 1) % REVIEWS.length)} className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-500 hover:bg-orange-600"><ChevronRight className="h-5 w-5" /></button>
            <span className="ml-3 self-center text-xs text-white/50">({String(active + 1).padStart(2, "0")}) / {String(REVIEWS.length).padStart(2, "0")}</span>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div key={active} className="rounded-2xl border border-white/15 bg-white/5 p-8 md:p-12">
            <div className="flex gap-1 text-amber-300">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}</div>
            <p className="mt-6 text-2xl font-light leading-snug md:text-3xl">&ldquo;{review.text}&rdquo;</p>
            <p className="mt-8 font-medium">{review.name}</p><p className="text-sm text-white/55">{review.area}, Atlanta</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <Label>FAQ</Label><h2 className="mt-5 text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">Roofing questions, answered.</h2>
          <p className="mt-4 text-zinc-600">Still unsure? Call us, we're happy to talk it through.</p>
          <a href={`tel:${BUSINESS.tel}`} className="mt-6 inline-flex items-center gap-2 font-medium text-orange-600 hover:underline"><Phone className="h-4 w-4" /> {BUSINESS.phone}</a>
        </Reveal>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="text-lg font-medium text-zinc-900">{item.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}><p className="overflow-hidden leading-relaxed text-zinc-600">{item.a}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section id="map" className="scroll-mt-20 bg-zinc-50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><Label>Find us</Label><h2 className="mt-5 max-w-xl text-4xl font-light tracking-tight text-zinc-900 md:text-5xl">Right here in the heart of Atlanta.</h2></Reveal>
        <Reveal delay={120}>
          <div className="mt-12 grid overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-[1fr_1.7fr]">
            <div className="flex flex-col justify-between gap-8 bg-zinc-950 p-8 text-white md:p-10">
              <div className="space-y-6">
                <div className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500"><MapPin className="h-5 w-5" /></span><div><p className="text-xs uppercase tracking-widest text-white/50">Visit our office</p><p className="mt-1 text-lg leading-snug">{BUSINESS.address}</p></div></div>
                <div className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10"><Phone className="h-5 w-5" /></span><div><p className="text-xs uppercase tracking-widest text-white/50">Call us</p><a href={`tel:${BUSINESS.tel}`} className="mt-1 block text-lg hover:text-orange-300">{BUSINESS.phone}</a></div></div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold transition hover:bg-orange-600"><Navigation className="h-4 w-4" /> Get directions</a>
                <a href={`tel:${BUSINESS.tel}`} className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"><Phone className="h-4 w-4" /> Call now</a>
              </div>
            </div>
            <iframe title={`Map showing ${BUSINESS.name}`} src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-95 w-full border-0 lg:h-full lg:min-h-120" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


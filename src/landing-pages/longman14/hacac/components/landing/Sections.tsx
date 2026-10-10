"use client";

import React, { useEffect, useState, type FormEvent } from "react";
import {
  AirVent,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  Fan,
  Flame,
  Gauge,
  Home as HomeIcon,
  MapPin,
  Minus,
  Navigation,
  Phone,
  Plus,
  Snowflake,
  Star,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import {
  BUSINESS,
  FAQS,
  IMG,
  MAP_EMBED,
  PROJECTS,
  REVIEWS,
  SafeImage,
  SEASONS,
  SERVICES,
  SYMPTOMS,
  WHY,
  Eyebrow,
  Reveal,
  useTheme,
} from "../Shared";
import styles from "../../page.module.css";

export function Services() {
  const { t } = useTheme();

  return (
    <section id="services" className="scroll-mt-16 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Service menu</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Comprehensive <span className="font-semibold">HVAC care.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 90}>
                <div className={`h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 ${service.span}`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${t.soft}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.text}</p>
                  <a href="#book" className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${t.text}`}>
                    Request service <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Diagnose() {
  const { t } = useTheme();
  const [selected, setSelected] = useState<number | null>(0);
  const current = selected === null ? null : SYMPTOMS[selected];

  return (
    <section id="diagnose" className="scroll-mt-16 bg-slate-950 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow dark>Diagnose</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight md:text-5xl">
            What does your system <span className="font-semibold">need?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {SYMPTOMS.map((symptom, index) => {
              const Icon = symptom.icon;
              const active = selected === index;
              return (
                <button
                  key={symptom.label}
                  onClick={() => setSelected(index)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${active ? `${t.soft} border-transparent shadow-lg` : "border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20"}`}
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${active ? "bg-white/20" : "bg-white/5"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{symptom.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur">
            {current ? (
              <div key={current.label} className={styles.fadeUpQuick}>
                {current.urgent && (
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
                    <Zap className="h-3.5 w-3.5" /> Call soon
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.textOnDark}`}>Likely cause</p>
                <p className="mt-2 text-lg leading-relaxed text-white/90">{current.cause}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Recommended</p>
                <p className="mt-1 text-2xl font-medium">{current.fix}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`tel:${BUSINESS.tel}`} className={`flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-500 ${t.btn}`}>
                    <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
                  </a>
                  <a href="#book" className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                    Book online
                  </a>
                </div>
                <p className="mt-6 text-xs text-white/45">General guidance only. A technician will confirm the real cause on site.</p>
              </div>
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center text-center text-white/50">
                <Gauge className="h-12 w-12" />
                <p className="mt-4">Select a symptom to see what it usually means.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Advisor() {
  const { t } = useTheme();
  const [age, setAge] = useState(10);
  const [repairs, setRepairs] = useState(1);
  const [bills, setBills] = useState(false);

  const score = Math.min(age, 20) * 3.5 + repairs * 14 + (bills ? 12 : 0);
  const verdict =
    score >= 70
      ? { title: "Replacement is worth pricing", text: "At this age and repair history, a new high-efficiency system often pays back through lower bills and fewer breakdowns.", pct: 90 }
      : score >= 45
        ? { title: "It's a close call", text: "Repair may still make sense, but compare it against a replacement quote before spending more.", pct: 60 }
        : { title: "Repair likely makes sense", text: "Your system has life left. Regular maintenance can keep it running efficiently for years.", pct: 25 };

  return (
    <section id="advisor" className="scroll-mt-16 bg-slate-50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Smart advisor</Eyebrow>
          <h2 className="mt-5 text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Repair or <span className="font-semibold">replace?</span>
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
            Answer three quick questions for a rough idea. We'll give you a firm answer, free, after a proper assessment.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
            <label className="block">
              <span className="flex justify-between text-sm font-medium text-slate-700">
                How old is your system? <span className={`font-semibold ${t.text}`}>{age} yrs</span>
              </span>
              <input type="range" min={1} max={25} value={age} onChange={(event) => setAge(Number(event.target.value))} className="mt-3 w-full accent-slate-900" />
            </label>

            <div className="mt-7">
              <p className="text-sm font-medium text-slate-700">How often has it needed repairs?</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Rarely", "Sometimes", "Often"].map((label, index) => (
                  <button
                    key={label}
                    onClick={() => setRepairs(index)}
                    className={`rounded-lg border py-2.5 text-sm font-medium transition ${repairs === index ? `${t.fill} border-transparent text-white` : "border-slate-300 text-slate-700 hover:border-slate-400"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-7 flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">
              <input type="checkbox" checked={bills} onChange={(event) => setBills(event.target.checked)} className="h-5 w-5 accent-slate-900" />
              My energy bills keep rising
            </label>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div className={`h-full rounded-full transition-all duration-700 ${t.fill}`} style={{ width: `${verdict.pct}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-[11px] uppercase tracking-wider text-slate-400">
                <span>Repair</span>
                <span>Replace</span>
              </div>
              <h3 className="mt-4 text-2xl font-medium text-slate-900">{verdict.title}</h3>
              <p className="mt-1 text-slate-600">{verdict.text}</p>
              <a href="#book" className={`mt-5 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-500 ${t.btn}`}>
                Get a free assessment <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Seasonal() {
  const { t } = useTheme();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(new Date().getMonth());
  }, []);

  return (
    <section id="seasonal" className="scroll-mt-16 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Year-round care</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            The right checkup, <span className="font-semibold">every season.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map((season, index) => {
            const current = now !== null && season.months.includes(now);
            const Icon = season.icon;
            return (
              <Reveal key={season.name} delay={index * 100}>
                <div className={`relative h-full rounded-2xl border p-7 transition duration-300 ${current ? `${t.border} bg-slate-50 shadow-lg` : "border-slate-200"}`}>
                  {current && <span className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white ${t.fill}`}>Now</span>}
                  <Icon className={`h-9 w-9 transition-colors duration-500 ${t.text}`} />
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-400">{season.name}</p>
                  <h3 className="mt-1 text-xl font-medium text-slate-900">{season.title}</h3>
                  <p className="mt-2 text-slate-600">{season.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-950 p-8 text-white md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <CalendarCheck className={`h-9 w-9 ${t.textOnDark}`} />
              <p className="text-lg">Ask about our maintenance plans: priority scheduling and seasonal checkups, all year.</p>
            </div>
            <a href={`tel:${BUSINESS.tel}`} className={`shrink-0 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-500 ${t.btn}`}>
              Ask about plans
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  const { t } = useTheme();

  return (
    <section className="bg-slate-50 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SafeImage src={IMG.tech} alt="HVAC technician at work" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-5 text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
              Your neighbors' <span className="font-semibold">go-to HVAC team.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {WHY.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.t} delay={index * 100}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${t.soft}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-slate-900">{item.t}</h3>
                  <p className="mt-1 text-slate-600">{item.d}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Recent work</Eyebrow>
          <h2 className="mt-5 max-w-xl text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Installs we're <span className="font-semibold">proud of.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <SafeImage src={project.img} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-white/70">
                    <HomeIcon className="h-3 w-3" /> {project.area}
                  </p>
                  <p className="mt-1 font-medium">{project.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-16 bg-slate-950 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow dark>Customer stories</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-4xl font-light tracking-tight md:text-5xl">
            Comfortable homes, <span className="font-semibold">happy neighbors.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.n} delay={index * 120}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex gap-1 text-amber-300">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-white/90">"{review.t}"</p>
                <p className="mt-6 font-medium">{review.n}</p>
                <p className="text-sm text-white/50">{review.a}, GA</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  const { t } = useTheme();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const field = `w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-2 ${t.ring}`;

  return (
    <section id="book" className="scroll-mt-16 bg-slate-50 px-5 py-24 md:px-8 md:py-32">
      <div className={`mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br text-white shadow-2xl transition-all duration-700 lg:grid-cols-[1fr_1.1fr] ${t.band}`}>
        <Reveal className="p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Schedule service</p>
          <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
            Get comfortable <span className="font-semibold">again.</span>
          </h2>
          <p className="mt-4 max-w-sm text-lg text-white/85">Tell us what's going on and we'll get you on the schedule. Emergency? Call us.</p>
          <a href={`tel:${BUSINESS.tel}`} className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-lg font-semibold text-slate-900! shadow-xl transition hover:scale-[1.03]">
            <Phone className="h-5 w-5" /> {BUSINESS.phone}
          </a>
        </Reveal>

        <div className="bg-white p-8 text-slate-900! md:p-12">
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 className={`h-14 w-14 ${t.text}`} />
              <h3 className="mt-4 text-2xl font-medium">Request received!</h3>
              <p className="mt-2 text-slate-600">We'll contact you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" className={field} />
                <input required type="tel" placeholder="Phone number" className={field} />
              </div>

              <input placeholder="Service address" className={field} />
              <select required defaultValue="" className={field}>
                <option value="" disabled>
                  What do you need?
                </option>
                {[...SERVICES.map((service) => service.title), "Emergency (no heat / no cooling)"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <textarea rows={3} placeholder="Describe the problem" className={field} />
              <button type="submit" className={`flex w-full items-center justify-center gap-2 rounded-lg py-3.5 font-semibold transition-colors duration-500 ${t.btn}`}>
                Request service <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const { t } = useTheme();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            HVAC questions, <span className="font-semibold">answered.</span>
          </h2>
          <a href={`tel:${BUSINESS.tel}`} className={`mt-6 inline-flex items-center gap-2 font-medium transition-colors duration-500 ${t.text}`}>
            <Phone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </Reveal>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.q}>
                <button onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="text-lg font-medium text-slate-900">{faq.q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${t.soft}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden leading-relaxed text-slate-600">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const { t } = useTheme();

  return (
    <section id="visit" className="scroll-mt-16 bg-slate-50 px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Find us</Eyebrow>
          <h2 className="mt-5 max-w-xl text-4xl font-light tracking-tight text-slate-900 md:text-5xl">
            Based on <span className="font-semibold">Peters Street.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-[1fr_1.8fr]">
            <div className="flex flex-col justify-between gap-8 bg-slate-950 p-8 text-white md:p-10">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${t.fill}`}>
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">Our office</p>
                    <p className="mt-1 text-lg leading-snug">{BUSINESS.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">Call us</p>
                    <a href={`tel:${BUSINESS.tel}`} className="mt-1 block text-lg hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-semibold transition-colors duration-500 ${t.btn}`}>
                <Navigation className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>

            <iframe
              title={`Map showing ${BUSINESS.name}`}
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[380px] w-full border-0 lg:h-full lg:min-h-[480px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

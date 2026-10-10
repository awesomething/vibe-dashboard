"use client";
import React, { createContext, useContext, useEffect, useRef, useState, type ReactNode, type FormEvent, type CSSProperties } from "react";
import { Snowflake, Flame, ArrowRight, ArrowUpRight, Wrench, Thermometer, Wind, Fan, Zap, Volume2, TrendingUp, Gauge, CalendarCheck, Leaf, Sun, Sprout, AirVent, ShieldCheck, BadgeCheck, Clock, Star, MapPin, Navigation, Plus, Minus, CheckCircle2, ThumbsUp, Home as HomeIcon, Phone, Menu, X } from "lucide-react";

export const BUSINESS = {
  name: "Heating & Air Conditioning Atlanta City",
  phone: "(943) 219-5190",
  tel: "+19432195190",
  address: "200 Peters St SW, Atlanta, GA 30313, USA",
  mapsLink: "https://maps.google.com/?cid=10218509984222334942&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
};
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&z=15&output=embed`;
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMG = {
  heroCool: u("photo-1615874959474-d609969a20ed", 2000),
  heroHeat: u("photo-1556909114-f6e7ad7d3136", 2000),
  tech: "https://img.magnific.com/free-photo/certified-technician-contracted-fix-broken-air-conditioner-dismantling-condenser-front-coil-panel-check-faulty-internal-components-electrician-opening-hvac-system-check-improper-wiring_482257-67924.jpg",
  p1: "https://static.vecteezy.com/system/resources/thumbnails/078/813/429/small/man-technician-servicing-air-conditioner-with-drill-photo.jpg",
  p2: "https://aireonekw.ca/wp-content/uploads/2025/07/High-Quality-Furnace-Repairs.webp",
  p3: "https://klimaire.com/cdn/shop/collections/category-wall-mount.jpg?v=1751299465",
  p4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMqXVIzHw7qMZm0NkKq-QrNXGyLEwWzcb6-IzIJFQVVJ3bm7tuDP2yRc&s=10",
};
export type Mode = "cool" | "heat";
export const THEMES = {
  cool: {
    btn: "bg-sky-500 hover:bg-sky-400 text-white", text: "text-sky-500", textOnDark: "text-sky-300", soft: "bg-sky-100 text-sky-700", border: "border-sky-400", ring: "focus:border-sky-500 focus:ring-sky-200", overlay: "from-slate-950/90 via-sky-950/75 to-sky-900/40", band: "from-sky-600 to-cyan-500", glow: "bg-sky-500/30", fill: "bg-sky-500", label: "Cooling",
  },
  heat: {
    btn: "bg-orange-500 hover:bg-orange-400 text-white", text: "text-orange-500", textOnDark: "text-orange-300", soft: "bg-orange-100 text-orange-700", border: "border-orange-400", ring: "focus:border-orange-500 focus:ring-orange-200", overlay: "from-stone-950/90 via-red-950/70 to-orange-900/40", band: "from-orange-600 to-red-500", glow: "bg-orange-500/30", fill: "bg-orange-500", label: "Heating",
  },
} as const;
export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Diagnose", href: "#diagnose" },
  { label: "Repair or Replace", href: "#advisor" },
  { label: "Seasonal Care", href: "#seasonal" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];
export const SERVICES = [
  { icon: Snowflake, title: "AC Repair & Install", text: "Warm air, short cycling, frozen coils. We diagnose fast and fix it right, or install a new high-efficiency system.", span: "lg:col-span-2" },
  { icon: Flame, title: "Furnace & Heat Pumps", text: "Reliable heat for Atlanta's cold snaps. Repairs, tune-ups and replacements.", span: "" },
  { icon: Wrench, title: "Tune-Ups & Maintenance", text: "Seasonal checkups that catch small problems early and keep systems efficient.", span: "" },
  { icon: AirVent, title: "Ductwork & Air Quality", text: "Duct sealing, cleaning, filtration and ventilation for healthier, evenly cooled rooms.", span: "" },
  { icon: Thermometer, title: "Thermostats & Zoning", text: "Smart thermostats and zoning so every room is as comfortable as you want it, without wasting energy.", span: "lg:col-span-2" },
];
function Droplets_({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z" />
    </svg>
  );
}
export const SYMPTOMS = [
  { icon: Sun, label: "AC blowing warm air", cause: "Often low refrigerant, a failing capacitor or compressor, or a frozen/dirty coil.", fix: "AC repair", urgent: true },
  { icon: Flame, label: "No heat / furnace won't start", cause: "Commonly an ignition or flame-sensor issue, a tripped limit switch, or a thermostat problem.", fix: "Furnace repair", urgent: true },
  { icon: Volume2, label: "Banging, squealing or rattling", cause: "Could be loose parts, a failing blower motor or belt, or worn bearings. Best checked early.", fix: "System inspection", urgent: false },
  { icon: TrendingUp, label: "Energy bills climbing", cause: "Usually an aging or poorly maintained system, leaky ducts, or an airflow restriction.", fix: "Efficiency tune-up", urgent: false },
  { icon: Wind, label: "Weak airflow / hot & cold spots", cause: "Frequently clogged filters, duct leaks, blocked returns or an undersized blower.", fix: "Duct & airflow check", urgent: false },
  { icon: Droplets_, label: "Water leaking or odd smells", cause: "Possibly a clogged condensate drain, a dirty coil or mold. Turn the system off if water is pooling.", fix: "Drain & coil service", urgent: true },
];
export const SEASONS = [
  { icon: Sprout, name: "Spring", title: "AC tune-up", text: "Clean coils, check refrigerant and test everything before the heat hits.", months: [2, 3, 4] },
  { icon: Sun, name: "Summer", title: "Peak-cooling check", text: "Keep airflow strong and drains clear when your system works hardest.", months: [5, 6, 7] },
  { icon: Leaf, name: "Fall", title: "Furnace safety check", text: "Inspect ignition, burners and venting so your heat is ready and safe.", months: [8, 9, 10] },
  { icon: Snowflake, name: "Winter", title: "Heat reliability", text: "Filter swaps and priority repairs to keep you warm through cold snaps.", months: [11, 0, 1] },
];
export const ThemeCtx = createContext<{ mode: Mode; setMode: (m: Mode) => void; t: (typeof THEMES)[Mode] }>({ mode: "cool", setMode: () => {}, t: THEMES.cool });
export const useTheme = () => useContext(ThemeCtx);

export const PROJECTS = [
  { img: IMG.p1, title: "High-efficiency AC install", area: "Atlanta" },
  { img: IMG.p2, title: "Furnace replacement", area: "West End" },
  { img: IMG.p3, title: "Ductless mini-split", area: "Castleberry Hill" },
  { img: IMG.p4, title: "Whole-home tune-up", area: "Mechanicsville" },
];
export const WHY = [
  { icon: Clock, t: "Prompt response", d: "We prioritize no-heat and no-cool calls and keep you updated on arrival time." },
  { icon: BadgeCheck, t: "Upfront pricing", d: "A clear quote before work starts. No hidden fees." },
  { icon: ShieldCheck, t: "Licensed & insured", d: "Trained technicians who treat your home with respect." },
  { icon: ThumbsUp, t: "Work we stand behind", d: "If it isn't right, we make it right." },
];
export const REVIEWS = [
  { n: "Monica H.", a: "Atlanta", t: "Our AC died on the hottest day of the week. They had us cool again by evening. Lifesavers." },
  { n: "Calvin R.", a: "West End", t: "Honest advice. They told us a repair would do instead of replacing the whole system." },
  { n: "Tasha G.", a: "Mechanicsville", t: "Furnace tune-up was quick and thorough. Our house has never been so evenly warm." },
];
export const FAQS = [
  { q: "How often should I service my HVAC system?", a: "Twice a year is ideal: an AC check in spring and a furnace check in fall. Regular maintenance keeps efficiency up and prevents breakdowns." },
  { q: "My AC is running but not cooling. What should I do?", a: "Check that the thermostat is set to cool and the filter is clean. If it's still warm, turn the system off to avoid damage and call us." },
  { q: "Do you offer emergency service?", a: `Yes. If you have no heat or no cooling, call ${BUSINESS.phone} and we'll get a technician to you as quickly as we can.` },
  { q: "Should I repair or replace my system?", a: "It depends on age, repair history and efficiency. Try the advisor above, then let us do a free assessment for a firm answer." },
  { q: "What size system do I need?", a: "Sizing depends on your home's square footage, insulation, windows and layout. We perform a proper load assessment rather than guessing." },
  { q: "Where are you located?", a: `We're at ${BUSINESS.address}. Use the map below for directions.` },
];
export function SafeImage({ src, alt, className = "", style }: { src: string; alt: string; className?: string; style?: CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} style={style} className={`bg-gradient-to-br from-slate-600 to-slate-900 ${className}`} />;
  return (
    <img src={src} alt={alt} loading="lazy" style={style} onError={() => setFailed(true)} className={className} />
  );
}
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const { t } = useTheme();
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-500 ${dark ? t.textOnDark : t.text}`}>
      <span className={`h-px w-8 ${dark ? "bg-white/30" : "bg-slate-300"}`} /> {children}
    </p>
  );
}
export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useTheme();
  return (
    <div className="inline-flex rounded-full border border-white/25 bg-white/10 p-1 backdrop-blur" role="group" aria-label="Choose season">
      {(["cool", "heat"] as Mode[]).map((m) => {
        const active = mode === m;
        const Icon = m === "cool" ? Snowflake : Flame;
        return (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={active}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
              active ? (m === "cool" ? "bg-sky-500 text-white" : "bg-orange-500 text-white") : "text-white/70 hover:text-white"
            }`}
          >
            <Icon className="h-4 w-4" />
            {!compact && THEMES[m].label}
          </button>
        );
      })}
    </div>
  );
}
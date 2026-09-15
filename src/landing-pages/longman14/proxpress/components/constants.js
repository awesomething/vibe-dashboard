import React from 'react';
import { Droplets, Waves, Wrench, Flame, ShowerHead, Siren } from 'lucide-react';

export const PHONE_DISPLAY = "(470) 300-4122";
export const PHONE_TEL = "+14703004122";
export const ADDRESS = "458 85th Cir #101, Atlanta, GA 30349";
export const MAP_URL = "https://maps.google.com/?cid=10782614868480547230&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

export const HERO_IMG = "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?auto=format&fit=crop&w=1600&q=80";
export const PIPES_IMG = "https://images.unsplash.com/photo-1690973692388-239878450c7b?auto=format&fit=crop&w=1600&q=80";
export const FAUCET_IMG = "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80";

export const display = "font-['Big_Shoulders_Display']";

export const services = [
  {
    n: "01",
    icon: Droplets,
    name: "Drain cleaning",
    desc: "Kitchen, bath, and main-line drains cleared of grease, hair, and buildup.",
  },
  {
    n: "02",
    icon: Waves,
    name: "Clogged drain repair",
    desc: "Camera inspection to find the real blockage, not just the symptom.",
  },
  {
    n: "03",
    icon: Wrench,
    name: "Leak detection & repair",
    desc: "Slab leaks, pinhole leaks, and slow drips found and fixed at the source.",
  },
  {
    n: "04",
    icon: Flame,
    name: "Water heater service",
    desc: "Repair, flush, or replace — gas and electric, tank and tankless.",
  },
  {
    n: "05",
    icon: ShowerHead,
    name: "Fixture & pipe repair",
    desc: "Faucets, toilets, valves, and repiping for older Atlanta homes.",
  },
  {
    n: "06",
    icon: Siren,
    name: "Emergency call-outs",
    desc: "Burst pipe or backed-up line — call and we'll get someone moving.",
  },
];

export const steps = [
  {
    n: "1",
    title: "Call or request service",
    desc: "Tell us what's going on and where. Takes about two minutes.",
  },
  {
    n: "2",
    title: "We diagnose on site",
    desc: "A technician inspects the problem before anything is touched.",
  },
  {
    n: "3",
    title: "You get a clear price",
    desc: "One number, agreed before we start. No surprise line items.",
  },
  {
    n: "4",
    title: "We fix it and clean up",
    desc: "Job finished, area cleaned, and the fix explained in plain terms.",
  },
];

export const trustPoints = [
  "Upfront pricing, agreed before work starts",
  "Same technician sees the job through",
  "Work area left cleaner than we found it",
  "Local Atlanta dispatch, not a call center",
];

export const ratingBreakdown = [
  { label: "5", pct: 88 },
  { label: "4", pct: 8 },
  { label: "3", pct: 2 },
  { label: "2", pct: 10 },
  { label: "1", pct: 33 },
];

export const testimonials = [
  {
    initial: "C",
    color: "#B23B2E",
    quote: (
      <>
        The <strong>service specialists</strong> that answered our call and
        finished the job were superb.
      </>
    ),
  },
  {
    initial: "S",
    color: "#3C6B3C",
    quote: (
      <>
        They executed the <strong>assignment</strong> quickly and
        efficiently.
      </>
    ),
  },
  {
    initial: null,
    color: "#5B6B70",
    quote: (
      <>
        Good <strong>price</strong> for a problem diagnosis.
      </>
    ),
  },
];

export const serviceOptions = [
  "Drain cleaning",
  "Leak detection & repair",
  "Water heater service",
  "Fixture & pipe repair",
  "Emergency call-out",
  "Something else",
];

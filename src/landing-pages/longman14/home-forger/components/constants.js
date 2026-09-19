import { Home as HomeIcon, Hammer, CloudRain, ClipboardCheck, Layers, Wrench } from "lucide-react";

export const PHONE_DISPLAY = "(470) 704-4578";
export const PHONE_TEL = "+14707044578";
export const MAP_URL =
  "https://maps.google.com/?cid=5438594804018939937&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

export const HERO_IMG =
  "https://images.unsplash.com/photo-1745478433539-90d9a2e8579e?auto=format&fit=crop&w=1600&q=80";
export const HOUSE_IMG =
  "https://images.unsplash.com/photo-1566071634551-224a639a1c7d?auto=format&fit=crop&w=1600&q=80";
export const HAMMER_IMG =
  "https://images.unsplash.com/photo-1618767675262-8dee8e80f4b6?auto=format&fit=crop&w=1600&q=80";

export const slab = "font-['Zilla_Slab']";

export const services = [
  {
    tag: "Replace",
    icon: HomeIcon,
    name: "Roof replacement",
    desc: "Full tear-off and new roof, built for Georgia heat, wind, and storms.",
  },
  {
    tag: "Repair",
    icon: Wrench,
    name: "Roof repair & leaks",
    desc: "Missing shingles, flashing failures, and leaks traced and fixed.",
  },
  {
    tag: "Claims",
    icon: CloudRain,
    name: "Storm & insurance claims",
    desc: "We document the damage and walk the claim process with you.",
  },
  {
    tag: "Install",
    icon: Layers,
    name: "New roof installation",
    desc: "New builds and additions, shingled to match the rest of the house.",
  },
  {
    tag: "Gutters",
    icon: Hammer,
    name: "Gutters & flashing",
    desc: "The parts that actually keep water off your foundation.",
  },
  {
    tag: "Inspect",
    icon: ClipboardCheck,
    name: "Roof inspections",
    desc: "A straight answer on what's wrong and what it'll take to fix it.",
  },
];

export const steps = [
  { n: "1", title: "We inspect the roof", desc: "On the ground and up top, in person." },
  { n: "2", title: "We walk you through it", desc: "What's wrong, what it costs, what it doesn't." },
  { n: "3", title: "We do the work", desc: "One crew, start to finish, your yard protected." },
  { n: "4", title: "Final walkthrough", desc: "You inspect it with us before we call it done." },
];

export const trustPoints = [
  "Written estimate before any work starts",
  "One crew sees the job through, not subcontracted out",
  "Job site swept and cleared at the end of each day",
  "Materials chosen for Georgia heat, wind, and storms",
];

export const issueOptions = [
  "Leak or water damage",
  "Storm or hail damage",
  "Missing or damaged shingles",
  "Full roof replacement",
  "Gutters or flashing",
  "Not sure — need an inspection",
];
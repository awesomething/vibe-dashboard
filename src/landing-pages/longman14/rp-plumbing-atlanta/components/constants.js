import { Droplet, Wrench, Flame, ShowerHead } from "lucide-react";

export const PHONE_DISPLAY = "(470) 934-5620";
export const PHONE_TEL = "+14046365033";
export const ADDRESS = "180 Interstate N Pkwy E SE #114, Atlanta, GA 30339, USA";
export const MAP_URL =
  "https://maps.google.com/?cid=8002048475781394586&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

export const PIPE_WORK_IMG =
  "https://img.magnific.com/free-photo/plumber-with-his-arms-crossed_1368-515.jpg?semt=ais_hybrid&w=740&q=80";
export const FAUCET_IMG =
  "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&q=80";
export const VALVES_IMG =
  "https://images.unsplash.com/photo-1690973692388-239878450c7b?auto=format&fit=crop&w=1200&q=80";

export const heading = "font-['Fira_Sans']";

export const services = [
  { icon: Droplet, label: "Leak repair" },
  { icon: Wrench, label: "Fixture install" },
  { icon: Flame, label: "Water heaters" },
  { icon: ShowerHead, label: "Drain cleaning" },
];

export const highlights = [
  { bg: "#FF4A1E", fg: "#F6F1E6", label: "Residential & commercial" },
  { bg: "#141210", fg: "#F6C544", label: "Leak to water heater, one call" },
  { bg: "#F6C544", fg: "#141210", label: "Upfront pricing, no surprises" },
  { bg: "#AFAE95", fg: "#141210", label: "Serving NW Atlanta" },
];

export const valueProps = [
  {
    title: "One tech, start to finish",
    desc: "The person who diagnoses the problem is the one who fixes it.",
  },
  {
    title: "Price before we start",
    desc: "You approve the number before any tool touches your pipes.",
  },
  {
    title: "Cleaned up after",
    desc: "We treat your home like we'd want ours treated.",
  },
];

export const processSteps = [
  { n: "01", title: "Call or request online", desc: "Tell us what's going on and where." },
  { n: "02", title: "We take a look", desc: "In person, before we quote anything." },
  { n: "03", title: "You get a clear price", desc: "One number, agreed before work starts." },
  { n: "04", title: "Fixed, cleaned, done", desc: "Job finished and the area left tidy." },
];

export const issueOptions = [
  "Leak or dripping fixture",
  "Clogged or slow drain",
  "Water heater issue",
  "New fixture install",
  "Something else",
];
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Clock,
  Wrench,
  Droplets,
  AlertTriangle,
  Flame,
  Gauge,
  ShowerHead,
  Check,
  CheckCircle2,
  Camera,
  Send,
} from "lucide-react";


export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}


export const PHONE_DISPLAY = "(678) 379-1455";
export const PHONE_TEL = "tel:+16783791455";

export const COLORS = {
  bg: "#FAFAF8",
  bgAlt: "#EEF2F6",
  ink: "#141A26",
  inkSoft: "#3D4657",
  navy: "#101A2E",
  blue: "#1C5D91",
  blueDark: "#154A75",
  ember: "#B8471F",
  emberDark: "#98380F",
  border: "#DCE2E9",
  borderDark: "#2A3446",
  cream: "#FFFFFF",
  success: "#166534",
};

export const HERO_IMG =
  "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=1400&q=80";
export const PROBLEM_IMG =
  "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?auto=format&fit=crop&w=1100&q=80";
export const TRUST_IMG =
  "https://images.unsplash.com/photo-1748442001865-5583ec02ae22?auto=format&fit=crop&w=1100&q=80";

export const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    desc: "Urgent help for unexpected plumbing problems.",
  },
  {
    icon: Droplets,
    title: "Leak Repair",
    desc: "Find and repair leaks before they cause bigger problems.",
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    desc: "Clear clogged or slow drains and get things flowing again.",
  },
  {
    icon: Gauge,
    title: "Faucet & Fixture Repair",
    desc: "Repair or replace problematic faucets and plumbing fixtures.",
  },
  {
    icon: ShowerHead,
    title: "Toilet Repair",
    desc: "Help with common toilet leaks, clogs and other problems.",
  },
  {
    icon: Flame,
    title: "Water Heater Service",
    desc: "Plumbing assistance for common water heater issues.",
  },
];

export const problems = [
  "Leaking pipes",
  "Clogged drains",
  "Running toilets",
  "Low water pressure",
  "Broken faucets",
  "Water heater problems",
];

export const steps = [
  {
    n: "1",
    title: "Tell Us What's Wrong",
    desc: "Call or submit the service request form.",
  },
  {
    n: "2",
    title: "Discuss Your Plumbing Needs",
    desc: "Provide the details needed to understand the problem.",
  },
  {
    n: "3",
    title: "Get the Help You Need",
    desc: "The business can follow up and arrange the appropriate service.",
  },
];

export const whyChoose = [
  {
    title: "Easy to Reach",
    desc: "Call directly or send a service request online.",
  },
  {
    title: "Clear Communication",
    desc: "Give the plumber the details before the conversation starts.",
  },
  {
    title: "Convenient Service Requests",
    desc: "Customers can explain their problem without having to make a phone call immediately.",
  },
  {
    title: "Local Focus",
    desc: "Built specifically for customers looking for plumbing service in Atlanta.",
  },
];

export const areas = [
  "Atlanta",
  "East Point",
  "College Park",
  "Decatur",
  "Sandy Springs",
  "Brookhaven",
];

export const faqs = [
  {
    q: "What plumbing services do you provide?",
    a: "Frazier Plumbing Service of Atlanta handles a range of residential and business plumbing needs, from everyday repairs to more urgent issues. Call (678) 379-1455 to discuss your specific plumbing problem.",
  },
  {
    q: "How do I request service?",
    a: "You can call (678) 379-1455, or submit the online request form on this page with a description of the problem and the best way to reach you.",
  },
  {
    q: "Can I submit a request online instead of calling?",
    a: "Yes. The form lets you provide your contact information, service address, and details about the plumbing problem, so the business has context before following up.",
  },
  {
    q: "Does submitting the form confirm an appointment?",
    a: "No. It's a service request, not a confirmed appointment. The business will contact you to discuss availability and next steps.",
  },
  {
    q: "What information should I provide?",
    a: "Your name, phone number, service address, and a description of the problem are the most useful details to include.",
  },
];

export const serviceTypeOptions = [
  "Emergency Plumbing",
  "Leak",
  "Drain / Clog",
  "Toilet",
  "Faucet / Fixture",
  "Water Heater",
  "Other",
];

export const timeOptions = ["As soon as possible", "Morning", "Afternoon", "Evening", "Flexible"];

export const contactMethods = ["Phone Call", "Text Message", "Email"];



export function scrollToId(id: string ) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}



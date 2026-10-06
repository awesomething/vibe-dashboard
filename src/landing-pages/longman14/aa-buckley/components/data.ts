import {
  Bath,
  ClipboardCheck,
  Clock,
  Droplets,
  Flame,
  Hammer,
  Search,
  ShieldCheck,
  ShowerHead,
  Siren,
  ThumbsUp,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const BUSINESS = {
  name: "A A Buckley Plumbing",
  address: "1621 Johnson Rd NW, Atlanta, GA 30318, USA",
  phone: "(404) 929-3652",
  tel: "+14049293652",
};

const imageUrl = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMG = {
  hero1: imageUrl("photo-1584622650111-993a426fbf0a", 2000),
  hero2: imageUrl("photo-1620626011761-996317b8d101", 2000),
  hero3: imageUrl("photo-1556911220-bff31c812dba", 2000),
  hero4: imageUrl("photo-1607472586893-edb57bdc0e39", 2000),
  crew: imageUrl("photo-1621905251189-08b45d6a269e", 1200),
  gallery1: imageUrl("photo-1552321554-5fefe8c9ef14", 900),
  gallery2: imageUrl("photo-1581244277943-fe4a9c777189", 900),
  gallery3: imageUrl("photo-1600585154340-be6161a56a0c", 900),
  gallery4: imageUrl("photo-1564013799919-ab600027ffc6", 900),
  gallery5: imageUrl("photo-1584622650111-993a426fbf0a", 900),
  gallery6: imageUrl("photo-1556911220-bff31c812dba", 900),
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const SLIDES = [
  { img: IMG.hero1, title: "Master bath re-pipe, Midtown" },
  { img: IMG.hero2, title: "Full bathroom remodel, Buckhead" },
  { img: IMG.hero3, title: "Kitchen plumbing upgrade, Decatur" },
  { img: IMG.hero4, title: "Emergency burst pipe repair" },
];

export const SERVICES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Siren, title: "Emergency Repairs", text: "Burst pipes, overflows and sudden leaks handled fast, day or night." },
  { icon: Droplets, title: "Leak Detection", text: "We find hidden leaks before they turn into ceiling stains and big bills." },
  { icon: Waves, title: "Drain Cleaning", text: "Slow drains and stubborn clogs cleared for good, not just for a week." },
  { icon: Flame, title: "Water Heaters", text: "Repair, replacement and tankless installs with reliable hot water back fast." },
  { icon: Bath, title: "Bathroom & Kitchen", text: "Fixture installs, remodel plumbing and upgrades done cleanly and to code." },
  { icon: ShowerHead, title: "Repiping & Sewer", text: "Whole-home repiping and sewer line repair built to last for decades." },
];

export const WHY = [
  { icon: Clock, title: "On time, every time", text: "We show up when we say we will and keep you updated." },
  { icon: ShieldCheck, title: "Upfront pricing", text: "You approve a clear quote before any work begins. No surprises." },
  { icon: ShieldCheck, title: "Licensed & insured", text: "Professional, background-checked plumbers you can trust in your home." },
  { icon: ThumbsUp, title: "Guaranteed work", text: "If something isn't right, we come back and make it right." },
];

export const STEPS = [
  { icon: ClipboardCheck, title: "Call or book", text: "Tell us what's going on. We'll get a plumber headed your way." },
  { icon: Search, title: "Diagnose", text: "We find the real cause, then explain your options in plain English." },
  { icon: Hammer, title: "Fix it right", text: "Clean, careful work with respect for your home and your time." },
  { icon: ClipboardCheck, title: "Final check", text: "We test everything, clean up, and walk you through the results." },
];

export const GALLERY = [
  { img: IMG.gallery1, title: "Bathroom remodel", tag: "Remodel" },
  { img: IMG.gallery2, title: "Pipe replacement", tag: "Repiping" },
  { img: IMG.gallery3, title: "New-build rough-in", tag: "Installation" },
  { img: IMG.gallery4, title: "Full home repipe", tag: "Repiping" },
  { img: IMG.gallery5, title: "Fixture upgrade", tag: "Fixtures" },
  { img: IMG.gallery6, title: "Kitchen plumbing", tag: "Remodel" },
];

export const REVIEWS = [
  { name: "Marcus T.", area: "Atlanta, GA", text: "Water was pouring through our kitchen ceiling. They arrived fast, fixed it the same day, and left the place spotless." },
  { name: "Denise R.", area: "Westside, Atlanta", text: "Honest quote, no pressure, and the water heater swap was done in a few hours. Highly recommend." },
  { name: "Jamal W.", area: "Midtown, Atlanta", text: "Professional from the first call to the final walkthrough. Our drains have never run better." },
];

export const FAQS = [
  { q: "Do you offer emergency plumbing services?", a: "Yes. If you have a burst pipe, major leak or sewage backup, call us right away and we'll get a plumber to you as quickly as possible." },
  { q: "How much will my repair cost?", a: "We give you a clear, upfront quote after diagnosing the problem and before any work starts, so you always know the price first." },
  { q: "Are your plumbers licensed and insured?", a: "Yes. Our team is licensed, insured and experienced with homes and small businesses across the Atlanta area." },
  { q: "What areas do you serve?", a: "We're based on Johnson Rd NW in Atlanta and serve the surrounding neighborhoods. Call us to confirm your address." },
  { q: "Do you guarantee your work?", a: "Absolutely. We stand behind our repairs and installations. If something isn't right, we'll come back and fix it." },
  { q: "How do I book an appointment?", a: `Call ${BUSINESS.phone} or send a request through the form below and we'll get back to you promptly.` },
];
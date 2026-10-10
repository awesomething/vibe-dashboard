import {
  Building2,
  ClipboardCheck,
  CloudLightning,
  Clock,
  FileText,
  HandCoins,
  Hammer,
  Home,
  Layers,
  Search,
  Sparkles,
  ThermometerSun,
  Wind,
  Droplets,
} from "lucide-react";

export const BUSINESS = {
  name: "Online Roofing Contractor Atlanta",
  short: "Online Roofing",
  address: "589 Moreland Ave NE, Atlanta, GA 30307, USA",
  phone: "(404) 476-6884",
  tel: "+14044766884",
};

const mapQuery = encodeURIComponent(BUSINESS.address);
export const MAP_EMBED = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

const imageUrl = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMG = {
  hero: imageUrl("photo-1632759145351-1d592919f522", 2200),
  after: imageUrl("photo-1568605114967-8130f3a36994", 1600),
  p1: imageUrl("photo-1570129477492-45c003edd2be", 1000),
  p2: imageUrl("photo-1523217582562-09d0def993a6", 1000),
  p3: imageUrl("photo-1600585152915-d208bec867a1", 1000),
  p4: imageUrl("photo-1518780664697-55e3ad937233", 1000),
  p5: imageUrl("photo-1558618666-fcd25c85cd64", 1000),
  p6: imageUrl("photo-1448630360428-65456885c650", 1000),
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Find Us", href: "#map" },
];

export const TRUST = [
  "Free roof inspections",
  "Storm damage specialists",
  "Insurance claim help",
  "Licensed & insured",
  "Written warranties",
  "Clean job sites",
];

export const SERVICES = [
  { icon: Home, title: "Roof Replacement", text: "Complete tear-off and new installation with premium materials, built for Georgia heat, humidity and storms." },
  { icon: Hammer, title: "Roof Repair", text: "Missing shingles, flashing failures and stubborn leaks fixed quickly and fixed properly." },
  { icon: CloudLightning, title: "Storm & Hail Damage", text: "Fast tarping and full restoration after wind, hail and fallen-limb damage." },
  { icon: Droplets, title: "Gutters & Drainage", text: "Gutter installs and repairs that move water away from your roof, fascia and foundation." },
  { icon: ClipboardCheck, title: "Roof Inspections", text: "Detailed inspections with photo reports for buyers, sellers and insurance claims." },
  { icon: Building2, title: "Commercial Roofing", text: "Flat roof systems, coatings and maintenance plans for Atlanta businesses." },
];

export const MATERIALS = [
  {
    key: "Asphalt Shingles",
    icon: Layers,
    blurb: "The most popular choice for Atlanta homes, with a huge range of colors and styles at an approachable price.",
    points: ["Best value for most homeowners", "Architectural styles that boost curb appeal", "Impact-resistant options available"],
  },
  {
    key: "Metal Roofing",
    icon: Wind,
    blurb: "Long-lasting, energy-efficient and strong against wind. A premium option that handles weather beautifully.",
    points: ["Excellent longevity", "Reflects heat to help lower cooling costs", "Standing seam and metal shingle looks"],
  },
  {
    key: "Flat & Low-Slope",
    icon: ThermometerSun,
    blurb: "Durable membrane systems for commercial buildings and low-slope residential sections.",
    points: ["TPO and modified bitumen systems", "Seamless waterproofing", "Reflective coatings to cut heat"],
  },
];

export const PROJECTS = [
  { img: IMG.p1, title: "Full replacement", area: "Inman Park", tall: true },
  { img: IMG.p2, title: "Architectural shingles", area: "Virginia-Highland", tall: false },
  { img: IMG.p3, title: "Storm damage restoration", area: "Decatur", tall: false },
  { img: IMG.p4, title: "Metal roof install", area: "East Atlanta", tall: false },
  { img: IMG.p5, title: "Roof & gutter upgrade", area: "Midtown", tall: true },
  { img: IMG.p6, title: "Complete re-roof", area: "Poncey-Highland", tall: false },
];

export const STEPS = [
  { icon: Search, title: "Free inspection", text: "We inspect your roof, photograph any problems and explain what we find in plain English." },
  { icon: HandCoins, title: "Clear estimate", text: "A detailed written quote with materials and timeline. No pressure, no surprises." },
  { icon: Hammer, title: "Expert install", text: "Our crew protects your landscaping, works efficiently and keeps the site clean." },
  { icon: Sparkles, title: "Final walkthrough", text: "We inspect every detail with you, then back the work with a written warranty." },
];

export const REVIEWS = [
  { name: "Angela M.", area: "Inman Park", text: "After the storm we had shingles all over the yard. They tarped the same day and handled the insurance paperwork with us." },
  { name: "Robert K.", area: "Decatur", text: "Fair quote, a crew that showed up on time, and a yard that looked cleaner than before they started." },
  { name: "Priya S.", area: "Virginia-Highland", text: "They found a leak two other companies missed. The new roof looks fantastic. Highly recommend." },
];

export const FAQS = [
  { q: "How do I know if I need a repair or a full replacement?", a: "It depends on the roof's age, the extent of damage and how widespread the problems are. Our free inspection gives you an honest answer and your options." },
  { q: "Do you help with insurance claims?", a: "Yes. We document storm damage with photos and work with you and your adjuster so the claim reflects what your roof actually needs." },
  { q: "How long does a roof replacement take?", a: "Most residential replacements are completed in a few days, weather permitting. We'll give you a timeline in your estimate." },
  { q: "Is the roof inspection really free?", a: "Yes. There's no cost and no obligation. If your roof is fine, we'll tell you so." },
  { q: "Do you offer warranties?", a: "We back our workmanship with a written warranty, and the manufacturer's warranty applies to the materials we install." },
  { q: "What areas do you serve?", a: "We're based on Moreland Ave NE in Atlanta and serve the city and nearby communities. Call us to confirm your address." },
];

export const BENEFITS = [
  "Boosts home value and curb appeal",
  "Stops leaks and protects your interior",
  "Improves attic ventilation and efficiency",
];

export const STORM_SUPPORT = [
  { icon: Clock, text: "Fast emergency response" },
  { icon: FileText, text: "Photo-documented reports" },
];

export const TRUST_BADGES = ["Licensed & insured", "Insurance claim help", "Written warranty"];

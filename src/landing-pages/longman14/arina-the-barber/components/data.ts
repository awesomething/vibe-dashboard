import {
  Crown,
  Flame,
  Scissors,
  Sparkles,
  User,
} from "lucide-react";

export const BUSINESS = {
  name: "Arina The Barber",
  phone: "(678) 437-4436",
  tel: "+16784374436",
  address: "2179 Lawrenceville Hwy Stu Q, Decatur, GA 30033, USA",
  mapsLink:
    "https://maps.google.com/?cid=14912738820901939588&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&z=15&output=embed`;

const unsplashImage = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMAGES = {
  hero: unsplashImage("photo-1503951914875-452162b0f3f1", 1800),
  about: unsplashImage("photo-1621605815971-fbc98d665033", 1400),
  gallery: [
    unsplashImage("photo-1599351431202-1e0f0137899a", 900),
    unsplashImage("photo-1622286342621-4bd786c2447c", 900),
    unsplashImage("photo-1605497788044-5a32c7078486", 900),
    unsplashImage("photo-1532710093739-9470acff878f", 900),
    unsplashImage("photo-1493256338651-d82f7acb2b38", 900),
    unsplashImage("photo-1517832606299-7ae9b720a186", 900),
  ],
};

export const NAV_LEFT = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "The Chair", href: "#about" },
];

export const NAV_RIGHT = [
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

export const SERVICES = [
  {
    icon: Scissors,
    name: "Signature Haircut",
    desc: "Tailored to your head shape, hair type and style, finished with a clean neckline.",
    price: "$35",
  },
  {
    icon: Crown,
    name: "Skin Fade",
    desc: "Razor-smooth gradients blended seamlessly from skin to length.",
    price: "$40",
  },
  {
    icon: User,
    name: "Beard Trim & Shape",
    desc: "Sharp lines, balanced shape and a conditioned finish.",
    price: "$20",
  },
  {
    icon: Flame,
    name: "Hot Towel Shave",
    desc: "Traditional straight-razor shave with steaming towels. Pure relaxation.",
    price: "$30",
  },
  {
    icon: Sparkles,
    name: "Cut + Beard Combo",
    desc: "The full treatment. Haircut and beard sculpted to match.",
    price: "$50",
  },
  {
    icon: Scissors,
    name: "Kids Cut",
    desc: "Patient, friendly cuts for the little guys (12 and under).",
    price: "$25",
  },
];

export const GALLERY = [
  { img: IMAGES.gallery[0], cat: "Fades", label: "Mid skin fade", ratio: "aspect-[3/4]" },
  { img: IMAGES.gallery[1], cat: "Beards", label: "Sculpted beard", ratio: "aspect-square" },
  { img: IMAGES.gallery[2], cat: "Classic", label: "Classic taper", ratio: "aspect-[4/5]" },
  { img: IMAGES.gallery[3], cat: "Beards", label: "Edge-up & trim", ratio: "aspect-[3/4]" },
  { img: IMAGES.gallery[4], cat: "Fades", label: "High fade", ratio: "aspect-square" },
  { img: IMAGES.gallery[5], cat: "Classic", label: "Scissor cut", ratio: "aspect-[4/5]" },
];

export const GALLERY_CATEGORIES = ["All", "Fades", "Beards", "Classic"];

export const EXPERIENCE = [
  {
    n: "01",
    t: "Consult",
    d: "We talk through what you want, what suits you, and how much upkeep you're into.",
  },
  {
    n: "02",
    t: "Craft",
    d: "Precision clipper and razor work with real attention to detail. No rushing.",
  },
  {
    n: "03",
    t: "Finish",
    d: "Hot towel, styling and a final check in the mirror until it's perfect.",
  },
];

export const HOURS = [
  { d: "Monday", h: "Closed" },
  { d: "Tue – Fri", h: "10:00 AM – 7:00 PM" },
  { d: "Saturday", h: "9:00 AM – 6:00 PM" },
  { d: "Sunday", h: "11:00 AM – 4:00 PM" },
];

export const REVIEWS = [
  {
    n: "Darius W.",
    t: "Best fade I've had in Atlanta. Clean lines, great conversation, and I walked out feeling brand new.",
  },
  {
    n: "Marcus J.",
    t: "Arina takes her time and it shows. My beard has never looked this sharp.",
  },
  {
    n: "Terrence B.",
    t: "Brought my son in for his first real cut. Patient, professional and he loved it.",
  },
  {
    n: "Andre P.",
    t: "Spotless shop, great vibe, and the hot towel shave is next level.",
  },
  {
    n: "Chris L.",
    t: "Booked a combo and it was worth every penny. Already scheduled my next visit.",
  },
];

export const FAQS = [
  {
    q: "Do I need an appointment?",
    a: `Booking ahead guarantees your spot, especially on weekends. Use the form below or call ${BUSINESS.phone}. Ask about walk-in availability when you call.`,
  },
  {
    q: "How long does a haircut take?",
    a: "Most cuts take around 30–45 minutes. Combos and shaves take a little longer so nothing is rushed.",
  },
  {
    q: "Do you cut kids' hair?",
    a: "Yes! Kids are welcome, and we keep things relaxed and fun for them.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Please call the shop to confirm accepted payment methods before your visit.",
  },
  {
    q: "Can I bring a reference photo?",
    a: "Absolutely. Photos help us nail exactly what you have in mind, and we'll tell you honestly what works for your hair.",
  },
  {
    q: "Where are you located?",
    a: `We're at ${BUSINESS.address}. Tap "Open in Google Maps" below for directions.`,
  },
];

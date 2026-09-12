import { Scissors, Zap, Sparkles, Flame, Users, Palette } from "lucide-react";

export const PHONE_DISPLAY = "(470) 813-3745";
export const PHONE_TEL = "tel:+4708133745";
export const ADDRESS = "Atlanta, GA";
export const RATING = 4.9;
export const REVIEW_COUNT = 311;

export const COLORS = {
  ink: "#1B1712",
  inkSoft: "#8A8073",
  cream: "#F5EFE3",
  creamSoft: "#EDE4D3",
  gold: "#C6A24D",
  goldDeep: "#A9843A",
  oxblood: "#7A2A2A",
  oxbloodDeep: "#631F1F",
  line: "rgba(245,239,227,0.14)",
  lineOnCream: "#DED1B4",
};

export const HERO_IMG = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1500&q=80";
export const CRAFT_IMG = "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1100&q=80";
export const GALLERY_1 = "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&w=900&q=80";
export const GALLERY_2 = "https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=900&q=80";
export const GALLERY_3 = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80";

export const services = [
  { icon: Scissors, title: "Signature Fades", desc: "Clean, precise fades cut to the skin or blended to taste." },
  { icon: Zap, title: "Skin Tapers", desc: "Sharp tapers with crisp lines around the ears and neck." },
  { icon: Sparkles, title: "Beard Trim & Line-Up", desc: "Shape and detail work that finishes the whole look." },
  { icon: Flame, title: "Hot Towel Shave", desc: "A classic straight-razor shave with hot towel prep." },
  { icon: Users, title: "Kids Cuts", desc: "Patient, easygoing cuts for younger clients." },
  { icon: Palette, title: "Grey Blending", desc: "Subtle color blending for a natural, low-maintenance look." },
];

export const testimonials = [
  { quote: "Great atmosphere, professional, personable, great prices, and even better staff.", source: "Google review" },
  { quote: "Great barbers, love the vibe these guys bring. Shout out my barber Akeem.", source: "Google review" },
  { quote: "Amazing environment, great customer service, wonderful experience overall.", source: "Google review" },
];

export const faqs = [
  { q: "Do I need an appointment, or are walk-ins welcome?", a: "Booking ahead through this page is the fastest way to lock in a time, but you're welcome to check for walk-in availability by calling the shop." },
  { q: "How far in advance should I book?", a: "A few days ahead gives you the best pick of times and barbers, especially on weekends. Last-minute requests are worth a call." },
  { q: "Can I request a specific barber?", a: "Yes — there's a field for it on the booking form. If your preferred barber isn't available at that time, the shop will follow up with alternatives." },
  { q: "What if I need to cancel or reschedule?", a: "Give the shop a call as early as you can. Submitting a booking request here doesn't lock in a non-refundable slot — it starts the conversation." },
  { q: "Do you cut all hair types and styles?", a: "The shop handles a full range of fades, tapers, and beard work. If you have something specific in mind, mention it in the notes when you book." },
];

export const barberOptions = ["No preference", "Akeem", "Marcus", "DeShawn", "Any available barber"];
export const serviceOptions = services.map((s) => s.title).concat(["Not sure yet"]);
export const timeOptions = ["Morning", "Afternoon", "Evening", "Flexible"];

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}


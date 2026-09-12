export const PHONE_DISPLAY = "(404) 467-7779";
export const PHONE_TEL = "tel:+14044677779";
export const ADDRESS = "3334 Peachtree Rd, Atlanta, GA 30326, USA";
export const MAPS_URL = "https://maps.google.com/?cid=10528443025763241867&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";
export const RATING = 5.0;
export const REVIEW_COUNT = 13;

export const COLORS = {
  ink: "#2B241E",
  inkSoft: "#7C7061",
  cream: "#FAF6F0",
  creamAlt: "#F1E7D8",
  rose: "#A9637A",
  roseDeep: "#8C4F65",
  sage: "#5C6B54",
  border: "#E4D6C0",
  gold: "#C9A876",
};

export const HERO_IMG = "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1500&q=80";
export const OWNER_IMG = "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1000&q=80";
export const GALLERY_1 = "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80";
export const GALLERY_2 = "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=900&q=80";
export const GALLERY_3 = "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80";

import { Scissors, Palette, Sparkles, Heart, Wind, Droplet } from "lucide-react";

export const services = [
  { icon: Scissors, title: "Haircuts & Styling", desc: "Precision cuts and finishing styled to suit you." },
  { icon: Palette, title: "Color & Highlights", desc: "Full color, highlights, and lived-in dimension." },
  { icon: Sparkles, title: "Balayage", desc: "Hand-painted color for a soft, natural gradient." },
  { icon: Heart, title: "Bridal & Special Occasion", desc: "Bridal looks and event styling, done with care." },
  { icon: Wind, title: "Blowouts", desc: "A polished finish for everyday or a night out." },
  { icon: Droplet, title: "Keratin Treatments", desc: "Smoothing treatments for frizz-free, manageable hair." },
];

export const testimonials = [
  { quote: "Brandon is highly professional and knows his stuff.", source: "Google review" },
  { quote: "Brandon, the owner, is amazing.", source: "Google review" },
  { quote: "He created both of my bridal looks.", source: "Google review" },
];

export const faqs = [
  {
    q: "Do you take walk-ins or is it appointment only?",
    a: "Booking ahead through this page is the best way to guarantee a time. Call the salon directly if you'd like to check same-day availability.",
  },
  {
    q: "Can I request Brandon specifically?",
    a: "Yes — the booking form lets you note a preferred stylist. If Brandon's schedule is full at your requested time, the salon will follow up with options.",
  },
  {
    q: "How do bridal bookings work?",
    a: "Bridal and special-occasion looks are best booked well in advance. Mention your date and any reference photos in the notes field when you request a time.",
  },
  {
    q: "What should I bring to a color consultation?",
    a: "Reference photos of the color or look you have in mind are the most helpful thing to bring — mention this in your booking notes.",
  },
  {
    q: "Where can I park?",
    a: "The salon is located at 3334 Peachtree Rd, Atlanta, GA 30326 — use the map link for the most current directions and parking guidance.",
  },
];

export const stylistOptions = ["No preference", "Brandon"];
export const serviceOptions = services.map((s) => s.title).concat(["Not sure yet"]);
export const timeOptions = ["Morning", "Afternoon", "Evening", "Flexible"];

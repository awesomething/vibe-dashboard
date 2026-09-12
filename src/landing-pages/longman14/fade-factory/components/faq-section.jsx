"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { COLORS, faqs } from "./constants";

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: `1px solid ${COLORS.lineOnCream}` }}>
      <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left">
        <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.ink, fontSize: "1.02rem" }} className="pr-4">
          {item.q}
        </span>
        <ChevronDown size={18} color={COLORS.inkSoft} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease", flexShrink: 0 }} />
      </button>
      {isOpen && (
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.92rem", lineHeight: 1.65 }} className="pb-5 pr-8">
          {item.a}
        </p>
      )}
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl mb-10">
          Questions, answered.
        </h2>
        {faqs.map((item, i) => (
          <FAQItem key={i} item={item} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}

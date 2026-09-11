"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {COLORS} from "../../lib/utils"
import { faqs } from "../../lib/utils";


function FAQItem({ item, isOpen, onClick }) {
    return (
      <div style={{ borderBottom: `1px solid ${COLORS.border}` }}>
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between py-5 text-left"
        >
          <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.ink, fontSize: "1rem" }} className="pr-4">
            {item.q}
          </span>
          <ChevronDown
            size={18}
            color={COLORS.inkSoft}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease", flexShrink: 0 }}
          />
        </button>
        {isOpen && (
          <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.92rem", lineHeight: 1.65 }} className="pb-5 pr-8">
            {item.a}
          </p>
        )}
      </div>
    );
  }
  
 
  export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    return (
      <section id="faq" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.bg }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, letterSpacing: "-0.01em" }}
            className="text-3xl md:text-4xl mb-8"
          >
            Frequently asked questions.
          </h2>
          <div>
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
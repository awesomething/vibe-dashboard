import { Quote } from "lucide-react";
import { COLORS, RATING, REVIEW_COUNT, testimonials } from "./constants";
import { Stars } from "./stars";

export function Testimonials() {
  return (
    <section id="reviews" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.ink }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.gold, fontSize: "0.8rem", letterSpacing: "0.14em" }} className="mb-3">
              WORD ON THE STREET
            </p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.cream, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl">
              What clients are saying.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars size={16} />
            <span style={{ fontFamily: "'Jost', sans-serif", color: COLORS.creamSoft, fontSize: "0.88rem" }}>
              {RATING} · {REVIEW_COUNT} Google reviews
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 rounded" style={{ border: `1px solid ${COLORS.line}` }}>
              <Quote size={22} color={COLORS.gold} className="mb-4" />
              <p style={{ fontFamily: "'Bodoni Moda', serif", color: COLORS.cream, fontSize: "1.05rem", lineHeight: 1.55, fontStyle: "italic" }} className="mb-5">
                "{t.quote}"
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.8rem" }}>{t.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Quote } from 'lucide-react';
import { COLORS, MAPS_URL, RATING, REVIEW_COUNT, testimonials } from './constants';
import { Stars } from './Stars';

export function Testimonials() {
  return (
    <section id="reviews" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.creamAlt }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.sage, fontSize: "0.78rem", letterSpacing: "0.18em" }} className="mb-3">
              CLIENT REVIEWS
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl">
              What clients are saying.
            </h2>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <Stars size={16} />
            <span style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.ink, fontSize: "0.88rem" }}>
              {RATING.toFixed(1)} · {REVIEW_COUNT} Google reviews
            </span>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 rounded" style={{ backgroundColor: "#fff", border: `1px solid ${COLORS.border}` }}>
              <Quote size={20} color={COLORS.rose} className="mb-4" />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", color: COLORS.ink, fontSize: "1.1rem", lineHeight: 1.5, fontStyle: "italic" }} className="mb-5">
                "{t.quote}"
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, fontSize: "0.78rem" }}>{t.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
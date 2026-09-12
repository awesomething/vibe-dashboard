import React, { useState, useEffect } from 'react';
import { COLORS, RATING, REVIEW_COUNT, HERO_IMG } from './constants';
import { scrollToId } from './utils';
import { BookButton } from './BookButton';
import { Stars } from './Stars';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: COLORS.rose,
              fontSize: "0.78rem",
              letterSpacing: "0.18em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
            className="mb-4"
          >
            PEACHTREE RD · ATLANTA
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              color: COLORS.ink,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
            className="text-4xl md:text-6xl mb-6"
          >
            Timeless style, <em style={{ color: COLORS.rose, fontStyle: "italic" }}>modern</em> craft.
          </h1>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: COLORS.inkSoft,
              lineHeight: 1.65,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
            className="text-base md:text-lg mb-8 max-w-md"
          >
            Cuts, color, and bridal styling from a salon Atlanta clients trust with the moments that matter.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 mb-9"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            <BookButton size="lg" />
            <button
              onClick={() => scrollToId("services")}
              className="inline-flex items-center justify-center rounded"
              style={{
                border: `1.5px solid ${COLORS.border}`,
                color: COLORS.ink,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "0.95rem 2rem",
              }}
            >
              View Services
            </button>
          </div>
          <div
            className="flex items-center gap-3"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
          >
            <Stars size={15} />
            <span style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.ink, fontSize: "0.88rem" }}>
              {RATING.toFixed(1)} · {REVIEW_COUNT} Google reviews
            </span>
          </div>
        </div>
        <div className="relative">
          <img
            src={HERO_IMG}
            alt="Elegant salon chairs facing a long mirrored counter"
            className="w-full h-[320px] md:h-[460px] object-cover rounded"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(1.04)",
              transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
            }}
          />
          <div
            className="absolute inset-0 rounded pointer-events-none"
            style={{ border: `1px solid ${COLORS.gold}`, margin: "14px" }}
          />
        </div>
      </div>
    </section>
  );
}
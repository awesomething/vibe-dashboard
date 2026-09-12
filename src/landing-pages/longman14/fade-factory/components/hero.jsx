"use client"
import { useState, useEffect } from "react";
import { COLORS, HERO_IMG, scrollToId } from "./constants";
import { BookButton } from "./book-button";
import { RatingMedallion } from "./rating-medallion";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: COLORS.ink }}>
      <img src={HERO_IMG} alt="Barber chair in a moody, brick-walled barbershop" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(15,12,9,0.94) 20%, rgba(15,12,9,0.55) 60%, rgba(15,12,9,0.25) 100%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="max-w-xl">
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              color: COLORS.gold,
              fontSize: "0.82rem",
              letterSpacing: "0.14em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
            className="mb-4"
          >
            ATLANTA'S FADE SPECIALISTS
          </p>
          <h1
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 600,
              color: COLORS.cream,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
            className="text-4xl md:text-6xl mb-6"
          >
            Precision cuts, <em style={{ color: COLORS.gold, fontStyle: "italic" }}>trusted</em> by the chair.
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              color: COLORS.creamSoft,
              lineHeight: 1.65,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
            className="text-base md:text-lg mb-8 max-w-md"
          >
            Fade Factory ATL is where regulars come back for the same clean line-up every time — and where first-timers find out why.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            <BookButton size="lg" />
            <button
              onClick={() => scrollToId("services")}
              className="inline-flex items-center justify-center rounded-full"
              style={{
                border: `1.5px solid ${COLORS.line}`,
                color: COLORS.cream,
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.92rem",
                padding: "0.95rem 2rem",
              }}
            >
              View Services
            </button>
          </div>
          <RatingMedallion animateIn={mounted} />
        </div>
      </div>
    </section>
  );
}

"use client"
import { COLORS, CRAFT_IMG, RATING, REVIEW_COUNT } from "./constants";
import { useCountUp, useInView } from "./hooks";

export function CraftSection() {
  const [ref, inView] = useInView();
  const rating = useCountUp(RATING, 1, inView);
  const reviews = useCountUp(REVIEW_COUNT, 0, inView);
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.ink }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <img
          src={CRAFT_IMG}
          alt="A barber using a straight razor for detail work"
          className="w-full h-[320px] md:h-[440px] object-cover rounded"
        />
        <div ref={ref}>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.gold, fontSize: "0.8rem", letterSpacing: "0.14em" }} className="mb-3">
            THE STANDARD
          </p>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 600, color: COLORS.cream, letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-6">
            Consistency is the whole craft.
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.creamSoft, lineHeight: 1.65 }} className="mb-10 max-w-md">
            A good fade isn't luck — it's attention, repeated every visit. That's what keeps the chairs full and the regulars coming back.
          </p>
          <div className="flex gap-12">
            <div>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.gold, fontSize: "2.6rem", lineHeight: 1 }}>
                {rating}
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.creamSoft, fontSize: "0.82rem" }} className="mt-2">
                Average Google rating
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.gold, fontSize: "2.6rem", lineHeight: 1 }}>
                {Math.round(reviews)}
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.creamSoft, fontSize: "0.82rem" }} className="mt-2">
                Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

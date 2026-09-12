import React from 'react';
import { COLORS, OWNER_IMG, RATING, REVIEW_COUNT } from './constants';
import { useCountUp, useInView } from './utils';

export function AboutBrandon() {
  const [ref, inView] = useInView();
  const rating = useCountUp(RATING, 1, inView);
  const reviews = useCountUp(REVIEW_COUNT, 0, inView);
  return (
    <section id="about" className="w-full scroll-mt-20" style={{ backgroundColor: COLORS.creamAlt }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <img
          src={OWNER_IMG}
          alt="A stylist at work cutting a client's hair"
          className="w-full h-[320px] md:h-[440px] object-cover rounded"
        />
        <div ref={ref}>
          <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.sage, fontSize: "0.78rem", letterSpacing: "0.18em" }} className="mb-3">
            MEET THE OWNER
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-6">
            Brandon leads every chair.
          </h2>
          <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, lineHeight: 1.65 }} className="mb-10 max-w-md">
            Clients keep coming back to Brandon for the same reason: careful, professional work, every visit — from everyday cuts to bridal looks people remember for years.
          </p>
          <div className="flex gap-12">
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: COLORS.rose, fontSize: "2.6rem", lineHeight: 1 }}>
                {rating}
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, fontSize: "0.8rem" }} className="mt-2">
                Average Google rating
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: COLORS.rose, fontSize: "2.6rem", lineHeight: 1 }}>
                {Math.round(reviews)}
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, fontSize: "0.8rem" }} className="mt-2">
                Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Phone } from 'lucide-react';
import { COLORS, PHONE_TEL, PHONE_DISPLAY } from './constants';
import { BookingForm } from './BookingForm';

export function BookSection() {
  return (
    <section id="book" className="w-full scroll-mt-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="md:sticky md:top-28">
          <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.sage, fontSize: "0.78rem", letterSpacing: "0.18em" }} className="mb-3">
            RESERVE YOUR TIME
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-5">
            Book your next visit.
          </h2>
          <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, lineHeight: 1.65 }} className="mb-6 max-w-sm">
            Share a few details and the salon will confirm your appointment.
          </p>
          <a href={PHONE_TEL} style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.rose, fontSize: "0.9rem" }} className="inline-flex items-center gap-2">
            <Phone size={15} /> Or call {PHONE_DISPLAY}
          </a>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { COLORS, PHONE_TEL, PHONE_DISPLAY } from './constants';
import { scrollToId } from './utils';

export function FinalCTA() {
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.rose }}>
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }} className="text-3xl md:text-4xl mb-4">
          Your next look starts here.
        </h2>
        <p style={{ fontFamily: "'Manrope', sans-serif", color: "#F6E4EA", lineHeight: 1.6 }} className="mb-8 max-w-md mx-auto">
          Join the clients who trust The Modern Classic Salon for cuts, color, and bridal styling.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => scrollToId("book")}
            className="inline-flex items-center justify-center gap-2 rounded"
            style={{ backgroundColor: "#fff", color: COLORS.roseDeep, fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "0.98rem", padding: "0.9rem 1.8rem" }}
          >
            <Calendar size={16} />
            Book Appointment
          </button>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded"
            style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "#fff", fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "0.98rem", padding: "0.9rem 1.8rem" }}
          >
            <Phone size={16} />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
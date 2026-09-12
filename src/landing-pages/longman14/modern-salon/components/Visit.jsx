import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { COLORS, ADDRESS, MAPS_URL } from './constants';

export function Visit() {
  return (
    <section className="w-full" style={{ backgroundColor: COLORS.creamAlt }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid sm:grid-cols-2 gap-10">
        <div className="flex gap-4">
          <MapPin size={20} color={COLORS.rose} className="shrink-0 mt-1" />
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.1rem" }} className="mb-1">
              Find the salon
            </h3>
            <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem" }} className="mb-2">
              {ADDRESS}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
              style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.rose, fontSize: "0.85rem", fontWeight: 600 }}
            >
              <Navigation size={14} /> Get Directions
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Clock size={20} color={COLORS.rose} className="shrink-0 mt-1" />
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.1rem" }} className="mb-1">
              Hours
            </h3>
            <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.inkSoft, fontSize: "0.9rem" }}>Tuesday – Saturday, by appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
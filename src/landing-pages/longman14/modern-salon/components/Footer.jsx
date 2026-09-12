import React from 'react';
import { COLORS, ADDRESS, PHONE_DISPLAY } from './constants';
import { scrollToId } from './utils';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: COLORS.ink }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Logo inverted />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[["services", "Services"], ["gallery", "Gallery"], ["reviews", "Reviews"], ["book", "Book"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollToId(id)} style={{ fontFamily: "'Manrope', sans-serif", color: "#B8AC9B", fontSize: "0.86rem" }}>
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div style={{ borderTop: "1px solid rgba(245,239,227,0.14)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p style={{ fontFamily: "'Manrope', sans-serif", color: "#8A7D6C", fontSize: "0.76rem" }}>
            © 2026 The Modern Classic Salon. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Manrope', sans-serif", color: "#B8AC9B", fontSize: "0.76rem" }}>
            {ADDRESS} · {PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </footer>
  );
}
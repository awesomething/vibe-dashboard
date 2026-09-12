import React from 'react';
import { COLORS } from './constants';

export function Logo({ inverted }) {
  return (
    <div className="flex flex-col leading-none">
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "1.35rem",
          letterSpacing: "0.01em",
          color: inverted ? COLORS.cream : COLORS.ink,
        }}
      >
        The Modern Classic
      </span>
      <span
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 600,
          fontSize: "0.66rem",
          letterSpacing: "0.28em",
          color: COLORS.rose,
        }}
      >
        SALON
      </span>
    </div>
  );
}
import React, { useState } from 'react';
import { Calendar, CheckCircle2, Phone } from 'lucide-react';
import { COLORS, PHONE_TEL, PHONE_DISPLAY, serviceOptions, stylistOptions, timeOptions } from './constants';

export function Field({ label, required, error, children }) {
  return (
    <div className="mb-4">
      <label style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, color: COLORS.ink, fontSize: "0.82rem" }} className="block mb-1.5">
        {label}
        {required && <span style={{ color: COLORS.rose }}> *</span>}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.rose, fontSize: "0.76rem" }} className="mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputStyle = {
  fontFamily: "'Manrope', sans-serif",
  fontSize: "0.92rem",
  color: COLORS.ink,
  border: `1.5px solid ${COLORS.border}`,
  backgroundColor: "#fff",
};
"use client";

import { useState } from "react";

export function Thermostat() {
  const [temp, setTemp] = useState(72);
  const min = 64;
  const max = 82;
  const pct = (temp - min) / (max - min);
  const hue = Math.round(210 - pct * 190); // cool blue -> warm orange
  const color = `hsl(${hue} 90% 55%)`;
  const r = 52;
  const c = 2 * Math.PI * r;
  const arc = c * 0.75;
  const label = temp <= 69 ? "Crisp" : temp <= 75 ? "Comfortable" : "Toasty";

  return (
    <div className="w-56 rounded-3xl bg-white/90 p-4 shadow-2xl shadow-ink/20 ring-1 ring-ink/5 backdrop-blur">
      <div className="relative mx-auto size-36">
        <svg viewBox="0 0 120 120" className="size-full -rotate-[225deg]">
          <circle
            cx="60" cy="60" r={r} fill="none" stroke="#e6edf6" strokeWidth="10"
            strokeLinecap="round" strokeDasharray={`${arc} ${c}`}
          />
          <circle
            cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="10"
            strokeLinecap="round" strokeDasharray={`${arc * pct} ${c}`}
            style={{ transition: "stroke-dasharray .25s, stroke .25s" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <div className="font-display text-4xl font-bold leading-none">{temp}°</div>
            <div className="mt-1 text-xs font-semibold" style={{ color }}>{label}</div>
          </div>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={temp}
        onChange={(e) => setTemp(+e.target.value)}
        aria-label="Set your ideal temperature"
        className="mt-2 w-full accent-brand"
      />
      <p className="mt-1 text-center text-xs text-ink/55">Set your happy place</p>
    </div>
  );
}

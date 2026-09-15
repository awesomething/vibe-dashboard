import React from 'react';
import { Star } from 'lucide-react';

export function StarRow({ rating, size = 16 }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex" style={{ lineHeight: 0 }}>
      <span
        className="flex overflow-hidden text-[#B9803F]"
        style={{
          width: `${pct}%`,
          filter: 'drop-shadow(0 0 1px #fff) drop-shadow(0 1 1px #fff)',
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} width={size} height={size} fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    </span>
  );
}

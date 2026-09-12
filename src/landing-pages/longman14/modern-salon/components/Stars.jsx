import React from 'react';
import { Star } from 'lucide-react';
import { COLORS } from './constants';

export function Stars({ size = 14, color = COLORS.rose }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill={color} color={color} />
      ))}
    </div>
  );
}
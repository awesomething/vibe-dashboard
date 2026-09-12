import React from 'react';
import { COLORS, GALLERY_1, GALLERY_2, GALLERY_3 } from './constants';

export function Gallery() {
  const imgs = [
    { src: GALLERY_1, alt: "Modern salon interior with black chairs and round mirrors" },
    { src: GALLERY_2, alt: "Hairdressing tools laid out — brushes, scissors, and a tinting brush" },
    { src: GALLERY_3, alt: "Salon chairs facing mirrors along a dark wall" },
  ];
  return (
    <section id="gallery" className="w-full scroll-mt-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <p style={{ fontFamily: "'Manrope', sans-serif", color: COLORS.sage, fontSize: "0.78rem", letterSpacing: "0.18em" }} className="mb-3">
          INSIDE THE SALON
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: COLORS.ink, letterSpacing: "-0.01em" }} className="text-3xl md:text-5xl mb-10">
          A space built for the craft.
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {imgs.map((img, i) => (
            <div key={i} className="overflow-hidden rounded">
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";

type Theme = {
  navy: string;
  blue: string;
  sky: string;
  slate: string;
  slateLight: string;
  border: string;
};

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

type TestimonialCarouselProps = {
  theme: Theme;
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({
  theme,
  testimonials,
}: TestimonialCarouselProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div>
      <div
        style={{
          background: theme.sky,
          borderRadius: 16,
          padding: "36px 36px 28px",
          minHeight: 220,
          position: "relative",
          border: `1px solid ${theme.border}`,
        }}
      >
        <div
          style={{
            fontSize: 48,
            color: theme.blue,
            lineHeight: 1,
            marginBottom: 16,
            fontFamily: "Georgia, serif",
            opacity: 0.5,
          }}
        >
          "
        </div>
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 18,
            lineHeight: 1.75,
            color: theme.navy,
            marginBottom: 24,
            fontStyle: "italic",
          }}
        >
          {testimonials[activeTestimonial].quote}
        </p>
        <div
          style={{
            borderTop: `1px solid ${theme.border}`,
            paddingTop: 18,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                color: theme.navy,
                fontSize: 15,
              }}
            >
              {testimonials[activeTestimonial].name}
            </div>
            <div
              style={{
                color: theme.slateLight,
                fontSize: 13,
                fontFamily: "'Source Sans 3', sans-serif",
                marginTop: 2,
              }}
            >
              {testimonials[activeTestimonial].location}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className="testimonial-btn"
                onClick={() => setActiveTestimonial(i)}
                style={{
                  background:
                    i === activeTestimonial ? theme.navy : theme.border,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 14, marginTop: 16 }}>
        {testimonials.map((testimonial, i) => (
          <button
            key={i}
            onClick={() => setActiveTestimonial(i)}
            style={{
              flex: 1,
              padding: "12px 14px",
              borderRadius: 8,
              border: `1px solid ${
                i === activeTestimonial ? theme.blue : theme.border
              }`,
              background: i === activeTestimonial ? theme.sky : "white",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: i === activeTestimonial ? theme.navy : theme.slate,
              }}
            >
              {testimonial.name}
            </div>
            <div
              style={{
                color: theme.slateLight,
                fontSize: 11,
                fontFamily: "'Source Sans 3', sans-serif",
                marginTop: 2,
              }}
            >
              {testimonial.location}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Quote, User } from 'lucide-react';
import { display, ratingBreakdown, testimonials } from './constants';
import { StarRow } from './StarRow';

export function Reviews() {
  return (
    <section id="reviews" className="bg-[#E4E8E5]">
      <div className="mx-auto max-w-[1160px] px-6 py-20">
        <h2 className={`${display} text-4xl font-700 text-[#0E1B22] md:text-5xl`}>
          What the last 30 calls said
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-baseline gap-3">
              <span className={`${display} text-6xl font-800 text-[#0E1B22]`}>
                4.3
              </span>
              <div>
                <StarRow rating={4.3} size={18} />
                <p className="mt-1 text-sm text-[#4A585D]">30 Google reviews</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              {ratingBreakdown.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <span className="w-3 text-xs text-[#4A585D]">{r.label}</span>
                  <div className="h-2 flex-1 bg-[#D7DBD8]">
                    <div
                      className="h-2 bg-[#B9803F]"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border border-[#D7DBD8] bg-[#EDF0EE] p-5"
              >
                <Quote className="h-5 w-5 text-[#B9803F]" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-[#16232B]">
                  {t.quote}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-2">
                  {t.initial ? (
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-700 text-white"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.initial}
                    </span>
                  ) : (
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: t.color }}
                    >
                      <User className="h-4 w-4" strokeWidth={2} />
                    </span>
                  )}
                  <span className="text-xs text-[#4A585D]">Google review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
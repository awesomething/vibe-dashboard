"use client"
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { heading, PHONE_TEL, PHONE_DISPLAY, issueOptions } from "./constants";
import { Reveal } from "./Reveal";
import { Field } from "./Field";

export function RequestForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="request" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className={`${heading} text-3xl font-800 text-[#141210] md:text-4xl`}>
              Request service
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#5A564C]">
              Send us the basics and we'll call you back to set up a time —
              usually within the hour during the day. Need it sooner?{" "}
              <a href={`tel:${PHONE_TEL}`} className="font-700 text-[#141210] underline">
                Call {PHONE_DISPLAY}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="flex items-start gap-3 rounded-2xl border border-[#FF4A1E] bg-[#FFF1EA] p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF4A1E]" />
                <div>
                  <p className={`${heading} font-700 text-[#141210]`}>Request sent.</p>
                  <p className="mt-1 text-sm text-[#5A564C]">
                    We'll call you back shortly to confirm a time. For
                    anything urgent, call {PHONE_DISPLAY} directly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required className="sm:col-span-1" />
                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  required
                  className="sm:col-span-1"
                />
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-600 uppercase tracking-wide text-[#5A564C]">
                    What's going on?
                  </label>
                  <select
                    name="issue"
                    required
                    defaultValue=""
                    className="rounded-xl border border-[#E3DCCB] bg-[#F6F1E6] px-3 py-2.5 text-sm text-[#141210] outline-none transition-colors focus:border-[#FF4A1E]"
                  >
                    <option value="" disabled>
                      Choose one
                    </option>
                    {issueOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Address" name="address" required className="sm:col-span-2" />
                <button
                  type="submit"
                  className="sm:col-span-2 mt-1 rounded-xl bg-[#FF4A1E] px-6 py-3 text-sm font-700 text-[#141210] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,74,30,0.3)]"
                >
                  Send request
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
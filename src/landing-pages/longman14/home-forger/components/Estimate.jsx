import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { slab, PHONE_DISPLAY, PHONE_TEL, issueOptions } from './constants';
import { Field } from './Field';

export function Estimate() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="estimate" className="bg-[#DEE0DA]">
      <div className="mx-auto max-w-[1160px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className={`${slab} text-4xl font-700 text-[#1B1B1A] md:text-5xl`}>
              Get an estimate
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4A4C46]">
              Tell us what's going on and we'll call you back to set up a
              time to come look at it. Prefer to talk now?{" "}
              <a href={`tel:${PHONE_TEL}`} className="font-700 text-[#1B1B1A] underline">
                Call {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>

          <div>
            {sent ? (
              <div className="flex items-start gap-3 border border-[#C9541F] bg-[#F1DFD3] p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8A3B15]" />
                <div>
                  <p className="font-700 text-[#1B1B1A]">Request sent.</p>
                  <p className="mt-1 text-sm text-[#4A4C46]">
                    We'll call you back to schedule a time to come take a
                    look. For anything urgent, call {PHONE_DISPLAY} directly.
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
                  <label className="text-xs font-600 uppercase tracking-wide text-[#4A4C46]">
                    What's going on with the roof?
                  </label>
                  <select
                    name="issue"
                    required
                    defaultValue=""
                    className="border border-[#B4B6AF] bg-[#E6E7E4] px-3 py-2.5 text-sm text-[#202020] focus:border-[#C9541F] focus:outline-none"
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
                <Field
                  label="Property address"
                  name="address"
                  required
                  className="sm:col-span-2"
                />
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-600 uppercase tracking-wide text-[#4A4C46]">
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="border border-[#B4B6AF] bg-[#E6E7E4] px-3 py-2.5 text-sm text-[#202020] focus:border-[#C9541F] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-1 rounded-[2px] bg-[#1B1B1A] px-6 py-3 text-sm font-700 text-[#E6E7E4] hover:bg-[#2C2D28]"
                >
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { display, PHONE_DISPLAY, PHONE_TEL, serviceOptions } from './constants';
import { Field } from './Field';

export function RequestService() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="request" className="mx-auto max-w-[1160px] px-6 py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className={`${display} text-4xl font-700 text-[#0E1B22] md:text-5xl`}>
            Request service
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4A585D]">
            Send us the basics and we'll call you back to confirm a time —
            usually within the hour during the day. Need it sooner?{" "}
            <a href={`tel:${PHONE_TEL}`} className="font-700 text-[#0E1B22] underline">
              Call {PHONE_DISPLAY}
            </a>{" "}
            instead.
          </p>
        </div>

        <div>
          {sent ? (
            <div className="flex items-start gap-3 border border-[#B9803F] bg-[#F5EDE1] p-6">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8A5F2A]" />
              <div>
                <p className="font-700 text-[#0E1B22]">Request sent.</p>
                <p className="mt-1 text-sm text-[#4A585D]">
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
                <label className="text-xs font-600 uppercase tracking-wide text-[#4A585D]">
                  What's going on?
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="border border-[#B7C0BC] bg-[#EDF0EE] px-3 py-2.5 text-sm text-[#16232B] focus:border-[#B9803F] focus:outline-none"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <Field
                label="Address"
                name="address"
                required
                className="sm:col-span-2"
              />
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-600 uppercase tracking-wide text-[#4A585D]">
                  Anything we should know? (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="border border-[#B7C0BC] bg-[#EDF0EE] px-3 py-2.5 text-sm text-[#16232B] focus:border-[#B9803F] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 mt-1 rounded-[2px] bg-[#0E1B22] px-6 py-3 text-sm font-700 text-[#EDF0EE] hover:bg-[#1F3D4D]"
              >
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
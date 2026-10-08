"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCircle2, Loader2, Phone } from "lucide-react";
import { bookingServices, site, urgencies } from "../utils";

type Status = "idle" | "sending" | "done" | "error";

export function BookingCard() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Let other sections (symptom helper) prefill this form.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<{ service?: string; notes?: string }>).detail;
      if (d?.service) setService(d.service);
      if (d?.notes) setNotes(d.notes);
      setStep(1);
      setStatus("idle");
    };
    window.addEventListener("prefill-booking", onPrefill);
    return () => window.removeEventListener("prefill-booking", onPrefill);
  }, []);

  const emergency = urgency === "emergency";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please add your name.");
    if (phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid phone number.");
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, urgency, name, phone, zip, notes, website }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    }
  }

  const input =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] outline-none transition placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/15";

  if (status === "done") {
    return (
      <div id="book" className="rounded-3xl bg-white p-7 shadow-[0_30px_80px_-20px_rgb(11_31_56/0.35)] ring-1 ring-ink/5">
        <div className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Request received, {name.split(" ")[0]}.</h3>
        <p className="mt-2 text-ink/70">
          We&apos;ll call or text {phone} to confirm your arrival window.
          {emergency && " Because this is an emergency, call us now for the fastest response."}
        </p>
        <a
          href={`tel:${site.tel}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 font-semibold text-white"
        >
          <Phone className="size-4" /> Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <div
      id="book"
      className="rounded-3xl bg-white p-6 shadow-[0_30px_80px_-20px_rgb(11_31_56/0.35)] ring-1 ring-ink/5 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">Book online</p>
          <h3 className="text-2xl font-bold">Get a technician booked</h3>
        </div>
        <span className="rounded-full bg-ice px-3 py-1 text-xs font-semibold text-ink/70">
          Step {step + 1} of 3
        </span>
      </div>

      <div className="mt-4 flex gap-1.5" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-brand" : "bg-ice"}`}
          />
        ))}
      </div>

      <form onSubmit={submit} className="mt-5">
        {step === 0 && (
          <div>
            <p className="mb-3 text-sm font-medium text-ink/70">What do you need help with?</p>
            <div className="grid grid-cols-2 gap-2">
              {bookingServices.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => {
                    setService(s);
                    setStep(1);
                  }}
                  className={`rounded-xl border px-3 py-3 text-left text-sm font-semibold transition hover:border-brand hover:bg-brand/5 ${
                    service === s ? "border-brand bg-brand/5 text-brand" : "border-ink/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="mb-3 text-sm font-medium text-ink/70">How soon do you need us?</p>
            <div className="grid gap-2">
              {urgencies.map((u) => (
                <button
                  type="button"
                  key={u.id}
                  onClick={() => {
                    setUrgency(u.id);
                    setStep(2);
                  }}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition hover:border-brand hover:bg-brand/5 ${
                    urgency === u.id ? "border-brand bg-brand/5" : "border-ink/10"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-semibold">{u.label}</span>
                    <span className="block text-xs text-ink/55">{u.hint}</span>
                  </span>
                  {urgency === u.id && <Check className="size-4 text-brand" />}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="mt-3 text-sm font-medium text-ink/55 hover:text-brand"
            >
              ← Back
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <div className="rounded-xl bg-ice px-4 py-2.5 text-sm">
              <span className="font-semibold">{service || "General service"}</span>
              <span className="text-ink/55"> · {urgencies.find((u) => u.id === urgency)?.label}</span>
            </div>
            <input
              className={input}
              placeholder="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="grid grid-cols-5 gap-3">
              <input
                className={`${input} col-span-3`}
                placeholder="Phone number"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className={`${input} col-span-2`}
                placeholder="ZIP"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <textarea
              className={`${input} resize-none`}
              rows={2}
              placeholder="Anything we should know? (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            {/* honeypot */}
            <input
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            {error && <p className="text-sm font-medium text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-600 disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <>
                  Request my booking <ArrowRight className="size-4" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-medium text-ink/55 hover:text-brand"
            >
              ← Back
            </button>
          </div>
        )}
      </form>

      <p className="mt-5 border-t border-ink/10 pt-4 text-center text-sm text-ink/60">
        Prefer to talk?{" "}
        <a href={`tel:${site.tel}`} className="font-semibold text-ink hover:text-brand">
          {site.phone}
        </a>
      </p>
    </div>
  );
}

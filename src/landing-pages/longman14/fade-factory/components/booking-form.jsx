"use client"
import { useState } from "react";
import { Calendar, CheckCircle2, Phone } from "lucide-react";
import { COLORS, PHONE_TEL, serviceOptions, barberOptions, timeOptions } from "./constants";
import { Field } from "./field";

const inputStyle = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "0.92rem",
  color: COLORS.ink,
  border: `1.5px solid ${COLORS.lineOnCream}`,
  backgroundColor: "#fff",
};

export function BookingForm() {
  const [values, setValues] = useState({ name: "", phone: "", service: "", barber: "No preference", date: "", time: "", notes: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const setField = (k, v) => setValues((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.phone.trim() || !/^[0-9()+\-.\s]{7,}$/.test(values.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!values.service) e.service = "Please select a service.";
    if (!values.date.trim()) e.date = "Please choose a preferred date.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => { if (validate()) setSubmitted(true); };
  const reset = () => { setValues({ name: "", phone: "", service: "", barber: "No preference", date: "", time: "", notes: "" }); setErrors({}); setSubmitted(false); };

  if (submitted) {
    return (
      <div className="rounded p-8 md:p-12 text-center" style={{ backgroundColor: COLORS.cream }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#E7EFE6" }}>
          <CheckCircle2 size={28} color="#3F6B3F" />
        </div>
        <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: COLORS.ink, fontSize: "1.4rem" }} className="mb-3">Request received</h3>
        <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, lineHeight: 1.6 }} className="mb-7">
          Thanks, {values.name.split(" ")[0] || "there"}. Fade Factory ATL will reach out to confirm your {values.date && `${values.date} `}appointment for {values.service || "your service"}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-full" style={{ backgroundColor: COLORS.oxblood, color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "0.9rem", padding: "0.7rem 1.4rem" }}>
            <Phone size={15} /> Call the Shop
          </a>
          <button onClick={reset} className="inline-flex items-center justify-center rounded-full" style={{ border: `1.5px solid ${COLORS.lineOnCream}`, color: COLORS.ink, fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "0.9rem", padding: "0.7rem 1.4rem" }}>
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded p-6 md:p-10" style={{ backgroundColor: COLORS.cream }}>
      <div className="grid sm:grid-cols-2 gap-x-5">
        <Field label="Full Name" required error={errors.name}><input style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.name} onChange={(e) => setField("name", e.target.value)} placeholder="Jordan Lee" /></Field>
        <Field label="Phone Number" required error={errors.phone}><input style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="(404) 555-0100" /></Field>
      </div>
      <Field label="Service" required error={errors.service}>
        <select style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.service} onChange={(e) => setField("service", e.target.value)}>
          <option value="">Select a service</option>
          {serviceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>
      </Field>
      <div className="grid sm:grid-cols-2 gap-x-5">
        <Field label="Preferred Barber">
          <select style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.barber} onChange={(e) => setField("barber", e.target.value)}>
            {barberOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
          </select>
        </Field>
        <Field label="Preferred Time">
          <select style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.time} onChange={(e) => setField("time", e.target.value)}>
            <option value="">Select an option</option>
            {timeOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
          </select>
        </Field>
      </div>
      <Field label="Preferred Date" required error={errors.date}><input type="date" style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none" value={values.date} onChange={(e) => setField("date", e.target.value)} /></Field>
      <Field label="Anything else the barber should know?"><textarea style={inputStyle} className="w-full rounded px-3 py-2.5 outline-none resize-none" rows={3} value={values.notes} onChange={(e) => setField("notes", e.target.value)} placeholder="Style notes, length, references..." /></Field>
      <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 rounded-full mt-4" style={{ backgroundColor: COLORS.oxblood, color: "#fff", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: "1rem", padding: "0.95rem" }}>
        <Calendar size={16} /> Request Booking
      </button>
      <p style={{ fontFamily: "'Jost', sans-serif", color: COLORS.inkSoft, fontSize: "0.76rem", lineHeight: 1.5 }} className="mt-3 text-center">
        This is a booking request, not a confirmed appointment. The shop will follow up to confirm your time.
      </p>
    </div>
  );
}

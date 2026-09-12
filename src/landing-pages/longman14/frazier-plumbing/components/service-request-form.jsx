"use client";

import { useRef, useState } from "react";
import { COLORS, contactMethods, serviceTypeOptions, timeOptions } from "../../lib/utils";
import { CheckCircle2 } from "lucide-react";
import { CallButton } from "./call-button";
import { Camera } from "lucide-react";
import { Send } from "lucide-react";

function Field({ label, required, error, children }) {
    return (
      <div className="mb-4">
        <label style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: COLORS.ink, fontSize: "0.85rem" }} className="block mb-1.5">
          {label}
          {required && <span style={{ color: COLORS.ember }}> *</span>}
        </label>
        {children}
        {error && (
          <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.ember, fontSize: "0.78rem" }} className="mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
  
  const inputStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.92rem",
    color: COLORS.ink,
    border: `1.5px solid ${COLORS.border}`,
    backgroundColor: "#fff",
  };
  
  export function ServiceRequestForm() {
    const [values, setValues] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "",
      contactMethod: "Phone Call",
      preferredTime: "",
      description: "",
    });
    const [fileName, setFileName] = useState("");
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const fileInput = useRef(null);
  
    const setField = (key, val) => setValues((v) => ({ ...v, [key]: val }));
  
    const validate = () => {
      const errs = {};
      if (!values.name.trim()) errs.name = "Please enter your name.";
      if (!values.phone.trim()) {
        errs.phone = "Please enter a valid phone number.";
      } else if (!/^[0-9()+\-.\s]{7,}$/.test(values.phone.trim())) {
        errs.phone = "Please enter a valid phone number.";
      }
      if (!values.address.trim()) errs.address = "Please enter your service address.";
      if (!values.serviceType) errs.serviceType = "Please select what you need help with.";
      if (!values.description.trim()) errs.description = "Please describe the plumbing problem.";
      setErrors(errs);
      return Object.keys(errs).length === 0;
    };
  
    const handleSubmit = () => {
      if (validate()) setSubmitted(true);
    };
  
    const handleReset = () => {
      setValues({
        name: "",
        phone: "",
        email: "",
        address: "",
        serviceType: "",
        contactMethod: "Phone Call",
        preferredTime: "",
        description: "",
      });
      setFileName("");
      setErrors({});
      setSubmitted(false);
    };
  
    if (submitted) {
      return (
        <div
          className="rounded p-8 md:p-12 text-center max-w-lg mx-auto"
          style={{ backgroundColor: "#fff", border: `1px solid ${COLORS.border}` }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "#EAF4EC" }}
          >
            <CheckCircle2 size={28} color={COLORS.success} />
          </div>
          <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, color: COLORS.ink, fontSize: "1.4rem" }} className="mb-3">
            Request received
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, lineHeight: 1.6 }} className="mb-7">
            Thanks, {values.name.split(" ")[0] || "there"}. Your service request has been submitted. Frazier Plumbing Service of Atlanta can review your details and contact you using your preferred contact method.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CallButton size="md" />
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: COLORS.ink,
                border: `1.5px solid ${COLORS.border}`,
                padding: "0.65rem 1.15rem",
              }}
            >
              Back to website
            </button>
          </div>
        </div>
      );
    }
  
    return (
      <div
        className="rounded p-6 md:p-10"
        style={{ backgroundColor: "#fff", border: `1px solid ${COLORS.border}` }}
      >
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.inkSoft, fontSize: "0.75rem", letterSpacing: "0.04em" }} className="mb-2">
          CUSTOMER INFORMATION
        </p>
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Full Name" required error={errors.name}>
            <input
              style={inputStyle}
              className="w-full rounded px-3 py-2.5 outline-none"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="Jane Smith"
            />
          </Field>
          <Field label="Phone Number" required error={errors.phone}>
            <input
              style={inputStyle}
              className="w-full rounded px-3 py-2.5 outline-none"
              value={values.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="(404) 555-0100"
            />
          </Field>
        </div>
        <Field label="Email Address" error={errors.email}>
          <input
            style={inputStyle}
            className="w-full rounded px-3 py-2.5 outline-none"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="jane@example.com"
          />
        </Field>
  
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, color: COLORS.inkSoft, fontSize: "0.75rem", letterSpacing: "0.04em" }} className="mt-6 mb-2">
          SERVICE INFORMATION
        </p>
        <Field label="Service Address" required error={errors.address}>
          <input
            style={inputStyle}
            className="w-full rounded px-3 py-2.5 outline-none"
            value={values.address}
            onChange={(e) => setField("address", e.target.value)}
            placeholder="Street address, Atlanta, GA"
          />
        </Field>
        <Field label="What do you need help with?" required error={errors.serviceType}>
          <select
            style={inputStyle}
            className="w-full rounded px-3 py-2.5 outline-none"
            value={values.serviceType}
            onChange={(e) => setField("serviceType", e.target.value)}
          >
            <option value="">Select an option</option>
            {serviceTypeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
  
        <Field label="Preferred Contact Method">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
            {contactMethods.map((m) => (
              <label key={m} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  checked={values.contactMethod === m}
                  onChange={() => setField("contactMethod", m)}
                />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: COLORS.ink }}>{m}</span>
              </label>
            ))}
          </div>
        </Field>
  
        <Field label="Preferred Service Time">
          <select
            style={inputStyle}
            className="w-full rounded px-3 py-2.5 outline-none"
            value={values.preferredTime}
            onChange={(e) => setField("preferredTime", e.target.value)}
          >
            <option value="">Select an option</option>
            {timeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
  
        <Field label="Describe the Problem" required error={errors.description}>
          <textarea
            style={inputStyle}
            className="w-full rounded px-3 py-2.5 outline-none resize-none"
            rows={4}
            value={values.description}
            onChange={(e) => setField("description", e.target.value)}
            placeholder="Tell us what's happening..."
          />
        </Field>
  
        <Field label="Have a photo that might help?">
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <button
            onClick={() => fileInput.current?.click()}
            type="button"
            className="flex items-center gap-2 rounded px-3 py-2.5"
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <Camera size={16} color={COLORS.inkSoft} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: fileName ? COLORS.ink : COLORS.inkSoft }}>
              {fileName || "Attach a photo (optional)"}
            </span>
          </button>
        </Field>
  
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 rounded mt-4"
          style={{
            backgroundColor: COLORS.navy,
            color: "#fff",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            padding: "0.95rem",
          }}
        >
          <Send size={16} />
          Request Service
        </button>
        <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.inkSoft, fontSize: "0.78rem", lineHeight: 1.5 }} className="mt-3 text-center">
          Submitting this form does not confirm an appointment. The business will contact you to discuss your request.
        </p>
      </div>
    );
  }
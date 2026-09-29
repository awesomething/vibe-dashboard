import React from "react";

export function Field({ label, name, type = "text", required, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="text-xs font-600 uppercase tracking-wide text-[#5A564C]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-[#E3DCCB] bg-[#F6F1E6] px-3 py-2.5 text-sm text-[#141210] outline-none transition-colors focus:border-[#FF4A1E]"
      />
    </div>
  );
}
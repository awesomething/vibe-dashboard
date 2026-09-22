import React from 'react';

export function Field({ label, name, type = "text", required, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="text-xs font-600 uppercase tracking-wide text-[#4A585D]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border border-[#B7C0BC] bg-[#EDF0EE] px-3 py-2.5 text-sm text-[#16232B] focus:border-[#B9803F] focus:outline-none"
      />
    </div>
  );
}
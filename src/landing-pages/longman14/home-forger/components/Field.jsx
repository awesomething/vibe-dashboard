import React from 'react';

export function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="text-xs font-600 uppercase tracking-wide text-[#4A4C46]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border border-[#B4B6AF] bg-[#E6E7E4] px-3 py-2.5 text-sm text-[#202020] focus:border-[#C9541F] focus:outline-none"
      />
    </div>
  );
}
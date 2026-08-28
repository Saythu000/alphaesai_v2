"use client";

import React from "react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: "text" | "textarea" | "mono";
  rows?: number;
  placeholder?: string;
  className?: string;
  hint?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  rows = 3,
  placeholder,
  className = "",
  hint,
}) => {
  return (
    <div className={className}>
      <label className="block text-xs font-bold text-[#564336] uppercase mb-1">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          rows={rows}
          value={value || ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900] transition-colors"
        />
      ) : (
        <input
          type="text"
          value={value || ""}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-[#ddc1b0] rounded-xl p-3 text-sm focus:outline-none focus:border-[#964900] transition-colors ${
            type === "mono" ? "font-mono" : ""
          }`}
        />
      )}
      {hint && <p className="text-[10px] text-[#564336]/70 mt-1">{hint}</p>}
    </div>
  );
};

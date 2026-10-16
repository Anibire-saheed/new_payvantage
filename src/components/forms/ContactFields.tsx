"use client";

import type { ChangeEventHandler } from "react";

const fields=[
  { name: "name",label: "Full Name",type: "text",placeholder: "Enter your full name" },
  { name: "email",label: "Email",type: "email",placeholder: "name@example.com" },
  { name: "phoneNumber",label: "Phone Number",type: "tel",placeholder: "Enter your phone number" },
] as const;
type FieldName=typeof fields[number]["name"];

export default function ContactFields({ values,touched,errors,onChange,onBlur }: {
  values: Record<FieldName,string>;
  touched: Partial<Record<FieldName,boolean>>;
  errors: Partial<Record<FieldName,string>>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: (field: FieldName) => void;
}) {
  return fields.map(({ name,label,type,placeholder }) => {
    const error=touched[name]&&errors[name];
    return (
      <div key={name}>
        <label htmlFor={name} className="block text-sm font-bold text-gray-700 mb-2">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type={type} id={name} name={name} value={values[name]}
          onChange={onChange} onBlur={() => onBlur(name)} placeholder={placeholder}
          aria-invalid={Boolean(error)} aria-describedby={error? `${name}-error`:undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 text-sm outline-none transition-all ${error
            ? "border-red-500 bg-red-50/20 focus:ring-2 focus:ring-red-500"
            :"border-gray-300 focus:ring-2 focus:ring-[#5153A0] focus:border-transparent"}`}
        />
        {error&&<p id={`${name}-error`} className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><span>⚠</span> {error}</p>}
      </div>
    );
  });
}

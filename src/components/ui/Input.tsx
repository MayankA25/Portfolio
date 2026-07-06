import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  isError,
  error,
}: {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  error?: string[];
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={isError ? error?.join(" , ") : placeholder}
      onChange={onChange}
      className={`rounded-lg bg-neutral-800 px-3 py-3 font-semibold outline-0 transition-all duration-200 focus:bg-neutral-950 ${isError && "border border-red-400 placeholder:text-red-400"}`}
    />
  );
}

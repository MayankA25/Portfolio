import React from "react";

export default function TextArea({
  name,
  placeholder,
  value,
  onChange,
  isError,
  error,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError: boolean;
  error?: string[];
}) {
  return (
    <textarea
      name={name}
      placeholder={isError ? error?.join(" , ") : placeholder}
      value={value}
      onChange={onChange}
      rows={8}
      className={`resize-none rounded-xl bg-neutral-800 px-3 py-3 font-semibold outline-0 focus:bg-neutral-950 ${isError && "border border-red-400 placeholder:text-red-400"}`}
    ></textarea>
  );
}

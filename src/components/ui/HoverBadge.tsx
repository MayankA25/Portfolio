import React from "react";

export default function HoverBadge({
  condition,
  text,
}: {
  condition: boolean;
  text: string;
}) {
  return (
    <div
      className={`absolute -top-9.5 rounded bg-linear-to-br from-neutral-800 via-neutral-900 to-neutral-900 px-3 transition-all duration-200 ${condition ? "opacity-100" : "opacity-0"} text-sm text-neutral-200`}
    >
      <p className="font-bold">{text}</p>
    </div>
  );
}

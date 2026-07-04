import React from "react";

export default function Badge({ text }: { text: string }) {
  return (
    <div className="flex cursor-default items-center justify-center gap-2 rounded-lg border-2 border-neutral-700 bg-neutral-900 px-4 py-1 transition-all duration-200 hover:scale-104 hover:bg-neutral-800">
      <span className="rounded-full bg-neutral-500 p-0.75"></span>
      <span className="text-xs font-bold">{text}</span>
    </div>
  );
}

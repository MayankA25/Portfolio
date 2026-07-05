import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="duartion-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-300 p-2 font-bold text-black transition-all hover:bg-neutral-700 hover:text-neutral-300">
      {children}
    </button>
  );
}

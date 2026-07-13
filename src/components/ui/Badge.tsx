import React from "react";

export default function Badge({ text, circleClassName, textClassName }: { text: string, circleClassName: string, textClassName: string }) {
  return (
    <div className="flex cursor-default items-center justify-center gap-2 rounded-lg border-2 border-neutral-700 dark:bg-neutral-900 px-4 py-1 transition-all duration-200 hover:scale-104 dark:hover:bg-neutral-800 dark:hover:text-white">
      <span className={`rounded-full bg-neutral-500 p-0.75 ${circleClassName}`}></span>
      <span className={`${textClassName} font-bold`}>{text}</span>
    </div>
  );
}

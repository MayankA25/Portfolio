"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ScrollTracker() {
  const [scrolledHeight, setScrolledHeight] = useState(0);

  const handleScroll = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = window.scrollY;

      const percentage = (scrolled / totalScrollable) * 100;

      console.log("Scrolled:", scrolled);
    console.log("Total Scrollable:", totalScrollable);
    console.log("Progress:", percentage);

      setScrolledHeight(Math.round(percentage));
    }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolledHeight]);

  return (
    <div className={`${scrolledHeight <= 0 && "hidden"} fixed right-10 bottom-10 z-20 flex items-center justify-center overflow-hidden rounded-full bg-neutral-50 dark:bg-neutral-950 lg:p-3 md:p-2 p-1 cursor-pointer`} onClick={()=>{
        document.getElementById("top")?.scrollIntoView();
    }}>
      <ArrowUp className="z-40 dark:text-neutral-950 text-neutral-50 size-5 md:size-7" strokeWidth={3} />
      <div
        className={`absolute bottom-0 flex h-full w-full items-center bg-neutral-900 dark:bg-neutral-300 transition-all duration-200`}
        style={{ transform: `scaleY(${scrolledHeight / 100})` }}
      ></div>
    </div>
  );
}

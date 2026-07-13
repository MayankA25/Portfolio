"use client";
import React, { useState } from "react";
import HoverBadge from "./HoverBadge";

export default function HyperLinkTitle({
  href,
  children,
  hoverText,
  startMonth,
  endMonth,
}: {
  href: string;
  children: React.ReactNode;
  hoverText: string;
  startMonth?: string;
  endMonth?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <h1 className="relative flex flex-col font-extrabold">
      <span className="flex flex-wrap items-center gap-2">
        <a
          href={href}
          target="_blank"
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
          className={`cursor-pointer text-xl md:text-2xl transition-all duration-200 ${hover ? "dark:text-white underline" : ""}`}
        >
          {children}{" "}
        </a>{" "}
        {startMonth && endMonth && <span className="text-md md:text-lg font-bold">
          ( {startMonth} - {endMonth} )
        </span>}
      </span>
      <HoverBadge condition={hover} text={hoverText} />
    </h1>
  );
}

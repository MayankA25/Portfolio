"use client";
// import { techStackIcons } from "@/utils/techStack";
import React, { JSX, useState } from "react";
import HoverBadge from "../ui/HoverBadge";

interface stackType{
  icon: JSX.Element,
  name: string
}

export default function TechStack({ stack }: { stack: stackType[] }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-3xl font-bold text-neutral-300">Tech Stack</h1>
      <div className="flex flex-wrap gap-25 justify-center gap-y-8 px-2">
        {stack.map((techStackIcon, index) => {
          return (
            <span key={index} className="relative flex justify-center">
              <i
                onMouseOver={() => setHoverIndex(index)}
                onMouseOut={() => {
                  setHoverIndex(-1);
                }}
              >
                {techStackIcon.icon}
              </i>
              {
                <HoverBadge
                  condition={hoverIndex != -1 && hoverIndex == index}
                  text={techStackIcon.name}
                />
              }
            </span>
          );
        })}
      </div>
    </div>
  );
}

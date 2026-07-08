"use client";
import { techStackIcons } from "@/utils/techStack";
import React, { useState } from "react";
import HoverBadge from "../ui/HoverBadge";

export default function TechStack() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-3xl font-bold text-neutral-300">Tech Stack</h1>
      <div className="grid grid-cols-10 gap-y-8 px-2">
        {techStackIcons.map((techStackIcon, index) => {
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

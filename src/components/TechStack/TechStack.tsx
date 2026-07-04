"use client";
import { techStackIcons } from "@/utils/techStack";
import React, { useState } from "react";

export default function TechStack() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  // const techStackIcons = [
  //     {
  //         icon: <FaReact className='size-10 text-cyan-400 hover:scale-108 transition-all duration-200'/>,
  //         name: "React"

  //     },
  //     {
  //          icon: <FaNodeJs className='size-10 text-green-300 hover:scale-108 transition-all duration-200'/>,
  //         name: "NodeJS"
  //     }
  // ]
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
                <div
                  className={`absolute -top-9.5 rounded bg-linear-to-br from-neutral-800 via-neutral-900 to-neutral-900 px-3 transition-all duration-200 ${hoverIndex != -1 && hoverIndex == index ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="font-bold">{techStackIcon.name}</p>
                </div>
              }
            </span>
          );
        })}
      </div>
    </div>
  );
}

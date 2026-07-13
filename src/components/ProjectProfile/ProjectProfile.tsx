"use client";
import React, { useState } from "react";
import HoverBadge from "../ui/HoverBadge";

interface LinkType {
    name: string;
    link: string;
    icon: React.ReactNode
}

export default function ProjectProfile({ projectLinks }: { projectLinks: LinkType[] }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="flex items-center justify-center gap-4">
      {projectLinks.map((projectLink, index) => {
        return (
          <a href={projectLink.link} target="_blank" key={index} className="relative flex justify-center  hover:text-white transition-all duration-200">
            <i
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => {
                setHoverIndex(-1);
              }}
            >
              {projectLink.icon}
            </i>
            {
              <HoverBadge
                condition={hoverIndex != -1 && hoverIndex == index}
                text={projectLink.name}
              />
            }
          </a>
        );
      })}
    </div>
  );
}

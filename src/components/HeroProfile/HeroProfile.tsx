"use client";
import { profiles } from "@/utils/hero";
import React, { useState } from "react";
import HoverBadge from "../ui/HoverBadge";

export default function HeroProfile() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="flex items-center justify-center gap-3">
      {profiles.map((profile, index) => {
        return (
          <a href={profile.link} target="_blank" key={index} className="relative flex justify-center">
            <i
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => {
                setHoverIndex(-1);
              }}
            >
              {profile.icon}
            </i>
            {
              <HoverBadge
                condition={hoverIndex != -1 && hoverIndex == index}
                text={profile.name}
              />
            }
          </a>
        );
      })}
    </div>
  );
}

import { workExperience } from "@/utils/workExperience";
import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <h1 className="text-3xl font-extrabold text-neutral-300">
        Work Experience
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {workExperience.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              experience={experience}
            ></ExperienceCard>
          );
        })}
      </div>
    </div>
  );
}

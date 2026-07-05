"use client";
import Image from "next/image";
import React, { useState } from "react";
import Badge from "./Badge";
import HoverBadge from "./HoverBadge";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

interface Experience {
  companyName: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  current: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyLogo: string;
  companyWebsite: string;
  projects: {
    name: string;
    link: string;
  }[];
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [hover, setHover] = useState(false);
  const [projectHover, setProjectHover] = useState(-1);

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-neutral-900 p-4 text-neutral-300">
      <div className="flex items-center gap-4">
        <a
          href={experience.companyWebsite}
          target="_blank"
          className="relative flex size-20 items-center justify-center rounded-lg bg-neutral-800"
        >
          <Image
            src={experience.companyLogo}
            alt=""
            fill
            className="object-contain p-2"
          />
        </a>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="relative flex flex-col font-extrabold">
            <span className="flex items-center gap-2">
              <a
                href={experience.companyWebsite}
                target="_blank"
                onMouseOver={() => {
                  setHover(true);
                }}
                onMouseOut={() => {
                  setHover(false);
                }}
                className={`cursor-pointer text-2xl transition-all duration-200 ${hover ? "text-white underline" : ""}`}
              >
                {experience.companyName}{" "}
              </a>{" "}
              <span className="text-lg font-bold">
                ( {experience.startDate.split(" ")[0]} -{" "}
                {experience.endDate.split(" ")[0]} )
              </span>
            </span>
            <span className="text-sm">{experience.duration}</span>
            <HoverBadge condition={hover} text="Visit Website" />
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <Badge text={experience.location} />
            <Badge text={experience.type} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-white">
          {experience.description}
        </span>
        <ul className="my-3 list-disc px-4">
          {experience.responsibilities.map((responsibility, index) => {
            return (
              <li key={index} className="my-1 font-semibold">
                {responsibility}
              </li>
            );
          })}
        </ul>
        <div className="grid grid-cols-4 gap-3">
          {experience.technologies.map((tech, index) => {
            return <Badge key={index} text={tech} />;
          })}
        </div>
      </div>
      <div className="my-4 flex gap-3">
        <h1 className="text-lg font-extrabold">Projects: </h1>
        <div className="flex items-center gap-2">
          {experience.projects.map((project, index) => {
            return (
              <a
                href={project.link}
                target="_blank"
                key={index}
                className="relative py-1"
              >
                <span
                  className={`text-md cursor-pointer font-bold ${projectHover == index && "text-white underline"}`}
                  onMouseOver={() => {
                    setProjectHover(index);
                  }}
                  onMouseOut={() => {
                    setProjectHover(-1);
                  }}
                >
                  {project.name}{" "}
                  {index != experience.projects.length - 1 && ","}
                </span>
                <HoverBadge
                  condition={projectHover == index}
                  text={project.name}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button>
          <span>Certificate</span>
          <i>
            <ArrowUpRight />
          </i>
        </Button>
        <Button>
          <span>LOR</span>
          <i>
            <ArrowUpRight />
          </i>
        </Button>
      </div>
    </div>
  );
}

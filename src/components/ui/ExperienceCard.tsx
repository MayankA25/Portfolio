"use client";
import Image from "next/image";
import React, { useState } from "react";
import Badge from "./Badge";
import HoverBadge from "./HoverBadge";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import HyperLinkTitle from "./HyperLinkTitle";

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
  certificateLink: string;
  lorLink: string;
}

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {

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
          
            <HyperLinkTitle href={experience.companyWebsite} hoverText={"Visit Website"} startMonth={experience.startDate.split(" ")[0]} endMonth={ experience.endDate.split(" ")[0] } >
              <span>{ experience.companyName }</span>
            </HyperLinkTitle>
            <span className="text-sm">{experience.duration}</span>
           
          <div className="grid grid-cols-2 gap-2">
            <Badge text={experience.location} circleClassName="p-0.75" textClassName="text-xs" />
            <Badge text={experience.type} circleClassName="0.75" textClassName="text-xs"/>
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
            return <Badge key={index} text={tech} circleClassName="0.75" textClassName="text-xs" />;
          })}
        </div>
      </div>
      <div className="mt-4 flex gap-3">
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
      <div className="mb-4 flex items-center">
        <h1 className="text-lg font-extrabold">
          Role: <span className="font-semibold">{experience.role}</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Link href={experience.certificateLink} target="_blank">
          <Button>
            <span>Certificate</span>
            <i>
              <ArrowUpRight />
            </i>
          </Button>
        </Link>
        <Link href={experience.lorLink} target="_blank">
          <Button>
            <span>LOR</span>
            <i>
              <ArrowUpRight />
            </i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

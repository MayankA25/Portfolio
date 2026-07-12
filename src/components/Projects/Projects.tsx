"use client";
import { projects } from "@/utils/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { links } from "@/utils/projectLinks";
import HoverBadge from "../ui/HoverBadge";
import Button from "../ui/Button";
import Stack from "../ui/Stack";
import Link from "next/link";

export default function Projects() {
  const [coverImageHover, setCoverImageHover] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-extrabold text-neutral-300">Projects</h1>
      <div className="flex flex-col justify-center gap-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex items-center rounded-xl bg-neutral-900 p-5"
            >
              <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
                <div className="relative flex h-[30vh] w-full items-center justify-center overflow-hidden rounded-xl lg:w-[50%]">
                  <Image
                    src={project.coverImg}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-contain transition-all duration-200 ${coverImageHover != -1 && coverImageHover == index && "scale-103"}`}
                    loading="eager"
                  ></Image>
                  <div
                    onMouseOver={() => {
                      setCoverImageHover(index);
                    }}
                    onMouseOut={() => {
                      setCoverImageHover(-1);
                    }}
                    className={`absolute top-0 h-full w-full ${coverImageHover != -1 && coverImageHover == index ? "bg-radial from-transparent to-black backdrop-blur-xs" : "bg-linear-to-r from-black/20 to-black/20"} flex cursor-pointer items-center justify-center transition-all duration-300 ${!project.completed && "backdrop-grayscale-100"}`}
                  >
                    <div
                      className={`absolute ${coverImageHover != -1 && coverImageHover == index ? "bottom-0" : "-bottom-10"} h-12 w-full rounded-t-4xl bg-black px-6 py-3 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4 text-neutral-400">
                        {/* {project.completed && (
                          <SiGithub className="size-5 transition-all duration-200 hover:text-neutral-100" />
                        )}
                        {project.completed && (
                          <Link2 className="size-5 transition-all duration-200 hover:text-neutral-100" />
                        )} */}
                        {project.completed &&
                          links.map((link, linkIndex) => {
                            return (
                              <span
                                key={linkIndex}
                                className="relative flex justify-center"
                              >
                                <i
                                  onMouseOver={() => setHoverIndex(linkIndex)}
                                  onMouseOut={() => {
                                    setHoverIndex(-1);
                                  }}
                                >
                                  {link.icon}
                                </i>
                                {
                                  <HoverBadge
                                    condition={
                                      coverImageHover == index &&
                                      linkIndex == hoverIndex
                                    }
                                    text={link.name}
                                  />
                                }
                              </span>
                            );
                          })}
                        {!project.completed && (
                          <span className="font-bold text-neutral-300">
                            Upcoming...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 lg:w-[50%]">
                  <div className="fle items-center gap-7">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-2xl font-bold md:text-3xl">
                        {project.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-3">
                        <div
                          className={`flex items-center justify-center border ${project.completed ? "border-green-400" : "border-yellow-400"} gap-2 rounded-xl bg-green-400/5 px-4 py-1`}
                        >
                          <span
                            className={`rounded-full p-0.75 ${project.completed ? "bg-green-400" : "bg-yellow-400"}`}
                          ></span>
                          <span className="text-xs font-bold text-white">
                            {project.completed
                              ? "Completed"
                              : "Work In Progress"}
                          </span>
                        </div>
                        {project.deployed && (
                          <div className="flex items-center justify-center gap-2 rounded-xl border border-green-400 bg-green-400/5 px-4 py-1">
                            <span className="rounded-full bg-green-400 p-0.75"></span>
                            <span className="text-xs font-bold text-white">
                              Deployed
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-sm font-semibold">{project.description}</p>
                  {/* <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-3">
                      {project.techStack.slice(0, 7).map((tech, index) => {
                        return (
                          <div key={index} className="relative">
                            <Badge text={tech} />
                          </div>
                        );
                      })}
                    </div>
                  </div> */}
                  <Stack
                    techStack={project.techStack
                      .slice(0, 7)
                      .map((stack) => stack.name as string)}
                    className="flex flex-wrap justify-center gap-3 lg:justify-start"
                    circleClassName="p-0.75"
                    textClassName="text-xs"
                  />
                  {/* <button className="duartion-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-300 p-2 font-bold text-black transition-all hover:bg-neutral-700 hover:text-neutral-300">
                    <span>Details</span>{" "}
                    <span>
                      <ArrowUpRight className="size-5" />
                    </span>
                  </button> */}
                  <Link href={`/projects/${project.title.toLowerCase()}`}>
                    <Button>
                      <span className="text-sm">Details</span>{" "}
                      <span>
                        <ArrowUpRight className=" size-4 md:size-5" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

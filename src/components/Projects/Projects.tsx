"use client";
import { projects } from "@/utils/projects";
import { ArrowUpRight, Link2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import Badge from "../ui/Badge";

export default function Projects() {
  const [coverImageHover, setCoverImageHover] = useState(-1);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-neutral-300">Projects</h1>
      <div className="flex flex-col justify-center gap-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex items-center rounded-xl bg-neutral-900 p-5"
            >
              <div className="flex w-full items-center gap-10">
                <div className="relative flex h-65 w-110 items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src={project.coverImg}
                    alt=""
                    fill
                    sizes="100vw"
                    className={`object-cover transition-all duration-200 ${coverImageHover != -1 && coverImageHover == index && "scale-103"}`}
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
                        {project.completed && (
                          <SiGithub className="size-5 transition-all duration-200 hover:text-neutral-100" />
                        )}
                        {project.completed && (
                          <Link2 className="size-5 transition-all duration-200 hover:text-neutral-100" />
                        )}
                        {!project.completed && (
                          <span className="font-bold text-neutral-300">
                            Upcoming...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[50%] flex-col justify-center gap-4">
                  <div className="flex items-center gap-7">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center border ${project.completed ? "border-green-400" : "border-yellow-400"} gap-2 rounded-xl bg-green-400/5 px-4 py-1`}
                      >
                        <span
                          className={`rounded-full p-1 ${project.completed ? "bg-green-400" : "bg-yellow-400"}`}
                        ></span>
                        <span className="text-sm font-bold text-white">
                          {project.completed ? "Completed" : "Work In Progress"}
                        </span>
                      </div>
                      {project.deployed && (
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-green-400 bg-green-400/5 px-4 py-1">
                          <span className="rounded-full bg-green-400 p-1"></span>
                          <span className="text-sm font-bold text-white">
                            Deployed
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-3">
                      {project.techStack.slice(0, 7).map((tech, index) => {
                        return (
                          <div key={index} className="relative">
                            <Badge text={tech} />
                            {index ==
                              project.techStack.slice(0, 7).length - 1 && (
                              <div className="absolute top-0 -right-12 flex cursor-default items-center rounded-full bg-neutral-900 p-1.5 px-2 text-sm font-bold">
                                +{project.techStack.length - 7}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <button className="duartion-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-300 p-2 font-bold text-black transition-all hover:bg-neutral-700 hover:text-neutral-300">
                    <span>Details</span>{" "}
                    <span>
                      <ArrowUpRight className="size-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

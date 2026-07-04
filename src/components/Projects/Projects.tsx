"use client";
import { projects } from "@/utils/projects";
import {
  ArrowUpRight,
  Link,
  Link2,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
  SquareArrowUpRightIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const [coverImageHover, setCoverImageHover] = useState(-1);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-neutral-300 text-3xl font-bold">Projects</h1>
      <div className="flex flex-col justify-center gap-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex items-center bg-neutral-900 p-5 rounded-xl"
            >
              <div className="flex items-center w-full gap-10">
                <div className="flex items-center justify-center w-110 h-65 relative rounded-xl overflow-hidden">
                  <Image
                    src={project.coverImg}
                    alt=""
                    fill
                    className={`object-cover transition-all duration-200 ${coverImageHover != -1 && coverImageHover == index && "scale-103 "}`}
                  ></Image>
                  <div
                    onMouseOver={() => {
                      setCoverImageHover(index);
                    }}
                    onMouseOut={() => {
                      setCoverImageHover(-1);
                    }}
                    className={`w-full h-full absolute top-0  ${coverImageHover != -1 && coverImageHover == index ? "bg-radial from-transparent to-black backdrop-blur-xs" : " bg-linear-to-r from-black/20 to-black/20"} transition-all duration-300 flex items-center justify-center cursor-pointer ${!project.completed && "backdrop-grayscale-100"}`}
                  >
                    <div
                      className={`absolute ${coverImageHover != -1 && coverImageHover == index ? "bottom-0" : "-bottom-10"} w-full h-12 bg-black rounded-t-4xl transition-all duration-300 py-3 px-6`}
                    >
                      <div className="flex items-center gap-4 text-neutral-400">
                        {project.completed && (
                          <SiGithub className="size-5 hover:text-neutral-100 transition-all duration-200" />
                        )}
                        {project.completed && (
                          <Link2 className="size-5 hover:text-neutral-100 transition-all duration-200" />
                        )}
                        {!project.completed && (
                          <span className="text-neutral-300 font-bold">
                            Upcoming...
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 w-[50%]">
                  <div className="flex items-center gap-7">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center border ${project.completed ? "border-green-400" : "border-yellow-400"} px-4 py-1 rounded-xl gap-2 bg-green-400/5`}>
                            <span className={`p-1 rounded-full ${project.completed ? "bg-green-400" : "bg-yellow-400"}`}></span>
                            <span className="text-sm text-white font-bold">{project.completed ? "Completed" : "Work In Progress"}</span>
                        </div>
                        {project.deployed && <div className="flex items-center justify-center border border-green-400 px-4 py-1 rounded-xl gap-2 bg-green-400/5">
                            <span className="p-1 rounded-full bg-green-400"></span>
                            <span className="text-sm text-white font-bold">Deployed</span>
                        </div>}
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <button className="bg-neutral-300 w-full p-2 rounded-lg text-black font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-neutral-700 hover:text-neutral-300 transition-all duartion-300">
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

"use client";
import { myFont } from "@/app/fonts";
import { projects } from "@/utils/projects";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathName = usePathname();

  console.log("Path Name: ", pathName);

  const splittedPath = pathName.split("/");

  const projectWordIndex = splittedPath.findIndex((word) => word == "projects");

  if (projectWordIndex == splittedPath.length - 2 || pathName == "/") {
    const foundProject = projects.find(
      (project) =>
        project.title.toLowerCase() == splittedPath[splittedPath.length - 1].toLowerCase(),
    );

    if (foundProject || pathName == "/") {
      return (
        <div className="my-40 flex items-center justify-center">
          <h1 className={`${myFont.className} text-3xl md:text-6xl lg:text-8xl text-neutral-800`}>
            {foundProject ? foundProject.title : "Mayank Arora"}
          </h1>
        </div>
      );
    }
  }
}

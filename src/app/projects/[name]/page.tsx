import BulletPointsContent from "@/components/BulletPointsContent/BulletPointsContent";
import Carousel from "@/components/Carousel/Carousel";
import ProjectProfile from "@/components/ProjectProfile/ProjectProfile";
import TechStack from "@/components/TechStack/TechStack";
import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";
import React from "react";

interface LinkType {
  name: string;
  link: string;
  icon: React.ReactNode;
}
export default async function Project({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const { name } = await params;

  const foundProject = projects.find((project) => {
    return project.title.toLowerCase() == name.toLowerCase();
  });

  if(!foundProject) return notFound();

  console.log("Found Project: ", foundProject);

  console.log("Name: ", name);

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4 md:gap-8">
        <h1 className="text-6xl lg:text-7xl font-extrabold">
          {foundProject?.title as string}
        </h1>
        <ProjectProfile projectLinks={foundProject?.links as LinkType[]} />
      </div>
      <div className="my-8 flex flex-col justify-center gap-10 px-1">
        {foundProject?.details.slice(0, 2).map((detail, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-3xl font-bold">{detail.heading}</h1>
              { detail.heading.toLowerCase() == "overview" ? <p className="text-sm md:text-lg">{detail.content}</p> : <BulletPointsContent contents={detail.content as string[]} /> }
            </div>
          );
        })}
      </div>
      {/* <div className="flex items-center my-4 r">
        <Stack
          techStack={foundProject?.techStack as string[]}
          className="flex flex-wrap justify-center gap-x-3 gap-y-4"
          circleClassName="p-1"
          textClassName="text-sm"
        />
      </div> */}
      <TechStack stack={foundProject.techStack} />
      <div className="flex items-center my-10">
        <Carousel images={["/images/hero-image-2.jpg", "/images/hero-image.jpg", "/images/hero-image-2.jpg", "/images/hero-image.jpg"]}/>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-10 px-1">
        {foundProject?.details.slice(2, 4).map((detail, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">{detail.heading}</h1>
              <BulletPointsContent contents={detail.content as string[]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

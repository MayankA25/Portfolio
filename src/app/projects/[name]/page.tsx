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

  if (!foundProject) return notFound();

  console.log("Found Project: ", foundProject);

  console.log("Name: ", name);

  const imagesLength = {
    recruitit: 3,
    ridemate: 20,
    studosphere: 25,
    bulkmailer: 3,
  };

  // type ProjectName = keyof typeof imagesLength;

  // interface Props {
  //   name: ProjectName;
  // }

  const images = Array.from(
    { length: imagesLength[name.toLowerCase() as keyof typeof imagesLength] },
    (_, index) =>{ 
      console.log("Name: ", name.toLowerCase());
      return `/images/Project_Images/${name.toLowerCase()}/${index + 1}.png`},
  );

  console.log("Images: ", images);

  return (
    <div className="flex flex-col py-4">
      <div className="flex items-center gap-4 md:gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold lg:text-7xl">
          {foundProject?.title as string}
        </h1>
        <ProjectProfile projectLinks={foundProject?.links as LinkType[]} />
      </div>
      <div className="my-8 flex flex-col justify-center gap-10 px-1">
        {foundProject?.details.slice(0, 2).map((detail, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-2xl font-extrabold md:text-3xl">
                {detail.heading}
              </h1>
              {detail.heading.toLowerCase() == "overview" ? (
                <p className="text-sm font-bold md:text-lg">{detail.content}</p>
              ) : (
                <BulletPointsContent
                  contents={detail.content as string[]}
                  columnWise={true}
                />
              )}
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
      <div className="my-10 flex items-center">
        <Carousel images={images} />
      </div>
      <div className="my-8 grid grid-cols-1 gap-10 px-1 lg:grid-cols-2">
        {foundProject?.details.slice(2, 4).map((detail, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="text-2xl font-extrabold lg:text-3xl">
                {detail.heading}
              </h1>
              <BulletPointsContent contents={detail.content as string[]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

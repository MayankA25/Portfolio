import React from "react";
import Badge from "./Badge";

export default function Stack({
  techStack,
  className,
  circleClassName,
  textClassName,
}: {
  techStack: string[];
  className: string;
  circleClassName: string;
  textClassName: string;
}) {
  return (
    <div className="flex w-full items-center">
      <div className={`${className}`}>
        {techStack.map((tech, index) => {
          return (
            <div key={index} className="relative">
              <Badge
                text={tech}
                circleClassName={circleClassName}
                textClassName={textClassName}
              />
              {/* {index ==
                                  project.techStack.slice(0, 7).length - 1 && (
                                  <div className="absolute top-0 -right-12 flex cursor-default items-center rounded-full bg-neutral-900 p-1.5 px-2 text-md font-extrabold">
                                    + ...
                                  </div>
                                )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

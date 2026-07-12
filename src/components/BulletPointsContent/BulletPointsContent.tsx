import React from "react";

export default function BulletPointsContent({
  contents,
}: {
  contents: string[];
}) {
  return (
      <ul className="list-disc px-5">
        {contents.map((content, index) => {
          return <li className="font-semibold my-2 lg:my-5 text-sm md:text-md" key={index}>{content}</li>;
        })}
      </ul>
  );
}

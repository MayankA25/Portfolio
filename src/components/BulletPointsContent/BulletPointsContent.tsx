import React from "react";

export default function BulletPointsContent({
  contents,
  columnWise
}: {
  contents: string[];
  columnWise?: boolean
}) {
  return (
      <ul className={`list-disc px-5 ${columnWise && "lg:grid grid-cols-2"}`}>
        {contents.map((content, index) => {
          return <li className="font-semibold my-2 lg:my-5 text-sm md:text-lg" key={index}>{content}</li>;
        })}
      </ul>
  );
}

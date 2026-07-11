import React from "react";

export default function BulletPointsContent({
  contents,
}: {
  contents: string[];
}) {
  return (
      <ul className="list-disc px-5">
        {contents.map((content, index) => {
          return <li className="font-semibold my-5" key={index}>{content}</li>;
        })}
      </ul>
  );
}

import React from "react";

export default function Label({
  labelName,
  htmlFor,
  isError,
}: {
  labelName: string;
  htmlFor: string;
  isError: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`px-1 font-bold ${isError && "text-red-400"}`}
    >
      {labelName}
    </label>
  );
}

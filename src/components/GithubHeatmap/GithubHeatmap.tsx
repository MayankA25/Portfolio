"use client";
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-3xl font-extrabold text-neutral-300">
        Contributions
      </h1>
      <GitHubCalendar
        username="MayankA25"
        blockSize={14}
        blockMargin={10}
        fontSize={12}
        theme={{
          light: [
            "#222222", // No contributions (lighter than pure black)
            "#4a4a4a", // Dark gray
            "#707070", // Medium gray
            "#a0a0a0", // Light gray
            "#f5f5f5", // Almost white
          ],
          dark: ["#222222", "#4a4a4a", "#707070", "#a0a0a0", "#f5f5f5"],
        }}
      ></GitHubCalendar>
    </div>
  );
}

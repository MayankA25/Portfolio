"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubHeatMap() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!mounted) return null;

  // const darkTheme = [
  //   "#161b22",
  //   "#0e4429",
  //   "#006d32",
  //   "#26a641",
  //   "#39d353",
  // ];

  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-3xl font-extrabold">Contributions</h1>
      <div className="flex items-center justify-center">
        <GitHubCalendar
          username="MayankA25"
          blockSize={14}
          blockMargin={9}
          fontSize={12}
          theme={{
            // light: ["#dddddd", "#999999", "#666666", "#444444", "#1a1a1a"],
           light: [
  "#d9d9d9",
  "#b8b8b8",
  "#8c8c8c",
  "#5c5c5c",
  "#1f1f1f",
],
            dark: ["#222222", "#4a4a4a", "#707070", "#a0a0a0", "#f5f5f5"],
          }}
          colorScheme={resolvedTheme == "dark" ? "dark" : "light"}
        ></GitHubCalendar>
      </div>
    </div>
  );
}

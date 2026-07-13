import {
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const techStackIcons = [
  {
    icon: (
      <SiTypescript className="size-7 md:size-9 text-blue-500 transition-all duration-200 hover:scale-110" />
    ),
    name: "TypeScript",
  },
  {
    icon: (
      <SiJavascript className="size-7 md:size-9 text-yellow-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "JavaScript",
  },
  {
    icon: (
      <FaReact className="size-7 md:size-9 text-cyan-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "React",
  },
  {
    icon: (
      <RiNextjsFill className="size-7 md:size-9 text-neutral-900 dark:text-neutral-50 transition-all duration-200 hover:scale-110" />
    ),
    name: "Next.js",
  },
  {
    icon: (
      <FaNodeJs className="size-7 md:size-9 text-green-500 transition-all duration-200 hover:scale-110" />
    ),
    name: "Node.js",
  },
  {
    icon: (
      <SiExpress className="size-7 md:size-9 text-neutral-700 dark:text-neutral-300 transition-all duration-200 hover:scale-110" />
    ),
    name: "Express.js",
  },
  {
    icon: (
      <SiTanstack className="size-7 md:size-9 text-yellow-500 dark:text-yellow-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "TanStack",
  },
  {
    icon: (
      <SiMongodb className="size-7 md:size-9 text-green-700 dark:text-green-500 transition-all duration-200 hover:scale-110" />
    ),
    name: "MongoDB",
  },
  {
    icon: (
      <GrMysql className="size-7 md:size-9 text-sky-700 dark:text-sky-300 transition-all duration-200 hover:scale-110" />
    ),
    name: "MySQL",
  },
  {
    icon: (
      <SiPostgresql className="size-7 md:size-9 text-blue-700 dark:text-blue-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "PostgreSQL",
  },
  {
    icon: (
      <SiTailwindcss className="size-7 md:size-9 text-sky-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "Tailwind",
  },
  {
    icon: (
      <SiPostman className="size-7 md:size-9 text-orange-500 transition-all duration-200 hover:scale-110" />
    ),
    name: "Postman",
  },
  {
    icon: (
      <FaGitAlt className="size-7 md:size-9 text-orange-600 transition-all duration-200 hover:scale-110" />
    ),
    name: "Git",
  },
  {
    icon: (
      <FaGithub className="size-7 md:size-9 text-neutral-900 dark:text-neutral-50 transition-all duration-200 hover:scale-110" />
    ),
    name: "GitHub",
  },
  {
    icon: (
      <SiRedis className="size-7 md:size-9 text-red-500 transition-all duration-200 hover:scale-110" />
    ),
    name: "Redis",
  },
  {
    icon: (
      <SiSocketdotio className="size-7 md:size-9 text-neutral-900 dark:text-neutral-50 transition-all duration-200 hover:scale-110" />
    ),
    name: "Socket.IO",
  },
  {
    icon: (
      <SiVercel className="size-7 md:size-9 text-neutral-900 dark:text-neutral-50 transition-all duration-200 hover:scale-110" />
    ),
    name: "Vercel",
  },
  {
    icon: (
      <SiRender className="size-7 md:size-9 text-purple-500 dark:text-purple-400 transition-all duration-200 hover:scale-110" />
    ),
    name: "Render",
  },
  {
    icon: (
      <SiPython className="size-7 md:size-9 text-blue-500 dark:text-yellow-300 transition-all duration-200 hover:scale-110" />
    ),
    name: "Python",
  },
];

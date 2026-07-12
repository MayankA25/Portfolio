import { ArrowUpRight, Download } from "lucide-react";
import HeroProfile from "../HeroProfile/HeroProfile";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl md:text-7xl font-extrabold">Mayank Arora</h1>
      <p className="mt-4 md:text-xl">
        Backend-focused full-stack developer specializing in building scalable
        APIs, real-time systems, and efficient server-side architectures using
        the MERN stack. I focus on designing robust backend logic, database
        structures, authentication systems, and background job processing.
        Currently improving system design skills and building production-style
        backend applications with Next.js and Node.js.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3 md:gap-5">
        <Link
          href="/docs/resume/resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm md:text-md flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 px-3 md:px-5 font-bold text-black transition-all duration-200 hover:bg-neutral-800 hover:text-white"
        >
          View Resume{" "}
          <span>
            <ArrowUpRight className="size-5" />
          </span>
        </Link>
        <Link
          download={"Mayank_Arora_Resume.pdf"}
          href={"/docs/resume/resume.pdf"}
          rel="noopener noreferrer"
          className="text-sm md:text-md flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 px-3 md:px-5 font-bold text-black transition-all duration-200 hover:bg-neutral-800 hover:text-white"
        >
          Download Resume{" "}
          <span>
            <Download className="size-5" />
          </span>
        </Link>
        <HeroProfile />
      </div>
    </div>
  );
}

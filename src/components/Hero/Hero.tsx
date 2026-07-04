import { Download } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-7xl font-bold">Mayank Arora</h1>
      <p className="mt-4 text-xl">
        Backend-focused full-stack developer specializing in building scalable
        APIs, real-time systems, and efficient server-side architectures using
        the MERN stack. I focus on designing robust backend logic, database
        structures, authentication systems, and background job processing.
        Currently improving system design skills and building production-style
        backend applications with Next.js and Node.js.
      </p>
      <div className="mt-2 flex items-center gap-5">
        <button className="text-md flex cursor-pointer items-center gap-2 rounded-full bg-white p-2 px-5 font-bold text-black transition-all duration-200 hover:bg-neutral-800 hover:text-white">
          Resume{" "}
          <span>
            <Download className="size-5" />
          </span>
        </button>
        <div className="flex items-center justify-center gap-3">
          <FaGithub className="size-6 cursor-pointer text-neutral-400 transition-all duration-200 hover:text-neutral-200" />
          <FaLinkedin className="size-6 cursor-pointer text-neutral-400 transition-all duration-200 hover:text-neutral-200" />
        </div>
      </div>
    </div>
  );
}

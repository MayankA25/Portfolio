import { Download } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-7xl font-bold">Mayank Arora</h1>
      <p className="text-xl mt-4">
        Backend-focused full-stack developer specializing in building scalable
        APIs, real-time systems, and efficient server-side architectures using
        the MERN stack. I focus on designing robust backend logic, database
        structures, authentication systems, and background job processing.
        Currently improving system design skills and building production-style
        backend applications with Next.js and Node.js.
      </p>
      <div className="flex items-center mt-2 gap-5">
        <button className="flex items-center bg-white text-black p-2 px-5 rounded-full font-bold text-md gap-2 hover:bg-neutral-800 hover:text-white cursor-pointer transition-all duration-200">
          Resume{" "}
          <span>
            <Download className="size-5" />
          </span>
        </button>
        <div className="flex items-center justify-center gap-3">
          <FaGithub className="size-6 text-neutral-400 cursor-pointer hover:text-neutral-200 transition-all duration-200" />
          <FaLinkedin className="size-6 text-neutral-400 cursor-pointer hover:text-neutral-200 transition-all duration-200" />
        </div>
      </div>
    </div>
  );
}

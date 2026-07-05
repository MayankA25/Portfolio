import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const profiles = [
  {
    name: "GitHub",
    icon: (
      <FaGithub className="size-6 cursor-pointer text-neutral-400 transition-all duration-200 hover:text-neutral-200" />
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <FaLinkedin className="size-6 cursor-pointer text-neutral-400 transition-all duration-200 hover:text-neutral-200" />
    ),
  },
];

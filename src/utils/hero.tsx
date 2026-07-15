import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const profiles = [
  {
    name: "GitHub",
    icon: (
      <FaGithub className="size-6 cursor-pointer dark:text-neutral-400  text-neutral-700 hover:text-neutral-950 transition-all duration-200 dark:hover:text-neutral-200" />
    ),
    link: "https://github.com/MayankA25"
  },
  {
    name: "LinkedIn",
    icon: (
      <FaLinkedin className="size-6 cursor-pointer dark:text-neutral-400 text-neutral-700 hover:text-neutral-950 transition-all duration-200 dark:hover:text-neutral-200" />
    ),
    link: "https://www.linkedin.com/in/mayank-arora-336256320"
  },
];

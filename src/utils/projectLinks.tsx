import { Link2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

export const links = [
  {
    name: "GitHub",
    icon: (
      <SiGithub className="size-5 transition-all duration-200 hover:text-neutral-950 dark:hover:text-neutral-100" />
    ),
  },
  {
    name: "Demo",
    icon: (
      <Link2 className="size-5 transition-all duration-200 hover:text-neutral-950 dark:hover:text-neutral-100" />
    ),
  },
];

import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import GithubHeatMap from "@/components/GithubHeatmap/GithubHeatmap";
import Hero from "@/components/Hero/Hero";
import HeroImage from "@/components/HeroImage/HeroImage";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import { techStackIcons } from "@/utils/techStack";

export default function Home() {
  return (
    <div className="relative">
      <HeroImage />
      <div className="w-full space-y-20 rounded-t-lg bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-300 transition-colors duration-300">
        <Hero />
        <GithubHeatMap />
        <TechStack stack={techStackIcons} />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

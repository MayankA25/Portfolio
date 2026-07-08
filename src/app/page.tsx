import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import GithubHeatMap from "@/components/GithubHeatmap/GithubHeatmap";
import Hero from "@/components/Hero/Hero";
import HeroImage from "@/components/HeroImage/HeroImage";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <div className="">
      <HeroImage />
      <div className="w-full space-y-20 rounded-t-lg bg-neutral-950">
        <Hero />
        <GithubHeatMap />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

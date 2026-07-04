import GithubHeatMap from "@/components/GithubHeatmap/GithubHeatmap";
import Hero from "@/components/Hero/Hero";
import HeroImage from "@/components/HeroImage/HeroImage";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <div className="w-[70%] m-auto my-8 relative">
      <HeroImage />
      <div className="w-full rounded-t-lg bg-neutral-950 space-y-20">
        <Hero />
        <GithubHeatMap/>
        <TechStack/>
        <Projects/>
      </div>
    </div>
  );
}

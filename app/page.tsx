import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/SkillSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Skills />
      <ProjectSection />
    </div>
  );
}

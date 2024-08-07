import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Skills />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

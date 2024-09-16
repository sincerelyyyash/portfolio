import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8">
        <ProjectSection />
        <Skills />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}


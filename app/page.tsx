import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import { PublicationSection } from "@/components/PublicationSection";
import Skills from "@/components/SkillSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8">
        <WorkSection />
        <Skills />
        <ProjectSection />
        <PublicationSection />
      </div>
      <Footer />
    </div>
  );
}


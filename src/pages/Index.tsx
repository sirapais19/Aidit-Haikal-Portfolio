
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollAnimationObserver from "../components/ScrollAnimationObserver";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "Aidit Haikal | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollAnimationObserver />
    </div>
  );
};

export default Index;

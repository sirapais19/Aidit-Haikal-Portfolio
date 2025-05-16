
import { Button } from "@/components/ui/button";
import ParticleBackground from "../ParticleBackground";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);
  const typingRef = useRef<HTMLSpanElement>(null);
  const phrases = ["AI Developer.", "Java Developer.", "System Builder.", "Problem Solver."];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhrase((current) => (current + 1) % phrases.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentPhrase]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />
      
      <div className="container px-4 mx-auto z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Muhamad Aidit Haikal
          </h1>
          
          <div className="h-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-purple font-medium flex items-center">
              <span>{phrases[currentPhrase]}</span>
              <span className={`ml-1 inline-block w-[3px] h-6 bg-cyan ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8">
            Merging Intelligence, Design, and Code
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white font-medium"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </Button>
            
            <Button
              size="lg" 
              variant="outline"
              className="border-purple text-purple hover:bg-purple/10"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

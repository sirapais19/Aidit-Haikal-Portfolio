
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-1 animate-on-scroll">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-purple/5">
              <img 
                src="/lovable-uploads/eebf8201-e0ae-4402-9c3d-2fe96045897a.png" 
                alt="Muhamad Aidit Haikal" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Detail-oriented Computer Science (Graphics & Multimedia Technology) student passionate about machine learning and system design. Experienced in Java OOP development using NetBeans and AI projects using Python. Seeking internship opportunities while offering freelance system development services.
              </p>
              
              <blockquote className="border-l-4 border-purple pl-4 py-2 italic text-white">
                "I believe in building systems that think and serve."
              </blockquote>
              
              <p className="text-gray-300 leading-relaxed">
                I'm currently in my final year of Bachelor of Computer Science with specialization in Multimedia Software at Universiti Malaysia Pahang AL-Sultan Abdullah. My academic journey has equipped me with strong foundations in software development, particularly in building intelligent systems.
              </p>
              
              <div className="bg-purple/10 border border-purple/20 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-2">Fun Fact</h3>
                <p className="text-gray-300">
                  I also help university students develop academic systems as a freelancer.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Card className="bg-transparent border-white/10 p-4 flex-1 min-w-[200px]">
                  <h4 className="text-cyan font-medium mb-1">Education</h4>
                  <p className="text-white">Bachelor in Computer Science</p>
                </Card>
                
                <Card className="bg-transparent border-white/10 p-4 flex-1 min-w-[200px]">
                  <h4 className="text-cyan font-medium mb-1">Experience</h4>
                  <p className="text-white">Freelance Java Developer</p>
                </Card>
                
                <Card className="bg-transparent border-white/10 p-4 flex-1 min-w-[200px]">
                  <h4 className="text-cyan font-medium mb-1">Projects</h4>
                  <p className="text-white">5+ Academic Systems</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

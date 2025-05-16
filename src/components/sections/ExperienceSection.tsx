
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Freelance Developer</h3>
                  <p className="text-cyan">Java OOP, NetBeans</p>
                </div>
                <span className="text-gray-400 text-sm">2022 - Present</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <p className="text-gray-300">
                  Developed and delivered complete academic system solutions for university students and small businesses.
                </p>
                
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Built 4+ fully functional academic systems</li>
                  <li>Implemented OOP principles for maintainable and scalable code</li>
                  <li>Created intuitive user interfaces with Java Swing</li>
                  <li>Integrated MySQL databases for data persistence</li>
                  <li>Provided documentation and user training</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="skill-badge">Java</span>
                <span className="skill-badge">OOP</span>
                <span className="skill-badge">NetBeans</span>
                <span className="skill-badge">MySQL</span>
                <span className="skill-badge">UI Design</span>
              </div>
            </div>
          </Card>
          
          <Card className="border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Academic Developer</h3>
                  <p className="text-cyan">University Projects</p>
                </div>
                <span className="text-gray-400 text-sm">2021 - Present</span>
              </div>
              
              <div className="space-y-3 flex-grow">
                <p className="text-gray-300">
                  Developed various academic projects as part of university coursework, focusing on AI, web systems, and mobile applications.
                </p>
                
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Created AI models for object detection and classification</li>
                  <li>Developed responsive web applications with modern frameworks</li>
                  <li>Built mobile applications for Android platform</li>
                  <li>Collaborated in team projects using version control systems</li>
                  <li>Presented technical solutions to faculty and peers</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">TensorFlow</span>
                <span className="skill-badge">Web Dev</span>
                <span className="skill-badge">Mobile Dev</span>
                <span className="skill-badge">Git</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


import { Card } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-black/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-8 mt-12">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple/80 to-purple/20"></div>
            
            <Card className="ml-10 border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll">
              <div className="absolute -left-3 top-7 w-6 h-6 rounded-full bg-purple"></div>
              
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Universiti Malaysia Pahang AL-Sultan Abdullah</h3>
                  <span className="text-cyan font-medium">2021–Present</span>
                </div>
                <p className="text-lg text-white/80 mb-3">Bachelor of Computer Science (Multimedia Software)</p>
                <div className="space-y-1 text-gray-300">
                  <p>• Specialized in graphics and multimedia technology</p>
                  <p>• Developed various academic projects using Java, Python and web technologies</p>
                  <p>• Focused on artificial intelligence and machine learning applications</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">AI/ML</span>
                  <span className="tech-badge">Multimedia</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple/80 to-purple/20"></div>
            
            <Card className="ml-10 border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="absolute -left-3 top-7 w-6 h-6 rounded-full bg-purple"></div>
              
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Kolej Matrikulasi Negeri Sembilan</h3>
                  <span className="text-cyan font-medium">2020–2021</span>
                </div>
                <p className="text-lg text-white/80 mb-3">Computer Science</p>
                <div className="space-y-1 text-gray-300">
                  <p>• Foundation in computer science and mathematics</p>
                  <p>• Introduction to programming concepts and algorithms</p>
                  <p>• Developed analytical and problem-solving skills</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tech-badge">Computer Science</span>
                  <span className="tech-badge">Mathematics</span>
                  <span className="tech-badge">Programming</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll">
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">NVIDIA Jetson Nano – Certificate of Competency</h4>
                <p className="text-gray-300 mb-3">AI Development</p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm text-gray-400">Skills acquired: AI model training, optimization, and deployment on edge devices</p>
                </div>
              </div>
            </Card>
            
            <Card className="border-white/10 bg-white/5 backdrop-blur hover-card animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">NVIDIA Jetson Nano – Certificate of Competency</h4>
                <p className="text-gray-300 mb-3">Building Video AI Applications</p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-sm text-gray-400">Skills acquired: Computer vision, real-time video processing, and AI implementation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

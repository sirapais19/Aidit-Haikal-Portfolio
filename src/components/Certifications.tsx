
import { Button } from "@/components/ui/button";
import { FileText, Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Getting Started with AI on Jetson Nano",
      issuer: "NVIDIA",
      link: "/lovable-uploads/file-H5s9oXFQoEm6oxokM5DTsr"
    },
    {
      title: "Building Video AI Applications at the Edge",
      issuer: "NVIDIA", 
      link: "/lovable-uploads/file-GajeGs6iLJPwRQdwYXuyp2"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      link: "/lovable-uploads/file-23x1A4xGVE4EVqd77EpAfe"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in emerging technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4 text-center">
                    {cert.issuer}
                  </p>
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    📄 View Certificate
                    <FileText className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              MUHAMAD AIDIT HAIKAL
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-cyan-300 animate-slide-in-left">
              BIN ZAINUDDIN
            </h2>
            <p className="text-xl md:text-2xl text-blue-300 font-medium animate-slide-in-right">
              UI/UX Designer & Developer | Passionate About AI, Mobile Apps & Digital Experiences
            </p>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up">
              Final-year Computer Science student with strong hands-on experience in UI/UX, 
              software development, and AI. Currently interning at Netgeometry.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in">
            <a 
              href="/Aidit_RESUME.pdf" 
              download 
              className="group flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              ⬇️ Download Resume
            </a>

            <a 
              href="#projects"
              className="group flex items-center justify-center rounded-md border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 backdrop-blur-sm"
            >
              🚀 View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl backdrop-blur-sm">
              <img 
                src="/lovable-uploads/fdffec14-33cc-47d8-9106-4698a19da0c5.png" 
                alt="Muhamad Aidit Haikal" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

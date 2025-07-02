
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "VegeScale with AI (FYP)",
      description: "AI-powered vegetable scale with camera, object recognition, auto label printing",
      tags: ["Machine Learning", "Python", "Computer Vision"],
      link: "https://github.com/sirapais19/vegeScale.git",
      featured: true
    },
    {
      title: "Food Ordering System (Freelance)",
      description: "Java-based food ordering platform with menu, cart, and payment features",
      tags: ["Java", "OOP", "NetBeans"],
      link: "https://github.com/sirapais19/Food-Ordering-System.git"
    },
    {
      title: "Library Management System (Freelance)",
      description: "Desktop app for managing book loans, members, and returns",
      tags: ["Java", "OOP", "NetBeans"],
      link: "https://github.com/sirapais19/Food-Ordering-System.git"
    },
    {
      title: "Delivery System For Pet (Freelance)",
      description: "Java application for pet delivery service with location, customer tracking",
      tags: ["Java", "OOP", "NetBeans"],
      link: "https://github.com/sirapais19/Delivery-system-for-pet.git"
    },
    {
      title: "Car Rental System (Freelance)",
      description: "Car rental booking and management system with UI built in Java",
      tags: ["Java", "OOP", "NetBeans"],
      link: "https://github.com/sirapais19/Car-Rental.git"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A showcase of my development work, from AI-powered applications to enterprise systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${project.featured ? 'md:col-span-2 lg:col-span-1 border-cyan-400/50' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl"></div>
              
              {project.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-bounce">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 px-3 py-1 rounded-full text-sm font-medium text-cyan-300 hover:border-cyan-400/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    🔗 View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

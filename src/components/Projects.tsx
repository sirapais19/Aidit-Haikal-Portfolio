
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my development work, from AI-powered applications to enterprise systems
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${project.featured ? 'from-blue-50 to-purple-50' : 'from-gray-50 to-blue-50'} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Featured Project
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

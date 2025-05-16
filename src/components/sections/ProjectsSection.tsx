
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  delay?: string;
}

const ProjectCard = ({ title, description, tech, github, image, delay = "0s" }: ProjectCardProps) => (
  <Card className="border-white/10 bg-white/5 backdrop-blur overflow-hidden flex flex-col hover-card animate-on-scroll" style={{ animationDelay: delay }}>
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    
    <CardHeader>
      <CardTitle className="text-xl text-white">{title}</CardTitle>
      <CardDescription className="text-gray-300">{description}</CardDescription>
    </CardHeader>
    
    <CardContent className="flex-grow">
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <Badge key={index} variant="outline" className="bg-purple/10 text-purple border-purple/20">
            {item}
          </Badge>
        ))}
      </div>
    </CardContent>
    
    <CardFooter>
      <Button 
        variant="outline" 
        className="w-full border-purple text-purple hover:bg-purple/10 flex items-center gap-2"
        asChild
      >
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span>View on GitHub</span>
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "🍔 Food Ordering System",
      description: "A Java-based system to manage food menu, ordering, and billing for campus use.",
      tech: ["Java (OOP)", "NetBeans", "MySQL"],
      github: "https://github.com/sirapais19/Food-Ordering-System",
      image: "/lovable-uploads/f336a3de-1980-40fc-a25e-e3831068bcd5.png"
    },
    {
      title: "📚 Library Management System",
      description: "A desktop system for managing student book loans, returns, and fine automation.",
      tech: ["Java (OOP)", "NetBeans", "MySQL"],
      github: "https://github.com/sirapais19/LibraryManagementSystem",
      image: "/lovable-uploads/5f3343fb-5201-4f42-a637-540c4c6fa268.png"
    },
    {
      title: "🚗 Car Rental System",
      description: "Rental platform with vehicle availability, bookings, and admin dashboard.",
      tech: ["Java (OOP)", "NetBeans", "MySQL"],
      github: "https://github.com/sirapais19/Car-Rental",
      image: "/lovable-uploads/e3794167-a833-486c-9553-32595717dd4d.png"
    },
    {
      title: "🐾 Delivery System for Pet",
      description: "Order and delivery system tailored for pet services.",
      tech: ["Java (OOP)", "NetBeans", "MySQL"],
      github: "https://github.com/sirapais19/Delivery-system-for-pet",
      image: "/lovable-uploads/b1536a0c-7842-4639-8695-5829f41c006c.png"
    },
    {
      title: "🥬 VegeScale with AI",
      description: "Smart AI vegetable scale using camera for object detection and weight-based labeling.",
      tech: ["Python", "OpenCV", "PyTorch", "TensorFlow", "MySQL"],
      github: "https://github.com/0xSofea/vegeScale",
      image: "/lovable-uploads/f336a3de-1980-40fc-a25e-e3831068bcd5.png"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              image={project.image}
              delay={`${0.1 * index}s`}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white font-medium">
            <a href="https://github.com/sirapais19" target="_blank" rel="noopener noreferrer">
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

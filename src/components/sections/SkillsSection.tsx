
import { Card } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: string;
}

const SkillCategory = ({ title, skills, delay = "0s" }: SkillCategoryProps) => (
  <Card className="border-white/10 bg-white/5 backdrop-blur p-6 hover-card animate-on-scroll" style={{ animationDelay: delay }}>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">{skill}</span>
      ))}
    </div>
  </Card>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <SkillCategory
            title="Programming Languages"
            skills={["Java", "Python", "C++", "C#", "HTML", "CSS", "PHP"]}
          />
          
          <SkillCategory
            title="Frameworks & Libraries"
            skills={["TensorFlow", "PyTorch", "OpenCV", "Laravel", "Flutter", "Firebase"]}
            delay="0.1s"
          />
          
          <SkillCategory
            title="Tools & Technologies"
            skills={["Git", "MySQL", "Firebase", "SAP Fiori", "NetBeans", "Maven"]}
            delay="0.2s"
          />
          
          <SkillCategory
            title="Game Development"
            skills={["Unity", "Unreal Engine", "Game Design", "3D Modeling", "Animation"]}
            delay="0.3s"
          />
          
          <SkillCategory
            title="AI & Data"
            skills={["Machine Learning", "Computer Vision", "Data Analysis", "Neural Networks", "NLP"]}
            delay="0.4s"
          />
          
          <SkillCategory
            title="Languages"
            skills={["Malay (Native)", "English (Fluent)"]}
            delay="0.5s"
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6">
          <h3 className="text-2xl font-bold text-white mb-4">Technologies I Work With</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: "Git", src: "/lovable-uploads/30016c75-9f2b-4109-94ca-3d9e754678db.png" },
              { name: "Firebase", src: "/lovable-uploads/cbed182c-0d6e-4afd-acc0-00a562b3be37.png" },
              { name: "MySQL", src: "/lovable-uploads/cd660023-4f24-4f6c-9fc7-bfb70a721ce0.png" },
              { name: "NetBeans", src: "/lovable-uploads/1e49daed-d317-4ec7-a84e-14369ea14c60.png" },
              { name: "Unity", src: "/lovable-uploads/2c8993e9-63c2-416e-9ee1-4f836de31abd.png" },
              { name: "SAP S/4HANA", src: "/lovable-uploads/8739095e-234c-468c-846c-516e75399eec.png" },
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 flex justify-center items-center animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
                <img 
                  src={tech.src} 
                  alt={tech.name} 
                  className="h-12 md:h-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

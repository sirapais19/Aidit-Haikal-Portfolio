
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "HTML", "CSS", "PHP"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["TensorFlow", "PyTorch", "OpenCV"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Game Development",
      skills: ["Unity", "Unreal Engine"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "UI/UX Tools",
      skills: ["Figma", "Canva", "Adobe XD"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Firebase", "Git"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "ERP Systems",
      skills: ["SAP Fiori", "S/4HANA"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Languages",
      skills: ["English", "Malay"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gradient-to-r from-gray-50 to-blue-50 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

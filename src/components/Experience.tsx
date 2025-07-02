
export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                UI/UX Designer
              </h3>
              <p className="text-lg text-blue-600 font-semibold">
                Netgeometry
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-lg font-semibold text-gray-700">March 2025 – Present</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities:</h4>
            <ul className="space-y-3">
              {[
                "Designed CMS NADI and DLKS applications with focus on user experience",
                "Created comprehensive UI mockups using Figma & Canva",
                "Conducted user research and participated in stakeholder meetings",
                "Applied accessible, system-based web and mobile design principles"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

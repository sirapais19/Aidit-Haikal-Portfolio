
export const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bachelor of Computer Science (Multimedia Software)
              </h3>
              <p className="text-lg text-blue-600 font-semibold">
                Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-lg font-semibold text-gray-700">2021 – Present</p>
              <p className="text-lg text-green-600 font-bold">CGPA: 3.00</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Relevant Courses:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Computer Graphics", "Games Development", "Virtual Reality", 
                "3D Modelling", "Web Engineering", "Artificial Intelligence", 
                "Cloud Computing"
              ].map((course, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

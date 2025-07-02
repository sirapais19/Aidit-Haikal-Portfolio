
export const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-purple-600/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 animate-pulse"></div>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Computer Science (Multimedia Software)
              </h3>
              <p className="text-lg text-cyan-400 font-semibold">
                Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)
              </p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-lg font-semibold text-blue-200">2021 – Present</p>
              <p className="text-lg text-green-400 font-bold">CGPA: 3.00</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">Relevant Courses:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Computer Graphics", "Games Development", "Virtual Reality", 
                "3D Modelling", "Web Engineering", "Artificial Intelligence", 
                "Cloud Computing"
              ].map((course, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 px-4 py-2 rounded-lg text-sm font-medium text-cyan-300 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105"
                >
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


export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/10 rounded-full animate-ping"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 animate-pulse"></div>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2">
          <p className="text-xl text-blue-200 leading-relaxed text-center">
            Motivated final-year student specializing in multimedia software, with a passion for 
            user-centric digital solutions and AI. I combine technical expertise with creative 
            design thinking to build meaningful digital experiences that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

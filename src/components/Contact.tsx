
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a 
                  href="mailto:aidithaikal52@gmail.com" 
                  className="text-gray-200 hover:text-blue-300 transition-colors duration-200"
                >
                  aidithaikal52@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-3">📱</span>
                <span className="text-gray-200">+6013 3694584</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Online Presence</h3>
            <div className="space-y-4">
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-gray-200 hover:text-blue-300 hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              >
                <a 
                  href="https://www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                className="w-full justify-start text-gray-200 hover:text-blue-300 hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              >
                <a 
                  href="https://aidit-portfolio.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-3" />
                  Portfolio Website
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6">
              Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:aidithaikal52@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-blue-800 text-center">
        <p className="text-blue-300">
          © 2025 Muhamad Aidit Haikal Bin Zainuddin. Built with passion and modern web technologies.
        </p>
      </div>
    </section>
  );
};

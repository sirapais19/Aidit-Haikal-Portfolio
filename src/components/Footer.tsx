
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-white/5 mt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"><span className="text-purple">A</span>idit <span className="text-cyan">H</span>aikal</h3>
            <p className="text-gray-400 mb-4">AI Developer & Freelance System Builder</p>
            <p className="text-gray-400">Merging Intelligence, Design, and Code</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-cyan transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-purple" />
                <a href="mailto:aidithaikal52@gmail.com" className="hover:text-cyan transition-colors">
                  aidithaikal52@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MessageSquare className="h-4 w-4 mr-2 text-purple" />
                <a href="https://wa.me/" className="hover:text-cyan transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Linkedin className="h-4 w-4 mr-2 text-purple" />
                <a href="https://www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252" className="hover:text-cyan transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Github className="h-4 w-4 mr-2 text-purple" />
                <a href="https://github.com/sirapais19" className="hover:text-cyan transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Latest Projects</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-400 hover:text-cyan transition-colors">VegeScale with AI</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan transition-colors">Car Rental System</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan transition-colors">Food Ordering System</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan transition-colors">Library Management System</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Muhamad Aidit Haikal. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/sirapais19" className="text-gray-400 hover:text-purple transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252" className="text-gray-400 hover:text-purple transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:aidithaikal52@gmail.com" className="text-gray-400 hover:text-purple transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

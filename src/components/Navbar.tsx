
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if user is logged in from localStorage
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    checkLoginStatus();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          <span className="text-purple">A</span>idit <span className="text-cyan">H</span>aikal
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-cyan transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          
          {isLoggedIn ? (
            <Link to="/admin">
              <Button className="bg-purple hover:bg-purple/90 text-white">Admin Console</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="bg-purple hover:bg-purple/90 text-white">Admin Login</Button>
            </Link>
          )}
          
          <Button className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white">Download Resume</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-dark/95 backdrop-blur-md flex flex-col md:hidden z-40 animate-fade-in">
          <nav className="flex flex-col items-center gap-6 p-8">
            {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl text-gray-300 hover:text-cyan transition-colors capitalize py-2"
              >
                {item}
              </button>
            ))}
            
            {isLoggedIn ? (
              <Link to="/admin" className="w-full">
                <Button className="bg-purple hover:bg-purple/90 text-white w-full">Admin Console</Button>
              </Link>
            ) : (
              <Link to="/login" className="w-full">
                <Button className="bg-purple hover:bg-purple/90 text-white w-full">Admin Login</Button>
              </Link>
            )}
            
            <Button className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white w-full mt-4">
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something impactful together.</h3>
            
            <p className="text-gray-300 mb-8">
              Whether you have a project idea, need a freelance developer, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations!
            </p>
            
            <div className="space-y-6">
              <Card className="bg-transparent border-white/10">
                <CardContent className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:aidithaikal52@gmail.com" className="text-white hover:text-cyan transition-colors">
                      aidithaikal52@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-transparent border-white/10">
                <CardContent className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <a href="https://wa.me/" className="text-white hover:text-cyan transition-colors">
                      Connect on WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-transparent border-white/10">
                <CardContent className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252" 
                      className="text-white hover:text-cyan transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Muhamad Aidit Haikal
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-transparent border-white/10">
                <CardContent className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <Github className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/sirapais19" 
                      className="text-white hover:text-cyan transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      sirapais19
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <Card className="bg-white/5 backdrop-blur border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-gray-300 mb-1 block">Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white/10 border-white/20 focus:border-purple text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-gray-300 mb-1 block">Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/10 border-white/20 focus:border-purple text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-gray-300 mb-1 block">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 focus:border-purple text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white font-medium"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

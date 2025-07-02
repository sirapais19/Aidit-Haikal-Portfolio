import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_w48py58",
      "template_naslz8j",
      {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message
      },
      "LME8odu8M1GXFQKwk"
    )
    .then(() => {
      toast.success("✅ Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
        duration: 5000
      });
      setFormData({ fullName: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      toast.error("❌ Failed to send message. Please try again.");
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 animate-pulse"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-white/5 border-cyan-400/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/5 border-cyan-400/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-cyan-400/30 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 resize-none"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Send Message ✉️
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right column: Contact methods */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Email */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 text-cyan-400 mr-3 group-hover:animate-bounce" />
                  <a 
                    href="mailto:aidithaikal52@gmail.com" 
                    className="text-gray-200 hover:text-cyan-300 transition-colors duration-200"
                  >
                    aidithaikal52@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">📱</span>
                  <a 
                    href="https://wa.me/60133694584?text=Hi%20Aidit!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you." 
                    className="text-gray-200 hover:text-cyan-300 transition-colors duration-200"
                  >
                    +6013 3694584
                  </a>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Online Presence</h3>
              <div className="space-y-4">
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full justify-start text-gray-200 hover:text-cyan-300 hover:bg-white/10 transition-all duration-200 group"
                >
                  <a 
                    href="https://www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full justify-start text-gray-200 hover:text-pink-400 hover:bg-white/10 transition-all duration-200 group"
                >
                  <a 
                    href="https://instagram.com/aidit.hykal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                    Instagram Profile
                  </a>
                </Button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Message Me on WhatsApp</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Fastest way to reach me directly for questions, collaborations, or freelance work.
              </p>
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 animate-pulse"
              >
                <a 
                  href="https://wa.me/60133694584?text=Hi%20Aidit!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  💬 Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-cyan-800/30 text-center">
          <p className="text-cyan-300 animate-pulse">
            © 2025 Muhamad Aidit Haikal Bin Zainuddin. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

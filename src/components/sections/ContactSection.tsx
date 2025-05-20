import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_w48py58",
        "template_naslz8j",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "LME8odu8M1GXFQKwk"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          toast({
            title: "Failed to send message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's build something impactful together.
            </h3>
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
                    <a href="mailto:aidit1912@gmail.com" className="text-white hover:text-cyan transition-colors">
                      aidit1912@gmail.com
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
                    <a
                      href="https://wa.me/60133694584?text=Hi%20Aidit!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20potential%20opportunity%20or%20project.%20Looking%20forward%20to%20hearing%20from%20you!"
                      className="text-white hover:text-cyan transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +6013-369 4584
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

              <Card className="bg-transparent border-white/10">
                <CardContent className="p-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <a
                      href="https://instagram.com/aidit.hykal"
                      className="text-white hover:text-cyan transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @aidit.hykal
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
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

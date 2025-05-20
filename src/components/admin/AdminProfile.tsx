
import { useState } from "react";
import { User, Mail, Link, Quote, Smile, MessageSquare, Linkedin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const AdminProfile = () => {
  const { toast } = useToast();
  
  // Mock profile data - in a real app, this would come from an API or database
  const [profileData, setProfileData] = useState({
    fullName: "Muhamad Aidit Haikal",
    title: "AI Developer & Freelance System Builder",
    tagline: "Merging Intelligence, Design, and Code",
    bio: "Detail-oriented Computer Science (Graphics & Multimedia Technology) student passionate about machine learning and system design. Experienced in Java OOP development using NetBeans and AI projects using Python. Seeking internship opportunities while offering freelance system development services.",
    quote: "I believe in building systems that think and serve.",
    funFact: "I also help university students develop academic systems as a freelancer.",
    profilePicture: "/placeholder.svg",
    email: "aidithaikal52@gmail.com",
    linkedIn: "www.linkedin.com/in/muhamad-aidit-haikal-zainuddin-397640252",
    whatsApp: "+60123456789"
  });
  
  // Form state
  const [formData, setFormData] = useState({ ...profileData });
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData(formData);
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };
  
  // Handle cancel
  const handleCancel = () => {
    setFormData({ ...profileData });
    toast({
      title: "Changes Discarded",
      description: "Your changes have been discarded.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Profile</h2>
        <p className="text-sm text-gray-400">Update your personal information</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple">Basic Information</CardTitle>
            <CardDescription className="text-gray-400">
              Your primary details shown on the portfolio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-200 flex items-center gap-2">
                  <User className="h-4 w-4 text-purple" />
                  Full Name
                </Label>
                <Input 
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="Your full name"
                />
              </div>
              
              {/* Title / Role */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-200 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple" />
                  Title / Role
                </Label>
                <Input 
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="Your professional title"
                />
              </div>
            </div>
            
            {/* Tagline */}
            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-gray-200 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple" />
                Tagline
              </Label>
              <Input 
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white"
                placeholder="Your professional tagline"
              />
            </div>
            
            {/* Bio / About Me */}
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-gray-200 flex items-center gap-2">
                <User className="h-4 w-4 text-cyan" />
                Bio / About Me
              </Label>
              <Textarea 
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white min-h-32"
                placeholder="A brief description about yourself and your background"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quote */}
              <div className="space-y-2">
                <Label htmlFor="quote" className="text-gray-200 flex items-center gap-2">
                  <Quote className="h-4 w-4 text-purple" />
                  Quote
                </Label>
                <Input 
                  id="quote"
                  name="quote"
                  value={formData.quote}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="Your inspirational quote"
                />
              </div>
              
              {/* Fun Fact */}
              <div className="space-y-2">
                <Label htmlFor="funFact" className="text-gray-200 flex items-center gap-2">
                  <Smile className="h-4 w-4 text-cyan" />
                  Fun Fact
                </Label>
                <Input 
                  id="funFact"
                  name="funFact"
                  value={formData.funFact}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="An interesting fact about yourself"
                />
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="space-y-2">
              <Label htmlFor="profilePicture" className="text-gray-200 flex items-center gap-2">
                <User className="h-4 w-4 text-cyan" />
                Profile Picture URL
              </Label>
              <div className="flex space-x-4 items-center">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-white/5 border border-white/10">
                  <img 
                    src={formData.profilePicture || "/placeholder.svg"}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <Input 
                  id="profilePicture"
                  name="profilePicture"
                  value={formData.profilePicture}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="URL to your profile picture"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Contact Information */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple">Contact Information</CardTitle>
            <CardDescription className="text-gray-400">
              Contact details shown on the portfolio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple" />
                  Email Address
                </Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              {/* LinkedIn */}
              <div className="space-y-2">
                <Label htmlFor="linkedIn" className="text-gray-200 flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-cyan" />
                  LinkedIn URL
                </Label>
                <Input 
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white"
                  placeholder="www.linkedin.com/in/yourprofile"
                />
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="space-y-2">
              <Label htmlFor="whatsApp" className="text-gray-200 flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple" />
                WhatsApp Number
              </Label>
              <Input 
                id="whatsApp"
                name="whatsApp"
                value={formData.whatsApp}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white"
                placeholder="+1234567890"
              />
            </div>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="border-white/10 hover:bg-white/5 text-white"
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;

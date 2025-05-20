
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Award, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  LogOut,
  User,
  Settings
} from "lucide-react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminOverview from "../components/admin/AdminOverview";
import AdminProjects from "../components/admin/AdminProjects";
import AdminSkills from "../components/admin/AdminSkills";
import AdminCertifications from "../components/admin/AdminCertifications";
import AdminExperience from "../components/admin/AdminExperience";
import AdminEducation from "../components/admin/AdminEducation";
import AdminMessages from "../components/admin/AdminMessages";
import AdminProfile from "../components/admin/AdminProfile";
import { useToast } from "@/hooks/use-toast";

export type AdminSection = 
  | "overview" 
  | "profile" 
  | "projects" 
  | "skills" 
  | "certifications" 
  | "experience" 
  | "education" 
  | "messages";

const Admin = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>("overview");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      toast({
        title: "Access Denied",
        description: "Please login to access the admin console.",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [navigate, toast]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };
  
  // Navigation items for sidebar
  const navItems = [
    { id: "overview" as AdminSection, label: "Dashboard Overview", icon: LayoutDashboard },
    { id: "profile" as AdminSection, label: "Manage Profile", icon: User },
    { id: "projects" as AdminSection, label: "Manage Projects", icon: FileText },
    { id: "skills" as AdminSection, label: "Manage Skills", icon: Award },
    { id: "certifications" as AdminSection, label: "Manage Certifications", icon: Award },
    { id: "experience" as AdminSection, label: "Manage Experience", icon: Briefcase },
    { id: "education" as AdminSection, label: "Manage Education", icon: GraduationCap },
    { id: "messages" as AdminSection, label: "Contact Messages", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-dark text-white flex">
      {/* Sidebar */}
      <AdminSidebar 
        navItems={navItems} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* Main content based on active section */}
          {activeSection === "overview" && <AdminOverview />}
          {activeSection === "profile" && <AdminProfile />}
          {activeSection === "projects" && <AdminProjects />}
          {activeSection === "skills" && <AdminSkills />}
          {activeSection === "certifications" && <AdminCertifications />}
          {activeSection === "experience" && <AdminExperience />}
          {activeSection === "education" && <AdminEducation />}
          {activeSection === "messages" && <AdminMessages />}
        </div>
      </main>
    </div>
  );
};

export default Admin;

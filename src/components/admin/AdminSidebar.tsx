
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdminSection } from "../../pages/Admin";
import { LucideIcon } from "lucide-react";

interface NavItem {
  id: AdminSection;
  label: string;
  icon: LucideIcon;
}

interface AdminSidebarProps {
  navItems: NavItem[];
  activeSection: AdminSection;
  setActiveSection: (section: AdminSection) => void;
  onLogout: () => void;
}

const AdminSidebar = ({ 
  navItems, 
  activeSection, 
  setActiveSection, 
  onLogout 
}: AdminSidebarProps) => {
  return (
    <aside className="w-64 bg-black/40 border-r border-white/10 h-screen flex flex-col shadow-lg">
      <div className="p-4 border-b border-white/10">
        <h1 className="text-xl font-bold">
          <span className="text-purple">A</span>dmin <span className="text-cyan">C</span>onsole
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-purple text-white"
                    : "hover:bg-white/10 text-gray-300"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-white/10">
        <Button 
          variant="ghost" 
          onClick={onLogout}
          className="w-full flex items-center gap-2 text-gray-300 hover:text-white hover:bg-red-500/20"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

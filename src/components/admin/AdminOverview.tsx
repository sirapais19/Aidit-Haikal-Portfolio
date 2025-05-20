
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, MessageSquare, Clock } from "lucide-react";

const AdminOverview = () => {
  // Mock data for the overview
  const stats = [
    { 
      title: "Total Projects",
      value: "5",
      icon: FileText,
      color: "from-purple/20 to-purple/40",
      iconColor: "text-purple"
    },
    { 
      title: "Total Skills",
      value: "24",
      icon: Award,
      color: "from-cyan/20 to-cyan/40",
      iconColor: "text-cyan"
    },
    { 
      title: "Messages Received",
      value: "12",
      icon: MessageSquare,
      color: "from-green-500/20 to-green-500/40",
      iconColor: "text-green-500"
    },
    { 
      title: "Last Updated",
      value: "May 19, 2025",
      icon: Clock,
      color: "from-orange-500/20 to-orange-500/40",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-sm text-gray-400">Welcome, Admin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-purple/5 transition-all">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-medium text-gray-200">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription className="text-gray-400">Latest updates on your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-md bg-white/5">
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <div>
                  <p className="text-sm font-medium">Project Added</p>
                  <p className="text-xs text-gray-400">VegeScale with AI was added to projects</p>
                </div>
                <div className="ml-auto text-xs text-gray-400">2 days ago</div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-md bg-white/5">
                <div className="w-2 h-2 rounded-full bg-cyan"></div>
                <div>
                  <p className="text-sm font-medium">New Message</p>
                  <p className="text-xs text-gray-400">You received a new contact message</p>
                </div>
                <div className="ml-auto text-xs text-gray-400">5 days ago</div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-md bg-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="text-sm font-medium">Skill Updated</p>
                  <p className="text-xs text-gray-400">Added TensorFlow to skills list</p>
                </div>
                <div className="ml-auto text-xs text-gray-400">1 week ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">Common tasks for portfolio management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.location.href = "/admin?section=projects"} 
                className="p-4 rounded-md bg-gradient-to-br from-purple/20 to-purple/10 hover:from-purple/30 hover:to-purple/20 transition-all text-left"
              >
                <FileText className="h-6 w-6 mb-2 text-purple" />
                <h3 className="font-medium">Add New Project</h3>
                <p className="text-xs text-gray-400 mt-1">Showcase your latest work</p>
              </button>
              
              <button 
                onClick={() => window.location.href = "/admin?section=skills"} 
                className="p-4 rounded-md bg-gradient-to-br from-cyan/20 to-cyan/10 hover:from-cyan/30 hover:to-cyan/20 transition-all text-left"
              >
                <Award className="h-6 w-6 mb-2 text-cyan" />
                <h3 className="font-medium">Update Skills</h3>
                <p className="text-xs text-gray-400 mt-1">Add new technologies you've learned</p>
              </button>
              
              <button 
                onClick={() => window.location.href = "/admin?section=messages"} 
                className="p-4 rounded-md bg-gradient-to-br from-green-500/20 to-green-500/10 hover:from-green-500/30 hover:to-green-500/20 transition-all text-left"
              >
                <MessageSquare className="h-6 w-6 mb-2 text-green-500" />
                <h3 className="font-medium">View Messages</h3>
                <p className="text-xs text-gray-400 mt-1">Check your contact requests</p>
              </button>
              
              <button 
                onClick={() => window.location.href = "/admin?section=experience"} 
                className="p-4 rounded-md bg-gradient-to-br from-orange-500/20 to-orange-500/10 hover:from-orange-500/30 hover:to-orange-500/20 transition-all text-left"
              >
                <Briefcase className="h-6 w-6 mb-2 text-orange-500" />
                <h3 className="font-medium">Add Experience</h3>
                <p className="text-xs text-gray-400 mt-1">Update your work history</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;

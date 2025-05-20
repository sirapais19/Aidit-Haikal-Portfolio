
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash, X } from "lucide-react";

// Define skill types
interface Skill {
  id: string;
  name: string;
  category: string;
}

const AdminSkills = () => {
  // Predefined categories
  const categories = [
    "Languages",
    "Frameworks",
    "Tools",
    "AI & Data",
    "Game Dev",
    "Spoken Languages"
  ];
  
  // Mock skills data
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "Java", category: "Languages" },
    { id: "2", name: "Python", category: "Languages" },
    { id: "3", name: "C++", category: "Languages" },
    { id: "4", name: "C#", category: "Languages" },
    { id: "5", name: "HTML", category: "Languages" },
    { id: "6", name: "CSS", category: "Languages" },
    { id: "7", name: "PHP", category: "Languages" },
    { id: "8", name: "TensorFlow", category: "AI & Data" },
    { id: "9", name: "PyTorch", category: "AI & Data" },
    { id: "10", name: "OpenCV", category: "AI & Data" },
    { id: "11", name: "Laravel", category: "Frameworks" },
    { id: "12", name: "Flutter", category: "Frameworks" },
    { id: "13", name: "Firebase", category: "Frameworks" },
    { id: "14", name: "Git", category: "Tools" },
    { id: "15", name: "MySQL", category: "Tools" },
    { id: "16", name: "Firebase", category: "Tools" },
    { id: "17", name: "SAP Fiori", category: "Tools" },
    { id: "18", name: "Unity", category: "Game Dev" },
    { id: "19", name: "Unreal Engine", category: "Game Dev" },
    { id: "20", name: "Malay", category: "Spoken Languages" },
    { id: "21", name: "English", category: "Spoken Languages" },
  ]);

  // Form state
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentSkill, setCurrentSkill] = useState<Skill>({
    id: '',
    name: '',
    category: categories[0]
  });
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentSkill({
      ...currentSkill,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random ID for new skills
    const skillWithId = formMode === 'add' 
      ? { ...currentSkill, id: Math.random().toString(36).substring(7) }
      : currentSkill;
    
    if (formMode === 'add') {
      setSkills([...skills, skillWithId]);
    } else {
      setSkills(skills.map(s => s.id === skillWithId.id ? skillWithId : s));
    }
    
    // Reset form
    setCurrentSkill({
      id: '',
      name: '',
      category: categories[0]
    });
    setShowForm(false);
  };

  // Handle editing a skill
  const handleEdit = (skill: Skill) => {
    setFormMode('edit');
    setCurrentSkill(skill);
    setShowForm(true);
  };

  // Handle deleting a skill
  const handleDelete = (id: string) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  // Get skills by category
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Skills</h2>
        
        <div className="flex gap-2">
          <select 
            className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-sm text-white"
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <Button 
            onClick={() => {
              setFormMode('add');
              setCurrentSkill({
                id: '',
                name: '',
                category: categories[0]
              });
              setShowForm(true);
            }}
            className="bg-purple hover:bg-purple/90"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Skill
          </Button>
        </div>
      </div>
      
      {/* Skill Form */}
      {showForm && (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>{formMode === 'add' ? 'Add New Skill' : 'Edit Skill'}</CardTitle>
            <CardDescription className="text-gray-400">
              {formMode === 'add' ? 'Add a new skill to your portfolio' : 'Update existing skill'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="skill-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Skill Name</label>
                <Input
                  name="name"
                  value={currentSkill.name}
                  onChange={handleInputChange}
                  placeholder="Enter skill name"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Category</label>
                <select
                  name="category"
                  value={currentSkill.category}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white"
                  required
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end border-t border-white/10 pt-4">
            <Button
              variant="outline"
              onClick={() => setShowForm(false)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="skill-form"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90"
            >
              {formMode === 'add' ? 'Add Skill' : 'Update Skill'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories
          .filter(category => !selectedCategory || category === selectedCategory)
          .map(category => {
            const categorySkills = getSkillsByCategory(category);
            
            if (categorySkills.length === 0) return null;
            
            return (
              <Card key={category} className="border-white/10 bg-white/5 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <span className="text-sm text-gray-400">{categorySkills.length} skills</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map(skill => (
                      <div
                        key={skill.id}
                        className="skill-badge flex items-center gap-1"
                      >
                        {skill.name}
                        
                        <div className="ml-1 flex gap-1">
                          <button
                            onClick={() => handleEdit(skill)}
                            className="text-xs text-gray-400 hover:text-cyan p-1"
                          >
                            <Edit className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(skill.id)}
                            className="text-xs text-gray-400 hover:text-red-500 p-1"
                          >
                            <Trash className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default AdminSkills;

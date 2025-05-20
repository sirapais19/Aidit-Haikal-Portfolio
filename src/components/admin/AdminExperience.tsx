
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
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash, ChevronUp, ChevronDown } from "lucide-react";

// Define experience type
interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  order: number;
}

const AdminExperience = () => {
  // Mock data for experiences
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Freelance Developer',
      company: 'Java OOP, NetBeans',
      duration: '2022 - Present',
      description: [
        'Built 4+ fully functional academic systems',
        'Developed custom solutions for university students',
        'Implemented database-driven applications with MySQL'
      ],
      order: 1
    },
    {
      id: '2',
      title: 'Academic Developer',
      company: 'University Projects',
      duration: '2021 - Present',
      description: [
        'Created AI projects using Python and TensorFlow',
        'Built web systems with HTML, CSS, and PHP',
        'Developed mobile applications with Flutter and Firebase'
      ],
      order: 2
    }
  ]);

  // Form state for adding/editing experiences
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    id: '',
    title: '',
    company: '',
    duration: '',
    description: [''],
    order: 0
  });
  const [showForm, setShowForm] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentExperience({
      ...currentExperience,
      [name]: value
    });
  };

  // Handle description point changes
  const handlePointChange = (index: number, value: string) => {
    const newDescription = [...currentExperience.description];
    newDescription[index] = value;
    setCurrentExperience({
      ...currentExperience,
      description: newDescription
    });
  };

  // Add new description point
  const addDescriptionPoint = () => {
    setCurrentExperience({
      ...currentExperience,
      description: [...currentExperience.description, '']
    });
  };

  // Remove description point
  const removeDescriptionPoint = (index: number) => {
    const newDescription = [...currentExperience.description];
    newDescription.splice(index, 1);
    setCurrentExperience({
      ...currentExperience,
      description: newDescription.length > 0 ? newDescription : ['']
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random ID for new experiences and set order
    const maxOrder = experiences.length > 0 
      ? Math.max(...experiences.map(exp => exp.order)) 
      : 0;
      
    const experienceWithId = formMode === 'add' 
      ? { 
          ...currentExperience, 
          id: Math.random().toString(36).substring(7),
          order: maxOrder + 1
        }
      : currentExperience;
    
    // Filter out empty description points
    const cleanedExperience = {
      ...experienceWithId,
      description: experienceWithId.description.filter(point => point.trim() !== '')
    };
    
    if (formMode === 'add') {
      setExperiences([...experiences, cleanedExperience]);
    } else {
      setExperiences(experiences.map(exp => exp.id === cleanedExperience.id ? cleanedExperience : exp));
    }
    
    // Reset form
    setCurrentExperience({
      id: '',
      title: '',
      company: '',
      duration: '',
      description: [''],
      order: 0
    });
    setShowForm(false);
  };

  // Handle editing an experience
  const handleEdit = (experience: Experience) => {
    setFormMode('edit');
    setCurrentExperience(experience);
    setShowForm(true);
  };

  // Handle deleting an experience
  const handleDelete = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  // Move experience up in order
  const moveExperienceUp = (id: string) => {
    const expIndex = experiences.findIndex(exp => exp.id === id);
    if (expIndex > 0) {
      const newExperiences = [...experiences];
      const temp = newExperiences[expIndex - 1].order;
      newExperiences[expIndex - 1].order = newExperiences[expIndex].order;
      newExperiences[expIndex].order = temp;
      setExperiences([...newExperiences].sort((a, b) => a.order - b.order));
    }
  };

  // Move experience down in order
  const moveExperienceDown = (id: string) => {
    const expIndex = experiences.findIndex(exp => exp.id === id);
    if (expIndex < experiences.length - 1) {
      const newExperiences = [...experiences];
      const temp = newExperiences[expIndex + 1].order;
      newExperiences[expIndex + 1].order = newExperiences[expIndex].order;
      newExperiences[expIndex].order = temp;
      setExperiences([...newExperiences].sort((a, b) => a.order - b.order));
    }
  };

  // Sort experiences by order
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Experience</h2>
        
        <Button 
          onClick={() => {
            setFormMode('add');
            setCurrentExperience({
              id: '',
              title: '',
              company: '',
              duration: '',
              description: [''],
              order: 0
            });
            setShowForm(true);
          }}
          className="bg-purple hover:bg-purple/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Experience
        </Button>
      </div>
      
      {/* Experience Form */}
      {showForm && (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>{formMode === 'add' ? 'Add New Experience' : 'Edit Experience'}</CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details to {formMode === 'add' ? 'add a new' : 'update the'} experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="experience-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Title/Position</label>
                <Input
                  name="title"
                  value={currentExperience.title}
                  onChange={handleInputChange}
                  placeholder="Enter position title"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Company/Project</label>
                <Input
                  name="company"
                  value={currentExperience.company}
                  onChange={handleInputChange}
                  placeholder="Enter company or project name"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Duration</label>
                <Input
                  name="duration"
                  value={currentExperience.duration}
                  onChange={handleInputChange}
                  placeholder="e.g. 2022 - Present"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm text-gray-300">Description (Bullet Points)</label>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={addDescriptionPoint}
                    className="h-7 text-xs bg-purple/20 hover:bg-purple/40 text-purple hover:text-white"
                  >
                    <Plus className="mr-1 h-3 w-3" /> Add Point
                  </Button>
                </div>
                
                {currentExperience.description.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={point}
                      onChange={(e) => handlePointChange(index, e.target.value)}
                      placeholder={`Bullet point ${index + 1}`}
                      className="bg-white/10 border-white/20 text-white flex-1"
                    />
                    {currentExperience.description.length > 1 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeDescriptionPoint(index)}
                        className="h-10 w-10 text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
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
              form="experience-form"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90"
            >
              {formMode === 'add' ? 'Add Experience' : 'Update Experience'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Experiences Timeline */}
      <div className="space-y-4">
        {sortedExperiences.map((experience, index) => (
          <Card 
            key={experience.id} 
            className="border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-purple/5 transition-all"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold">{experience.title}</CardTitle>
                  <CardDescription className="text-gray-400">{experience.company}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-purple/20 px-3 py-1 rounded-full text-white">
                    {experience.duration}
                  </span>
                  <div className="flex flex-col">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveExperienceUp(experience.id)}
                      disabled={index === 0}
                      className={`h-6 w-6 ${index === 0 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveExperienceDown(experience.id)}
                      disabled={index === experiences.length - 1}
                      className={`h-6 w-6 ${index === experiences.length - 1 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-white/10 pt-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleEdit(experience)}
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <Edit className="mr-1 h-4 w-4" /> Edit
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDelete(experience.id)}
                className="text-gray-400 hover:text-red-500 hover:bg-red-500/10"
              >
                <Trash className="mr-1 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminExperience;

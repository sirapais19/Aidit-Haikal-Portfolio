
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
import { Plus, Edit, Trash, ChevronUp, ChevronDown } from "lucide-react";

// Define education type
interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  highlights: string[];
  order: number;
}

const AdminEducation = () => {
  // Mock data for educations
  const [educations, setEducations] = useState<Education[]>([
    {
      id: '1',
      institution: 'Universiti Malaysia Pahang AL-Sultan Abdullah',
      degree: 'Bachelor of Computer Science (Multimedia Software)',
      duration: '2021 - Present',
      highlights: [
        'Specializing in Graphics & Multimedia Technology',
        'Focused on AI and system design',
        'Dean\'s list recipient'
      ],
      order: 1
    },
    {
      id: '2',
      institution: 'Kolej Matrikulasi Negeri Sembilan',
      degree: 'Computer Science',
      duration: '2020 - 2021',
      highlights: [
        'Foundation studies in computer science',
        'Top performer in programming subjects'
      ],
      order: 2
    }
  ]);

  // Form state for adding/editing educations
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    duration: '',
    highlights: [''],
    order: 0
  });
  const [showForm, setShowForm] = useState(false);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentEducation({
      ...currentEducation,
      [name]: value
    });
  };

  // Handle highlight point changes
  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...currentEducation.highlights];
    newHighlights[index] = value;
    setCurrentEducation({
      ...currentEducation,
      highlights: newHighlights
    });
  };

  // Add new highlight point
  const addHighlightPoint = () => {
    setCurrentEducation({
      ...currentEducation,
      highlights: [...currentEducation.highlights, '']
    });
  };

  // Remove highlight point
  const removeHighlightPoint = (index: number) => {
    const newHighlights = [...currentEducation.highlights];
    newHighlights.splice(index, 1);
    setCurrentEducation({
      ...currentEducation,
      highlights: newHighlights.length > 0 ? newHighlights : ['']
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random ID for new educations and set order
    const maxOrder = educations.length > 0 
      ? Math.max(...educations.map(edu => edu.order)) 
      : 0;
      
    const educationWithId = formMode === 'add' 
      ? { 
          ...currentEducation, 
          id: Math.random().toString(36).substring(7),
          order: maxOrder + 1
        }
      : currentEducation;
    
    // Filter out empty highlight points
    const cleanedEducation = {
      ...educationWithId,
      highlights: educationWithId.highlights.filter(point => point.trim() !== '')
    };
    
    if (formMode === 'add') {
      setEducations([...educations, cleanedEducation]);
    } else {
      setEducations(educations.map(edu => edu.id === cleanedEducation.id ? cleanedEducation : edu));
    }
    
    // Reset form
    setCurrentEducation({
      id: '',
      institution: '',
      degree: '',
      duration: '',
      highlights: [''],
      order: 0
    });
    setShowForm(false);
  };

  // Handle editing an education
  const handleEdit = (education: Education) => {
    setFormMode('edit');
    setCurrentEducation(education);
    setShowForm(true);
  };

  // Handle deleting an education
  const handleDelete = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  // Move education up in order
  const moveEducationUp = (id: string) => {
    const eduIndex = educations.findIndex(edu => edu.id === id);
    if (eduIndex > 0) {
      const newEducations = [...educations];
      const temp = newEducations[eduIndex - 1].order;
      newEducations[eduIndex - 1].order = newEducations[eduIndex].order;
      newEducations[eduIndex].order = temp;
      setEducations([...newEducations].sort((a, b) => a.order - b.order));
    }
  };

  // Move education down in order
  const moveEducationDown = (id: string) => {
    const eduIndex = educations.findIndex(edu => edu.id === id);
    if (eduIndex < educations.length - 1) {
      const newEducations = [...educations];
      const temp = newEducations[eduIndex + 1].order;
      newEducations[eduIndex + 1].order = newEducations[eduIndex].order;
      newEducations[eduIndex].order = temp;
      setEducations([...newEducations].sort((a, b) => a.order - b.order));
    }
  };

  // Sort educations by order
  const sortedEducations = [...educations].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Education</h2>
        
        <Button 
          onClick={() => {
            setFormMode('add');
            setCurrentEducation({
              id: '',
              institution: '',
              degree: '',
              duration: '',
              highlights: [''],
              order: 0
            });
            setShowForm(true);
          }}
          className="bg-purple hover:bg-purple/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </div>
      
      {/* Education Form */}
      {showForm && (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>{formMode === 'add' ? 'Add New Education' : 'Edit Education'}</CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details to {formMode === 'add' ? 'add a new' : 'update the'} education
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="education-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Institution</label>
                <Input
                  name="institution"
                  value={currentEducation.institution}
                  onChange={handleInputChange}
                  placeholder="Enter institution name"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Degree/Course</label>
                <Input
                  name="degree"
                  value={currentEducation.degree}
                  onChange={handleInputChange}
                  placeholder="Enter degree or course name"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Duration</label>
                <Input
                  name="duration"
                  value={currentEducation.duration}
                  onChange={handleInputChange}
                  placeholder="e.g. 2021 - Present"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm text-gray-300">Highlights (Bullet Points)</label>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={addHighlightPoint}
                    className="h-7 text-xs bg-purple/20 hover:bg-purple/40 text-purple hover:text-white"
                  >
                    <Plus className="mr-1 h-3 w-3" /> Add Point
                  </Button>
                </div>
                
                {currentEducation.highlights.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={point}
                      onChange={(e) => handleHighlightChange(index, e.target.value)}
                      placeholder={`Highlight ${index + 1}`}
                      className="bg-white/10 border-white/20 text-white flex-1"
                    />
                    {currentEducation.highlights.length > 1 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => removeHighlightPoint(index)}
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
              form="education-form"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90"
            >
              {formMode === 'add' ? 'Add Education' : 'Update Education'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Education Timeline */}
      <div className="space-y-4">
        {sortedEducations.map((education, index) => (
          <Card 
            key={education.id} 
            className="border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-purple/5 transition-all"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold">{education.institution}</CardTitle>
                  <CardDescription className="text-gray-400">{education.degree}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium bg-cyan/20 px-3 py-1 rounded-full text-white">
                    {education.duration}
                  </span>
                  <div className="flex flex-col">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveEducationUp(education.id)}
                      disabled={index === 0}
                      className={`h-6 w-6 ${index === 0 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => moveEducationDown(education.id)}
                      disabled={index === educations.length - 1}
                      className={`h-6 w-6 ${index === educations.length - 1 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300">
                {education.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t border-white/10 pt-3">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleEdit(education)}
                className="text-gray-400 hover:text-white hover:bg-white/10"
              >
                <Edit className="mr-1 h-4 w-4" /> Edit
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDelete(education.id)}
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

export default AdminEducation;

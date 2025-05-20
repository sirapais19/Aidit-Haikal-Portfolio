
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
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
import { Plus, Edit, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define certification type
interface Certification {
  id: string;
  title: string;
  description: string;
  skills: string[];
  year: string;
}

const AdminCertifications = () => {
  // Mock data for certifications
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: '1',
      title: 'NVIDIA Jetson Nano – Certificate of Competency: AI Development',
      description: 'Certified in AI development with NVIDIA Jetson platform',
      skills: ['AI', 'Deep Learning', 'Computer Vision'],
      year: '2023'
    },
    {
      id: '2',
      title: 'NVIDIA Jetson Nano – Certificate of Competency: Building Video AI Applications',
      description: 'Certified in building video AI applications using NVIDIA technologies',
      skills: ['Video Processing', 'AI Models', 'Real-time Analytics'],
      year: '2023'
    }
  ]);

  // Form state for adding/editing certifications
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentCertification, setCurrentCertification] = useState<Certification>({
    id: '',
    title: '',
    description: '',
    skills: [],
    year: new Date().getFullYear().toString()
  });
  const [newSkill, setNewSkill] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Handle adding a skill
  const handleAddSkill = () => {
    if (newSkill.trim() && !currentCertification.skills.includes(newSkill.trim())) {
      setCurrentCertification({
        ...currentCertification,
        skills: [...currentCertification.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  // Handle removing a skill
  const handleRemoveSkill = (skill: string) => {
    setCurrentCertification({
      ...currentCertification,
      skills: currentCertification.skills.filter(s => s !== skill)
    });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentCertification({
      ...currentCertification,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random ID for new certifications
    const certificationWithId = formMode === 'add' 
      ? { ...currentCertification, id: Math.random().toString(36).substring(7) }
      : currentCertification;
    
    if (formMode === 'add') {
      setCertifications([...certifications, certificationWithId]);
    } else {
      setCertifications(certifications.map(c => c.id === certificationWithId.id ? certificationWithId : c));
    }
    
    // Reset form
    setCurrentCertification({
      id: '',
      title: '',
      description: '',
      skills: [],
      year: new Date().getFullYear().toString()
    });
    setShowForm(false);
  };

  // Handle editing a certification
  const handleEdit = (certification: Certification) => {
    setFormMode('edit');
    setCurrentCertification(certification);
    setShowForm(true);
  };

  // Handle deleting a certification
  const handleDelete = (id: string) => {
    setCertifications(certifications.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Certifications</h2>
        
        <Button 
          onClick={() => {
            setFormMode('add');
            setCurrentCertification({
              id: '',
              title: '',
              description: '',
              skills: [],
              year: new Date().getFullYear().toString()
            });
            setShowForm(true);
          }}
          className="bg-purple hover:bg-purple/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Certification
        </Button>
      </div>
      
      {/* Certification Form */}
      {showForm && (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>{formMode === 'add' ? 'Add New Certification' : 'Edit Certification'}</CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details to {formMode === 'add' ? 'add a new' : 'update the'} certification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="certification-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Certification Title</label>
                <Input
                  name="title"
                  value={currentCertification.title}
                  onChange={handleInputChange}
                  placeholder="Enter certification title"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Description</label>
                <Textarea
                  name="description"
                  value={currentCertification.description}
                  onChange={handleInputChange}
                  placeholder="Enter certification description"
                  className="bg-white/10 border-white/20 text-white resize-none min-h-[80px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Year</label>
                <Input
                  name="year"
                  type="number"
                  min="2000"
                  max="2050"
                  value={currentCertification.year}
                  onChange={handleInputChange}
                  placeholder="Enter year"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Skills Acquired</label>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    className="bg-white/10 border-white/20 text-white flex-1"
                  />
                  <Button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-cyan hover:bg-cyan/90"
                  >
                    Add
                  </Button>
                </div>
                
                {/* Display skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentCertification.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-purple/20 hover:bg-purple/30 text-white gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="ml-1 text-xs hover:text-red-400"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
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
              form="certification-form"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90"
            >
              {formMode === 'add' ? 'Add Certification' : 'Update Certification'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Certifications Table */}
      <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white">Title</TableHead>
                <TableHead className="text-white">Description</TableHead>
                <TableHead className="text-white">Skills</TableHead>
                <TableHead className="text-white">Year</TableHead>
                <TableHead className="text-white w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certifications.map((cert) => (
                <TableRow key={cert.id} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-medium">{cert.title}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{cert.description}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} className="bg-purple/20 text-white">{skill}</Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge className="bg-white/10 text-white">+{cert.skills.length - 3}</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{cert.year}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleEdit(cert)}
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(cert.id)}
                        className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-500/10"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCertifications;

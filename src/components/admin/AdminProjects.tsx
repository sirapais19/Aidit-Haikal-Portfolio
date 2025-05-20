
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
import { Plus, Edit, Trash, Upload, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Define project type
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageUrl: string | null;
}

const AdminProjects = () => {
  const { toast } = useToast();

  // Mock data for projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Food Ordering System',
      description: 'A Java-based system to manage food menu, ordering, and billing for campus use.',
      tags: ['Java', 'OOP', 'MySQL', 'NetBeans'],
      githubUrl: 'https://github.com/sirapais19/Food-Ordering-System',
      imageUrl: '/lovable-uploads/1e49daed-d317-4ec7-a84e-14369ea14c60.png'
    },
    {
      id: '2',
      title: 'Library Management System',
      description: 'A desktop system for managing student book loans, returns, and fine automation.',
      tags: ['Java', 'OOP', 'MySQL', 'NetBeans'],
      githubUrl: 'https://github.com/sirapais19/LibraryManagementSystem',
      imageUrl: '/lovable-uploads/2c8993e9-63c2-416e-9ee1-4f836de31abd.png'
    },
    {
      id: '3',
      title: 'Car Rental System',
      description: 'Rental platform with vehicle availability, bookings, and admin dashboard.',
      tags: ['Java', 'OOP', 'MySQL', 'NetBeans'],
      githubUrl: 'https://github.com/sirapais19/Car-Rental',
      imageUrl: '/lovable-uploads/30016c75-9f2b-4109-94ca-3d9e754678db.png'
    },
    {
      id: '4',
      title: 'Delivery System for Pet',
      description: 'Order and delivery system tailored for pet services.',
      tags: ['Java', 'OOP', 'MySQL', 'NetBeans'],
      githubUrl: 'https://github.com/sirapais19/Delivery-system-for-pet',
      imageUrl: '/lovable-uploads/5f3343fb-5201-4f42-a637-540c4c6fa268.png'
    },
    {
      id: '5',
      title: 'VegeScale with AI',
      description: 'Smart AI vegetable scale using camera for object detection and weight-based labeling.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'MySQL'],
      githubUrl: 'https://github.com/0xSofea/vegeScale',
      imageUrl: '/lovable-uploads/8739095e-234c-468c-846c-516e75399eec.png'
    }
  ]);

  // Form state for adding/editing projects
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [currentProject, setCurrentProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    tags: [],
    githubUrl: '',
    imageUrl: null
  });
  const [newTag, setNewTag] = useState('');
  const [showForm, setShowForm] = useState(false);
  
  // File upload state
  const [projectImageFile, setProjectImageFile] = useState<File | null>(null);
  const [projectImagePreview, setProjectImagePreview] = useState<string | null>(null);

  // Handle adding a tag
  const handleAddTag = () => {
    if (newTag.trim() && !currentProject.tags.includes(newTag.trim())) {
      setCurrentProject({
        ...currentProject,
        tags: [...currentProject.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tag: string) => {
    setCurrentProject({
      ...currentProject,
      tags: currentProject.tags.filter(t => t !== tag)
    });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentProject({
      ...currentProject,
      [name]: value
    });
  };
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      setProjectImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setProjectImagePreview(previewUrl);
      
      // Update current project with the preview URL
      setCurrentProject({
        ...currentProject,
        imageUrl: previewUrl
      });
    }
  };
  
  // Reset image
  const handleResetImage = () => {
    if (projectImagePreview) {
      URL.revokeObjectURL(projectImagePreview);
    }
    setProjectImageFile(null);
    setProjectImagePreview(null);
    
    // Update current project to remove image
    setCurrentProject({
      ...currentProject,
      imageUrl: null
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random ID for new projects
    const projectWithId = formMode === 'add' 
      ? { ...currentProject, id: Math.random().toString(36).substring(7) }
      : currentProject;
    
    if (formMode === 'add') {
      setProjects([...projects, projectWithId]);
      toast({
        title: "Project Added",
        description: "Your project has been added successfully.",
      });
    } else {
      setProjects(projects.map(p => p.id === projectWithId.id ? projectWithId : p));
      toast({
        title: "Project Updated",
        description: "Your project has been updated successfully.",
      });
    }
    
    // Reset form
    setCurrentProject({
      id: '',
      title: '',
      description: '',
      tags: [],
      githubUrl: '',
      imageUrl: null
    });
    setProjectImageFile(null);
    setProjectImagePreview(null);
    setShowForm(false);
  };

  // Handle editing a project
  const handleEdit = (project: Project) => {
    setFormMode('edit');
    setCurrentProject(project);
    
    if (project.imageUrl) {
      setProjectImagePreview(project.imageUrl);
    } else {
      setProjectImagePreview(null);
    }
    
    setShowForm(true);
  };

  // Handle deleting a project
  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Project Deleted",
      description: "The project has been removed.",
      variant: "destructive",
    });
  };

  // Handle cancel form
  const handleCancelForm = () => {
    setCurrentProject({
      id: '',
      title: '',
      description: '',
      tags: [],
      githubUrl: '',
      imageUrl: null
    });
    
    if (projectImagePreview && !projectImagePreview.startsWith('/')) {
      URL.revokeObjectURL(projectImagePreview);
    }
    
    setProjectImageFile(null);
    setProjectImagePreview(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Projects</h2>
        
        <Button 
          onClick={() => {
            setFormMode('add');
            setCurrentProject({
              id: '',
              title: '',
              description: '',
              tags: [],
              githubUrl: '',
              imageUrl: null
            });
            setProjectImageFile(null);
            setProjectImagePreview(null);
            setShowForm(true);
          }}
          className="bg-purple hover:bg-purple/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>
      
      {/* Project Form */}
      {showForm && (
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <CardHeader>
            <CardTitle>{formMode === 'add' ? 'Add New Project' : 'Edit Project'}</CardTitle>
            <CardDescription className="text-gray-400">
              Fill in the details to {formMode === 'add' ? 'add a new' : 'update the'} project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="project-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Project Title</label>
                <Input
                  name="title"
                  value={currentProject.title}
                  onChange={handleInputChange}
                  placeholder="Enter project title"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Description</label>
                <Textarea
                  name="description"
                  value={currentProject.description}
                  onChange={handleInputChange}
                  placeholder="Enter project description"
                  className="bg-white/10 border-white/20 text-white resize-none min-h-[100px]"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">GitHub Link</label>
                <Input
                  name="githubUrl"
                  value={currentProject.githubUrl}
                  onChange={handleInputChange}
                  placeholder="https://github.com/username/repo"
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>
              
              {/* Project Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="projectImage" className="text-sm text-gray-300 flex items-center gap-2">
                  <Image className="h-4 w-4 text-purple" />
                  Project Image
                </Label>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Image Preview */}
                  <div className="border border-dashed border-white/20 rounded-md p-4 flex items-center justify-center bg-white/5 min-h-[150px]">
                    {projectImagePreview ? (
                      <div className="relative w-full">
                        <img 
                          src={projectImagePreview} 
                          alt="Project Preview" 
                          className="max-h-[150px] mx-auto object-contain rounded-md"
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <Image className="h-12 w-12 mx-auto mb-2 text-gray-500" />
                        <p>No image selected</p>
                        <p className="text-xs">Image will be displayed here after upload</p>
                      </div>  
                    )}
                  </div>
                  
                  {/* Upload Controls */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        id="projectImage"
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Button 
                        type="button"
                        variant="outline" 
                        className="w-full border-dashed border-white/20 hover:bg-white/5 text-white flex gap-2"
                        onClick={() => document.getElementById('projectImage')?.click()}
                      >
                        <Upload className="h-4 w-4" />
                        Upload Image
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-400">
                      Accepted formats: JPG, PNG, WEBP. Max file size: 2MB
                    </p>
                    
                    {projectImagePreview && (
                      <Button 
                        type="button" 
                        variant="outline"
                        size="sm" 
                        className="text-red-400 border-red-400/20 hover:bg-red-400/10 hover:text-red-300"
                        onClick={handleResetImage}
                      >
                        Remove Image
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Tags</label>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    className="bg-white/10 border-white/20 text-white flex-1"
                  />
                  <Button
                    type="button"
                    onClick={handleAddTag}
                    className="bg-cyan hover:bg-cyan/90"
                  >
                    Add
                  </Button>
                </div>
                
                {/* Display tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentProject.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      className="bg-purple/20 hover:bg-purple/30 text-white gap-1"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
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
              onClick={handleCancelForm}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="project-form"
              className="bg-gradient-to-r from-purple to-cyan hover:opacity-90"
            >
              {formMode === 'add' ? 'Add Project' : 'Update Project'}
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Projects Table */}
      <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white">Title</TableHead>
                <TableHead className="text-white">Description</TableHead>
                <TableHead className="text-white">Tags</TableHead>
                <TableHead className="text-white">GitHub</TableHead>
                <TableHead className="text-white w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{project.description}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} className="bg-purple/20 text-white">{tag}</Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge className="bg-white/10 text-white">+{project.tags.length - 2}</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan hover:underline truncate block max-w-[150px]"
                    >
                      {project.githubUrl.replace('https://github.com/', '')}
                    </a>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleEdit(project)}
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-white/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(project.id)}
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

export default AdminProjects;

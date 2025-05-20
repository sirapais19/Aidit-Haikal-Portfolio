import { useEffect, useState } from "react";
import {
  User, Mail, Quote, Smile, MessageSquare, Linkedin, Phone, Upload, Image
} from "lucide-react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AdminProfile = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    tagline: "",
    bio: "",
    quote: "",
    funFact: "",
    profilePicture: "",
    email: "",
    linkedIn: "",
    whatsApp: ""
  });

  const [loading, setLoading] = useState(true);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);

  // 🔁 Load data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "profile", "main");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData(prev => ({
          ...prev,
          ...data
        }));
        setProfileImagePreview(data.profilePicture || null);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 🔁 Input field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 📸 Handle file selection
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setProfileImagePreview(previewUrl);
    }
  };

  // ❌ Remove profile image
  const handleResetImage = () => {
    setProfileImageFile(null);
    if (profileImagePreview) {
      URL.revokeObjectURL(profileImagePreview);
    }
    setProfileImagePreview(null);
  };

  // ✅ Save to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData = {
      ...formData,
      profilePicture: profileImagePreview || ""
    };

    try {
      await setDoc(doc(db, "profile", "main"), updatedData);
      toast({ title: "Profile Updated", description: "Changes saved to database." });
    } catch (err) {
      toast({ title: "Update Failed", description: "Could not update profile.", variant: "destructive" });
    }
  };

  // ↩️ Cancel changes
  const handleCancel = async () => {
    const docRef = doc(db, "profile", "main");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setFormData(prev => ({
        ...prev,
        ...data
      }));
      setProfileImagePreview(data.profilePicture || null);
    }
    toast({ title: "Changes Discarded", variant: "destructive" });
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20">Loading profile...</div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Profile</h2>
        <p className="text-sm text-gray-400">Update your personal information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple">Basic Information</CardTitle>
            <CardDescription className="text-gray-400">Your primary details shown on the portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-200 flex items-center gap-2">
                  <User className="h-4 w-4 text-purple" /> Full Name
                </Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" placeholder="Your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-200 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple" /> Title / Role
                </Label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" placeholder="Your professional title" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline" className="text-gray-200 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple" /> Tagline
              </Label>
              <Input id="tagline" name="tagline" value={formData.tagline} onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white" placeholder="Your professional tagline" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-gray-200 flex items-center gap-2">
                <User className="h-4 w-4 text-cyan" /> Bio / About Me
              </Label>
              <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white min-h-32" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="quote" className="text-gray-200 flex items-center gap-2">
                  <Quote className="h-4 w-4 text-purple" /> Quote
                </Label>
                <Input id="quote" name="quote" value={formData.quote} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="funFact" className="text-gray-200 flex items-center gap-2">
                  <Smile className="h-4 w-4 text-cyan" /> Fun Fact
                </Label>
                <Input id="funFact" name="funFact" value={formData.funFact} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Picture */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple">Profile Picture</CardTitle>
            <CardDescription className="text-gray-400">Upload a photo to personalize your portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Avatar className="h-40 w-40 rounded-full border-2 border-purple/30">
                {profileImagePreview ? (
                  <AvatarImage src={profileImagePreview} />
                ) : (
                  <AvatarFallback className="bg-purple/10 text-2xl font-light flex items-center justify-center">
                    <User className="h-16 w-16 text-purple/50" />
                  </AvatarFallback>
                )}
              </Avatar>

              <div className="space-y-4 flex-1">
                <Label htmlFor="profilePicture" className="text-gray-200 flex items-center gap-2">
                  <Image className="h-4 w-4 text-purple" /> Choose Profile Picture
                </Label>

                <div className="relative">
                  <Input
                    id="profilePicture"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-dashed border-white/20 hover:bg-white/5 text-white flex gap-2"
                    onClick={() => document.getElementById("profilePicture")?.click()}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </Button>
                </div>

                <p className="text-xs text-gray-400">
                  Accepted formats: JPG, PNG, WEBP. Max file size: 2MB
                </p>

                {profileImagePreview && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleResetImage}
                    className="text-red-400 border-red-400/20 hover:bg-red-400/10 hover:text-red-300"
                  >
                    Remove Image
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-purple">Contact Information</CardTitle>
            <CardDescription className="text-gray-400">Shown on the portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple" /> Email Address
                </Label>
                <Input id="email" name="email" value={formData.email} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedIn" className="text-gray-200 flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-cyan" /> LinkedIn URL
                </Label>
                <Input id="linkedIn" name="linkedIn" value={formData.linkedIn} onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsApp" className="text-gray-200 flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple" /> WhatsApp Number
              </Label>
              <Input id="whatsApp" name="whatsApp" value={formData.whatsApp} onChange={handleChange}
                className="bg-white/5 border border-white/10 text-white" />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={handleCancel}
            className="border-white/10 hover:bg-white/5 text-white">
            Cancel
          </Button>
          <Button type="submit" className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;

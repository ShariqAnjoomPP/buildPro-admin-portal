import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Building2, Camera, Plus, User, MapPin, DollarSign, Calendar, Edit, Trash2, Play, Eye, Check } from "lucide-react";
import { useState } from "react";
import { ProfileTemplate1 } from "@/components/profile/ProfileTemplate1";
import { ProfileTemplate2 } from "@/components/profile/ProfileTemplate2";
import { ProfileTemplate3 } from "@/components/profile/ProfileTemplate3";

interface Work {
  id: string;
  title: string;
  description: string;
  location: string;
  cost: string;
  deadline: string;
  images: string[];
  videos: string[];
  category: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  expertise: 'beginner' | 'intermediate' | 'expert';
  isActive: boolean;
}

export default function Profile() {
  const { toast } = useToast();
  const [works, setWorks] = useState<Work[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isAddWorkOpen, setIsAddWorkOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState<number>(1);
  const [isTemplatePreviewOpen, setIsTemplatePreviewOpen] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<number>(1);
  const [profileData, setProfileData] = useState({
    companyName: 'Sample Company',
    phone: '(555) 123-4567',
    address: '123 Business St, City, State 12345',
    about: 'We are a leading company providing excellent services to our clients with over 10 years of experience in the industry.'
  });
  const [newWork, setNewWork] = useState<Omit<Work, 'id'>>({
    title: '',
    description: '',
    location: '',
    cost: '',
    deadline: '',
    images: [],
    videos: [],
    category: ''
  });

  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    name: '',
    description: '',
    expertise: 'beginner',
    isActive: true
  });

  const handleAddWork = () => {
    const work: Work = {
      ...newWork,
      id: Date.now().toString()
    };
    setWorks([...works, work]);
    setNewWork({
      title: '',
      description: '',
      location: '',
      cost: '',
      deadline: '',
      images: [],
      videos: [],
      category: ''
    });
    setIsAddWorkOpen(false);
  };

  const handleDeleteWork = (id: string) => {
    setWorks(works.filter(work => work.id !== id));
  };

  const handleAddService = () => {
    const service: Service = {
      ...newService,
      id: Date.now().toString()
    };
    setServices([...services, service]);
    setNewService({
      name: '',
      description: '',
      expertise: 'beginner',
      isActive: true
    });
    setIsAddServiceOpen(false);
    
    toast({
      title: "Service Added",
      description: `${service.name} has been added to your profile.`
    });
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter(service => service.id !== id));
    toast({
      title: "Service Removed",
      description: "Service has been removed from your profile."
    });
  };

  const handleToggleService = (id: string, isActive: boolean) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, isActive } : service
    ));
    
    const serviceName = services.find(s => s.id === id)?.name || 'Service';
    toast({
      title: isActive ? "Service Activated" : "Service Deactivated",
      description: isActive 
        ? `${serviceName} is now visible to the public.`
        : `${serviceName} is now hidden from public view.`
    });
  };

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const handlePreviewTemplate = (templateNumber: number) => {
    setPreviewTemplate(templateNumber);
    setIsTemplatePreviewOpen(true);
  };

  const handleActivateTemplate = (templateNumber: number) => {
    setActiveTemplate(templateNumber);
    setIsTemplatePreviewOpen(false);
  };

  const getTemplateComponent = (templateNumber: number) => {
    const data = { ...profileData, works };
    switch (templateNumber) {
      case 1:
        return <ProfileTemplate1 data={data} />;
      case 2:
        return <ProfileTemplate2 data={data} />;
      case 3:
        return <ProfileTemplate3 data={data} />;
      default:
        return <ProfileTemplate1 data={data} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 lg:ml-0">
          <header className="bg-card border-b border-border shadow-card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-heading text-foreground">
                  Profile Management
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage your business profile and information
                </p>
              </div>
              <Button className="w-full sm:w-auto">
                Save Changes
              </Button>
            </div>
          </header>

          <main className="p-4 sm:p-6">
            <Tabs defaultValue="company" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto">
                <TabsTrigger value="company" className="text-xs sm:text-sm">Company Info</TabsTrigger>
                <TabsTrigger value="services" className="text-xs sm:text-sm">Services</TabsTrigger>
                <TabsTrigger value="portfolio" className="text-xs sm:text-sm">Portfolio</TabsTrigger>
                <TabsTrigger value="templates" className="text-xs sm:text-sm">Templates</TabsTrigger>
                <TabsTrigger value="team" className="text-xs sm:text-sm">Team</TabsTrigger>
              </TabsList>

              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Building2 className="w-5 h-5" />
                      Company Information
                    </CardTitle>
                    <CardDescription>
                      Update your company details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input 
                          id="company-name" 
                          placeholder="Enter company name"
                          value={profileData.companyName}
                          onChange={(e) => setProfileData({...profileData, companyName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="(555) 123-4567"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        placeholder="Enter business address"
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about">About Us</Label>
                      <Textarea 
                        id="about" 
                        placeholder="Describe your business..." 
                        className="min-h-[120px]"
                        value={profileData.about}
                        onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">Services</CardTitle>
                      <CardDescription>
                        Manage the services your business offers
                      </CardDescription>
                    </div>
                    <Dialog open={isAddServiceOpen} onOpenChange={setIsAddServiceOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full sm:w-auto">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Service
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Add New Service</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="service-name">Service Name</Label>
                            <Input 
                              id="service-name"
                              placeholder="e.g., Web Development, Photography"
                              value={newService.name}
                              onChange={(e) => setNewService({...newService, name: e.target.value})}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="service-description">Description</Label>
                            <Textarea 
                              id="service-description"
                              placeholder="Describe what this service includes..."
                              className="min-h-[100px]"
                              value={newService.description}
                              onChange={(e) => setNewService({...newService, description: e.target.value})}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="expertise-level">Expertise Level</Label>
                            <Select value={newService.expertise} onValueChange={(value: 'beginner' | 'intermediate' | 'expert') => setNewService({...newService, expertise: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select expertise level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="expert">Expert</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <Label htmlFor="service-active">Active Service</Label>
                              <p className="text-sm text-muted-foreground">
                                When active, this service will be visible to the public
                              </p>
                            </div>
                            <Switch 
                              id="service-active"
                              checked={newService.isActive}
                              onCheckedChange={(checked) => setNewService({...newService, isActive: checked})}
                            />
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button 
                              variant="outline" 
                              onClick={() => setIsAddServiceOpen(false)}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button 
                              onClick={handleAddService}
                              disabled={!newService.name.trim()}
                              className="flex-1"
                            >
                              Add Service
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {services.length > 0 ? (
                        <div className="grid gap-4">
                          {services.map((service) => (
                            <div key={service.id} className="border rounded-lg p-4 space-y-3">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                <div className="space-y-1 flex-1">
                                  <h3 className="font-medium text-foreground">{service.name}</h3>
                                  <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className={getExpertiseColor(service.expertise)}>
                                    {service.expertise.charAt(0).toUpperCase() + service.expertise.slice(1)}
                                  </Badge>
                                  <Button
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleDeleteService(service.id)}
                                    className="text-destructive hover:text-destructive"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="flex items-center gap-2">
                                  <Eye className={`w-4 h-4 ${service.isActive ? 'text-green-600' : 'text-gray-400'}`} />
                                  <span className="text-sm font-medium">
                                    {service.isActive ? 'Visible to Public' : 'Hidden from Public'}
                                  </span>
                                </div>
                                <Switch 
                                  checked={service.isActive}
                                  onCheckedChange={(checked) => handleToggleService(service.id, checked)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No services added yet. Click "Add Service" to get started.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio">
                <Card>
                  <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">Portfolio & Works</CardTitle>
                      <CardDescription>
                        Showcase your completed projects with details
                      </CardDescription>
                    </div>
                    <Dialog open={isAddWorkOpen} onOpenChange={setIsAddWorkOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full sm:w-auto">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Work
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Add New Work</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="work-title">Project Title</Label>
                              <Input 
                                id="work-title"
                                placeholder="Enter project title"
                                value={newWork.title}
                                onChange={(e) => setNewWork({...newWork, title: e.target.value})}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="work-category">Category</Label>
                              <Input 
                                id="work-category"
                                placeholder="e.g., Web Design, Photography"
                                value={newWork.category}
                                onChange={(e) => setNewWork({...newWork, category: e.target.value})}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="work-description">Description</Label>
                            <Textarea 
                              id="work-description"
                              placeholder="Describe the project details..."
                              className="min-h-[100px]"
                              value={newWork.description}
                              onChange={(e) => setNewWork({...newWork, description: e.target.value})}
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="work-location">Location</Label>
                              <Input 
                                id="work-location"
                                placeholder="Project location"
                                value={newWork.location}
                                onChange={(e) => setNewWork({...newWork, location: e.target.value})}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="work-cost">Cost</Label>
                              <Input 
                                id="work-cost"
                                placeholder="$0.00"
                                value={newWork.cost}
                                onChange={(e) => setNewWork({...newWork, cost: e.target.value})}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="work-deadline">Deadline</Label>
                              <Input 
                                id="work-deadline"
                                type="date"
                                value={newWork.deadline}
                                onChange={(e) => setNewWork({...newWork, deadline: e.target.value})}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Media Upload</Label>
                            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                              <Camera className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground mb-2">
                                Upload images and videos for this project
                              </p>
                              <Button variant="outline" size="sm">
                                <Camera className="w-4 h-4 mr-2" />
                                Choose Files
                              </Button>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsAddWorkOpen(false)} className="w-full sm:w-auto">
                              Cancel
                            </Button>
                            <Button onClick={handleAddWork} className="w-full sm:w-auto">
                              Add Work
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent>
                    {works.length === 0 ? (
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground mb-4">
                          No works added yet. Start building your portfolio by adding your first project.
                        </p>
                        <Button onClick={() => setIsAddWorkOpen(true)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Your First Work
                        </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {works.map((work) => (
                          <Card key={work.id} className="overflow-hidden">
                            <div className="aspect-video bg-muted relative group">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Camera className="w-8 h-8 text-muted-foreground" />
                              </div>
                              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex gap-1">
                                  <Button size="icon" variant="secondary" className="h-8 w-8">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    size="icon" 
                                    variant="destructive" 
                                    className="h-8 w-8"
                                    onClick={() => handleDeleteWork(work.id)}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="font-semibold text-sm sm:text-base truncate">{work.title}</h3>
                                {work.category && (
                                  <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                                    {work.category}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                {work.description}
                              </p>
                              <div className="space-y-2 text-xs">
                                {work.location && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <MapPin className="w-3 h-3 flex-shrink-0" />
                                    <span className="truncate">{work.location}</span>
                                  </div>
                                )}
                                {work.cost && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <DollarSign className="w-3 h-3 flex-shrink-0" />
                                    <span>{work.cost}</span>
                                  </div>
                                )}
                                {work.deadline && (
                                  <div className="flex items-center gap-1 text-muted-foreground">
                                    <Calendar className="w-3 h-3 flex-shrink-0" />
                                    <span>{new Date(work.deadline).toLocaleDateString()}</span>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Profile Templates</CardTitle>
                    <CardDescription>
                      Choose how your profile will be displayed to end users. Preview and activate your preferred template.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((templateNumber) => (
                        <Card key={templateNumber} className={`relative overflow-hidden transition-all ${
                          activeTemplate === templateNumber ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                        }`}>
                          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative group cursor-pointer"
                               onClick={() => handlePreviewTemplate(templateNumber)}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <Eye className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                  Template {templateNumber}
                                </p>
                              </div>
                            </div>
                            {activeTemplate === templateNumber && (
                              <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                                <Check className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-sm">
                                  {templateNumber === 1 ? 'Classic' : templateNumber === 2 ? 'Modern' : 'Premium'} Template
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {templateNumber === 1 ? 'Clean and professional' : 
                                   templateNumber === 2 ? 'Sidebar layout design' : 
                                   'Hero section with gradient'}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => handlePreviewTemplate(templateNumber)}>
                                  <Eye className="w-3 h-3" />
                                </Button>
                                {activeTemplate !== templateNumber && (
                                  <Button size="sm" onClick={() => handleActivateTemplate(templateNumber)}>
                                    Activate
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-medium text-sm">Currently Active: 
                          {activeTemplate === 1 ? ' Classic' : activeTemplate === 2 ? ' Modern' : ' Premium'} Template
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This template is currently being used to display your profile to end users.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Team Members</CardTitle>
                    <CardDescription>
                      Manage your team members and their information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full sm:w-auto">
                        <User className="w-4 h-4 mr-2" />
                        Add Team Member
                      </Button>
                      <div className="text-center py-8 text-muted-foreground">
                        No team members added yet. Click "Add Team Member" to get started.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>

      {/* Template Preview Dialog */}
      <Dialog open={isTemplatePreviewOpen} onOpenChange={setIsTemplatePreviewOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle>
                Template {previewTemplate} Preview - {
                  previewTemplate === 1 ? 'Classic' : 
                  previewTemplate === 2 ? 'Modern' : 
                  'Premium'
                }
              </DialogTitle>
              <div className="flex gap-2">
                {activeTemplate !== previewTemplate && (
                  <Button onClick={() => handleActivateTemplate(previewTemplate)}>
                    <Check className="w-4 h-4 mr-2" />
                    Activate This Template
                  </Button>
                )}
                <Button variant="outline" onClick={() => setIsTemplatePreviewOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </DialogHeader>
          <div className="bg-muted/20">
            {getTemplateComponent(previewTemplate)}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
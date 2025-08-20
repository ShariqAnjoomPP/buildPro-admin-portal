import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Camera, Plus, User } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 lg:ml-0">
          <header className="bg-card border-b border-border shadow-card">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  Profile Management
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage your business profile and information
                </p>
              </div>
            </div>
          </header>

          <main className="p-6">
            <Tabs defaultValue="company" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="company">Company Info</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>

              <TabsContent value="company">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
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
                        <Input id="company-name" placeholder="Enter company name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Enter business address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about">About Us</Label>
                      <Textarea 
                        id="about" 
                        placeholder="Describe your business..." 
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>Services</CardTitle>
                    <CardDescription>
                      Manage the services your business offers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Service
                      </Button>
                      <div className="text-center py-8 text-muted-foreground">
                        No services added yet. Click "Add Service" to get started.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <CardDescription>
                      Showcase your work with photos and videos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button>
                        <Camera className="w-4 h-4 mr-2" />
                        Upload Media
                      </Button>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">
                          Drag and drop images here, or click "Upload Media" to add to your portfolio
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>
                      Manage your team members and their information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button>
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
    </div>
  );
}
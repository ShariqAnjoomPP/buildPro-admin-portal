import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Users, Camera, DollarSign, Calendar, Mail, Star, Award, Globe, User } from "lucide-react";

interface Work {
  id: string;
  title: string;
  description: string;
  location: string;
  cost: string;
  deadline: string;
  category: string;
  images?: string[];
  videos?: string[];
}

interface Service {
  id: string;
  name: string;
  description: string;
  expertise: 'beginner' | 'intermediate' | 'expert';
  isActive: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  department?: string;
  isActive: boolean;
}

interface ProfileData {
  companyName: string;
  phone: string;
  address: string;
  about: string;
  works: Work[];
  services?: Service[];
  teamMembers?: TeamMember[];
}

interface ProfileTemplate1Props {
  data: ProfileData;
}

export function ProfileTemplate1({ data }: ProfileTemplate1Props) {
  const activeServices = data.services?.filter(service => service.isActive) || [];
  const activeTeamMembers = data.teamMembers?.filter(member => member.isActive) || [];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto space-y-16 p-4 sm:p-6 lg:p-8">
        {/* Hero Section */}
        <div className="text-center space-y-8 py-16">
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-dramatic">
              <Building2 className="w-16 h-16 sm:w-20 sm:h-20 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-secondary-foreground rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              {data.companyName || "Your Company"}
            </h1>
            
            {data.about && (
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body">
                {data.about}
              </p>
            )}
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {data.phone && (
                <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{data.phone}</span>
                </div>
              )}
              {data.address && (
                <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{data.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Services Section */}
        {activeServices.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground flex items-center justify-center gap-4">
                <Star className="w-8 h-8 text-primary" />
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeServices.map((service) => (
                <Card key={service.id} className="group overflow-hidden border-0 shadow-card hover:shadow-dramatic transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading font-semibold text-foreground text-lg">{service.name}</h3>
                      <Badge className={`text-xs ${
                        service.expertise === 'expert' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' :
                        service.expertise === 'intermediate' ? 'bg-warning/20 text-warning' :
                        'bg-success/20 text-success'
                      }`}>
                        {service.expertise}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {data.works.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground flex items-center justify-center gap-4">
                <Camera className="w-8 h-8 text-primary" />
                Our Portfolio
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.works.map((work) => (
                <Card key={work.id} className="group overflow-hidden border-0 shadow-card hover:shadow-dramatic transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-muted-foreground group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {work.category && (
                      <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground shadow-card">
                        {work.category}
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-card">
                        <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{work.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{work.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      {work.location && (
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-body">{work.location}</span>
                        </div>
                      )}
                      {work.cost && (
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-sm font-body font-medium">{work.cost}</span>
                        </div>
                      )}
                      {work.deadline && (
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-warning" />
                          </div>
                          <span className="text-sm font-body">{new Date(work.deadline).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTeamMembers.length > 0 && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground flex items-center justify-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                Our Team
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {activeTeamMembers.map((member) => (
                <Card key={member.id} className="text-center group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-card">
                      <User className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground font-body">{member.role}</p>
                      {member.department && (
                        <Badge variant="outline" className="text-xs">
                          {member.department}
                        </Badge>
                      )}
                    </div>
                    {(member.email || member.phone) && (
                      <div className="pt-2 border-t space-y-1">
                        {member.email && (
                          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <Mail className="w-3 h-3" />
                            <span>{member.email}</span>
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            <span>{member.phone}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {data.works.length === 0 && activeServices.length === 0 && activeTeamMembers.length === 0 && (
          <div className="text-center py-24 space-y-6">
            <div className="w-24 h-24 bg-muted/50 rounded-full mx-auto flex items-center justify-center">
              <Building2 className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-heading font-semibold text-foreground">Welcome to {data.companyName || "Your Company"}</h3>
              <p className="text-muted-foreground font-body">Start building your profile to showcase your work, services, and team!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
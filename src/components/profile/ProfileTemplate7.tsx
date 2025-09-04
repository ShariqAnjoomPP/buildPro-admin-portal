import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Users, Camera, DollarSign, Calendar, Mail, Star, User, Globe, Award } from "lucide-react";

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

interface ProfileTemplate7Props {
  data: ProfileData;
}

export function ProfileTemplate7({ data }: ProfileTemplate7Props) {
  const activeServices = data.services?.filter(service => service.isActive) || [];
  const activeTeamMembers = data.teamMembers?.filter(member => member.isActive) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Split Screen Layout */}
      <div className="lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Company Info */}
        <div className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg space-y-8">
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <Building2 className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
                {data.companyName || "Your Company"}
              </h1>
              
              {data.about && (
                <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed font-body">
                  {data.about}
                </p>
              )}
              
              <div className="space-y-4 pt-4">
                {data.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium">{data.phone}</span>
                  </div>
                )}
                {data.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium">{data.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="p-8 lg:p-16 overflow-y-auto">
          <div className="max-w-2xl space-y-16">
            {/* Services */}
            {activeServices.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground">Services</h2>
                </div>
                
                <div className="space-y-6">
                  {activeServices.map((service) => (
                    <Card key={service.id} className="border-l-4 border-l-primary shadow-card hover:shadow-elevated transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-heading font-semibold text-foreground">{service.name}</h3>
                          <Badge className={`${
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

            {/* Portfolio */}
            {data.works.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-card">
                    <Camera className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground">Portfolio</h2>
                </div>
                
                <div className="space-y-6">
                  {data.works.map((work) => (
                    <Card key={work.id} className="shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2">
                          <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                            <Camera className="w-16 h-16 text-muted-foreground" />
                          </div>
                          <div className="p-6 space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-heading font-semibold text-foreground">{work.title}</h3>
                                {work.category && (
                                  <Badge variant="outline">{work.category}</Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground font-body">{work.description}</p>
                            </div>
                            
                            <div className="space-y-2">
                              {work.location && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <MapPin className="w-4 h-4" />
                                  <span>{work.location}</span>
                                </div>
                              )}
                              {work.cost && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <DollarSign className="w-4 h-4" />
                                  <span>{work.cost}</span>
                                </div>
                              )}
                              {work.deadline && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4" />
                                  <span>{new Date(work.deadline).toLocaleDateString()}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {activeTeamMembers.length > 0 && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground">Our Team</h2>
                </div>
                
                <div className="grid gap-6">
                  {activeTeamMembers.map((member) => (
                    <Card key={member.id} className="shadow-card hover:shadow-elevated transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card flex-shrink-0">
                            <User className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div>
                              <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
                              <p className="text-muted-foreground font-body">{member.role}</p>
                              {member.department && (
                                <Badge variant="outline" className="mt-1">{member.department}</Badge>
                              )}
                            </div>
                            {(member.email || member.phone) && (
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                {member.email && (
                                  <div className="flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    <span>{member.email}</span>
                                  </div>
                                )}
                                {member.phone && (
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-4 h-4" />
                                    <span>{member.phone}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
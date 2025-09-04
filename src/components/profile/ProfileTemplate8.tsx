import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Users, Camera, DollarSign, Calendar, Mail, Star, User, Briefcase, Award } from "lucide-react";

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

interface ProfileTemplate8Props {
  data: ProfileData;
}

export function ProfileTemplate8({ data }: ProfileTemplate8Props) {
  const activeServices = data.services?.filter(service => service.isActive) || [];
  const activeTeamMembers = data.teamMembers?.filter(member => member.isActive) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/5 to-secondary/5">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary to-secondary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-primary-foreground/10 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20">
              <Building2 className="w-16 h-16 text-primary-foreground" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary-foreground">
                {data.companyName || "Your Company"}
              </h1>
              
              {data.about && (
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-body">
                  {data.about}
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Contact Bar */}
      <div className="bg-card border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8">
            {data.phone && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Phone</div>
                  <div className="text-foreground font-medium">{data.phone}</div>
                </div>
              </div>
            )}
            {data.address && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Address</div>
                  <div className="text-foreground font-medium">{data.address}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Services Grid */}
        {activeServices.length > 0 && (
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-card">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">Our Services</h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeServices.map((service, index) => (
                <Card key={service.id} className={`group border-0 shadow-card hover:shadow-dramatic transition-all duration-500 hover:-translate-y-2 ${
                  index % 3 === 0 ? 'lg:scale-105' : ''
                }`}>
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-xl font-heading font-bold text-foreground">{service.name}</h3>
                        <Badge className={`text-xs ${
                          service.expertise === 'expert' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' :
                          service.expertise === 'intermediate' ? 'bg-warning/20 text-warning' :
                          'bg-success/20 text-success'
                        }`}>
                          {service.expertise}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Portfolio Timeline */}
        {data.works.length > 0 && (
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-card">
                  <Camera className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">Portfolio Showcase</h2>
              <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
              
              <div className="space-y-12">
                {data.works.map((work, index) => (
                  <div key={work.id} className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card"></div>
                    
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <Card className="shadow-card hover:shadow-dramatic transition-all duration-500 hover:scale-105">
                        <CardContent className="p-0 overflow-hidden">
                          <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                            <Camera className="w-16 h-16 text-muted-foreground" />
                          </div>
                          
                          <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                              <h3 className="text-xl font-heading font-bold text-foreground">{work.title}</h3>
                              {work.category && (
                                <Badge className="bg-primary/10 text-primary">{work.category}</Badge>
                              )}
                            </div>
                            
                            <p className="text-muted-foreground font-body leading-relaxed">{work.description}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
                              {work.location && (
                                <div className="flex items-center gap-2 text-sm">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span className="text-muted-foreground">{work.location}</span>
                                </div>
                              )}
                              {work.cost && (
                                <div className="flex items-center gap-2 text-sm">
                                  <DollarSign className="w-4 h-4 text-secondary" />
                                  <span className="text-muted-foreground font-medium">{work.cost}</span>
                                </div>
                              )}
                              {work.deadline && (
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="w-4 h-4 text-warning" />
                                  <span className="text-muted-foreground">{new Date(work.deadline).toLocaleDateString()}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTeamMembers.length > 0 && (
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-card">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">Meet Our Team</h2>
              <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {activeTeamMembers.map((member) => (
                <Card key={member.id} className="text-center group border-0 shadow-card hover:shadow-dramatic transition-all duration-500 hover:-translate-y-3 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                      <User className="w-12 h-12 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-lg font-heading font-bold text-foreground">{member.name}</h3>
                        <p className="text-muted-foreground font-body">{member.role}</p>
                        {member.department && (
                          <Badge variant="outline" className="mt-2">{member.department}</Badge>
                        )}
                      </div>
                      
                      {(member.email || member.phone) && (
                        <div className="space-y-2 pt-3 border-t">
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
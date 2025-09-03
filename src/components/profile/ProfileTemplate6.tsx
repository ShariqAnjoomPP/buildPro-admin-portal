import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Camera, DollarSign, Calendar, ArrowRight, Star, Briefcase } from "lucide-react";

interface Work {
  id: string;
  title: string;
  description: string;
  location: string;
  cost: string;
  deadline: string;
  category: string;
}

interface ProfileData {
  companyName: string;
  phone: string;
  address: string;
  about: string;
  works: Work[];
}

interface ProfileTemplate6Props {
  data: ProfileData;
}

export function ProfileTemplate6({ data }: ProfileTemplate6Props) {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Minimalist Header */}
      <div className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Company Info */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                    <Building2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                      {data.companyName || "Your Company"}
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-5 h-5 text-warning fill-current" />
                      <span className="text-muted-foreground font-body">Premium Construction Partner</span>
                    </div>
                  </div>
                </div>

                {data.about && (
                  <p className="text-xl text-muted-foreground leading-relaxed font-body max-w-4xl">
                    {data.about}
                  </p>
                )}

                {/* Clean Contact Info */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {data.phone && (
                    <div className="flex items-center gap-3 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-medium text-foreground font-body">{data.phone}</div>
                      </div>
                    </div>
                  )}
                  {data.address && (
                    <div className="flex items-center gap-3 group">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-medium text-foreground font-body">{data.address}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:col-span-4 space-y-4">
              <Card className="bg-gradient-subtle border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{data.works.length}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Completed Projects</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-subtle border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-subtle border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-success mb-1">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Portfolio Section */}
      {data.works.length > 0 ? (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex items-center justify-between mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  Portfolio
                </h2>
                <p className="text-muted-foreground font-body">Our recent work and achievements</p>
              </div>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                {data.works.length} Projects
              </Badge>
            </div>

            {/* Minimalist Grid */}
            <div className="space-y-12">
              {data.works.map((work, index) => (
                <Card key={work.id} className="group overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border-0 bg-card/50">
                  <div className={`grid gap-0 ${index % 2 === 0 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-2'}`}>
                    
                    {/* Image Section */}
                    <div className={`aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-20 h-20 text-muted-foreground group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {work.category && (
                        <Badge className="absolute top-6 right-6 bg-primary/95 text-primary-foreground shadow-card">
                          {work.category}
                        </Badge>
                      )}

                      {/* Project Number */}
                      <div className="absolute bottom-6 left-6">
                        <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card">
                          <span className="text-lg font-bold text-foreground">#{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-12 flex flex-col justify-center space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed font-body text-lg">
                          {work.description}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {work.location && (
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground uppercase tracking-wide">Location</div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium text-foreground font-body">{work.location}</span>
                            </div>
                          </div>
                        )}
                        
                        {work.cost && (
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground uppercase tracking-wide">Investment</div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-secondary" />
                              <span className="font-medium text-foreground font-body">{work.cost}</span>
                            </div>
                          </div>
                        )}
                        
                        {work.deadline && (
                          <div className="space-y-2 sm:col-span-2">
                            <div className="text-sm text-muted-foreground uppercase tracking-wide">Completion Date</div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-warning" />
                              <span className="font-medium text-foreground font-body">{new Date(work.deadline).toLocaleDateString()}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* View Project Button */}
                      <div className="pt-4">
                        <button className="group/btn flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                          View Project Details
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="py-32">
          <div className="max-w-md mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-muted/20 rounded-2xl mx-auto flex items-center justify-center">
              <Briefcase className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-foreground">Portfolio in Progress</h3>
              <p className="text-muted-foreground font-body">
                We're working on showcasing our amazing projects. Check back soon for updates.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Camera, DollarSign, Calendar, Star, Award, Users } from "lucide-react";

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

interface ProfileTemplate4Props {
  data: ProfileData;
}

export function ProfileTemplate4({ data }: ProfileTemplate4Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      {/* Modern Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Company Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Company Avatar & Basic Info */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-6">
              <div className="relative inline-block">
                <div className="w-36 h-36 bg-gradient-secondary rounded-3xl mx-auto lg:mx-0 flex items-center justify-center shadow-dramatic">
                  <Building2 className="w-18 h-18 text-secondary-foreground" />
                </div>
                <div className="absolute -bottom-3 -right-3 flex space-x-2">
                  <div className="w-8 h-8 bg-success rounded-xl border-2 border-background flex items-center justify-center">
                    <Star className="w-4 h-4 text-success-foreground" />
                  </div>
                  <div className="w-8 h-8 bg-warning rounded-xl border-2 border-background flex items-center justify-center">
                    <Award className="w-4 h-4 text-warning-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  {data.companyName || "Your Company"}
                </h1>
                
                {/* Quick Stats */}
                <div className="flex justify-center lg:justify-start gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{data.works.length}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">4.9</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Success</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: About */}
            <div className="lg:col-span-5 space-y-6">
              {data.about && (
                <div className="space-y-4">
                  <h2 className="text-xl font-heading font-semibold text-foreground flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    About Our Company
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed text-lg">
                    {data.about}
                  </p>
                </div>
              )}

              {/* Skills/Specializations */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">Specializations</h3>
                <div className="flex flex-wrap gap-3">
                  {data.works.slice(0, 5).map((work) => (
                    work.category && (
                      <Badge key={work.id} variant="outline" className="px-4 py-2 bg-card/50 border-primary/20">
                        {work.category}
                      </Badge>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Cards */}
            <div className="lg:col-span-3 space-y-4">
              {data.phone && (
                <Card className="bg-gradient-primary text-primary-foreground shadow-card hover:shadow-elevated transition-all hover-scale">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl mx-auto flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs opacity-80 uppercase tracking-wide">Call Us</div>
                      <div className="font-heading font-medium">{data.phone}</div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {data.address && (
                <Card className="bg-gradient-secondary text-secondary-foreground shadow-card hover:shadow-elevated transition-all hover-scale">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary-foreground/20 rounded-xl mx-auto flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs opacity-80 uppercase tracking-wide">Visit Us</div>
                      <div className="font-heading font-medium text-center">{data.address}</div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      {data.works.length > 0 ? (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-card">
                <Camera className="w-8 h-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  Our Portfolio
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Explore our latest projects and see how we bring ideas to life
              </p>
            </div>

            {/* Masonry-style Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {data.works.map((work, index) => (
                <Card key={work.id} className="group break-inside-avoid mb-8 overflow-hidden shadow-card hover:shadow-dramatic transition-all duration-500 bg-card/80 backdrop-blur-sm border-0">
                  
                  {/* Dynamic Height Image Area */}
                  <div className={`${index % 3 === 0 ? 'aspect-[4/5]' : index % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'} bg-gradient-to-br from-muted via-muted/80 to-muted/60 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-muted-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {work.category && (
                      <Badge className="absolute top-4 left-4 bg-primary/95 text-primary-foreground shadow-card">
                        {work.category}
                      </Badge>
                    )}

                    {/* Overlay Content */}
                    <div className="absolute inset-x-4 bottom-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-background/95 backdrop-blur-md p-4 rounded-xl shadow-elevated">
                        <h3 className="font-heading font-bold text-foreground mb-1">{work.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 font-body">{work.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      {work.location && (
                        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-body text-foreground">{work.location}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        {work.cost && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-body font-medium text-foreground">{work.cost}</span>
                          </div>
                        )}
                        {work.deadline && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-warning" />
                            <span className="text-xs text-muted-foreground">{new Date(work.deadline).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-32 space-y-8">
          <div className="w-32 h-32 bg-gradient-to-br from-muted/20 to-muted/10 rounded-3xl mx-auto flex items-center justify-center">
            <Camera className="w-16 h-16 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-foreground">Portfolio Coming Soon</h3>
            <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
              We're preparing some amazing projects to showcase. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
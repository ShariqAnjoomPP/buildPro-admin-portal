import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Camera, DollarSign, Calendar } from "lucide-react";

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

interface ProfileTemplate2Props {
  data: ProfileData;
}

export function ProfileTemplate2({ data }: ProfileTemplate2Props) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Enhanced Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Company Card */}
            <Card className="border-2 border-primary/20 shadow-elevated bg-gradient-subtle sticky top-8">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-secondary rounded-2xl mx-auto flex items-center justify-center shadow-card">
                    <Building2 className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-background"></div>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-2xl font-heading font-bold text-foreground">
                    {data.companyName || "Your Company"}
                  </h1>
                  
                  <div className="space-y-3">
                    {data.phone && (
                      <div className="flex items-center justify-center gap-3 p-3 bg-primary/5 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-body font-medium text-foreground">{data.phone}</span>
                      </div>
                    )}
                    {data.address && (
                      <div className="flex items-center justify-center gap-3 p-3 bg-secondary/5 rounded-lg">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-sm font-body font-medium text-foreground text-center">{data.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Card */}
            {data.about && (
              <Card className="shadow-card bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-heading font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    About Us
                  </h2>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{data.about}</p>
                </CardContent>
              </Card>
            )}

            {/* Stats Card */}
            <Card className="shadow-card bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading font-semibold">Portfolio Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{data.works.length}</div>
                    <div className="text-xs opacity-80">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-xs opacity-80">Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Main Content */}
          <div className="xl:col-span-3">
            {data.works.length > 0 ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-heading font-bold text-foreground flex items-center gap-3">
                    <Camera className="w-8 h-8 text-primary" />
                    Portfolio
                  </h2>
                  <Badge variant="outline" className="px-4 py-2">
                    {data.works.length} Projects
                  </Badge>
                </div>
                
                <div className="space-y-8">
                  {data.works.map((work, index) => (
                    <Card key={work.id} className="group overflow-hidden shadow-card hover:shadow-dramatic transition-all duration-500 bg-card/80 backdrop-blur-sm">
                      <div className={`grid gap-0 ${index % 2 === 0 ? 'grid-cols-1 lg:grid-cols-5' : 'grid-cols-1 lg:grid-cols-5'}`}>
                        <div className={`aspect-video lg:aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden ${index % 2 === 0 ? 'lg:col-span-2' : 'lg:col-span-2 lg:order-2'}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Camera className="w-12 h-12 text-muted-foreground group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {work.category && (
                            <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground shadow-card">
                              {work.category}
                            </Badge>
                          )}
                        </div>
                        
                        <div className={`p-8 space-y-6 ${index % 2 === 0 ? 'lg:col-span-3' : 'lg:col-span-3 lg:order-1'}`}>
                          <div className="space-y-3">
                            <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                              {work.title}
                            </h3>
                            <p className="text-muted-foreground font-body leading-relaxed">{work.description}</p>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {work.location && (
                              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground">Location</div>
                                  <div className="text-sm font-medium text-foreground">{work.location}</div>
                                </div>
                              </div>
                            )}
                            {work.cost && (
                              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                                  <DollarSign className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground">Cost</div>
                                  <div className="text-sm font-medium text-foreground">{work.cost}</div>
                                </div>
                              </div>
                            )}
                            {work.deadline && (
                              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                                  <Calendar className="w-5 h-5 text-warning" />
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground">Deadline</div>
                                  <div className="text-sm font-medium text-foreground">{new Date(work.deadline).toLocaleDateString()}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-24 space-y-6">
                <div className="w-24 h-24 bg-muted/20 rounded-full mx-auto flex items-center justify-center">
                  <Camera className="w-12 h-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground">No Portfolio Items</h3>
                  <p className="text-muted-foreground font-body">Showcase your work to attract more clients</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
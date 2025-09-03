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

interface ProfileTemplate3Props {
  data: ProfileData;
}

export function ProfileTemplate3({ data }: ProfileTemplate3Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-12">
            <div className="relative inline-block">
              <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-primary rounded-3xl mx-auto flex items-center justify-center shadow-dramatic transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Building2 className="w-20 h-20 sm:w-24 sm:h-24 text-primary-foreground" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-2xl border-4 border-background flex items-center justify-center shadow-card">
                <div className="w-3 h-3 bg-secondary-foreground rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                {data.companyName || "Your Company"}
              </h1>
              
              {data.about && (
                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-body max-w-3xl mx-auto">
                  {data.about}
                </p>
              )}
              
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                {data.phone && (
                  <div className="group flex items-center gap-4 bg-card/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-card hover:shadow-elevated transition-all hover-scale">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Phone</div>
                      <div className="text-foreground font-medium font-body">{data.phone}</div>
                    </div>
                  </div>
                )}
                {data.address && (
                  <div className="group flex items-center gap-4 bg-card/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-card hover:shadow-elevated transition-all hover-scale">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Location</div>
                      <div className="text-foreground font-medium font-body">{data.address}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Portfolio Section */}
      {data.works.length > 0 ? (
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-primary-foreground" />
                </div>
                Featured Works
              </h2>
              <div className="w-32 h-2 bg-gradient-primary mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Discover our portfolio of exceptional projects and creative solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.works.map((work, index) => (
                <Card key={work.id} className={`group overflow-hidden border-0 shadow-card hover:shadow-dramatic transition-all duration-700 hover:-translate-y-4 bg-card/50 backdrop-blur-sm ${
                  index === 0 ? 'lg:col-span-2 xl:col-span-1' : ''
                } ${index === 1 ? 'xl:col-span-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted via-muted/80 to-muted/60 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-muted-foreground group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {work.category && (
                      <Badge className="absolute top-6 right-6 bg-primary/95 text-primary-foreground shadow-card px-4 py-2 text-sm">
                        {work.category}
                      </Badge>
                    )}
                    
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                      <div className="bg-background/95 backdrop-blur-md p-6 rounded-2xl shadow-elevated">
                        <h3 className="font-heading font-bold text-foreground text-xl mb-2">{work.title}</h3>
                        <p className="text-muted-foreground line-clamp-2 font-body">{work.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      {work.location && (
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-card">
                            <MapPin className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Location</div>
                            <div className="text-foreground font-body font-medium">{work.location}</div>
                          </div>
                        </div>
                      )}
                      {work.cost && (
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                          <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-card">
                            <DollarSign className="w-5 h-5 text-secondary-foreground" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Investment</div>
                            <div className="text-foreground font-body font-bold text-lg">{work.cost}</div>
                          </div>
                        </div>
                      )}
                      {work.deadline && (
                        <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-warning/5 to-transparent rounded-xl">
                          <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center shadow-card">
                            <Calendar className="w-5 h-5 text-warning" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Completion</div>
                            <div className="text-foreground font-body font-medium">{new Date(work.deadline).toLocaleDateString()}</div>
                          </div>
                        </div>
                      )}
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
            <h3 className="text-2xl font-heading font-bold text-foreground">No Portfolio Items</h3>
            <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
              Start building your portfolio to showcase your amazing work and attract more clients
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
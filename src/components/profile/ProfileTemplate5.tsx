import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Camera, DollarSign, Calendar, Zap, Sparkles, Target } from "lucide-react";

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

interface ProfileTemplate5Props {
  data: ProfileData;
}

export function ProfileTemplate5({ data }: ProfileTemplate5Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      
      {/* Innovative Header with Geometric Shapes */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-warning/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-12">
            
            {/* Floating Company Card */}
            <div className="relative inline-block">
              <Card className="bg-card/80 backdrop-blur-md shadow-dramatic border-0 transform hover:scale-105 transition-all duration-500">
                <CardContent className="p-12 space-y-8">
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center shadow-card transform rotate-6 hover:rotate-0 transition-transform duration-500">
                      <Building2 className="w-14 h-14 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full border-2 border-background flex items-center justify-center animate-pulse">
                      <Sparkles className="w-4 h-4 text-success-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
                      {data.companyName || "Your Company"}
                    </h1>
                    
                    {data.about && (
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
                        {data.about}
                      </p>
                    )}
                  </div>

                  {/* Animated Contact Pills */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {data.phone && (
                      <div className="group flex items-center gap-3 bg-gradient-primary px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all hover-scale">
                        <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                          <Phone className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-primary-foreground font-medium font-body">{data.phone}</span>
                      </div>
                    )}
                    {data.address && (
                      <div className="group flex items-center gap-3 bg-gradient-secondary px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all hover-scale">
                        <div className="w-8 h-8 bg-secondary-foreground/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                          <MapPin className="w-4 h-4 text-secondary-foreground" />
                        </div>
                        <span className="text-secondary-foreground font-medium font-body">{data.address}</span>
                      </div>
                    )}
                  </div>

                  {/* Modern Stats Bar */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                        <Target className="w-5 h-5" />
                        {data.works.length}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary flex items-center justify-center gap-1">
                        <Zap className="w-5 h-5" />
                        5+
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success flex items-center justify-center gap-1">
                        <Sparkles className="w-5 h-5" />
                        100%
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Quality</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Innovative Portfolio Grid */}
      {data.works.length > 0 ? (
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Creative Section Header */}
            <div className="text-center mb-20 space-y-8">
              <div className="relative inline-block">
                <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                  Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creative</span> Works
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-primary rounded-full opacity-50"></div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                Every project tells a story. Here are some of our favorites.
              </p>
            </div>

            {/* Dynamic Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[300px]">
              {data.works.map((work, index) => {
                // Dynamic grid span classes for interesting layouts
                let gridClass = "md:col-span-2 lg:col-span-2";
                if (index === 0) gridClass = "md:col-span-4 lg:col-span-3 md:row-span-2";
                else if (index === 1) gridClass = "md:col-span-2 lg:col-span-3";
                else if (index === 2) gridClass = "md:col-span-2 lg:col-span-2";
                else if (index % 4 === 0) gridClass = "md:col-span-2 lg:col-span-2 md:row-span-2";

                return (
                  <Card key={work.id} className={`group overflow-hidden shadow-card hover:shadow-dramatic transition-all duration-700 hover:-translate-y-2 bg-card/60 backdrop-blur-sm border-0 ${gridClass}`}>
                    <div className="relative h-full">
                      
                      {/* Background with gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-16 h-16 text-muted-foreground group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>

                      {/* Category badge */}
                      {work.category && (
                        <Badge className="absolute top-6 right-6 bg-primary/95 text-primary-foreground shadow-card z-10">
                          {work.category}
                        </Badge>
                      )}

                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="bg-background/95 backdrop-blur-md p-6 rounded-2xl shadow-elevated transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                          <h3 className="font-heading font-bold text-foreground text-xl mb-2">{work.title}</h3>
                          <p className="text-muted-foreground line-clamp-2 font-body mb-4">{work.description}</p>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="space-y-2">
                              {work.location && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span className="font-body">{work.location}</span>
                                </div>
                              )}
                              {work.cost && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <DollarSign className="w-4 h-4 text-secondary" />
                                  <span className="font-body font-medium">{work.cost}</span>
                                </div>
                              )}
                            </div>
                            
                            {work.deadline && (
                              <div className="text-right">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Calendar className="w-4 h-4 text-warning" />
                                  <span className="text-xs font-body">{new Date(work.deadline).toLocaleDateString()}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-32 space-y-12">
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-muted/30 to-muted/10 rounded-full mx-auto flex items-center justify-center">
              <Camera className="w-20 h-20 text-muted-foreground" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">Something Amazing is Coming</h3>
            <p className="text-muted-foreground font-body text-xl max-w-lg mx-auto">
              We're crafting extraordinary projects that will blow your mind. Stay tuned!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
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
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground mb-2">{data.companyName || "Your Company"}</h1>
              <div className="space-y-2 text-sm text-muted-foreground">
                {data.phone && (
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{data.phone}</span>
                  </div>
                )}
                {data.address && (
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-center">{data.address}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {data.about && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-3 text-foreground">About</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{data.about}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {data.works.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Camera className="w-6 h-6" />
                Portfolio
              </h2>
              <div className="space-y-6">
                {data.works.map((work) => (
                  <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="aspect-video md:aspect-square bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-foreground">{work.title}</h3>
                          {work.category && (
                            <Badge variant="outline">{work.category}</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{work.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          {work.location && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{work.location}</span>
                            </div>
                          )}
                          {work.cost && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <DollarSign className="w-4 h-4 text-primary" />
                              <span>{work.cost}</span>
                            </div>
                          )}
                          {work.deadline && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>{new Date(work.deadline).toLocaleDateString()}</span>
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
            <div className="text-center py-12">
              <Camera className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No portfolio items to display</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
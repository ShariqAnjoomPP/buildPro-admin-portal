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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
            <Building2 className="w-16 h-16 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{data.companyName || "Your Company"}</h1>
          {data.about && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">{data.about}</p>
          )}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            {data.phone && (
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Phone className="w-4 h-4" />
                <span>{data.phone}</span>
              </div>
            )}
            {data.address && (
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                <span>{data.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      {data.works.length > 0 && (
        <div className="max-w-7xl mx-auto py-16 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Camera className="w-8 h-8 text-primary" />
              Featured Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.works.map((work, index) => (
              <Card key={work.id} className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index % 3 === 0 ? 'md:col-span-2 xl:col-span-1' : ''
              }`}>
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-muted-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {work.category && (
                    <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                      {work.category}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{work.description}</p>
                  
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    {work.location && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span>{work.location}</span>
                      </div>
                    )}
                    {work.cost && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{work.cost}</span>
                      </div>
                    )}
                    {work.deadline && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-primary" />
                        </div>
                        <span>{new Date(work.deadline).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
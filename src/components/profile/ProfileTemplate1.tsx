import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Phone, Users, Camera, DollarSign, Calendar } from "lucide-react";

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

interface ProfileTemplate1Props {
  data: ProfileData;
}

export function ProfileTemplate1({ data }: ProfileTemplate1Props) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto flex items-center justify-center">
          <Building2 className="w-12 h-12 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{data.companyName || "Your Company"}</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-muted-foreground">
            {data.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.phone}</span>
              </div>
            )}
            {data.address && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      {data.about && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">{data.about}</p>
          </CardContent>
        </Card>
      )}

      {/* Portfolio Section */}
      {data.works.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Our Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.works.map((work) => (
                <div key={work.id} className="group">
                  <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-foreground">{work.title}</h3>
                      {work.category && (
                        <Badge variant="secondary" className="text-xs">
                          {work.category}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{work.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      {work.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {work.location}
                        </div>
                      )}
                      {work.cost && (
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {work.cost}
                        </div>
                      )}
                      {work.deadline && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(work.deadline).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
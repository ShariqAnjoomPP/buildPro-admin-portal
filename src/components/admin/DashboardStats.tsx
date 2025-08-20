import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "15",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    description: "New leads this month"
  },
  {
    title: "Profile Views",
    value: "2,543",
    change: "+8%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Views in the last 30 days"
  },
  {
    title: "Reviews",
    value: "4.8",
    change: "+0.2",
    changeType: "positive" as const,
    icon: Star,
    description: "Average rating (127 reviews)"
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-0.5%",
    changeType: "negative" as const,
    icon: TrendingUp,
    description: "Lead to customer conversion"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-2xl font-bold font-heading text-foreground">
                  {stat.value}
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === 'positive' 
                      ? 'text-success' 
                      : 'text-destructive'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
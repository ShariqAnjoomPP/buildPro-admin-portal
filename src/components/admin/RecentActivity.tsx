import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Eye, User, Star } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "review",
    title: "New review from Sarah Johnson",
    description: "5-star review for kitchen renovation project",
    time: "2 hours ago",
    icon: Star,
    badge: "Review"
  },
  {
    id: 2,
    type: "lead",
    title: "New lead inquiry",
    description: "Michael Chen interested in bathroom remodeling",
    time: "4 hours ago",
    icon: User,
    badge: "Lead"
  },
  {
    id: 3,
    type: "view",
    title: "Profile viewed 25 times",
    description: "Increased visibility from recent SEO optimization",
    time: "6 hours ago",
    icon: Eye,
    badge: "Views"
  },
  {
    id: 4,
    type: "message",
    title: "New message from existing client",
    description: "Follow-up question about warranty coverage",
    time: "1 day ago",
    icon: MessageSquare,
    badge: "Message"
  },
  {
    id: 5,
    type: "review",
    title: "Review response published",
    description: "Thank you response to Alex Thompson's review",
    time: "2 days ago",
    icon: Star,
    badge: "Response"
  }
];

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "review":
      return "default";
    case "lead":
      return "secondary";
    case "view":
      return "outline";
    case "message":
      return "destructive";
    default:
      return "default";
  }
};

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="font-heading text-foreground">Recent Activity</CardTitle>
        <p className="text-sm text-muted-foreground">
          Latest updates and interactions
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                <div className="w-10 h-10 bg-gradient-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">
                      {activity.title}
                    </p>
                    <Badge variant={getBadgeVariant(activity.type)} className="ml-2 text-xs">
                      {activity.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
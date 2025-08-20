import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Upload, MessageSquare, BarChart, Settings } from "lucide-react";

const actions = [
  {
    title: "Add Project",
    description: "Showcase your latest work",
    icon: Plus,
    variant: "default" as const
  },
  {
    title: "Update Services",
    description: "Modify your service offerings",
    icon: Edit,
    variant: "secondary" as const
  },
  {
    title: "Upload Photos",
    description: "Add to your portfolio",
    icon: Upload,
    variant: "outline" as const
  },
  {
    title: "Respond to Reviews",
    description: "Engage with customer feedback",
    icon: MessageSquare,
    variant: "outline" as const
  },
  {
    title: "View Analytics",
    description: "Track your performance",
    icon: BarChart,
    variant: "outline" as const
  },
  {
    title: "Account Settings",
    description: "Manage your profile",
    icon: Settings,
    variant: "outline" as const
  }
];

export function QuickActions() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="font-heading text-foreground">Quick Actions</CardTitle>
        <p className="text-sm text-muted-foreground">
          Common tasks and shortcuts
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant={action.variant}
                className="flex flex-col items-center justify-center h-24 text-center space-y-2 transition-all duration-200 hover:shadow-card hover:scale-105"
              >
                <Icon className="w-5 h-5" />
                <div>
                  <div className="text-sm font-medium">{action.title}</div>
                  <div className="text-xs opacity-70">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
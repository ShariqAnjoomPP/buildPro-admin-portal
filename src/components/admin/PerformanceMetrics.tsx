import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", views: 1200, leads: 8 },
  { month: "Feb", views: 1800, leads: 12 },
  { month: "Mar", views: 2100, leads: 15 },
  { month: "Apr", views: 2400, leads: 18 },
  { month: "May", views: 2800, leads: 22 },
  { month: "Jun", views: 2543, leads: 15 },
];

export function PerformanceMetrics() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="font-heading text-foreground">Performance Overview</CardTitle>
        <p className="text-sm text-muted-foreground">
          Profile views and leads over the last 6 months
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                name="Profile Views"
              />
              <Line 
                type="monotone" 
                dataKey="leads" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
                name="Leads"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Profile Views</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Leads</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
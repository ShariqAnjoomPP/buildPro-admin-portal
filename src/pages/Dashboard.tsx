import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { PerformanceMetrics } from "@/components/admin/PerformanceMetrics";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { QuickActions } from "@/components/admin/QuickActions";
import { Button } from "@/components/ui/button";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        
        {/* Main content */}
        <div className="flex-1 lg:ml-0">
          {/* Top header */}
          <header className="bg-card border-b border-border shadow-card">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-bold font-heading text-foreground">
                    Dashboard
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Welcome back, John! Here's what's happening with your business.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:flex relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 w-64"
                  />
                </div>
                
                {/* Notifications */}
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
                </Button>
                
                {/* Profile */}
                <Button variant="outline" size="icon">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <main className="p-6 space-y-8">
            {/* Stats overview */}
            <section>
              <DashboardStats />
            </section>

            {/* Main content grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Performance metrics - spans 2 columns */}
              <div className="lg:col-span-2">
                <PerformanceMetrics />
              </div>
              
              {/* Recent activity */}
              <div className="lg:col-span-1">
                <RecentActivity />
              </div>
            </section>

            {/* Quick actions */}
            <section>
              <QuickActions />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
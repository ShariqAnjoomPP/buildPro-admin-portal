import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Calendar, TrendingUp } from "lucide-react";

const mockReports = [
  {
    id: 1,
    name: "Monthly Performance Report",
    type: "Performance",
    date: "March 2024",
    status: "ready",
    size: "2.3 MB"
  },
  {
    id: 2,
    name: "Lead Generation Analysis",
    type: "Leads",
    date: "March 2024",
    status: "generating",
    size: "1.8 MB"
  },
  {
    id: 3,
    name: "Customer Feedback Summary",
    type: "Reviews",
    date: "February 2024",
    status: "ready",
    size: "1.2 MB"
  }
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 lg:ml-0">
          <header className="bg-card border-b border-border shadow-card">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  Reports & Analytics
                </h1>
                <p className="text-sm text-muted-foreground">
                  Generate and download detailed business reports
                </p>
              </div>
              <Button>
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </header>

          <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Downloads</CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">Total downloads</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Scheduled Reports</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Active schedules</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList>
                <TabsTrigger value="recent">Recent Reports</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="recent">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>
                      Your latest generated reports and analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Period</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell className="font-medium">{report.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{report.type}</Badge>
                            </TableCell>
                            <TableCell>{report.date}</TableCell>
                            <TableCell>
                              <Badge variant={report.status === 'ready' ? 'default' : 'secondary'}>
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{report.size}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline" disabled={report.status !== 'ready'}>
                                <Download className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="scheduled">
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Reports</CardTitle>
                    <CardDescription>
                      Manage your automated report generation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        No scheduled reports yet. Set up automated reports to receive regular insights.
                      </p>
                      <Button className="mt-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates">
                <Card>
                  <CardHeader>
                    <CardTitle>Report Templates</CardTitle>
                    <CardDescription>
                      Choose from pre-built report templates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card className="cursor-pointer hover:bg-accent">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <CardTitle className="text-base">Performance Report</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive business performance metrics and trends
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-accent">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-5 h-5 text-primary" />
                            <CardTitle className="text-base">Lead Analysis</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Detailed analysis of lead generation and conversion
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="cursor-pointer hover:bg-accent">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-5 h-5 text-primary" />
                            <CardTitle className="text-base">Customer Feedback</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Summary of customer reviews and satisfaction metrics
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}
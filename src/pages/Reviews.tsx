import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Star, ThumbsUp, Reply } from "lucide-react";

const mockReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    comment: "Excellent service! The team was professional and completed the kitchen renovation ahead of schedule. Highly recommend!",
    date: "2 days ago",
    status: "published"
  },
  {
    id: 2,
    author: "Mike Chen",
    rating: 4,
    comment: "Great work on our bathroom remodel. Very satisfied with the quality and attention to detail.",
    date: "1 week ago",
    status: "published"
  },
  {
    id: 3,
    author: "Emily Davis",
    rating: 5,
    comment: "Outstanding customer service from start to finish. The project was completed exactly as promised.",
    date: "2 weeks ago",
    status: "pending"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 lg:ml-0">
          <header className="bg-card border-b border-border shadow-card">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  Reviews & Feedback
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage customer reviews and respond to feedback
                </p>
              </div>
            </div>
          </header>

          <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+3 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Response</CardTitle>
                  <Reply className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Need attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                  <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94%</div>
                  <p className="text-xs text-muted-foreground">Within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>
                  Latest customer feedback and reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border border-border rounded-lg p-4 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback>
                              {review.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="font-medium">{review.author}</p>
                              <Badge variant={review.status === 'published' ? 'default' : 'secondary'}>
                                {review.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={`w-4 h-4 ${
                                    star <= review.rating 
                                      ? 'fill-primary text-primary' 
                                      : 'text-muted-foreground'
                                  }`} 
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-2">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground leading-relaxed">
                        {review.comment}
                      </p>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Reply className="w-4 h-4 mr-2" />
                          Reply
                        </Button>
                        <Button size="sm" variant="outline">
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Like
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
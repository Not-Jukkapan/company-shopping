import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "New Partnership Announcement",
      date: "March 15, 2024",
      category: "Company News",
      description: "Strategic partnership with leading automation provider to enhance our service offerings"
    },
    {
      title: "Upcoming Industrial Automation Expo",
      date: "April 5-7, 2024",
      category: "Events",
      description: "Join us at the Bangkok International Trade & Exhibition Centre"
    },
    {
      title: "Free Webinar: Industry 4.0 Implementation",
      date: "March 28, 2024",
      category: "Webinars",
      description: "Learn about practical steps to implement Industry 4.0 in your facility"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>News & Events</BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-4xl font-bold mb-8">Latest News & Events</h1>

      <div className="space-y-6">
        {news.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm mb-3">
                {item.category}
              </span>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
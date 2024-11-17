import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LifeBuoy, BookOpen, MessageSquare, Phone } from "lucide-react";

const Support = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Support</BreadcrumbItem>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
        <div className="max-w-xl mx-auto">
          <Input placeholder="Search knowledge base..." className="mb-4" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LifeBuoy className="h-6 w-6 text-primary" />
              Technical Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">24/7 support for critical systems and emergency assistance</p>
            <Button variant="outline" className="w-full">Contact Support</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Knowledge Base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access technical documentation and troubleshooting guides</p>
            <Button variant="outline" className="w-full">Browse Articles</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Chat with our technical experts during business hours</p>
            <Button variant="outline" className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              Emergency Hotline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Direct line for urgent technical assistance</p>
            <Button variant="outline" className="w-full">Call Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;
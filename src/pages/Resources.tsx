import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Resources</BreadcrumbItem>
      </Breadcrumb>

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access technical documentation, tutorials, and industry insights
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Technical Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Access detailed technical specifications, manuals, and implementation guides
            </p>
            <Button variant="outline" className="w-full">Browse Documentation</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-6 w-6 text-primary" />
              Video Tutorials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Watch step-by-step tutorials and product demonstrations
            </p>
            <Button variant="outline" className="w-full">Watch Tutorials</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Whitepapers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Read in-depth analysis and industry insights from our experts
            </p>
            <Button variant="outline" className="w-full">Read Whitepapers</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-6 w-6 text-primary" />
              Downloads
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Download datasheets, brochures, and case studies
            </p>
            <Button variant="outline" className="w-full">Download Resources</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
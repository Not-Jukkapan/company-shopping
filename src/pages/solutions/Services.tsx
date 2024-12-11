import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Code, BookOpen, HeadphonesIcon } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Services</BreadcrumbItem>
      </Breadcrumb>

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive industrial automation and system integration services tailored to your needs
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              System Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• PLC and SCADA integration</li>
              <li>• Industrial network design</li>
              <li>• Hardware/software integration</li>
              <li>• Legacy system modernization</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Custom Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Custom software development</li>
              <li>• IIoT solutions</li>
              <li>• Data analytics platforms</li>
              <li>• Mobile applications</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Training & Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Technical training programs</li>
              <li>• System operation training</li>
              <li>• Best practices consultation</li>
              <li>• Technology adoption guidance</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HeadphonesIcon className="h-6 w-6 text-primary" />
              Support & Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 24/7 technical support</li>
              <li>• Preventive maintenance</li>
              <li>• System upgrades</li>
              <li>• Emergency response</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
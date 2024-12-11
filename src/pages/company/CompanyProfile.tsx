import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const CompanyProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Company Profile</BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About TechSolutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading provider of industrial automation and e-commerce solutions, specializing in Siemens PLC integration and IIoT projects.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide cutting-edge industrial automation solutions and e-commerce platforms that drive business growth and operational efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Siemens PLC Integration</li>
                <li>Industrial IoT Solutions</li>
                <li>E-commerce Platforms</li>
                <li>Automation Consulting</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-12">
              <div className="relative">
                <div className="ml-6 md:ml-0 md:flex md:items-center md:justify-between">
                  <div className="md:w-5/12"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <Card className="md:w-5/12 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">2020</h3>
                      <p className="text-muted-foreground">Company founded with a focus on industrial automation</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="ml-6 md:ml-0 md:flex md:items-center md:justify-between">
                  <Card className="md:w-5/12 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">2022</h3>
                      <p className="text-muted-foreground">Expanded into e-commerce solutions</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-0 md:static flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyProfile;
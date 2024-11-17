import { Link } from "@tanstack/react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircuitBoard, Factory, Cpu } from "lucide-react";

const IndustrialSolutions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Industrial Solutions</BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industrial Automation Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial automation solutions powered by Siemens technology and IIoT innovation
          </p>
        </section>

        <Tabs defaultValue="plc" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="plc">Siemens PLC Solutions</TabsTrigger>
            <TabsTrigger value="iiot">IIoT Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plc">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/industrial-solutions/$solutionId"
                params={{ solutionId: "plc-programming" }}
                className="block hover:scale-105 transition-transform"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CircuitBoard className="h-5 w-5" />
                      PLC Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Expert programming services for Siemens S7 series PLCs, including TIA Portal integration
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                to="/industrial-solutions/$solutionId"
                params={{ solutionId: "process-automation" }}
                className="block hover:scale-105 transition-transform"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="h-5 w-5" />
                      Process Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Complete process automation solutions using Siemens PCS 7 and SCADA systems
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link
                to="/industrial-solutions/$solutionId"
                params={{ solutionId: "hardware-integration" }}
                className="block hover:scale-105 transition-transform"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      Hardware Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Seamless integration of Siemens components with existing industrial systems
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
          
          <TabsContent value="iiot">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Collection & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implement IoT sensors and analytics platforms to gather and analyze industrial data for improved decision-making
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Remote Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up remote monitoring systems for real-time equipment status and performance tracking
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndustrialSolutions;
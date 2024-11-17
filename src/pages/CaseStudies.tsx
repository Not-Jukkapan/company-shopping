import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Manufacturing Automation Upgrade",
      client: "ABC Manufacturing",
      roi: "45% reduction in operational costs",
      description: "Implemented complete factory automation system with Siemens PLCs",
      logo: "/placeholder.svg"
    },
    {
      title: "Smart Factory Implementation",
      client: "XYZ Industries",
      roi: "30% increase in productivity",
      description: "Deployed IIoT sensors and real-time monitoring system",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>Case Studies</BreadcrumbItem>
      </Breadcrumb>

      <h1 className="text-4xl font-bold mb-8">Success Stories</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img src={study.logo} alt={study.client} className="h-12 mb-4" />
              <CardTitle>{study.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">{study.client}</p>
              <p className="text-green-600 font-medium mb-4">{study.roi}</p>
              <p className="text-gray-600">{study.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
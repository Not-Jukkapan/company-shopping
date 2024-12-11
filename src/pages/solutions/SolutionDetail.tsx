import { useParams } from "@tanstack/react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

interface SolutionData {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  expertise: string[];
}

const solutionsData: Record<string, SolutionData> = {
  "plc-programming": {
    id: "plc-programming",
    title: "PLC Programming",
    description: "Expert programming services for Siemens S7 series PLCs, including TIA Portal integration. Our team specializes in developing robust and efficient PLC programs that optimize your industrial processes.",
    features: [
      "Custom PLC program development",
      "TIA Portal integration",
      "Legacy system migration",
      "Real-time monitoring implementation",
      "Safety system programming"
    ],
    benefits: [
      "Increased production efficiency",
      "Reduced downtime",
      "Enhanced system reliability",
      "Improved process control",
      "Better data visibility"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    expertise: [
      "Siemens S7 Series",
      "TIA Portal",
      "PROFINET/PROFIBUS",
      "Safety Programming",
      "HMI Development"
    ]
  },
  "process-automation": {
    id: "process-automation",
    title: "Process Automation",
    description: "Complete process automation solutions using Siemens PCS 7 and SCADA systems. We help industries modernize their operations with state-of-the-art automation technologies.",
    features: [
      "SCADA system implementation",
      "Process control optimization",
      "Batch processing automation",
      "Data acquisition systems",
      "Remote monitoring solutions"
    ],
    benefits: [
      "Streamlined operations",
      "Quality consistency",
      "Resource optimization",
      "Real-time process visibility",
      "Reduced operational costs"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    expertise: [
      "Siemens PCS 7",
      "SCADA Systems",
      "DCS Integration",
      "Batch Processing",
      "Process Optimization"
    ]
  },
  "hardware-integration": {
    id: "hardware-integration",
    title: "Hardware Integration",
    description: "Seamless integration of Siemens components with existing industrial systems. Our expertise ensures smooth communication between different hardware components and systems.",
    features: [
      "Multi-vendor system integration",
      "Industrial network design",
      "Hardware compatibility analysis",
      "System upgrade planning",
      "Performance optimization"
    ],
    benefits: [
      "Seamless system communication",
      "Enhanced equipment reliability",
      "Future-proof solutions",
      "Optimized performance",
      "Reduced maintenance costs"
    ],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    expertise: [
      "Industrial Networks",
      "Hardware Configuration",
      "System Integration",
      "Troubleshooting",
      "Performance Tuning"
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams({ from: '/industrial-solutions/$solutionId' });
  const solution = solutionsData[solutionId];

  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Solution not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/industrial-solutions">Industrial Solutions</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>{solution.title}</BreadcrumbItem>
      </Breadcrumb>

      <div className="space-y-8">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{solution.title}</h1>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground">{solution.description}</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {solution.expertise.map((item, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolutionDetail;
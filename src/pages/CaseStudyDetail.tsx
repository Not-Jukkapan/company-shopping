import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  summary: string;
  results: string[];
  tags: string[];
  image: string;
  challenge?: string;
  solution?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Manufacturing Automation Transformation",
    client: "ABC Manufacturing",
    industry: "Manufacturing",
    summary: "Complete factory automation implementation resulting in 45% efficiency increase",
    challenge: "ABC Manufacturing faced significant operational inefficiencies with their manual production processes, leading to high costs and frequent downtimes. They needed a modern automation solution that could streamline their operations while maintaining product quality.",
    solution: "We implemented a comprehensive automation system using Siemens S7-1500 PLCs integrated with SCADA for real-time monitoring and control. The solution included custom HMI interfaces, automated quality control systems, and predictive maintenance capabilities.",
    results: [
      "45% reduction in operational costs",
      "60% decrease in production downtime",
      "99.9% quality improvement rate"
    ],
    tags: ["Automation", "PLC", "SCADA"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    testimonial: {
      quote: "The automation system has transformed our manufacturing process. We've seen remarkable improvements in efficiency and quality.",
      author: "John Smith",
      position: "Operations Director, ABC Manufacturing"
    }
  },
  // ... Add other case studies with similar detailed information
];

const CaseStudyDetail = () => {
  const { caseId } = useParams({ from: '/case-studies/$caseId' });
  const study = caseStudies.find(s => s.id === Number(caseId));

  if (!study) {
    return <div className="container mx-auto px-4 py-8">Case study not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/case-studies">Case Studies</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{study.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <Badge className="mb-4">{study.industry}</Badge>
              <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl">{study.client}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
                <p className="text-gray-700">{study.challenge}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
                <p className="text-gray-700">{study.solution}</p>
              </CardContent>
            </Card>

            {study.testimonial && (
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-gray-700 italic mb-4">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <p className="font-semibold">{study.testimonial.author}</p>
                  <p className="text-gray-600">{study.testimonial.position}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
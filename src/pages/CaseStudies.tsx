import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  summary: string;
  results: string[];
  tags: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Manufacturing Automation Transformation",
    client: "ABC Manufacturing",
    industry: "Manufacturing",
    summary: "Complete factory automation implementation resulting in 45% efficiency increase",
    results: [
      "45% reduction in operational costs",
      "60% decrease in production downtime",
      "99.9% quality improvement rate"
    ],
    tags: ["Automation", "PLC", "SCADA"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Smart Warehouse Management System",
    client: "Logistics Plus Co.",
    industry: "Logistics",
    summary: "IoT-based warehouse management system implementation",
    results: [
      "99.9% inventory accuracy",
      "50% faster order fulfillment",
      "30% reduction in labor costs"
    ],
    tags: ["IoT", "Warehouse", "Automation"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 3,
    title: "Energy Management Optimization",
    client: "GreenTech Industries",
    industry: "Energy",
    summary: "Smart energy monitoring and optimization system deployment",
    results: [
      "35% energy cost savings",
      "40% reduction in carbon footprint",
      "Real-time energy monitoring"
    ],
    tags: ["Energy", "IoT", "Sustainability"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
  },
  {
    id: 4,
    title: "Quality Control Automation",
    client: "Precision Electronics",
    industry: "Electronics",
    summary: "AI-powered quality inspection system implementation",
    results: [
      "99.99% defect detection rate",
      "75% faster inspection process",
      "90% reduction in manual inspection"
    ],
    tags: ["AI", "Quality Control", "Vision Systems"],
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0"
  }
];

const CaseStudies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Link
            key={study.id}
            to="/case-studies/$caseId"
            params={{ caseId: study.id.toString() }}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>{study.industry}</Badge>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
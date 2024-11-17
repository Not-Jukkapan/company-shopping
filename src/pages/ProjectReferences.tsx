import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Factory Automation System",
    client: "Thai Manufacturing Co., Ltd",
    year: "2023",
    description: "Implemented complete automation solution using Siemens S7-1500 PLC and SCADA system",
    technologies: ["Siemens PLC", "SCADA", "HMI"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Smart Warehouse Management",
    client: "Logistics Plus Co., Ltd",
    year: "2023",
    description: "Developed IoT-based warehouse management system with real-time tracking",
    technologies: ["IoT Sensors", "Cloud Platform", "Mobile App"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 3,
    title: "Production Line Monitoring",
    client: "Food Processing Industries",
    year: "2022",
    description: "Implemented real-time monitoring system for production line efficiency",
    technologies: ["PLC Integration", "Dashboard", "Analytics"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];

const ProjectReferences = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Project References</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of successful industrial automation and IoT projects,
          showcasing our expertise in delivering cutting-edge solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-6">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.client} - {project.year}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link to="/project/$projectId" params={{ projectId: project.id.toString() }}>
                <Button className="w-full">
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectReferences;
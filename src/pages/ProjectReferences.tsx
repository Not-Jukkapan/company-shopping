import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Factory Automation System",
    client: "Thai Manufacturing Co., Ltd",
    year: "2023",
    description: "Implemented complete automation solution using Siemens S7-1500 PLC and SCADA system",
    technologies: ["Siemens PLC", "SCADA", "HMI"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Smart Warehouse Management",
    client: "Logistics Plus Co., Ltd",
    year: "2023",
    description: "Developed IoT-based warehouse management system with real-time tracking",
    technologies: ["IoT Sensors", "Cloud Platform", "Mobile App"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Production Line Monitoring",
    client: "Food Processing Industries",
    year: "2022",
    description: "Implemented real-time monitoring system for production line efficiency",
    technologies: ["PLC Integration", "Dashboard", "Analytics"],
    image: "/placeholder.svg"
  }
];

const ProjectReferences = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Project References</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardTitle className="mt-4">{project.title}</CardTitle>
              <CardDescription>{project.client} - {project.year}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectReferences;
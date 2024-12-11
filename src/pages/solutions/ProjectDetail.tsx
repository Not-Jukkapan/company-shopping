import { useParams } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Project {
  id: number;
  title: string;
  client: string;
  year: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Factory Automation System",
    client: "Thai Manufacturing Co., Ltd",
    year: "2023",
    description: "Implemented complete automation solution using Siemens S7-1500 PLC and SCADA system",
    longDescription: "A comprehensive factory automation project that revolutionized the manufacturing process through advanced PLC systems and real-time monitoring capabilities.",
    challenge: "The client needed to modernize their manufacturing facility while maintaining production efficiency and reducing downtime.",
    solution: "We implemented a state-of-the-art Siemens S7-1500 PLC system integrated with SCADA for real-time monitoring and control.",
    results: "Achieved 40% increase in production efficiency and reduced downtime by 60%",
    technologies: ["Siemens PLC", "SCADA", "HMI", "Industrial Network"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  },
  {
    id: 2,
    title: "Smart Warehouse Management",
    client: "Logistics Plus Co., Ltd",
    year: "2023",
    description: "Developed IoT-based warehouse management system with real-time tracking",
    longDescription: "An innovative warehouse management solution that leverages IoT technology for real-time inventory tracking and optimization.",
    challenge: "Manual inventory management led to inefficiencies and errors in stock tracking.",
    solution: "Implemented IoT sensors and a cloud-based management system for real-time inventory tracking.",
    results: "Inventory accuracy improved to 99.9% and order fulfillment time reduced by 50%",
    technologies: ["IoT Sensors", "Cloud Platform", "Mobile App", "Azure IoT"],
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    ]
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams({ from: '/project/$projectId' });
  const project = projects.find(p => p.id === Number(projectId));

  if (!project) {
    return <div className="container mx-auto px-4 py-4">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/project-references">Projects</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-700">{project.longDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-gray-700">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-gray-700">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <p className="text-gray-700">{project.results}</p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-600">Client</h4>
                  <p>{project.client}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">Year</h4>
                  <p>{project.year}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-600">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
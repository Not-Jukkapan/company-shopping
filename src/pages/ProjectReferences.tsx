import { useNavigate } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  date: string;
  image: string;
  category: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Factory Automation System",
    description: "Implementation of a complete automation system for manufacturing plant",
    client: "ABC Manufacturing",
    date: "2023",
    image: "/placeholder.svg",
    category: "Automation"
  },
  {
    id: "2",
    title: "Smart Warehouse Solution",
    description: "IoT-based warehouse management and automation system",
    client: "XYZ Logistics",
    date: "2023",
    image: "/placeholder.svg",
    category: "IoT Solutions"
  },
  {
    id: "3",
    title: "Production Line Upgrade",
    description: "Modernization of production line with advanced PLC systems",
    client: "Industrial Corp",
    date: "2022",
    image: "/placeholder.svg",
    category: "Automation"
  },
  {
    id: "4",
    title: "Smart Factory Implementation",
    description: "Complete smart factory solution with IoT sensors and real-time monitoring",
    client: "Tech Manufacturing",
    date: "2023",
    image: "/placeholder.svg",
    category: "IoT Solutions"
  }
];

const ProjectReferences = () => {
  const navigate = useNavigate();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockProjects;
    }
  });

  const handleViewDetails = (projectId: string) => {
    navigate({
      to: '/project/$projectId',
      params: { projectId }
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="animate-pulse">
              <CardContent className="h-32" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Group projects by category
  const projectsByCategory = projects?.reduce((acc: Record<string, Project[]>, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project References</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {projectsByCategory && Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger className="text-2xl font-semibold text-primary hover:no-underline">
              {category}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 pt-4">
                {categoryProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{project.title}</span>
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <p className="text-sm mb-4">Client: {project.client}</p>
                      <button 
                        onClick={() => handleViewDetails(project.id)}
                        className="text-primary hover:underline"
                      >
                        View Details
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectReferences;
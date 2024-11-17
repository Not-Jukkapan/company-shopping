import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from '@tanstack/react-router';

interface Project {
  id: string;
  title: string;
  description: string;
}

const ProjectReferences = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Mock data for now
    setProjects([
      {
        id: '1',
        title: 'Factory Automation Project',
        description: 'Complete automation solution for a manufacturing plant'
      },
      {
        id: '2',
        title: 'Smart Warehouse System',
        description: 'IoT-based warehouse management system'
      }
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Project References</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded p-4">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
            <Button 
              onClick={() => navigate({ 
                to: '/project/$projectId',
                params: { projectId: project.id }
              })}
              className="mt-4"
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectReferences;
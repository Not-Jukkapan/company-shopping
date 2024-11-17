import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from '@tanstack/react-router';

const ProjectReferences = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project references from an API or service
    const fetchProjects = async () => {
      const response = await fetch('/api/projects'); // Example API endpoint
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
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
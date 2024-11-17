import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Product } from '@/types/Product';
import { useQuery } from '@tanstack/react-query';
import { mockProducts } from '@/data/mockProducts';

const ProjectReferences = () => {
  const navigate = useNavigate();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockProducts; // Here we're using mockProducts for demo purposes
    }
  });

  const handleViewDetails = (projectId: string) => {
    navigate({
      to: '/project/:projectId',
      params: { projectId }
    });
  };

  useEffect(() => {
    if (projects) {
      console.log('Projects available:', projects);
    }
  }, [projects]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Project References</h1>
      <ul>
        {projects.map((project: Product) => (
          <li key={project.id} className="mb-4">
            <h2 className="text-lg">{project.name}</h2>
            <button onClick={() => handleViewDetails(project.id.toString())}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectReferences;

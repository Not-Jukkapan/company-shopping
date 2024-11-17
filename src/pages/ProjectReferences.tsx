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
      return mockProducts;
    }
  });

  const handleViewDetails = (projectId: string) => {
    navigate({
      to: '/project/:projectId',
      params: { projectId }
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project References</h1>
      <div className="grid gap-6">
        {projects?.map((project: Product) => (
          <div key={project.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <button 
              onClick={() => handleViewDetails(project.id.toString())}
              className="text-primary hover:underline"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectReferences;
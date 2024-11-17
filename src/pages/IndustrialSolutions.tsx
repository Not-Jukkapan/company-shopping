import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Solution {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const solutions: Solution[] = [
  {
    id: '1',
    title: 'Process Automation',
    description: 'Streamline your manufacturing processes with our advanced automation solutions.',
    imageUrl: '/images/process-automation.jpg',
  },
  {
    id: '2', 
    title: 'Quality Control Systems',
    description: 'Ensure consistent product quality with our integrated quality control systems.',
    imageUrl: '/images/quality-control.jpg',
  },
  {
    id: '3',
    title: 'Energy Management',
    description: 'Optimize energy consumption and reduce costs with our smart energy solutions.',
    imageUrl: '/images/energy-management.jpg',
  },
  {
    id: '4',
    title: 'Safety Systems',
    description: 'Protect your workforce with our comprehensive industrial safety systems.',
    imageUrl: '/images/safety-systems.jpg',
  },
];

const IndustrialSolutions = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Industrial Solutions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <Card key={solution.id} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
              <Button 
                className="mt-4"
                onClick={() => navigate({ 
                  to: '/industrial-solutions/$solutionId',
                  params: { solutionId: solution.id }
                })}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndustrialSolutions;
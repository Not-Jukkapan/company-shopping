import { createFileRoute } from '@tanstack/react-router';
import IndustrialSolutions from '@/pages/IndustrialSolutions';

export const Route = createFileRoute('/industrial-solutions')({
  component: IndustrialSolutions,
});
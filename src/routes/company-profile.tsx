import { createFileRoute } from '@tanstack/react-router';
import CompanyProfile from '@/pages/CompanyProfile';

export const Route = createFileRoute('/company-profile')({
  component: CompanyProfile,
});
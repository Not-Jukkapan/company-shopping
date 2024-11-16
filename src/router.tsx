import { createRootRoute, createRouter } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import { useState } from 'react';

const rootRoute = createRootRoute({
  component: () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    return (
      <div className="min-h-screen bg-background">
        <Navbar onCartClick={() => {}} cartItemCount={cartItems.length} />
        <Outlet />
      </div>
    );
  },
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Index,
});

const companyProfileRoute = rootRoute.createRoute({
  path: '/company-profile',
  component: CompanyProfile,
});

const industrialSolutionsRoute = rootRoute.createRoute({
  path: '/industrial-solutions',
  component: IndustrialSolutions,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
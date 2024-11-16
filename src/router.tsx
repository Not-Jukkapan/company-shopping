import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import { useState } from 'react';

const RootComponent = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartClick={() => {}} cartItemCount={cartItems.length} />
      <Outlet />
    </div>
  );
};

const rootRoute = new RootRoute({
  component: RootComponent,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const companyProfileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/company-profile',
  component: CompanyProfile,
});

const industrialSolutionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/industrial-solutions',
  component: IndustrialSolutions,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
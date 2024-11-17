import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import SignIn from '@/pages/auth/SignIn';
import Register from '@/pages/auth/Register';
import { useState } from 'react';
import { useAuth } from './lib/auth';

const RootComponent = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartClick={() => {}} cartItemCount={cartItems.length} />
      <Outlet />
    </div>
  );
};

// Auth guard for protected routes
const authGuard = () => {
  const { isAuthenticated } = useAuth.getState();
  if (!isAuthenticated) {
    throw new Error('Not authenticated');
  }
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
  beforeLoad: authGuard,
});

const industrialSolutionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/industrial-solutions',
  component: IndustrialSolutions,
  beforeLoad: authGuard,
});

const signInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth/signin',
  component: SignIn,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth/register',
  component: Register,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
  signInRoute,
  registerRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
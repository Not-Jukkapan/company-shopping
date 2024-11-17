import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import Shop from '@/pages/Shop';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import SolutionDetail from '@/pages/SolutionDetail';
import ProjectReferences from '@/pages/ProjectReferences';
import ProjectDetail from '@/pages/ProjectDetail';
import SignIn from '@/pages/auth/SignIn';
import Register from '@/pages/auth/Register';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import PaymentSuccess from '@/pages/PaymentSuccess';
import Profile from '@/pages/profile/Profile';
import Services from '@/pages/Services';
import Resources from '@/pages/Resources';
import CaseStudies from '@/pages/CaseStudies';
import Careers from '@/pages/Careers';
import Support from '@/pages/Support';
import News from '@/pages/News';
import { useCartStore } from './store/useCartStore';

const RootComponent = () => {
  const cartItems = useCartStore((state) => state.items);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartItems.length} />
      <Outlet />
    </div>
  );
};

const rootRoute = new RootRoute({
  component: RootComponent,
});

// Define routes
const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/product/$productId',
    component: ProductDetail,
  },
  {
    path: '/project-references',
    component: ProjectReferences,
  },
  {
    path: '/project/$projectId',
    component: ProjectDetail,
  },
  {
    path: '/auth/signin',
    component: SignIn,
  },
  {
    path: '/auth/register',
    component: Register,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/checkout',
    component: Checkout,
  },
  {
    path: '/payment-success',
    component: PaymentSuccess,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/company-profile',
    component: CompanyProfile,
  },
  {
    path: '/industrial-solutions',
    component: IndustrialSolutions,
  },
  {
    path: '/industrial-solutions/$solutionId',
    component: SolutionDetail,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/resources',
    component: Resources,
  },
  {
    path: '/case-studies',
    component: CaseStudies,
  },
  {
    path: '/careers',
    component: Careers,
  },
  {
    path: '/support',
    component: Support,
  },
  {
    path: '/news',
    component: News,
  },
].map(route => new Route({
  getParentRoute: () => rootRoute,
  ...route,
}));

const routeTree = rootRoute.addChildren(routes);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
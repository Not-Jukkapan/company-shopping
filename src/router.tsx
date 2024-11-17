import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import Shop from '@/pages/Shop';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
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

const routes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/shop',
    component: Shop,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/product/$id',
    component: ProductDetail,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/project-references',
    component: ProjectReferences,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/project/$projectId',
    component: ProjectDetail,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/auth/signin',
    component: SignIn,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/auth/register',
    component: Register,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/cart',
    component: Cart,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/checkout',
    component: Checkout,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/payment-success',
    component: PaymentSuccess,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/profile',
    component: Profile,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/company-profile',
    component: CompanyProfile,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/industrial-solutions',
    component: IndustrialSolutions,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/services',
    component: Services,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/resources',
    component: Resources,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/case-studies',
    component: CaseStudies,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/careers',
    component: Careers,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/support',
    component: Support,
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: '/news',
    component: News,
  }),
];

const routeTree = rootRoute.addChildren(routes);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

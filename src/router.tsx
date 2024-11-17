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

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const shopRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: Shop,
});

const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/product/$productId',
  component: ProductDetail,
});

const projectReferencesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/project-references',
  component: ProjectReferences,
});

const projectDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/project/$projectId',
  component: ProjectDetail,
});

const routes = [
  indexRoute,
  shopRoute,
  productDetailRoute,
  projectReferencesRoute,
  projectDetailRoute,
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
];

const routeTree = rootRoute.addChildren(routes);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
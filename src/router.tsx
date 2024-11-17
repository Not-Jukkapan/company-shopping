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

// Define route params interface
interface ProjectParams {
  projectId: string;
}

interface ProductParams {
  productId: string;
}

const routes = {
  index: new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Index,
  }),
  shop: new Route({
    getParentRoute: () => rootRoute,
    path: '/shop',
    component: Shop,
  }),
  productDetail: new Route({
    getParentRoute: () => rootRoute,
    path: '/product/$productId',
    component: ProductDetail,
  }),
  projectReferences: new Route({
    getParentRoute: () => rootRoute,
    path: '/project-references',
    component: ProjectReferences,
  }),
  projectDetail: new Route({
    getParentRoute: () => rootRoute,
    path: '/project/$projectId',
    component: ProjectDetail,
    validateParams: (params: ProjectParams) => ({
      projectId: params.projectId,
    }),
  }),
  signIn: new Route({
    getParentRoute: () => rootRoute,
    path: '/auth/signin',
    component: SignIn,
  }),
  register: new Route({
    getParentRoute: () => rootRoute,
    path: '/auth/register',
    component: Register,
  }),
  cart: new Route({
    getParentRoute: () => rootRoute,
    path: '/cart',
    component: Cart,
  }),
  checkout: new Route({
    getParentRoute: () => rootRoute,
    path: '/checkout',
    component: Checkout,
  }),
  paymentSuccess: new Route({
    getParentRoute: () => rootRoute,
    path: '/payment-success',
    component: PaymentSuccess,
  }),
  profile: new Route({
    getParentRoute: () => rootRoute,
    path: '/profile',
    component: Profile,
  }),
};

const routeTree = rootRoute.addChildren([
  routes.index,
  routes.shop,
  routes.productDetail,
  routes.projectReferences,
  routes.projectDetail,
  routes.signIn,
  routes.register,
  routes.cart,
  routes.checkout,
  routes.paymentSuccess,
  routes.profile,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

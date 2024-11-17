import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import Shop from '@/pages/Shop';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import SignIn from '@/pages/auth/SignIn';
import Register from '@/pages/auth/Register';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import PaymentSuccess from '@/pages/PaymentSuccess';
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
  validateSearch: (search: Record<string, unknown>) => {
    return {
      productId: String(search.id || '')
    };
  },
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

const cartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: Cart,
});

const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: Checkout,
});

const paymentSuccessRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/payment-success',
  component: PaymentSuccess,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  productDetailRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
  signInRoute,
  registerRoute,
  cartRoute,
  checkoutRoute,
  paymentSuccessRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

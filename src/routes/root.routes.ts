import { Route, RootRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import { useCartStore } from '@/store/useCartStore';

const RootComponent = () => {
  const cartItems = useCartStore((state) => state.items);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartItems.length} />
      <Outlet />
    </div>
  );
};

export const rootRoute = new RootRoute({
  component: RootComponent,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => import('@/pages/Index').then((mod) => mod.default),
});
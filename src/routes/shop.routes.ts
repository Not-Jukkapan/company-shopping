import { Route } from '@tanstack/react-router';
import { rootRoute } from './root.routes';

export const shopRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: 'shop',
    component: () => import('@/pages/Shop').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'product/$productId',
    component: () => import('@/pages/ProductDetail').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'cart',
    component: () => import('@/pages/Cart').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'checkout',
    component: () => import('@/pages/Checkout').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'payment-success',
    component: () => import('@/pages/PaymentSuccess').then((mod) => mod.default),
  }),
];
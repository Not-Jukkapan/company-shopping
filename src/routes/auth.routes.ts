import { Route } from '@tanstack/react-router';
import { rootRoute } from './root.routes';

export const authRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: 'auth/signin',
    component: () => import('@/pages/auth/SignIn').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'auth/register',
    component: () => import('@/pages/auth/Register').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'profile',
    component: () => import('@/pages/profile/Profile').then((mod) => mod.default),
  }),
];
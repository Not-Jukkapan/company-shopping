import { Router } from '@tanstack/react-router';
import { rootRoute, indexRoute } from './routes/root.routes';
import { shopRoutes } from './routes/shop.routes';
import { authRoutes } from './routes/auth.routes';
import { solutionsRoutes } from './routes/solutions.routes';
import { companyRoutes } from './routes/company.routes';

const routeTree = rootRoute.addChildren([
  indexRoute,
  ...shopRoutes,
  ...authRoutes,
  ...solutionsRoutes,
  ...companyRoutes,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
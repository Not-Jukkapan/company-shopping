import { Route } from '@tanstack/react-router';
import { rootRoute } from './root.routes';

export const solutionsRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: 'industrial-solutions',
    component: () => import('@/pages/IndustrialSolutions').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'industrial-solutions/$solutionId',
    component: () => import('@/pages/SolutionDetail').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'project-references',
    component: () => import('@/pages/ProjectReferences').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'project/$projectId',
    component: () => import('@/pages/ProjectDetail').then((mod) => mod.default),
  }),
];
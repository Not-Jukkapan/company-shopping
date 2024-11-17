import { Route } from '@tanstack/react-router';
import { rootRoute } from './root.routes';

export const companyRoutes = [
  new Route({
    getParentRoute: () => rootRoute,
    path: 'company-profile',
    component: () => import('@/pages/CompanyProfile').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'services',
    component: () => import('@/pages/Services').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'resources',
    component: () => import('@/pages/Resources').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'case-studies',
    component: () => import('@/pages/CaseStudies').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'case-studies/$caseId',
    component: () => import('@/pages/CaseStudyDetail').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'careers',
    component: () => import('@/pages/Careers').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'support',
    component: () => import('@/pages/Support').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'news',
    component: () => import('@/pages/News').then((mod) => mod.default),
  }),
  new Route({
    getParentRoute: () => rootRoute,
    path: 'contact',
    component: () => import('@/pages/Contact').then((mod) => mod.default),
  }),
];
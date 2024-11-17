import { Route, RootRoute, Router } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Index from '@/pages/Index';
import Shop from '@/pages/Shop';
import CompanyProfile from '@/pages/CompanyProfile';
import IndustrialSolutions from '@/pages/IndustrialSolutions';
import SolutionDetail from '@/pages/SolutionDetail';
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
import CaseStudyDetail from '@/pages/CaseStudyDetail';
import Contact from '@/pages/Contact';
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
  path: 'shop',
  component: Shop,
});

const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'product/$productId',
  component: ProductDetail,
});

const projectReferencesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'project-references',
  component: ProjectReferences,
});

const projectDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'project/$projectId',
  component: ProjectDetail,
});

const signInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'auth/signin',
  component: SignIn,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'auth/register',
  component: Register,
});

const cartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'cart',
  component: Cart,
});

const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'checkout',
  component: Checkout,
});

const paymentSuccessRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'payment-success',
  component: PaymentSuccess,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: Profile,
});

const companyProfileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'company-profile',
  component: CompanyProfile,
});

const industrialSolutionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'industrial-solutions',
  component: IndustrialSolutions,
});

const solutionDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'industrial-solutions/$solutionId',
  component: SolutionDetail,
});

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'services',
  component: Services,
});

const resourcesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'resources',
  component: Resources,
});

const caseStudiesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'case-studies',
  component: CaseStudies,
});

const caseStudyDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'case-studies/$caseId',
  component: CaseStudyDetail,
});

const careersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'careers',
  component: Careers,
});

const supportRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'support',
  component: Support,
});

const newsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'news',
  component: News,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  productDetailRoute,
  projectReferencesRoute,
  projectDetailRoute,
  signInRoute,
  registerRoute,
  cartRoute,
  checkoutRoute,
  paymentSuccessRoute,
  profileRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
  solutionDetailRoute,
  servicesRoute,
  resourcesRoute,
  caseStudiesRoute,
  caseStudyDetailRoute,
  careersRoute,
  supportRoute,
  newsRoute,
  contactRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

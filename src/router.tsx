import {
  Route,
  RootRoute,
  Router,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import RootComponent from "./pages/_Root";
import Index from "@/pages/Index";
import Shop from "@/pages/Shop";
import CompanyProfile from "@/pages/CompanyProfile";
import IndustrialSolutions from "@/pages/IndustrialSolutions";
import SolutionDetail from "@/pages/SolutionDetail";
import ProjectReferences from "@/pages/ProjectReferences";
import ProjectDetail from "@/pages/ProjectDetail";
import SignIn from "@/pages/auth/SignIn";
import Register from "@/pages/auth/Register";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Profile from "@/pages/profile/Profile";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import CaseStudies from "@/pages/CaseStudies";
import Careers from "@/pages/Careers";
import Support from "@/pages/Support";
import News from "@/pages/News";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Contact from "@/pages/Contact";
import { useCartStore } from "./store/useCartStore";

const rootRoute = createRootRoute({
  component: RootComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "shop",
  component: Shop,
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "product/$productId",
  component: ProductDetail,
});

const projectReferencesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "project-references",
  component: ProjectReferences,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "project/$projectId",
  component: ProjectDetail,
});

const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth/signin",
  component: SignIn,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth/register",
  component: Register,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "cart",
  component: Cart,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "checkout",
  component: Checkout,
});

const paymentSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "payment-success",
  component: PaymentSuccess,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "profile",
  component: Profile,
});

const companyProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "company-profile",
  component: CompanyProfile,
});

const industrialSolutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "industrial-solutions",
  component: IndustrialSolutions,
});

const solutionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "industrial-solutions/$solutionId",
  component: SolutionDetail,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "services",
  component: Services,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "resources",
  component: Resources,
});

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "case-studies",
  component: CaseStudies,
});

const caseStudyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "case-studies/$caseId",
  component: CaseStudyDetail,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "careers",
  component: Careers,
});

const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "support",
  component: Support,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "news",
  component: News,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "contact",
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

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

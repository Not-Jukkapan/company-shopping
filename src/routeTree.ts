import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as companyProfileRoute } from './routes/company-profile'
import { Route as industrialSolutionsRoute } from './routes/industrial-solutions'

export const routeTree = rootRoute.addChildren([
  indexRoute,
  companyProfileRoute,
  industrialSolutionsRoute,
])
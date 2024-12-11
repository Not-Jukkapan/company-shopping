import { Breadcrumb } from "antd";
import { useLocation, useRouter } from "@tanstack/react-router";

// Map route paths to human-readable breadcrumb labels
const breadcrumbMapping: Record<string, string> = {
  "/": "Home",
  "/resources": "Resources",
  "/resources/technical-documentation": "Technical Documentation",
  "/resources/video-tutorials": "Video Tutorials",
  "/resources/whitepapers": "Whitepapers",
  "/resources/downloads": "Downloads",
};

// Define routes that should not display breadcrumbs
const routesWithoutBreadcrumbs = ["/login", "/sign-up"];

const Breadcrumbs = () => {
  const router = useRouter(); // Get the router instance
  const currentLocation = useLocation({
    select: (location) => location.pathname,
  });

  // Check if breadcrumbs should be hidden
  if (routesWithoutBreadcrumbs.includes(currentLocation)) {
    return null;
  }

  // Extract breadcrumb paths and titles dynamically
  const breadcrumbItems = currentLocation
    .split("/")
    .filter(Boolean) // Remove empty strings
    .map((path, index, array) => {
      const fullPath = `/${array.slice(0, index + 1).join("/")}`;
      return {
        path: fullPath,
        label: breadcrumbMapping[fullPath] || path,
      };
    });

  return (
    <div className="bg-white px-4 py-2 shadow-sm">
      <Breadcrumb>
        {breadcrumbItems.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {index < breadcrumbItems.length - 1 ? (
              <a href={item.path}>{item.label}</a>
            ) : (
              item.label
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;

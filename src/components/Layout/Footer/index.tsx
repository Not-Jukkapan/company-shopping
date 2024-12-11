import { Link, useLocation, useRouter } from "@tanstack/react-router";
import footerData from "@/data/footerData.json";

const Footer = () => {
  const router = useRouter();
  const currentPath = useLocation({
    select: (location) => location.pathname,
  });

  // Determine the group based on the current path
  const group = currentPath.startsWith("/company")
    ? "company"
    : currentPath.startsWith("/shop")
    ? "shop"
    : currentPath.startsWith("/resources")
    ? "resources"
    : null;

  const commonData = footerData.common;
  const groupData = group ? footerData[group] : null;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Common Section: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{commonData.about.title}</h3>
            <p className="text-gray-400">{commonData.about.description}</p>
          </div>

          {/* Dynamic Group Section */}
          {groupData && (
            <div>
              <h4 className="text-lg font-semibold mb-4">{groupData.title}</h4>
              <ul className="space-y-2">
                {groupData.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to || "#"}
                      className="text-gray-400 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common Section: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {commonData.contact.title}
            </h4>
            <ul className="space-y-2 text-gray-400">
              {commonData.contact.info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Common Section: Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {commonData.officeHours.title}
            </h4>
            <ul className="space-y-2 text-gray-400">
              {commonData.officeHours.hours.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 TechCompany Industrial Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

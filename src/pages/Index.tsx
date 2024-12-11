import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Cpu, Network, CheckCircle, Users, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              TechCompany Industrial Automation Solutions
            </h1>
            <p className="text-xl mb-8">
              Leading provider of industrial automation, IIoT solutions, and system integration services. 
              Empowering industry with cutting-edge technology and reliable automation solutions.
            </p>
            <div className="space-x-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Browse Products
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/industrial-solutions">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Factory className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Industrial Automation</h3>
              <p className="text-gray-600">
                Complete automation solutions using Siemens PLCs, HMIs, and drives for manufacturing excellence
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Cpu className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-4">IIoT Solutions</h3>
              <p className="text-gray-600">
                Smart factory solutions with Industrial Internet of Things technology for real-time monitoring and control
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Network className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-gray-600">
                Seamless integration of industrial systems, networks, and software for optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Chaiudom</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Over 15 years of experience in industrial automation and control systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">24/7 technical support and maintenance services for your systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                <p className="text-gray-600">Compliance with international standards and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chaiudom</h3>
              <p className="text-gray-400">
                Leading provider of industrial automation solutions in Thailand
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-gray-400 hover:text-white">Products</Link></li>
                <li><Link to="/industrial-solutions" className="text-gray-400 hover:text-white">Solutions</Link></li>
                <li><Link to="/project-references" className="text-gray-400 hover:text-white">Projects</Link></li>
                <li><Link to="/company-profile" className="text-gray-400 hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Industrial Estate</li>
                <li>Bangkok, Thailand 10400</li>
                <li>Tel: +66 2 123 4567</li>
                <li>Email: contact@chaiudom.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday</li>
                <li>8:30 AM - 5:30 PM</li>
                <li>24/7 Emergency Support</li>
                <li>Available for Critical Systems</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechCompany Industrial Automation. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
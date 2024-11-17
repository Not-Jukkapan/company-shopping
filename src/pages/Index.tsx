import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Cpu, Network } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Chaiudom Industrial Automation Solutions
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
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Industrial Automation Solutions
            </h1>
            <p className="text-xl mb-8">
              Leading provider of Siemens automation components and industrial solutions. 
              Empowering industry with cutting-edge technology and reliable automation products.
            </p>
            <div className="space-x-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Browse Products
                </Button>
              </Link>
              <Link to="/industrial-solutions">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Certified Siemens Partner</h3>
              <p className="text-gray-600">
                Official distributor of Siemens automation products with certified expertise
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-600">
                Expert technical support and consultation for your automation projects
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick shipping and reliable delivery of industrial components
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
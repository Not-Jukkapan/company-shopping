import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data with industrial automation products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Siemens S7-1200 PLC",
    price: 599.99,
    description: "Compact PLC for small to medium automation applications",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "PLC",
  },
  {
    id: 2,
    name: "SIMATIC HMI Panel",
    price: 899.99,
    description: "Touch panel for machine interface",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "HMI",
  },
  {
    id: 3,
    name: "SINAMICS Drive",
    price: 1299.99,
    description: "Variable frequency drive for motor control",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    category: "Drives",
  },
];

const categories = [
  "All",
  "PLC",
  "HMI",
  "Drives",
  "Sensors",
  "Network Components",
  "Industrial IoT",
  "System Integration",
  "Automation Software"
];

const Shop = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const filteredProducts = mockProducts
    .filter(product => 
      selectedCategory === "All" || product.category === selectedCategory
    )
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Industrial Automation Products</h1>
        <p className="text-muted-foreground mb-6">
          Browse our selection of high-quality industrial automation components and solutions
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mr-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Shop;
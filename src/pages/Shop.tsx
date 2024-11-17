import { useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";

// Mock data with industrial automation products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Siemens S7-1200 PLC",
    price: 599.99,
    description: "Compact PLC for small to medium automation applications",
    image: "https://images.unsplash.com/photo-1611175694989-4870fafa4494",
    category: "PLC",
  },
  {
    id: 2,
    name: "SIMATIC HMI Panel",
    price: 899.99,
    description: "Touch panel for machine interface",
    image: "https://images.unsplash.com/photo-1611175694989-4870fafa4494",
    category: "HMI",
  },
  {
    id: 3,
    name: "SINAMICS Drive",
    price: 1299.99,
    description: "Variable frequency drive for motor control",
    image: "https://images.unsplash.com/photo-1611175694989-4870fafa4494",
    category: "Drives",
  },
];

const categories = ["All", "PLC", "HMI", "Drives", "Sensors", "Network Components"];

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  const filteredProducts = selectedCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Industrial Automation Products</h1>
      
      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
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

      <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default Shop;
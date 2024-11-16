import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import { Product } from "@/types/product";

// Mock data - replace with API call later
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    description: "Durable laptop backpack with multiple compartments",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 129.99,
    description: "Premium coffee maker for perfect brews",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
    category: "Home",
  },
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === productId);
      if (index === -1) return prev;
      const newItems = [...prev];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartItemCount={cartItems.length}
      />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Featured Products</h1>
        <ProductGrid products={mockProducts} onAddToCart={handleAddToCart} />
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
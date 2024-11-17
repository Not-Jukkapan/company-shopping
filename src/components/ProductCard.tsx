import { Product } from "@/types/product";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  totalProducts: number;
}

const ProductCard = ({ product, onAddToCart, totalProducts }: ProductCardProps) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <Link 
        to="/product/$productId"
        params={{ productId: String(product.id) }}
      >
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
            Stock: {totalProducts}
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link 
          to="/product/$productId"
          params={{ productId: String(product.id) }}
          className="block"
        >
          <h3 className="font-semibold text-lg mb-2 hover:text-primary">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        
        <Button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
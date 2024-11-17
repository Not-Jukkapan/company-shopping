import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      toast.success("Product added to cart");
    }
  };

  const handleViewDetails = () => {
    navigate({
      to: '/product/$productId',
      params: { productId: String(product.id) },
      search: { id: String(product.id) }
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={handleViewDetails} variant="outline" className="flex-1">
          View Details
        </Button>
        <Button onClick={handleAddToCart} className="flex-1">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
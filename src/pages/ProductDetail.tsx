import { useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/types/product";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Mock function to fetch product details - replace with actual API call
const fetchProductDetails = async (id: string): Promise<Product> => {
  // Simulating API call
  return {
    id: parseInt(id),
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Features include:\n\n- Active Noise Cancellation\n- 30-hour battery life\n- Premium audio drivers\n- Comfortable fit\n- Bluetooth 5.0",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics"
  };
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductDetails(id),
  });

  const handleAddToCart = () => {
    // Add to cart logic here
    toast.success("Added to cart!");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
          </div>

          <div className="prose prose-sm">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="whitespace-pre-line">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
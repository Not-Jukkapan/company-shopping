import { useSearch } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { Product } from "@/types/product";

const ProductDetail = () => {
  const search = useSearch({ from: '/product/$productId' });
  const productId = search.productId;
  const addToCart = useCartStore((state) => state.addItem);

  // Mock product data - in a real app, this would come from an API
  const product: Product = {
    id: Number(productId),
    name: "Sample Product",
    description: "This is a sample product description",
    price: 99.99,
    image: "/placeholder.svg",
    category: "general" // Added the required category field
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <Button onClick={handleAddToCart} size="lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
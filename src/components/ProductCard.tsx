import { useNavigate } from '@tanstack/react-router';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types/Product';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();

  const handleViewDetails = () => {
    navigate({
      to: '/product/$productId',
      params: { productId: product.id.toString() }
    });
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <div className="mt-4 flex gap-2">
          <Button onClick={handleViewDetails} variant="outline">
            View Details
          </Button>
          <Button onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
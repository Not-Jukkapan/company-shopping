import { useNavigate } from '@tanstack/react-router';
import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types/Product';

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
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <div className="mt-4 flex justify-between">
          <button onClick={handleViewDetails} className="btn btn-primary">
            View Details
          </button>
          <button onClick={handleAddToCart} className="btn btn-secondary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <Button 
          onClick={() => navigate({ 
            to: '/product/$productId',
            params: { productId: product.id }
          })} 
          className="mt-2 w-full"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ui/skeletons";
import { Product } from "@/types/Product";

// Mock products data since we don't have a real API yet
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Industrial Valve A",
    price: 299.99,
    description: "High-quality industrial valve for heavy-duty applications",
    image: "/placeholder.svg",
    category: "Valves"
  },
  {
    id: 2,
    name: "Pressure Sensor B",
    price: 149.99,
    description: "Precision pressure sensor with digital output",
    image: "/placeholder.svg",
    category: "Sensors"
  },
  {
    id: 3,
    name: "Flow Meter C",
    price: 399.99,
    description: "Advanced flow meter for industrial applications",
    image: "/placeholder.svg",
    category: "Meters"
  },
  {
    id: 4,
    name: "Control Valve D",
    price: 249.99,
    description: "Electronic control valve with precise regulation",
    image: "/placeholder.svg",
    category: "Valves"
  }
];

const Shop = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockProducts;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      {isLoading ? (
        <ProductGridSkeleton />
      ) : error ? (
        <div className="text-red-500">Error loading products</div>
      ) : (
        <ProductGrid products={data || []} />
      )}
    </div>
  );
};

export default Shop;
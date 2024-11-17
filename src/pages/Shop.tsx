import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ui/skeletons";

const Shop = () => {
  const { data, error, isLoading } = useQuery("products", fetchProducts);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      {isLoading ? (
        <ProductGridSkeleton />
      ) : error ? (
        <div>Error loading products</div>
      ) : (
        <ProductGrid products={data || []} />
      )}
    </div>
  );
};

export default Shop;

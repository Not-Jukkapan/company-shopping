import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ui/skeletons";
import { Product } from "@/types/Product";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

// Mock products data
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockProducts;
    }
  });

  const categories = Array.from(
    new Set(mockProducts.map((product) => product.category))
  );

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <ProductGridSkeleton />
      ) : filteredProducts?.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No products found matching your criteria
        </div>
      ) : (
        <ProductGrid products={filteredProducts || []} />
      )}
    </div>
  );
};

export default Shop;
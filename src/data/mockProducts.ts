import { Product } from "@/types/Product";

const generateMockProducts = (): Product[] => {
  const categories = [
    "Controllers",
    "HMI",
    "Networking",
    "Drives",
    "I/O Systems",
    "Software",
    "Sensors",
    "Safety Systems",
    "Power Supplies",
    "Industrial PCs"
  ];

  const products: Product[] = [];
  
  for (let i = 1; i <= 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const basePrice = Math.floor(Math.random() * 2000) + 200;
    
    products.push({
      id: i,
      name: `Industrial ${category} - Model ${String.fromCharCode(65 + (i % 26))}${Math.floor(i / 26) + 1}`,
      price: basePrice + 0.99,
      description: `High-performance ${category.toLowerCase()} solution for industrial automation needs. Series ${Math.floor(Math.random() * 1000)}`,
      image: `https://picsum.photos/seed/${i}/400/300`,
      category: category
    });
  }

  return products;
};

export const mockProducts = generateMockProducts();
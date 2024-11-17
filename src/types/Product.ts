export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageUrl?: string; // For backward compatibility
  description: string;
  category: string;
}
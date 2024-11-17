import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { config } from '@/config/env';
import { mockProducts } from '@/data/mockProducts';
import type { Product, CreateProduct, UpdateProduct } from '@/schemas/product';

const PRODUCTS_KEY = 'products';

const fetchProducts = async (): Promise<Product[]> => {
  if (config.USE_MOCK_DATA) {
    return mockProducts;
  }
  const response = await fetch(`${config.API_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

const fetchProduct = async (id: string): Promise<Product> => {
  if (config.USE_MOCK_DATA) {
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return product;
  }
  const response = await fetch(`${config.API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};

// Hooks
export const useProducts = () => {
  return useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: fetchProducts,
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: [PRODUCTS_KEY, id],
    queryFn: () => fetchProduct(id),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: CreateProduct) => {
      if (config.USE_MOCK_DATA) {
        throw new Error('Create operation not supported in mock mode');
      }
      const response = await fetch(`${config.API_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      if (!response.ok) throw new Error('Failed to create product');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateProduct }) => {
      if (config.USE_MOCK_DATA) {
        throw new Error('Update operation not supported in mock mode');
      }
      const response = await fetch(`${config.API_URL}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update product');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS_KEY] });
    },
  });
};

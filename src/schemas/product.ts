import { z } from 'zod';

// DTOs
export const CreateProductDTO = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  description: z.string(),
  image: z.string().url(),
  category: z.string(),
});

export const UpdateProductDTO = CreateProductDTO.partial();

// API Responses
export const ProductResponse = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.string(),
  category: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ProductsResponse = z.array(ProductResponse);

export type Product = z.infer<typeof ProductResponse>;
export type CreateProduct = z.infer<typeof CreateProductDTO>;
export type UpdateProduct = z.infer<typeof UpdateProductDTO>;
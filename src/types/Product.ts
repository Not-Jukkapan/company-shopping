export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductDTO {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
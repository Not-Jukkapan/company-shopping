import { create } from 'zustand';
import { Product } from '@/types/Product';

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.price, 0);
  },
}));
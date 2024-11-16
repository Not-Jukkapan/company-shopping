import { createRootRoute, Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export const Route = createRootRoute({
  component: () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    
    return (
      <div className="min-h-screen bg-background">
        <Navbar 
          onCartClick={() => {}} 
          cartItemCount={cartItems.length}
        />
        <Outlet />
      </div>
    );
  },
});
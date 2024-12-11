import { Outlet } from "@tanstack/react-router";
import Navbar from "@/components/Layout/Navbar";
import { useCartStore } from "@/store/useCartStore";

const RootComponent = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemCount={cartItems.length} />
      <Outlet />
    </div>
  );
};

export default RootComponent;

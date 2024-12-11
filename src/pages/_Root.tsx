import { Outlet } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/useCartStore";
import Breadcrumbs from "@/components/BreadCrumb";

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

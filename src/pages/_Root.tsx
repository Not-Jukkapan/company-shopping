import { Outlet } from "@tanstack/react-router";
import Navbar from "@/components/Layout/Navbar";
import { useCartStore } from "@/store/useCartStore";
import Footer from "@/components/Layout/Footer";

const RootComponent = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <Navbar cartItemCount={cartItems.length} />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootComponent;

import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">ShopApp</div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <User size={20} />
            <span className="hidden sm:inline">Account</span>
          </Button>
          
          <Button onClick={onCartClick} variant="outline" className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
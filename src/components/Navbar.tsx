import { ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/lib/auth';

interface NavbarProps {
  cartItemCount: number;
}

const Navbar = ({ cartItemCount }: NavbarProps) => {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              Chaiudom
            </Link>
            
            <div className="flex gap-6">
              <Link to="/shop" className="text-gray-600 hover:text-primary">
                Shop
              </Link>
              <Link to="/industrial-solutions" className="text-gray-600 hover:text-primary">
                Solutions
              </Link>
              <Link to="/company-profile" className="text-gray-600 hover:text-primary">
                About Us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2"
                  onClick={() => navigate({ to: '/profile' })}
                >
                  <User size={20} />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
                <Button onClick={() => signOut()} variant="ghost" className="flex items-center gap-2">
                  <LogOut size={20} />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </>
            ) : (
              <Link to="/auth/signin">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={20} />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
            )}
            
            <Button 
              onClick={() => navigate({ to: '/cart' })} 
              variant="outline" 
              className="flex items-center gap-2 relative"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Plus, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-artisan to-sage rounded-full flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">ArtisanMarket</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/add-product" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/add-product') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Sell Your Craft
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Our Impact
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
            <Link to="/add-product">
              <Button variant="default" size="sm" className="hidden sm:flex">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
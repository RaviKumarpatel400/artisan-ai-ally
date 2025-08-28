import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  artisan: string;
  rating: number;
  description: string;
}

const ProductCard = ({ id, name, price, category, image, artisan, rating, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs bg-sage/20 text-sage-foreground">
            {category}
          </Badge>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-sm mb-1 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">by {artisan}</p>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <p className="font-bold text-lg text-primary">${price}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${id}`} className="w-full">
          <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
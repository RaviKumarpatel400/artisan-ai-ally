import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/data/products";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-marketplace.jpg";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pottery", "Textiles", "Woodwork", "Basketry", "Glasswork"];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-warm/20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Discover Authentic Handcrafted Treasures
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with talented local artisans and discover unique, handmade pieces that tell a story. 
            Every purchase supports traditional craftsmanship and empowers creative communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Explore Marketplace
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link to="/add-product">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
                Become an Artisan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products or artisans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-muted hover:bg-sage/20 text-muted-foreground hover:text-sage-foreground"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Handcrafted Items</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is lovingly crafted by skilled artisans who pour their heart, heritage, and expertise into every creation.
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-artisan to-sage text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Artisan Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Are you a creator, maker, or artisan? Share your craft with the world and connect with customers who value authentic, handmade quality.
          </p>
          <Link to="/add-product">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Selling Your Craft
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
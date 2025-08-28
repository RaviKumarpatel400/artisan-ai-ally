import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Share2, Star, ArrowLeft, Copy, Instagram, MessageSquare } from "lucide-react";
import { mockProducts } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return to Marketplace</Button>
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: `${type} has been copied to your clipboard.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-warm/20 py-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 bg-sage/20 text-sage-foreground">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">by {product.artisan}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground text-sm">(12 reviews)</span>
                </div>
              </div>

              <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Artisan Story & Social Media Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Artisan Story */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-artisan to-sage rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {product.artisan.charAt(0)}
                  </span>
                </div>
                The Artisan's Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {product.story}
              </p>
            </CardContent>
          </Card>

          {/* AI-Generated Social Media Content */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-primary" />
                Share This Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">Instagram Caption</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyToClipboard(product.socialCaption, "Caption")}
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  {product.socialCaption}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">Hashtags</p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => copyToClipboard(product.hashtags.join(" "), "Hashtags")}
                  >
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg text-xs flex flex-wrap gap-1">
                  {product.hashtags.map((tag, index) => (
                    <span key={index} className="text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Instagram className="w-4 h-4 mr-2" />
                  Share on Instagram
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">More from {product.artisan}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter(p => p.artisan === product.artisan && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Card key={relatedProduct.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{relatedProduct.category}</p>
                    <p className="font-bold text-primary">${relatedProduct.price}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
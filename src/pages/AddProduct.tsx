import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Sparkles, Camera, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AddProduct = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    artisan: "",
    image: "",
    description: ""
  });
  const { toast } = useToast();

  const categories = ["Pottery", "Textiles", "Woodwork", "Basketry", "Glasswork", "Jewelry", "Metalwork"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ ...prev, image: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIContent = async () => {
    if (!formData.name || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please provide at least the product name and category to generate AI content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const descriptions = {
        "Pottery": `This exquisite ${formData.name.toLowerCase()} showcases the timeless beauty of traditional ceramic artistry. Hand-thrown and glazed with care, each piece features unique variations that celebrate the imperfect perfection of handcrafted pottery. The smooth, organic curves and earthy tones bring warmth and authenticity to any space.`,
        "Textiles": `Beautifully crafted ${formData.name.toLowerCase()} featuring intricate patterns and premium natural fibers. Each thread is woven with intention, creating a piece that combines traditional techniques with contemporary style. The rich textures and vibrant colors tell a story of cultural heritage and artistic expression.`,
        "Woodwork": `This stunning ${formData.name.toLowerCase()} is expertly carved from sustainably sourced wood, showcasing the natural grain and character of the material. Hand-finished with attention to every detail, it represents hours of skilled craftsmanship and a deep respect for woodworking traditions.`,
        "Basketry": `Handwoven with traditional techniques passed down through generations, this ${formData.name.toLowerCase()} combines functionality with artistic beauty. Made from carefully selected natural fibers, each piece is unique and showcases the meditative art of basket weaving.`,
        "Glasswork": `This elegant ${formData.name.toLowerCase()} is meticulously crafted using time-honored glassblowing techniques. The interplay of light and color creates a mesmerizing visual experience, while the smooth curves and delicate details demonstrate the artisan's mastery of their craft.`
      };

      setFormData(prev => ({
        ...prev,
        description: descriptions[formData.category as keyof typeof descriptions] || "A beautiful handcrafted piece that showcases exceptional artisan skill and attention to detail."
      }));

      setIsGenerating(false);
      toast({
        title: "AI Content Generated!",
        description: "Your product description has been enhanced with AI-powered storytelling.",
      });
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Product Added Successfully!",
      description: "Your handcrafted item is now live in the marketplace.",
    });

    // Reset form
    setFormData({
      name: "",
      price: "",
      category: "",
      artisan: "",
      image: "",
      description: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-warm/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Share Your Craft with the World</h1>
            <p className="text-muted-foreground">
              Upload your handmade creation and let our AI assistant help you tell its story
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Add Your Product
              </CardTitle>
              <CardDescription>
                Fill in the details below and we'll help create compelling descriptions and social media content
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">Product Image</Label>
                  <div className="flex items-center justify-center w-full">
                    <label 
                      htmlFor="image" 
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      {formData.image ? (
                        <img 
                          src={formData.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Camera className="w-8 h-8 mb-4 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PNG, JPG or JPEG</p>
                        </div>
                      )}
                      <input 
                        id="image" 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Handwoven Ceramic Bowl"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price (USD) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artisan">Your Name *</Label>
                    <Input
                      id="artisan"
                      placeholder="Your artisan name"
                      value={formData.artisan}
                      onChange={(e) => setFormData(prev => ({ ...prev, artisan: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="description">Product Description</Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateAIContent}
                      disabled={isGenerating}
                      className="text-xs"
                    >
                      {isGenerating ? (
                        "Generating..."
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Enhance
                        </>
                      )}
                    </Button>
                  </div>
                  <Textarea
                    id="description"
                    placeholder="Tell the story of your creation..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={6}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Add to Marketplace
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
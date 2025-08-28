import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Sparkles, TrendingUp, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Active Artisans", value: "2,847", icon: Users },
    { label: "Products Sold", value: "12,389", icon: TrendingUp },
    { label: "Countries Reached", value: "45", icon: Globe },
    { label: "Success Stories", value: "156", icon: Award },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Storytelling",
      description: "Our AI assistant helps artisans create compelling product descriptions, stories, and social media content that capture the essence of their craft."
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect local artisans with customers worldwide, breaking down geographical barriers and expanding market reach."
    },
    {
      icon: Heart,
      title: "Supporting Communities",
      description: "Every purchase directly supports artisan communities, preserving traditional crafts and creating sustainable livelihoods."
    },
    {
      icon: Users,
      title: "Building Connections",
      description: "Foster meaningful relationships between makers and customers through authentic storytelling and cultural exchange."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-warm/20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-artisan to-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Artisans Through Technology
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We bridge the gap between traditional craftsmanship and modern commerce, 
            using AI to help artisans tell their stories and reach customers who value authenticity.
          </p>
          <Link to="/add-product">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Join Our Community
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              In a world increasingly dominated by mass production, we believe in the power of human creativity 
              and traditional craftsmanship. Our mission is to preserve cultural heritage while empowering artisans 
              with modern tools that help them thrive in the digital economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We're Making a Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology meets tradition in our comprehensive platform designed specifically for artisans and craft enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-artisan to-sage rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real artisans, real impact. See how our platform has transformed creative businesses around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-artisan to-sage rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">MS</span>
                </div>
                <CardTitle className="text-lg">Maria Santos</CardTitle>
                <Badge variant="secondary" className="w-fit bg-sage/20">Pottery Artist</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The AI storytelling helped me share the history behind my ceramic pieces. My sales increased by 300% in just three months!"
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  300% sales increase
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-artisan to-sage rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">TB</span>
                </div>
                <CardTitle className="text-lg">Thomas Berg</CardTitle>
                <Badge variant="secondary" className="w-fit bg-sage/20">Woodworker</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "I went from selling locally to reaching customers in 15 countries. The platform's social media tools made all the difference."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 mr-1" />
                  15 countries reached
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-artisan to-sage rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">AO</span>
                </div>
                <CardTitle className="text-lg">Amara Okafor</CardTitle>
                <Badge variant="secondary" className="w-fit bg-sage/20">Textile Artist</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The platform helped me preserve my grandmother's weaving techniques while building a sustainable business for my family."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 mr-1" />
                  Cultural preservation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-artisan to-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Craft?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of artisans who are already using our platform to grow their businesses and preserve their traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/add-product">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Selling Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
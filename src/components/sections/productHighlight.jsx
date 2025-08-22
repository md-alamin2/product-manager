import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import { getFeaturedProducts } from "@/lib/data/products";
import { ArrowRight, Star } from "lucide-react";

const getFeaturedProducts = async()=>{
  const res = await fetch("http://localhost:3000/api/products/featured")
  const data = await res.json();
  return data;
}

export async function ProductHighlights() {
  const featuredProducts = await getFeaturedProducts();
  console.log(featuredProducts, "featuredProducts")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Products
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Handpicked for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highly-rated products, carefully selected 
            to meet your needs and exceed your expectations.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts?.map((product) => (
            <Card key={product._id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background p-0">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-video">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.9)</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/products/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="mb-12" />

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to explore more?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our complete collection of products or add your own to share 
            with the community.
          </p>
          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard/add-product">
                Add Your Product
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
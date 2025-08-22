import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Share2, 
  Shield, 
  Truck, 
  RotateCcw,
  Check
} from "lucide-react";
import { data } from "../page";
const singleData = async(id)=>{
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  const data = await res.json();
  return data
}

export default async function ProductPage({ params }) {
  const {id} = await params;
  const product = await singleData(id);
  const products = await data()

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => (p.category === product.data.category) && (p._id !== product.data._id))
    .slice(0, 3);

  const features = [
    "High-quality materials",
    "Fast shipping worldwide",
    "30-day return policy",
    "1-year warranty included",
    "24/7 customer support"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% authentic products with quality assurance"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $50"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/products" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product?.data.image}
                alt={product?.data.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.featured && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Thumbnail images placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="relative aspect-square overflow-hidden rounded border-2 border-transparent hover:border-primary cursor-pointer transition-colors"
                >
                  <Image
                    src={product?.data.image}
                    alt={`${product?.data.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category and Rating */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-sm">
                {product?.data.category}
              </Badge>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {product?.data.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.9 • 127 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                ${product?.data.price}
              </div>
              <p className="text-sm text-muted-foreground">
                Price includes all taxes. Free shipping on orders over $50.
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product?.data.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button size="lg" className="w-full">
                Add to Cart - ${product.price}
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <>
            <Separator className="my-12" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Related Products</h2>
                <Button variant="outline" asChild>
                  <Link href={`/products?category=${product.category}`}>
                    View All {product.category}
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Card key={relatedProduct._id} className="group hover:shadow-lg transition-all duration-300 p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {relatedProduct.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedProduct.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          ${relatedProduct.price}
                        </span>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/products/${relatedProduct.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
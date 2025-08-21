"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of high-quality products.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 p-0"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-video">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {product.category}
                    </Badge>
                  </div>
                  {product.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-4 py-0 h-full">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-primary text-primary"
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(4.9)</span>
                </div>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.description}
                </p>

                <div className="text-xl font-bold text-primary">${product.price}</div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

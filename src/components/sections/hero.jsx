import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Package } from "lucide-react";

export function Hero() {
  const stats = [
    { icon: Package, value: "1000+", label: "Products" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm">
            🎉 New products added weekly
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Discover Amazing
            <span className="text-primary block sm:inline"> Products</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of high-quality products. From electronics to home essentials, 
            find everything you need in one place with our easy-to-use product management system.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              <Link href="/dashboard/add-product">
                Add Product
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
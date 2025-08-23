import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon and Number */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Package className="h-24 w-24 text-muted-foreground/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary">404</span>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Sorry, we could not find the page you are looking for.
          </p>
          <p className="text-sm text-muted-foreground">
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              <Search className="mr-2 h-4 w-4" />
              Browse Products
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/products" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              → All Products
            </Link>
            <Link 
              href="/login" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              → Login
            </Link>
            <Link 
              href="/dashboard/add-product" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              → Add Product
            </Link>
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              → Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
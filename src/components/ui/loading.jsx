// components/ui/loading.js
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// General loading spinner
export function LoadingSpinner({ className, size = "default" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12"
  };

  return (
    <Loader2 
      className={cn("animate-spin", sizeClasses[size], className)} 
    />
  );
}

// Page loading component
export function PageLoading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <LoadingSpinner size="xl" className="text-primary" />
      <p className="text-muted-foreground text-lg">{message}</p>
    </div>
  );
}

// Card loading skeleton
export function ProductCardSkeleton() {
  return (
    <div className="group hover:shadow-xl transition-all duration-300 p-0 border rounded-lg">
      <div className="p-0">
        <div className="relative overflow-hidden rounded-t-lg aspect-video bg-muted animate-pulse" />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 w-3 bg-muted rounded animate-pulse" />
          ))}
        </div>
        
        <div className="h-5 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
        <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        <div className="h-6 bg-muted rounded animate-pulse w-1/4" />
      </div>
      
      <div className="p-4 pt-0">
        <div className="h-10 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}

// Products grid loading
export function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
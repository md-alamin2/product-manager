import ProductsClient from "./components/ProductsClient";

export const dynamic = 'force-dynamic';

export const data = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache:"no-store"
  });
  const products = await res.json();
  return { products };
};

export const getFeaturedProducts = async () => {
  const { products } = await data();
  return products.filter((p) => p.featured);
};

export const getProductById = async (id) => {
  const { products } = await data();
  return products.find((p) => p._id == id);
};

export default async function ProductsPage() {
  const { products } = await data();

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of high-quality products. Use the
              filters below to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>

      {/* Client Component for Interactive Features */}
      <ProductsClient products={products} />
    </div>
  );
}

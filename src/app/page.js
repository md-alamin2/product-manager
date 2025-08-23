import { Hero } from "@/app/sections/hero";
import { ProductHighlights } from "@/app/sections/productHighlight";


export const getFeaturedProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/featured`);
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      <Hero></Hero>
      <ProductHighlights featuredProducts={featuredProducts}></ProductHighlights>
    </div>
  );
}

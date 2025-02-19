// to display the loader
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import ProductList from "@/components/shared/products/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";


// export default async function Home() {
//   await delay(2000);
export default async function HomePage() {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList title="Newest Arrivals" data={latestProducts} limit={4} />
    </div>
  );
}

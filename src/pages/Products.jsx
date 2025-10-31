import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <>
      <h2 className="font-stretch-75% text-2xl font-bold text-blue-800 mt-8 text-center">
        Number of products: {products.length}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

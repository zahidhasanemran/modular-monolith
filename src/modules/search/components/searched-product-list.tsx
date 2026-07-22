import { products } from "@/data";
import { ProductCard } from "@/shared/components/products";

export const SearchedProductList = () => {
  return (
    <div className="border border-gray-300 rounded p-4 m-2">
      <h2>Searched Product List</h2>
      <p>List of products based on search query.</p>

      <div className="grid-grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

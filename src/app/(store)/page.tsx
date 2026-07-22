import { ProductLists } from "@/shared/components/products";
import { products } from "@/data";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <div className="">
        <ProductLists products={products} />
      </div>
    </div>
  );
}

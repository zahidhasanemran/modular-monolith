import { ProductLists } from "@/modules/catalog";
import { products } from "@/modules/catalog";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <div className="">
        <ProductLists products={products} />
      </div>
    </div>
  );
}

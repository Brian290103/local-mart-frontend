import React from "react";
import { Categories } from "@/data/categories";
import { ChevronRight } from "lucide-react";
import { cn, fetcher } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import Header from "@/components/Header.tsx";
import ProductList from "@/components/ProductList.tsx";

const ShopPage = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://dummyjson.com/products", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return (
    <section className={"flex flex-col gap-2"}>
      <Header
        caption={"Our Collection"}
        title={"Find Unique Local Treasures Right Here"}
        description={
          "Dive into a curated selection of quality products crafted by local sellers. Shop fresh finds, support your community, and discover something special with every visit."
        }
      />

      <div className={"grid grid-cols-1 gap-2 w-full"}>
        <aside className="bg-white p-2 hidden rounded-xl">
          <div className="h-full flex flex-col gap-2 items-center">
            <span className="font-bold py-2">Categories</span>
            <Separator />
            {Categories.map((item, index) => (
              <div
                key={index}
                className={"flex w-full items-center justify-between "}
              >
                <div
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "flex items-center w-full gap-3",
                  )}
                >
                  <img src={item.icon} alt={item.name} className="w-6 h-6" />
                  <span className="text-sm">{item.name}</span>
                  <ChevronRight className={"w-4 h-6 ms-auto"} />
                </div>
              </div>
            ))}
          </div>
        </aside>
        <article className="w-full lg:col-span-3 flex flex-col gap-3">
          {/* Products List */}
          <ProductList data={products.products} />
        </article>
      </div>
    </section>
  );
};

export default ShopPage;
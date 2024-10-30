import React from "react";
import { Categories } from "@/data/categories";
import { ChevronRight } from "lucide-react";
import { cn, fetcher } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useSWR from "swr";
import Header from "@/components/Header.tsx";
import BidProductList from "@/components/BidProductList.tsx";

const BiddingPage = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("https://dummyjson.com/products", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return (
    <div className={"flex flex-col gap-2"}>
      <Header
        caption={"Bid to Win"}
        title={"Exclusive Deals, One Bid at a Time"}
        description={
          "Join the excitement of live bidding and snag incredible finds at unbeatable prices. From rare collectibles to must-have items, place your bid and watch as you get closer to owning something unique."
        }
      />

      <section className={"grid grid-cols-1 p-2 md:grid-cols-3 gap-2 w-full"}>
        <article className="bg-white  hidden md:block">
          <div className=" flex sticky border p-2 h-fit top-28 left-0 right-0 flex-col gap-2 items-center">
            <span className="font-bold py-2 w-full">Categories</span>
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
        </article>
        <article className="w-full md:col-span-2 flex flex-col gap-3">
          {/* Products List */}
          <BidProductList data={products.products} />
        </article>
      </section>
    </div>
  );
};

export default BiddingPage;
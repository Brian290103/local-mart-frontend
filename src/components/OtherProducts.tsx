import React from "react";
import ProductList from "@/components/ProductList.tsx";
import useSWR from "swr";
import { fetcher } from "@/lib/utils.ts";

const OtherProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSWR("https://dummyjson.com/products", fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load products</div>;

  return <ProductList data={products.products} />;
};

export default OtherProducts;
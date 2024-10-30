import React from "react";
import ProductCard from "@/components/ProductCard.tsx";
import { Product } from "@/types/app-types.ts";

interface ProductListProps {
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data: products }) => {
  return (
    <div className={"w-full px-2"}>
      <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 bg-white overflow-hidden">
        {products.map((item, index) => (
          <li
            key={index}
            className={"border hover:border-primary duration-300"}
          >
            <ProductCard data={item} bid={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
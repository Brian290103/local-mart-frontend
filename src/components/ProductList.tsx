import React from "react";
import ProductCard from "@/components/ProductCard.tsx";
import { Product } from "@/types/app-types.ts";

interface ProductListProps {
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ data: products }) => {
  return (
    <div className={"w-full px-2"}>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 lg:grid-cols-6 bg-white rounded-xl overflow-hidden">
        {products.map((item, index) => (
          <li
            key={index}
            className={"border hover:border-primary duration-300"}
          >
            <ProductCard data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
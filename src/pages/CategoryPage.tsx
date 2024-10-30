import React from "react";
import { Categories } from "@/data/categories.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import Header from "@/components/Header.tsx";

const CategoryPage = () => {
  return (
    <section className={"flex flex-col gap-3 px-2"}>
      <Header
        caption={"Explore by Category"}
        title={"Discover the Perfect Match for Every Need"}
        description={
          " Browse through our diverse categories to find exactly what you're looking for. Whether it’s essentials or unique pieces, our selection has something for everyone."
        }
      />

      <article className="w-full max-w-7xl mx-auto">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden lg:grid-cols-3 xl:grid-cols-4">
          {Categories.map((item, index) => (
            <li
              className={
                "bg-white relative border py-10 px-3 hover:border-primary flex flex-col duration-300 gap-2 items-center"
              }
              key={index}
            >
              <Link to={""} className={"flex items-center flex-col gap-2"}>
                <div className="absolute top-2 right-2">
                  <Badge>12</Badge>
                </div>
                <img src={item.icon} alt="" className="w-[50px] " />
                <span className="text-lg font-semibold text-primary">
                  {item.name}
                </span>
                <p className="text-sm text-center">{item.description}</p>
                <div className="w-full flex pt-4 items-center justify-center">
                  <Button>View Products</Button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default CategoryPage;
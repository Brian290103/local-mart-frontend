import React from "react";
import {Link} from "react-router-dom";
import BidCountdownTimer from "@/components/BidCountdownTimer.tsx";
import {Button} from "@/components/ui/button.tsx"; // Define the props type for ProductCard

// Define the props type for ProductCard
interface ProductCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
  };
  bid: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, bid }) => {
  return (
    <Link
      to={`/kaimosi/${bid ? "bid" : "shop"}/${data.id}`}
      className="relative group"
    >
      {bid && <BidCountdownTimer endDate="2024-10-31T23:59:59" />}

      <div className="h-32 p-2  overflow-hidden w-full flex items-center justify-center">
        <img
          src={data.images[0]}
          alt={data.title}
          className=" group-hover:scale-150 duration-300 h-full object-cover rounded-t-lg"
        />
      </div>

      <div className="p-2">
        <h2 className="text-sm  font-bold mt-2 group-hover:text-primary duration-300">
          {data.title}
        </h2>
        {/*<p className="text-sm text-gray-600 mt-1">{data.description}</p>*/}
        {bid ? (
          <div className={"border-t border-b pt-2.5 mt-2.5"}>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm  font-semibold">Initial Price: </span>{" "}
              <span className="text-sm  font-semibold">${data.price}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm  font-semibold">Current Bid: </span>{" "}
              <span className="text-sm md:text-lg text-primary font-semibold">
                ${data.price}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm  font-semibold">${data.price}</span>
            <span className="text-xs sm:text-sm text-yellow-500">
              {data.rating}⭐
            </span>
          </div>
        )}
        {bid && (
          <div className="w-full pt-5 flex items-center justify-center">
            <Button>Bid Now</Button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

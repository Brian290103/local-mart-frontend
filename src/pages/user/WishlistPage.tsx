import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import { Button } from "@/components/ui/button.tsx";
import EmptyImage from "@/assets/vectors/empty.png";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import useCartStore from "@/hooks/use-cart-store.ts";

const WishlistPage = () => {
  const { addToCart, removeFromCart, emptyCart, cart } = useCartStore();

  return (
    <UserLayout>
      <UserNav title={"Wishlist"} />
      <div className="py-5 px-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            {cart!!.length === 0 ? (
              <>
                <img
                  src={EmptyImage}
                  alt=""
                  className="max-w-[400px] mx-auto"
                />
              </>
            ) : (
              <ul className={""}>
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className={"flex items-center gap-3 border-b py-3"}
                  >
                    <span className="">{index + 1}.</span>
                    <div className="w-20 h-20 min-w-20 min-h-20 md:w-36 md:h-36 md:min-h-36 md:min-w-36 border rounded-xl p-2">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                      <span className="text-sm sm:text-base">{item.title}</span>
                      <span className="uppercase text-xs sm:text-sm text-muted-foreground">
                        {item.category}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">
                        Ksh. {item.price}
                      </span>
                      <div className="w-full  justify-end flex row items-center  gap-1">
                        <Button variant={"outline"} size={"icon"}>
                          <EyeIcon />
                        </Button>{" "}
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          variant={"destructive"}
                          size={"icon"}
                        >
                          <TrashIcon />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default WishlistPage;
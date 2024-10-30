import React from "react";
import {
  HeartIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCartStore from "@/hooks/use-cart-store.ts";

import EmptyImage from "@/assets/vectors/empty.png";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routeConfig.ts";

const CartSheet = () => {
  const { addToCart, removeFromCart, emptyCart, cart } = useCartStore();
  console.log(cart);
  // Calculate the subtotal
  const subtotal = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2); // Assuming each item has a `quantity` attribute

  return (
    <div className={""}>
      <Sheet>
        <SheetTrigger asChild={true}>
          <Button variant={"outline"} size={"icon"} className={"relative"}>
            <ShoppingBagIcon className="w-6 h-6" />{" "}
            {/*<span>{item.name}</span>*/}
            <div className="absolute -top-3 -right-3">
              <Badge>{cart!!.length}</Badge>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent className={"overflow-y-scroll max-w-3/4 w-full"}>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
            <SheetDescription>{cart.length} Items in Cart</SheetDescription>
          </SheetHeader>

          <div className="flex items-center justify-center py-5">
            <Button onClick={() => emptyCart()}>
              Empty Cart
              <TrashIcon className={"w-6 h-6 ms-2"} />
            </Button>
          </div>
          <div className="px-2 pb-10 flex flex-col">
            {/*<Separator />*/}

            {cart && cart.length === 0 ? (
              <div className="flex items-center justify-center">
                <img src={EmptyImage} alt="Empty Cart" className="w-3/4" />
              </div>
            ) : (
              <ul className={""}>
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className={"flex items-start gap-3 border-b py-2"}
                  >
                    <span className="">{index + 1}.</span>
                    <div className="rounded overflow-hidden min-w-24 min-h-24 w-24 h-24 border">
                      <img
                        src={item.images[0]}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 w-full my-auto">
                      <span className="text-sm font-display">{item.title}</span>
                      <span className="text-xs font-display text-muted-foreground uppercase">
                        {item.category}
                      </span>
                      <span className="text-sm font-display font-semibold">
                        Ksh. {item.price}
                      </span>

                      <div className="ms-auto flex items-center gap-2">
                        <Button variant={"outline"} size={"icon"}>
                          <HeartIcon className={""} />
                        </Button>{" "}
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          variant={"destructive"}
                          size={"icon"}
                        >
                          <TrashIcon className={""} />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <SheetFooter className={""}>
            <div className="w-full flex flex-col gap-2">
              <span className="">Subtotal</span>
              <span className="font-numeric text-3xl font-semibold">
                Ksh. {subtotal}
              </span>
              <span className=""></span>
              <Link to={routes.checkout.path} className={"w-full"}>
                <SheetClose className={""} asChild={true}>
                  <Button className={"w-full"} variant={"secondary"}>
                    Checkout
                  </Button>
                </SheetClose>
              </Link>
              <Link to={routes.cart.path} className={"w-full"}>
                <SheetClose className={""} asChild={true}>
                  <Button className={"w-full"}>View Cart</Button>
                </SheetClose>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
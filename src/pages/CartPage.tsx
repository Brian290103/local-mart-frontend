import React from "react";
import { Separator } from "@/components/ui/separator";
import SimpleHeader from "@/components/SimpleHeader.tsx";
import EmptyImage from "@/assets/vectors/empty.png";
import useCartStore from "@/hooks/use-cart-store.ts";
import { Button } from "@/components/ui/button.tsx";
import { EyeIcon, HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routeConfig.ts";

const ShopPage = () => {
  const { addToCart, removeFromCart, emptyCart, cart } = useCartStore();
  // console.log(cart);
  const subtotal = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2); // Assuming each item has a `quantity` attribute

  return (
    <div className={"flex flex-col w-full max-w-7xl mx-auto gap-2"}>
      <SimpleHeader title={"Shopping Cart"} />

      <section
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-2"
        }
      >
        <article className="flex  flex-col lg:col-span-2 gap-3">
          <Separator />
          {cart!!.length === 0 ? (
            <>
              <img src={EmptyImage} alt="" className="max-w-[400px] mx-auto" />
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
                      <Button variant={"default"} size={"icon"}>
                        <EyeIcon />
                      </Button>{" "}
                      <Button variant={"outline"} size={"icon"}>
                        <HeartIcon />
                      </Button>
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
        </article>
        <article className="">
          <div className="sticky top-28 left-0 right-0 rounded-xl p-3 flex flex-col gap-3 border">
            <span className="font-semibold">Cart Summary</span>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Cart Total</TableCell>
                  <TableCell className="text-right text-lg font-semibold font-numeric">
                    Kshs.
                    {subtotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="">
              <Link to={routes.checkout.path} className={"w-full flex"}>
                <Button className={"w-full"}>Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ShopPage;
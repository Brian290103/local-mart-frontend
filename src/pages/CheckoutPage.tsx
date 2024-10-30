import React from "react";
import { Separator } from "@/components/ui/separator";
import SimpleHeader from "@/components/SimpleHeader.tsx";
import useCartStore from "@/hooks/use-cart-store.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
  PlusCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import MpesaIcon from "@/assets/icons/mpesa.png";
import PayWithMpesa from "@/components/dialogs/PayWithMpesa.tsx";
import { XIcon } from "lucide-react";

const CheckoutPage = () => {
  const { addToCart, removeFromCart, emptyCart, cart } = useCartStore();
  // console.log(cart);
  const subtotal = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2); // Assuming each item has a `quantity` attribute

  return (
    <div className={"flex flex-col w-full max-w-7xl mx-auto gap-2"}>
      <SimpleHeader title={"Checkout"} />

      <section className={"grid grid-cols-1 lg:grid-cols-2 gap-10 w-full p-2"}>
        <article className="flex order-2 lg:order-1 lg:sticky h-fit top-28 left-0 right-0  flex-col gap-3">
          <Separator />
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <span className="font-medium text-base sm:text-xl">
              Shipping Address
            </span>
            <Button>
              <PlusCircleIcon className={""} />
              Select Address
            </Button>
          </div>
          <div className="flex gap-3">
            <div className=" w-full md:w-3/4">
              <div className="border flex text-sm sm:text-base flex-col gap-2 p-3">
                <div className="flex items-center gap-5">
                  <UserIcon className={"w-6 h-6 min-w-6  min-h-6"} />
                  <span className="">Brian Saitabau</span>
                </div>
                <div className="flex items-center gap-5">
                  <PhoneIcon className={"w-6 h-6 min-w-6  min-h-6"} />
                  <span className="">+254 797 147 842</span>
                </div>
                <div className="flex items-center gap-5">
                  <EnvelopeIcon className={"w-6 h-6 min-w-6  min-h-6"} />
                  <span className="">briansaitabau29@gmail.com</span>
                </div>
                <div className="flex gap-5">
                  <MapIcon className={"w-6  h-6 min-h-6 min-w-6"} />
                  <div className="flex flex-col">
                    <span className="">Vihiga, Kaimosi, Silent Corner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />
          <div className="flex items-center justify-between gap-3">
            <span className="">10 Coin can be Redeemed</span>
            <div className="">
              <Button>Apply discount</Button>
            </div>
          </div>
          <Separator />
          <Table>
            <TableBody>
              <TableRow>
                <TableHead className="">SubTotal</TableHead>
                <TableCell className="text-right  font-semibold font-numeric">
                  Kshs.
                  {subtotal}
                </TableCell>
              </TableRow>{" "}
              <TableRow>
                <TableHead>Shipping</TableHead>
                <TableCell className="text-right font-semibold font-numeric">
                  Kshs.
                  {subtotal}
                </TableCell>
              </TableRow>{" "}
              <TableRow>
                <TableHead>Discount</TableHead>
                <TableCell className="text-right font-semibold font-numeric">
                  Kshs.
                  {subtotal}
                </TableCell>
              </TableRow>{" "}
              <TableRow>
                <TableCell className="font-medium text-lg">Total</TableCell>
                <TableCell className="text-right text-lg font-semibold font-numeric">
                  Kshs.
                  {subtotal}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="">
            <div className={"w-full flex flex-col items-center"}>
              <img src={MpesaIcon} alt="" className="h-20" />
              <PayWithMpesa />
            </div>
          </div>
        </article>
        <article className="order-1 lg:order-2">
          <div className="lg:sticky bg-muted top-28 left-0 right-0 p-5 sm:p-10 flex flex-col gap-3">
            <span className="font-semibold">Order Summary</span>

            <ul className="">
              {cart!!.map((item, index) => (
                <li
                  key={index}
                  className={"flex border-b items-center py-3 gap-2 sm:gap-5"}
                >
                  <span className="">{index + 1}.</span>
                  <div className="w-20 h-20 min-w-20 min-h-20 bg-white rounded-xl flex items-center justify-center p-2">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full sm:w-fit">
                    <div className="flex w-full sm:w-fit items-center justify-between gap-2">
                      <span className="text-sm w-full sm:w-fit ">
                        {item.title}
                      </span>
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        size={"icon"}
                        variant={"ghost"}
                        className={"sm:hidden"}
                      >
                        <XIcon className={""} />
                      </Button>
                    </div>

                    <span className="uppercase text-xs text-muted-foreground">
                      {item.category}
                    </span>
                    <span className="font-semibold sm:hidden text-sm">
                      Ksh. {item.price}
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-col ms-auto">
                    <Button
                      onClick={() => removeFromCart(item.id)}
                      size={"icon"}
                      variant={"ghost"}
                      className={"mx-auto"}
                    >
                      <XIcon className={""} />
                    </Button>
                    <span className="font-semibold  text-sm">
                      Ksh. {item.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CheckoutPage;
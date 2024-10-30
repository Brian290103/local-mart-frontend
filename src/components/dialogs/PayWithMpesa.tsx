import React from "react";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PaymentForm } from "@/components/forms/PaymentForm.tsx";

const PayWithMpesa = () => {
  return (
    <div className={"w-full "}>
      <Dialog>
        <DialogTrigger asChild={true}>
          <Button className={"w-full"} variant={"default"} size={"lg"}>
            Pay now with Mpesa
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pay now with Mpesa - Kshs. 700</DialogTitle>
            <DialogDescription>
              Enter the phone number you want to pay with
            </DialogDescription>
            <div className="py-5">
              <PaymentForm />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PayWithMpesa;
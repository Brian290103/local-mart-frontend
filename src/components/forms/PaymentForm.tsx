"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function PaymentForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  autoFocus={true}
                  placeholder="+247/7/07 12 123 123"
                  {...field}
                />
              </FormControl>
              <FormDescription>Confirm Payment of Kshs. 700</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Pay Now</Button>
      </form>
    </Form>
  );
}
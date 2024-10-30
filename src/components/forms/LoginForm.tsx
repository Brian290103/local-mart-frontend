"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { routes } from "@/routes/routeConfig.ts";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getAppName } from "@/lib/utils.ts";
import { Link } from "react-router-dom";
import SocialAuth from "@/components/forms/SocialAuth.tsx";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(getAppName(), { description: "Login successful" });
    console.log("Login data:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Your password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2 flex flex-col gap-2">
          <Link to={"/"} className={"ms-auto"}>
            <Button type="button" variant={"link"} className={"w-full"}>
              Forgot Password?
            </Button>
          </Link>
          <Button type="submit" className={"w-full"}>
            Login
          </Button>

          <SocialAuth />

          <div className="flex items-center w-full justify-center  text-sm">
            <span className="">Already have an account?</span>
            <Link to={routes.register.path}>
              <Button variant={"link"}>{routes.register.name}</Button>
            </Link>
          </div>

          <p className="w-full text-center text-sm">
            I agree to {getAppName()}{" "}
            <Link to={"/"}>
              <Button variant={"link"}>
                Terms & Conditions and Privacy Policy
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
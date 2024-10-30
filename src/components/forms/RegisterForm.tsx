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
import { Checkbox } from "@/components/ui/checkbox.tsx";

const FormSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Please confirm your password.",
    }),
    acceptTerms: z.literal(true, {
      errorMap: () => ({
        message: "You must accept the terms and conditions.",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(getAppName(), { description: "Registration successful" });
    console.log("Registration data:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Accept Terms Checkbox */}
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="border rounded-xl p-3">
              <div className="flex  items-start space-x-2">
                <FormControl>
                  <Checkbox
                    id="terms1"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="grid gap-1.5 leading-none">
                  <FormLabel
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </FormLabel>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                  <FormMessage />
                </div>
              </div>
            </FormItem>
          )}
        />

        <div className="pt-2 flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Register
          </Button>

          <SocialAuth />

          <div className="flex items-center w-full justify-center text-sm">
            <span>Already have an account?</span>
            <Link to={routes.login.path}>
              <Button variant="link">{routes.login.name}</Button>
            </Link>
          </div>

          <p className="w-full text-center text-sm">
            I agree to {getAppName()}{" "}
            <Link to={"/"}>
              <Button variant="link">
                Terms & Conditions and Privacy Policy
              </Button>
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
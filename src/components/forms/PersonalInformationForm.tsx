"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

// Schema for form validation
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .regex(/^\d+$/, {
      message: "Phone number should contain only digits.",
    })
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    }),
});

export function PersonalInformationForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Username Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="yourusername" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* First Name Field */}
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name Field */}
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
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

        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex items-center justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

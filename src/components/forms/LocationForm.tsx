import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { locations } from "@/data/locations";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import LocationNotListed from "@/components/LocationNotListed.tsx";
import useLocationStore from "@/hooks/use-location.ts";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  location: z.string().min(1, {
    message: "Please select a location.",
  }),
});

const LocationForm = () => {
  const locationStore = useLocationStore(); // Zustand hook to update location ID
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Save the location ID in Zustand and local storage
    locationStore.setLocationId(values.location);
    navigate(""); // Redirect to the shop page
    // console.log(values);
  }

  // State for search input
  const [search, setSearch] = useState("");

  // Filter locations based on search input
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={"py-10"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <Command className="">
                      <CommandInput
                        placeholder="Search locations..."
                        value={search}
                        onValueChange={setSearch}
                      />
                      <CommandList>
                        {filteredLocations.length === 0 ? (
                          <CommandEmpty>No locations found.</CommandEmpty>
                        ) : (
                          filteredLocations.map((location) => (
                            <CommandItem
                              key={location.id}
                              onClick={() => {
                                field.onChange(location.id);
                                setSearch(""); // Clear search input after selection
                              }}
                            >
                              <SelectItem value={`${location.id}`}>
                                {location.name}
                              </SelectItem>
                            </CommandItem>
                          ))
                        )}
                      </CommandList>
                    </Command>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Please select your current living location from the list
                  above.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-3 justify-end">
            <LocationNotListed />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LocationForm;
import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderTab from "@/components/OrderTab.tsx";

const OrdersPage = () => {
  const TabCategoryList = [
    { name: "Un-Paid", slug: "un-paid" },
    { name: "To be Shipped", slug: "to-be-shipped" },
    {
      name: "Shipped",
      slug: "shipped",
    },
    { name: "Completed", slug: "completed" },
    { name: "Cancelled", slug: "cancelled" },
  ];

  return (
    <UserLayout>
      <UserNav
        title={"My Orders"}
        content={
          <div>
            <Button>
              <CirclePlus />
              Add New Address
            </Button>
          </div>
        }
      />
      <div className="py-5 px-2">
        <div className="grid grid-cols-1 gap-4">
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              {TabCategoryList.map((item, index) => (
                <TabsTrigger key={index} value={item.slug}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {TabCategoryList.map((item, index) => (
              <TabsContent key={index} value={item.slug}>
                <OrderTab />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </UserLayout>
  );
};

export default OrdersPage;
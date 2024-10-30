import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { routes } from "@/routes/routeConfig.ts";
import { ChevronRight, Dot, icons } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  const MenuLinks = [
    {
      id: 1,
      title: "My Account",
      icon: icons.User,
      path: "#",
      sub: [
        {
          id: 1.1,
          title: "Personal Information",
          path: routes.personalInformation.path,
        },
        {
          id: 1.2,
          title: "Address Book",
          path: routes.addresses.path,
        },
        {
          id: 1.3,
          title: "Manage Password",
          path: routes.passwords.path,
        },
      ],
    },
    {
      id: 2,
      title: "Wishlist",
      icon: icons.MapPin,
      path: routes.wishlist.path,
    },
    {
      id: 2,
      title: "My Coins",
      icon: icons.Coins,
      path: routes.coins.path,
    },
    {
      id: 2,
      title: "My Orders",
      icon: icons.List,
      path: routes.orders.path,
    },
  ];
  return (
    <aside
      className={
        "bg-muted sticky h-fit top-28 left-0 right-0 border rounded-xl p-2"
      }
    >
      <div className=" flex items-center justify-center flex-col p-2">
        <div className="flex flex-col gap-2 items-center">
          <Avatar className={"w-[80px] border h-[80px]"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="">Brian Saitabau</span>
        </div>

        <ul className=" w-full flex flex-col pt-5">
          {MenuLinks.map((item, index) => {
            return (
              <li key={index} className={""}>
                {item.sub ? (
                  <Accordion type="single" collapsible defaultValue={"item-1"}>
                    <AccordionItem value="item-1" className={" border-none"}>
                      <AccordionTrigger
                        className={
                          "flex py-2 hover:text-primary items-center gap-2"
                        }
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className={"w-4 h-4"} />
                          <span className="text-base font-normal">
                            {item.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="ps-2">
                          {item.sub.map((it, index) => (
                            <li
                              key={index}
                              className={"flex items-center gap-2"}
                            >
                              <Dot className={""} />
                              <NavLink
                                to={it.path}
                                className={({ isActive }) =>
                                  `${isActive && "text-primary"} py-2 hover:text-primary w-full  `
                                }
                              >
                                {it.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive && "text-primary"} flex items-center py-2  hover:underline gap-2 hover:text-primary py-1`
                    }
                    to={item.path}
                  >
                    <item.icon className={"w-4 h-4"} />
                    <span className="">{item.title}</span>
                    <ChevronRight className={"w-4 h-4 ms-auto"} />
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
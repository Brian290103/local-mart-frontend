import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils.ts";
import { ChevronsUpDown, icons } from "lucide-react";
import { NavLink } from "react-router-dom";
import { routes } from "@/routes/routeConfig.ts";

const UserAuthDropdown = () => {
  const MenuLinks = [
    {
      id: 1,
      title: "Personal Information",
      path: routes.personalInformation.path,
      icon: icons.User,
    },
    {
      id: 1,
      title: "Address Book",
      path: routes.addresses.path,
      icon: icons.MapPin,
    },
    {
      id: 1,
      title: "Orders",
      path: routes.orders.path,
      icon: icons.List,
    },

    {
      id: 1,
      title: "Wishlist",
      path: routes.wishlist.path,
      icon: icons.Heart,
    },
  ];
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <div
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              " cursor-pointer  ",
            )}
          >
            <Avatar className={"w-7 h-7"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="w-20 truncate">Brian Saitabau Passiany</span>
            <ChevronsUpDown className={"w-4 h-4"} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"me-2 min-w-52"}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {MenuLinks.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full hover:text-primary flex items-center gap-3 ${isActive && "text-primary"} `
                  }
                >
                  <item.icon />
                  {item.title}
                  <icons.ChevronRight className={"w-4 ms-auto h-4"} />
                </NavLink>
              </DropdownMenuItem>
            </React.Fragment>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button className={"w-full"}>Log Out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAuthDropdown;
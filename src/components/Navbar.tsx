// src/components/Navbar.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/components/Logo.tsx";
import { MenuLinks } from "@/data/menu-links.ts";
import { HeartIcon } from "@heroicons/react/24/outline";
import SearchDrawer from "@/components/dialogs/SearchDrawer.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import MobileNavSheet from "@/components/MobileNavSheet.tsx";
import CartSheet from "@/components/dialogs/CartSheet.tsx";
import UserAuthDropdown from "@/components/dialogs/UserAuthDropdown.tsx";

const menuIcons = [
  {
    name: "Wishlist",
    icon: <HeartIcon className="w-6 h-6" />,
    path: "/wishlist",
    value: 20,
  },
];

const locationSlug = "example-location";

const Navbar: React.FC = () => {
  return (
    <nav className="flex sticky top-0 left-0 right-0 z-50 bg-white items-center justify-between p-4 shadow ">
      {/* Brand */}
      <Logo />

      {/* Menu Links */}
      {/* src/components/Navbar.tsx */}
      <ul className=" space-x-6 hidden lg:flex">
        {MenuLinks.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path.replace(":id", locationSlug)} // Replace slug dynamically
              className={({ isActive }) =>
                `relative group uppercase font-semibold duration-300 tracking-wide ${isActive ? "text-primary" : "text-gray-800 hover:text-primary"}`
              }
            >
              {item.name}
              {/* Underline */}
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <div className={"hidden md:flex items-center gap-5"}>
          <div className="">
            <Link
              to="/login"
              className="hover:text-primary duration-300 text-sm"
            >
              Login / Register
            </Link>
          </div>
          <div className="flex items-center">
            <SearchDrawer />
          </div>

          {menuIcons.map((item, index) => (
            <div key={index} className="flex items-center ">
              <Link
                to={item.path}
                className="flex relative duration-300 items-center space-x-2 hover:text-primary"
              >
                {item.icon}
                {/*<span>{item.name}</span>*/}
                <div className="absolute -top-5 -right-3">
                  <Badge>{item.value}</Badge>
                </div>
              </Link>
            </div>
          ))}
          <div className="flex gap-3 items-center ">
            <CartSheet />
            <UserAuthDropdown />
          </div>
        </div>
        <div className="lg:hidden">
          <MobileNavSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

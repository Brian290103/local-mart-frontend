import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logs } from "lucide-react";
import Sidebar from "@/components/auth/user/Sidebar.tsx";
import { Button } from "@/components/ui/button.tsx";

const UserNav = ({ title, content }) => {
  return (
    <nav
      className={
        " p-2 min-h-14 py-2 border-b flex flex-wrap gap-3 justify-between items-center"
      }
    >
      <div className="flex items-center gap-2">
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger asChild={true}>
              <Button size={"icon"} variant={"secondary"}>
                <Logs />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className={"w-11/12 p-0 bg-muted"}>
              <div className="">
                <Sidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <span className="py-3 text-lg font-semibold">{title}</span>
      </div>

      {content}
    </nav>
  );
};

export default UserNav;
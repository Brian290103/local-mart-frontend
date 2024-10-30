import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import { CirclePlus, MapPin, Phone, User2 } from "lucide-react";
import { EnvelopeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";

const AddressesPage = () => {
  return (
    <UserLayout>
      <UserNav
        title={"Address Book"}
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
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array(5)
            .fill()
            .map((item, index) => (
              <li
                className={
                  "border rounded-xl bg-muted duration-300 hover:border-primary flex flex-col gap-2 px-2 pb-2 pt-5 text-sm"
                }
              >
                <div className="flex items-center gap-2">
                  <div className="">
                    <User2 className={"w-4 h-4"} />
                  </div>
                  <span className="">Brian Saitabau</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <Phone className={"w-4 h-4"} />
                  </div>
                  <span className="">+254 797 147 842</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <EnvelopeIcon className={"w-4 h-4"} />
                  </div>
                  <span className="">briansaitabau29@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <MapPin className={"w-4 h-4"} />
                  </div>
                  <span className="">Vihiga, Kaimosi, Silent Corner</span>
                </div>

                <Separator />

                <div className="w-full flex items-center justify-end">
                  <Button variant={"destructive"} size={"icon"}>
                    <TrashIcon />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </UserLayout>
  );
};

export default AddressesPage;
import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { PersonalInformationForm } from "@/components/forms/PersonalInformationForm.tsx";

const PersonalInformationPage = () => {
  return (
    <UserLayout>
      <UserNav
        title={"Personal Information"}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="order-2 lg:order-1">Dropzone</div>
          <div className="order-1 lg:order-2">
            <PersonalInformationForm />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default PersonalInformationPage;
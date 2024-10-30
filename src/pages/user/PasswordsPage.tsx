import React from "react";
import UserLayout from "@/components/auth/user/UserLayout.tsx";
import UserNav from "@/components/auth/user/UserNav.tsx";
import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm.tsx";

const PasswordsPage = () => {
  return (
    <UserLayout>
      <UserNav title={"Reset Password"} />
      <div className="py-5 px-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default PasswordsPage;
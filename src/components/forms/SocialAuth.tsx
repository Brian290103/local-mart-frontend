import React from "react";
import { Button } from "@/components/ui/button.tsx";
import GoogleIcon from "@/assets/icons/google.png";

const SocialAuth = () => {
  return (
    <div className={"flex flex-col gap-5 pt-3"}>
      <span className="mx-auto text-sm"> - OR - </span>

      <Button type="button" variant={"outline"} className={"w-full"}>
        <img src={GoogleIcon} alt="Google Icon" className=" w-4 h-4" />
        Continue with Google
      </Button>
    </div>
  );
};

export default SocialAuth;
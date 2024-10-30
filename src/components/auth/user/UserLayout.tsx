import Sidebar from "@/components/auth/user/Sidebar.tsx";
import CustomSeparator from "@/components/CustomSeparator.tsx";
import OtherProducts from "@/components/OtherProducts.tsx";
import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"relative w-full  max-w-7xl mx-auto sm:p-2"}>
      {/*<SimpleHeader title={"My Account"} />*/}
      <div className="w-full flex  sm:p-2 gap-3  ">
        <div className="w-[300px] hidden md:block min-w-[300px]">
          <Sidebar />
        </div>
        <main className="w-full">
          <div className="pb-10">{children}</div>
          <CustomSeparator title={"You may also like"} />
          <section className="">
            <OtherProducts />
          </section>
        </main>
      </div>
    </div>
  );
}
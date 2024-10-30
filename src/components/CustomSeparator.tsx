import React from "react";
import { Separator } from "@/components/ui/separator.tsx";

interface CustomSeparatorProps {
  title: string;
}

const CustomSeparator: React.FC<CustomSeparatorProps> = ({ title }) => {
  return (
    <section className={"w-full py-5 px-2 flex-col flex gap-5"}>
      <div className="w-full flex items-center gap-3">
        <div className="w-8 h-8 border-2 rounded-full border-primary p-1">
          <div className="w-full h-full rounded-full bg-primary"></div>
        </div>

        <span className="text-lg sm:text-2xl font-semibold">{title}</span>
      </div>
      <Separator />
    </section>
  );
};

export default CustomSeparator;
import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";

interface LogoProps {
  direction: string;
}

const Logo: React.FC<LogoProps> = ({ direction }) => {
  return (
    <div className="text-lg font-bold">
      <Link
        to="/"
        className={`flex items-center  gap-3 ${direction && " flex-col "}`}
      >
        <span className="">
          <HomeIcon className={"text-primary sm:w-12 w-8 h-8 sm:h-12"} />
        </span>
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-4xl font-logo">
            <span className="">Loca</span>
            <span className="text-primary">lMar</span>
            <span className="">t</span>
          </h1>
          <p className="text-xs sm:text-sm text-primary">
            Your home for local deals
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
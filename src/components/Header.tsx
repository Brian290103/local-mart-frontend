import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  caption: string;
}

const Header: React.FC<HeaderProps> = ({ title, caption, description }) => {
  return (
    <section
      className={
        "w-full flex  flex-col items-start py-10 px-2 bg-white rounded-xl"
      }
    >
      <div className="w-full  flex flex-col gap-3 mx-auto items-center">
        <span className="text-primary uppercase text-sm">{caption}</span>
        <h2 className="text-3xl font-semibold text-center w-full max-w-xl ">
          {title}
        </h2>
        <p className="text-center w-full max-w-4xl">{description}</p>
      </div>
    </section>
  );
};

export default Header;
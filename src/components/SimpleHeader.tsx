import React from "react";

interface HeaderProps {
  title: string;
}

const SimpleHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <section
      className={
        "w-full flex  flex-col items-start py-10 px-2 bg-white rounded-xl"
      }
    >
      <div className="w-full md:min-h-[150px] items-center justify-center md:justify-start flex gap-3 mx-auto">
        <h2 className="text-3xl font-semibold ">{title}</h2>
      </div>
    </section>
  );
};

export default SimpleHeader;
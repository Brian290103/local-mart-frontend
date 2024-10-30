import React from "react";
import Image from "@/assets/vectors/hurrah.webp";
import Logo from "@/components/Logo.tsx";
import LocationForm from "@/components/forms/LocationForm.tsx";

const HomePage: React.FC = () => {
  return (
    <section className={"bg-slate-100 w-full py-10 px-2"}>
      <section
        className={
          "grid grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-2xl overflow-hidden max-w-5xl w-full py-10 p-5 mx-auto"
        }
      >
        <article className="flex flex-col items-center justify-center">
          <Logo direction={"col"} />
          <LocationForm />
        </article>
        <article className="flex items-center justify-center">
          <img
            src={Image}
            alt="Welcome to LocalMart"
            className="max-h-[300px]"
          />
        </article>
      </section>
    </section>
  );
};

export default HomePage;
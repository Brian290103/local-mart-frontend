import React from "react";
import Image from "@/assets/vectors/hurrah.webp";
import Logo from "@/components/Logo.tsx";
import { RegisterForm } from "@/components/forms/RegisterForm.tsx";

const RegisterPage = () => {
  return (
    <section className={"bg-slate-100 w-full py-10 px-2"}>
      <section
        className={
          "grid grid-cols-1 md:grid-cols-2 gap-3 bg-white rounded-2xl overflow-hidden max-w-5xl w-full py-10 p-5 mx-auto"
        }
      >
        <article className="flex md:order-2 gap-3 flex-col items-center justify-center">
          <Logo />
          <span className="text-xl py-4  font-semibold uppercase">
            Register{" "}
          </span>
          <RegisterForm />
        </article>
        <article className="flex md:order-1 items-center justify-center">
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

export default RegisterPage;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import Logo from "@/components/Logo.tsx";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { getAppName } from "@/lib/utils.ts";
import { SocialList } from "@/data/social-list.ts";

const helpSections = [
  {
    name: "Customer Help Center",
    items: [
      {
        name: "How do I pay?",
        link: "/help/how-to-pay",
      },
      {
        name: "Bidding",
        link: "/help/bidding",
      },
      {
        name: "How to apply for a refund?",
        link: "/help/refund",
      },
      {
        name: "How long does the order take?",
        link: "/help/order-duration",
      },
      {
        name: "Forgot password?",
        link: "/help/forgot-password",
      },
    ],
  },
  {
    name: "Shopping Guide",
    items: [
      {
        name: "How do I pay?",
        link: "/help/how-to-pay",
      },
      {
        name: "Bidding",
        link: "/help/bidding",
      },
      {
        name: "How to apply for a refund?",
        link: "/help/refund",
      },
      {
        name: "How long does the order take?",
        link: "/help/order-duration",
      },
      {
        name: "Forgot password?",
        link: "/help/forgot-password",
      },
    ],
  },
  {
    name: "Business",
    items: [
      {
        name: "How do I pay?",
        link: "/help/how-to-pay",
      },
      {
        name: "Bidding",
        link: "/help/bidding",
      },
      {
        name: "How to apply for a refund?",
        link: "/help/refund",
      },
      {
        name: "How long does the order take?",
        link: "/help/order-duration",
      },
      {
        name: "Forgot password?",
        link: "/help/forgot-password",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={"px-2 py-10 flex flex-col gap-10"}>
      <Separator />
      <section className="w-full flex flex-col gap-3 mx-auto items-center">
        <span className="text-primary uppercase text-sm">Get Started Now</span>
        <h2 className="text-3xl font-semibold text-center max-w-xl">
          Discover Local Deals. Join LocalMart Today!
        </h2>
        <p className="text-center w-full max-w-4xl">
          Experience the convenience of shopping locally with LocalMart. Connect
          with your community, explore amazing deals, and find everything you
          need right at your fingertips. Whether you’re searching for fresh
          produce, handmade crafts, or unique local services, LocalMart has it
          all!
        </p>
        <div className="pt-8">
          <Link to={"/login"}>
            <Button>Get Started Now</Button>
          </Link>
        </div>
      </section>

      <Separator />

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-10">
        <article className="">
          <Logo direction={"col"} />
        </article>
        <article className="grid-cols-1 flex-col grid sm:grid-cols-2 md:grid-cols-3 gap-8 col-span-3">
          {helpSections.map((section, index) => (
            <div key={index} className={"flex flex-col gap-5"}>
              <span className="text-lg font-semibold">{section.name}</span>
              <ul className="flex flex-col gap-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.link}
                      className="flex items-center gap-2 hover:text-primary duration-300"
                    >
                      <ChevronDoubleRightIcon
                        className={"w-4 h-4 min-w-4 min-h-4"}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </section>

      <Separator />

      <section className="w-full text-sm flex items-center flex-col sm:flex-row justify-between gap-5">
        <article className="">
          &copy; {new Date().getFullYear()} {getAppName()}, Inc. All rights
          reserved.
        </article>

        <article className="flex gap-4 items-center">
          <ul className="flex items-center gap-2">
            {SocialList.map((item, index) => (
              <li key={index} className="flex">
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-6 h-6"
                  />
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
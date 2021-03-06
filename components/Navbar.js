import Link from "next/link";
import React from "react";
import DarkMode from "./UI/DarkMode";
import { HomeIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import NavData from "./NavbarData";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="lg:py-8 sm:py-6 py-4">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex justify-between items-center">
          <nav className="flex items-center space-x-3">
            <Link href="/">
              <a
                className="text-neutral-800 dark:text-neutral-50 inline-flex items-center justify-center border border-transparent focus:outline-2 focus:outline-transparent 
                focus:ring-2 focus:ring-pink-500 rounded-lg p-1"
              >
                <HomeIcon className="w-6 h-6" />
              </a>
            </Link>
            <div className="md:flex hidden items-center space-x-5">
              {NavData.map((navItem, index) => {
                return (
                  <Link href={`/${navItem.slug}`} key={index}>
                    <a
                      className={`text-neutral-800 dark:text-neutral-50 font-medium ${
                        router.pathname === `/${navItem.slug}` &&
                        "underline decoration-pink-500 underline-offset-4 decoration-2"
                      }`}
                    >
                      {navItem.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="flex space-x-4 items-center">
            <Link href="/">
              <a className="text-[#7289da]">
                <FaDiscord size={22} />
              </a>
            </Link>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

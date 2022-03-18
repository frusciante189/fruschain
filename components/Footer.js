import React from "react";
import { HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="lg:pb-16 sm:pt-6 sm:pb-12 pt-4 pb-8">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4 pt-8 border-t border-neutral-500">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Ana Sayfa</a>
            </Link>
            <Link href="/">
              <a
                className={`text-neutral-500 font-medium ${
                  router.pathname === `/egitimler` &&
                  "underline decoration-pink-500 underline-offset-4 decoration-2"
                }`}
              >
                Eğitimler
              </a>
            </Link>
            <Link href="/">
              <a
                className={`text-neutral-500 font-medium ${
                  router.pathname === `/blog` &&
                  "underline decoration-pink-500 underline-offset-4 decoration-2"
                }`}
              >
                Blog
              </a>
            </Link>
            <Link href="/">
              <a
                className={`text-neutral-500 font-medium ${
                  router.pathname === `/yolharitasi` &&
                  "underline decoration-pink-500 underline-offset-4 decoration-2"
                }`}
              >
                Yol Haritası
              </a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Youtube</a>
            </Link>
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Discord</a>
            </Link>
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Twitter</a>
            </Link>
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Github</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Guestbook</a>
            </Link>
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Newsletter</a>
            </Link>
            <Link href="/">
              <a className={`text-neutral-500 font-medium`}>Blabla</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

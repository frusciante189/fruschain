import React from "react";
import LatestCard from "./UI/LatestCard";
import Link from "next/link";

const LatestVideos = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-10 relative">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <h2 className="text-neutral-800 dark:text-neutral-50 text-4xl font-bold text-center">
            Son Videolar
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-lg font-medium text-center">
            Web3, Blockchain ve Front end teknolojileri hakkında son yazılar
          </p>
          <div className="mt-10">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <LatestCard />
              <LatestCard />
              <LatestCard />
            </div>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/">
                <a
                  className="inline-flex items-center justify-center text-neutral-800 dark:text-neutral-50 px-4 py-2 border rounded-lg dark:border-neutral-50 border-neutral-800
                    dark:focus:border-transparent focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-pink-500 transition-all transform duration-300 
                    ease-in-out"
                >
                  Tüm videolar
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;

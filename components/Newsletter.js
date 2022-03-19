import React from "react";

const Newsletter = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-10 relative">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center">
          <h1 className="text-4xl dark:text-neutral-50 text-neutral-800">
            Fruschain topluluğuna katılın!
          </h1>
          <p className="dark:text-neutral-500 text-neutral-400 mt-5">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="relative mt-14">
          <div className="absolute -inset-2 z-20">
            <div className="filter blur-lg dark:opacity-30 opacity-60 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-orange-400 w-full h-full"></div>
          </div>
          <div className="relative z-20">
            <input
              type="text"
              placeholder="Enter your email address"
              className="block w-full rounded-xl px-5 py-6 bg-neutral-800 dark:bg-neutral-50 border-neutral-500 focus:border-neutral-800 focus:outline-2 focus:outline-offset-2 
              dark:focus:outline-transparent focus:outline-neutral-800 text-neutral-50 dark:text-neutral-800
              "
            />
            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
              <button
                className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-neutral-50 dark:bg-neutral-800 px-8 py-4 text-base font-bold transition-all
              duration-300 ease-in-out transform sm:w-auto sm:py-3 dark:text-neutral-50 text-neutral-800 focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-pink-500"
              >
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

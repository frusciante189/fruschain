import React from "react";

const FAQ = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-10 relative">
      <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-12">
          <div className="">
            <p className="font-bold text-xs tracking-widest text-neutral-500">
              FAQ
            </p>
            <h2 className="mt-6 font-bold xl:text-5xl sm:text-4xl text-3xl text-neutral-800 dark:text-neutral-50">
              Discover the most common question
            </h2>
            <p className="sm:mt-8 mt-5 text-lg text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              ornare adipiscing nunc, est nec, neque aliquet maecenas mi. Lacus,
              pharetra aliquam.
            </p>
            <div className="relative hover:scale-[1.02] transition-all transform duration-300 group mt-20">
              <div className="absolute -inset-2">
                <div className="filter opacity-30 group-hover:opacity-40 transition-all transform duration-300 w-full h-full blur-lg rounded-2xl mx-auto bg-gradient-to-tr from-pink-400 via-orange-400 to-purple-400"></div>
              </div>
              <div className="shadow-lg dark:bg-neutral-800 bg-neutral-50 border dark:border-neutral-600 border-neutral-300 rounded-lg overflow-hidden relative">
                <div className="sm:py-8 sm:px-9 py-5 px-6">
                  <p className="text-neutral-800 dark:text-neutral-50 font-bold text-xl">
                    Does this theme supports plugins?
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-4 leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla mollitia totam magnam qui consequatur commodi
                    nesciunt, nisi error veritatis eaque!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="shadow-lg dark:bg-neutral-800 bg-neutral-50 border dark:border-neutral-600 border-neutral-300 rounded-lg overflow-hidden relative">
              <div className="sm:py-8 sm:px-9 py-5 px-6">
                <p className="text-neutral-800 dark:text-neutral-50 font-bold text-xl">
                  Does this theme supports plugins?
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 mt-4 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  mollitia totam magnam qui consequatur commodi
                </p>
              </div>
            </div>
            <div className="shadow-lg dark:bg-neutral-800 bg-neutral-50 border dark:border-neutral-600 border-neutral-300 rounded-lg overflow-hidden relative">
              <div className="sm:py-8 sm:px-9 py-5 px-6">
                <p className="text-neutral-800 dark:text-neutral-50 font-bold text-xl">
                  Does this theme supports plugins?
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 mt-4 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  mollitia totam magnam qui consequatur commodi
                </p>
              </div>
            </div>
            <div className="shadow-lg dark:bg-neutral-800 bg-neutral-50 border dark:border-neutral-600 border-neutral-300 rounded-lg overflow-hidden relative">
              <div className="sm:py-8 sm:px-9 py-5 px-6">
                <p className="text-neutral-800 dark:text-neutral-50 font-bold text-xl">
                  Does this theme supports plugins?
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 mt-4 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  mollitia totam magnam qui consequatur commodi nesciunt, nisi
                  error veritatis eaque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

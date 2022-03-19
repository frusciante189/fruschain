import React from "react";

const Steps = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-10 relative">
      <div className="max-w-5xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-12">
          <div className="col-span-3">
            <h2 className="tracking-tighter text-neutral-800 dark:text-neutral-50 md:text-5xl sm:text-4xl text-3xl font-bold">
              Aliquam lobortis diam, a, euismod enim, pharetra.
            </h2>
            <p className="mt-6 dark:text-neutral-400 text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quia eaque modi odit ipsa.
            </p>
          </div>
          <div className="col-span-2">
            <ol>
              <li className="pb-10 relative group">
                <div className="absolute top-2 left-2 ml-4 mt-[0.125rem] h-full w-px border dark:border-neutral-50 border-neutral-900">
                  <div className="absolute -inset-2">
                    <div className="filter opacity-30 group-hover:opacity-70 transition-all transform duration-300 w-full h-full blur-lg rounded-2xl mx-auto bg-gradient-to-tr from-pink-400 to-purple-400"></div>
                  </div>
                </div>
                <div className="flex items-start relative">
                  <span className="text-2xl border rounded-full flex items-center justify-center relative z-10 h-12 w-12 flex-shrink-0 dark:bg-neutral-50 bg-neutral-800 dark:text-neutral-800 text-neutral-50 transition-all transform duration-300">
                    1
                  </span>
                  <div className="flex flex-col min-w-0 ml-4 transition-all transform duration-300">
                    <h1 className="text-2xl dark:text-neutral-50 text-neutral-800">
                      First Step
                    </h1>
                    <p className="mt-[0.375rem] dark:text-neutral-400 text-neutral-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, obcaecati!
                    </p>
                  </div>
                </div>
              </li>
              <div className="relative group">
                <li className="pb-10 relative ">
                  <div className="absolute top-2 left-2 ml-4 mt-[0.125rem] h-full w-px border dark:border-neutral-50 border-neutral-900">
                    <div className="absolute -inset-2">
                      <div className="filter opacity-30 group-hover:opacity-70 transition-all transform duration-300 w-full h-full blur-lg rounded-2xl mx-auto bg-gradient-to-tr from-pink-400 to-purple-400"></div>
                    </div>
                  </div>
                  <div className="flex items-start relative">
                    <span className="text-2xl border rounded-full flex items-center justify-center relative z-10 h-12 w-12 flex-shrink-0 dark:bg-neutral-50 bg-neutral-800 dark:text-neutral-800 text-neutral-50 transition-all transform duration-300">
                      2
                    </span>
                    <div className="flex flex-col min-w-0 ml-4 transition-all transform duration-300">
                      <h1 className="text-2xl dark:text-neutral-50 text-neutral-800">
                        Second Step
                      </h1>
                      <p className="mt-[0.375rem] dark:text-neutral-400 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum, obcaecati!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pb-10 relative">
                  <div className="flex items-start relative">
                    <span className="text-2xl border rounded-full flex items-center justify-center relative z-10 h-12 w-12 flex-shrink-0 dark:bg-neutral-50 bg-neutral-800 dark:text-neutral-800 text-neutral-50 transition-all transform duration-300">
                      3
                    </span>
                    <div className="flex flex-col min-w-0 ml-4 transition-all transform duration-300">
                      <h1 className="text-2xl dark:text-neutral-50 text-neutral-800">
                        Third Step
                      </h1>
                      <p className="mt-[0.375rem] dark:text-neutral-400 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum, obcaecati!
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

import React from "react";
import GradientCard from "../components/UI/GradientCard";

const blog = () => {
  return (
    <section className="lg:py-6 sm:py-4 py-2">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-50 font-medium text-2xl">
            Blog
          </h1>
          <p className="lg:mt-10 mt-5 leading-7 text-neutral-800 dark:text-neutral-50">
            Brain dumps, explorations, and how-to guides. I write about
            different topics, such as design system, accessibility, start ups
            and user/dev experience.
          </p>
          <div className="mt-10">
            <h2 className="text-4xl dark:text-neutral-50 text-neutral-800 font-semibold">
              Öne Çıkan Postlar
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 mt-5 gap-6">
              <GradientCard />
              <GradientCard />
              <GradientCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;

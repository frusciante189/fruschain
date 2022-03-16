import React from "react";
import GradientCard from "../components/UI/GradientCard";
import Post from "../components/UI/Post";

const blog = () => {
  return (
    <section className="lg:py-6 sm:py-4 py-2">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-50 font-medium sm:text-2xl text-xl">
            Blog
          </h1>
          <p className="lg:mt-8 mt-5 leading-7 text-neutral-800 dark:text-neutral-50">
            Brain dumps, explorations, and how-to guides. I write about
            different topics, such as design system, accessibility, start ups
            and user/dev experience.
          </p>
          <div className="md:mt-14 mt-10">
            <h2 className="md:text-4xl sm:text-3xl text-2xl dark:text-neutral-50 text-neutral-800 font-semibold">
              Öne Çıkan Postlar
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 mt-5 gap-6">
              <GradientCard />
              <GradientCard />
              <GradientCard />
            </div>
            <div className="mt-12">
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;

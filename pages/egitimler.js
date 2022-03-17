import React from "react";
import Link from "next/link";
import data from "../components/data";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import VideoCard from "../components/UI/VideoCard";

const Egitimler = () => {
  return (
    <section className="lg:py-6 sm:py-4 py-2">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-50 font-medium sm:text-2xl text-xl">
            Eğitimler
          </h1>
          <p className="lg:mt-8 mt-5 leading-7 text-neutral-800 dark:text-neutral-50">
            Brain dumps, explorations, and how-to guides. I write about
            different topics, such as design system, accessibility, start ups
            and user/dev experience.
          </p>
          <div className="md:mt-14 mt-10">
            <h2 className="md:text-4xl sm:text-3xl text-2xl dark:text-neutral-50 text-neutral-800 font-semibold">
              Kanal istatistikleri
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 mt-5 gap-6">
              <VideoCard />
              <VideoCard />
            </div>
            <div className="mt-12 space-y-8">
              {data.map((i, index) => {
                return (
                  <div className="" key={index}>
                    <h2 className="text-2xl dark:text-neutral-500 text-neutral-800 font-medium">
                      {i.title}
                    </h2>
                    <div className="mt-2">
                      {i.content.map((lesson, index) => {
                        return (
                          <Link href="/" key={index}>
                            <div className="py-2.5 pl-3 border-b flex justify-between cursor-pointer group hover:border-b-pink-500 transition-all transform duration-300">
                              <p className="dark:text-neutral-50 text-neutral-800 group-hover:text-pink-500 transition-all transform duration-300">
                                {lesson.item}
                              </p>
                              <ArrowCircleRightIcon className="w-6 h-6 dark:text-neutral-50 text-neutral-800 group-hover:text-pink-500 transition-all transform duration-300" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Egitimler;

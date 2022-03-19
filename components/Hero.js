import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16 sm:py-12 py-10 relative">
      <div className="max-w-3xl mx-auto lg:px-8 sm:px-6 px-4">
        <div>
          <div className="relative z-20">
            <p className="md:text-6xl text-5xl text-center leading-snug text-neutral-800 dark:text-neutral-50 font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-tl to-pink-500 from-purple-500">
                Fruschain
              </span>{" "}
              ile Full-Stack Web3 Developer
            </p>
            <div className="mt-10">
              <Link href="/">
                <div className="relative md:w-1/3 w-2/3 mx-auto cursor-pointer group">
                  <div className="absolute -inset-2 z-20">
                    <div className="filter blur-lg dark:opacity-30 opacity-60 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-orange-400 w-full h-full"></div>
                  </div>
                  <a
                    className="inline-flex text-lg font-medium items-center justify-center w-full py-2.5 rounded-xl text-center relative z-30 bg-neutral-800 
                  dark:bg-neutral-50 text-neutral-50 dark:text-neutral-800 group-hover:scale-105 transition-all duration-300 transform ease-in-out"
                  >
                    Topluluğa katıl
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="text-white space-y-10">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            laboriosam adipisci nostrum quae officiis. Quam repellendus totam
            aliquam saepe vitae?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            voluptatem nam eius voluptas dicta obcaecati?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            optio quam sequi neque mollitia, rerum quo, repudiandae ratione
            ipsum nesciunt tenetur suscipit harum dolorem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            dolorem nisi omnis quisquam dicta numquam repudiandae ducimus
            aliquam sapiente aut accusantium esse molestiae blanditiis
            repellendus in dolorum veritatis eaque quas quos odio.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

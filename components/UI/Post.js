import React from "react";

const Post = () => {
  return (
    <div className="relative group cursor-pointer">
      <div
        className="bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-orange-400 rounded-2xl absolute w-full h-full opacity-0 group-hover:opacity-30 z-[-1] transition-all duration-500
       ease-in-out transform"
      ></div>
      <div className="p-4">
        <h2 className="sm:text-xl text-lg font-medium text-neutral-800 dark:text-neutral-50 ">
          Tailwind CSSe giriş
        </h2>
        <p className="text-neutral-800 dark:text-neutral-400 mt-2.5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quasi
          natus corporis, provident temporibus placeat quidem dicta esse fugit
          velit.
        </p>
        <p className="text-neutral-800 dark:text-neutral-400 text-sm mt-2">
          March 16, 2022
        </p>
      </div>
    </div>
  );
};

export default Post;

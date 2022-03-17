import React from "react";
import Link from "next/link";

const VideoCard = () => {
  return (
    <Link href="/">
      <a className="rounded-xl bg-gradient-to-tl to-pink-500 from-purple-500 p-1 transition-all transform duration-300 hover:scale-[1.01]">
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg px-4 pb-4 pt-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-50 tracking-tight">
            Subscribers
          </h4>
          <p className="mt-2 text-3xl dark:text-neutral-400 text-neutral-500 font-medium">
            20,800
          </p>
        </div>
      </a>
    </Link>
  );
};

export default VideoCard;

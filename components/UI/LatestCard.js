import React from "react";
import Link from "next/link";

const LatestCard = () => {
  return (
    <Link href="/">
      <a
        className="rounded-xl p-1 transition-all transform duration-300 hover:scale-[1.01] 
            first:bg-gradient-to-tr first:from-pink-400 first:via-orange-400 first:to-purple-400 
            second:bg-gradient-to-r second:from-[#6EE7B7] second:via-[#3B82F6] second:to-[#9333EA]
            third:bg-gradient-to-tr third:from-lime-100 third:via-indigo-300 third:to-fuchsia-400
            fourth:bg-gradient-to-tr fourth:from-indigo-400 fourth:to-amber-400"
      >
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg px-4 sm:pb-6 pb-4 pt-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-50 tracking-tight">
            Ethereum ve Blockchain geleceği ve geçmişi
          </h4>
        </div>
      </a>
    </Link>
  );
};

export default LatestCard;

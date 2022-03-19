import Image from "next/image";
import React from "react";

const PathCard = () => {
  return (
    <div>
      <div className="lg:aspect-square aspect-video relative rounded-2xl overflow-hidden lg:max-h-full sm:max-h-[300px] mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-5 lg:text-left text-center">
        <h1 className="lg:text-xl text-neutral-800 dark:text-neutral-50">
          Junior başlangıç yolu
        </h1>
        <p className="mt-2 dark:text-neutral-400 text-neutral-500">
          Front-end geliştirmeye giriş ve web3 dünyası ile tanışma
        </p>
      </div>
    </div>
  );
};

export default PathCard;

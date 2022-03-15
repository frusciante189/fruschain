import React from "react";
import Provider from "../context/context";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Provider>
      <div className="bg-neutral-50 dark:bg-neutral-800 transition-all transform duration-300 ease-in-out antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
      <svg
        className="pointer-events-none fixed top-0 left-0 z-50 inline-block h-full w-full translate-y-0 overflow-hidden align-middle opacity-25 brightness-[70%] contrast-[30%] 
      filter"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".85"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
    </Provider>
  );
};

export default Layout;

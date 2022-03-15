import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useProvider } from "../../context/context";

const DarkMode = () => {
  const { theme, setTheme } = useProvider();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={themeHandler}
      className="inline-flex items-center justify-center text-neutral-800 dark:text-neutral-50 p-1.5 border rounded-lg dark:border-neutral-50 border-neutral-800
      dark:focus:border-transparent focus:border-transparent focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-pink-500 transition-all transform duration-300 
      ease-in-out"
    >
      {theme === "light" ? (
        <>
          <MoonIcon className="w-4 h-4" />
          <span className="sr-only">Moon Icon</span>
        </>
      ) : (
        <>
          <SunIcon className="w-4 h-4" />
          <span className="sr-only">Sun Icon</span>
        </>
      )}
    </button>
  );
};

export default DarkMode;

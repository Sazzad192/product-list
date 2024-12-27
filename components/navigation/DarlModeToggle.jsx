"use client";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update the <html> class for dark mode
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center border-none md:border rounded-full p-0 md:p-4 md:bg-gray-200 md:dark:bg-gray-800 md:shadow-lg transition-all duration-300"
    >
      {theme === "light" ? (
        <BsMoon className="w-5 h-5 text-gray-800 dark:text-yellow-300" />
      ) : (
        <BsSun className="w-5 h-5 text-yellow-500 dark:text-gray-200" />
      )}
    </button>
  );
}

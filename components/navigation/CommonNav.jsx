"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/const";
import UserInfoBox from "./UserInfoBox";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileSidebar from "./MobileSidebar";
import DarkModeToggle from "./DarlModeToggle";

export default function CommonNav() {
  const pathName = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="border-b w-full">
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center px-5 lg:px-32 py-3">
        {/* Logo Section */}
        <div className="flex justify-start items-center gap-2 col-span-1">
          <HiOutlineMenuAlt1
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="w-6 h-6 text-primary-500 block md:hidden"
          />
          <Link href="/" aria-label="Go to homepage">
            <h1 className="text-2xl text-primary-500 dark:text-primary-400 font-bold">
              PRODUCT
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="col-span-1 hidden md:flex gap-2 md:gap-9 items-center justify-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`${
                  pathName === link.href
                    ? "text-primary-400 bg-primary-100"
                    : "text-stone-600 dark:text-stone-300"
                } hover:text-primary-400 p-2 font-medium rounded-full text-sm`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Info Section */}
        <div className="col-span-1 flex justify-end gap-4">
          <DarkModeToggle />
          <UserInfoBox />
        </div>
      </nav>
    </header>
  );
}

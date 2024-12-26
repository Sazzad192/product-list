"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { navLinks } from "@/const";

export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  function closeModal() {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute bg-primary-400 left-0 top-0 z-[9999] flex flex-col bg-custom-gradient h-screen w-full md:w-1/2 lg:w-60 overflow-y-hidden text-sm duration-300 ease-linear transform transition-transform ${
        sidebarOpen ? "translate-x-0 lg:static" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center gap-2 px-[21px] py-3">
        <Link href="/" aria-label="Go to homepage">
          <h1 className="text-2xl text-white font-bold">Property</h1>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden bg-white rounded-md px-2 py-1"
        >
          <HiArrowSmallLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col justify-between h-full text-white">
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear flex-1 border-t">
          <nav className="mt-4">
            <ul className="mb-6 flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.href}>
                  {
                    <Link
                      onClick={() => closeModal()}
                      href={item.href}
                      className={`group relative flex items-center gap-2.5 py-2 pl-5 duration-300 ease-in-out hover:bg-white hover:text-primary-500 ${
                        pathname === item.href &&
                        "bg-white shadow-md text-primary-500 border-r-primary-500 border"
                      }`}
                    >
                      {item.title}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

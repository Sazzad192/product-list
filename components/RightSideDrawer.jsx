"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function RightSideDrawer({ open, setOpen, children, ...props }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 z-10" />
        </Transition.Child>

        <div className="fixed inset-0 z-20 flex justify-end items-center">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full sm:w-[90%] lg:w-[400px] h-full flex-col overflow-y-auto bg-white">
              <div className="flex justify-between p-4 items-center border-b border-gray-200">
                <Link href="/" aria-label="Go to homepage">
                  <h1 className="text-2xl text-primary-500 dark:text-primary-400 font-bold">
                    PRODUCT
                  </h1>
                </Link>
                <button
                  className="text-white dark:text-black"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>x
                </button>
              </div>
              <div className="px-4 flex-grow">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default RightSideDrawer;

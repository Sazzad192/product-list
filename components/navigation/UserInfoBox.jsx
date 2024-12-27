import { Fragment } from "react";
import Button from "../buttons/Button";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function UserInfoBox() {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center gap-4 px-2 py-1 border bg-white rounded-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-1 focus:ring-offset-primary-600">
          <BsPersonCircle className="w-8 h-8 text-primary-500" />
          <div className="flex flex-col justify-start items-start max-w-[50px] md:max-w-[90px]">
            <p className="text-sm font-semibold text-gray-700 truncate max-w-full">
              K.M. Sazzadul Islam
            </p>
            <p className="text-orange-500 font-medium text-xs truncate max-w-full">
              Admin
            </p>
          </div>
          <MdOutlineKeyboardArrowDown className="object-cover  w-[18px] h-[18px] text-gray-700" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 w-full mt-2 origin-top-right rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div>
                  <Button className="flex items-center w-full gap-2 p-2 text-sm font-medium text-center text-gray-600 bg-white dark:bg-white hover:bg-gray-100">
                    Logout
                    <AiOutlineLogout className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

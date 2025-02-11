import logoThreebond from "../../assets/Logo_threebond.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-opacity-55 backdrop-blur-md px-5 py-4 bg-white shadow-md flex justify-between items-center lg:px-10">
        <button
          onClick={() => setIsOpen(true)}
          className="capitalize text-sm font-light text-black lg:text-base lg:text-slate-700 hover:text-black duration-75"
        >
          menu
        </button>
        {/* head */}
        <Link to={'/'} className="cursor-pointer">
          <img
            src={logoThreebond}
            alt="logo-threebond"
            className="max-w-32 lg:max-w-36"
          />
        </Link>
        <div className="flex items-center gap-8">
          <h1 className="hidden cursor-pointer capitalize text-sm font-light text-slate-700 lg:block lg:text-base hover:text-black duration-75">
            search
          </h1>
          <Link
            to={"#"}
            className="hidden cursor-pointer capitalize text-sm font-light text-slate-700 lg:block lg:text-base hover:text-black duration-75"
          >
            account
          </Link>
          <Link
            to={"/login"}
            className="cursor-pointer capitalize text-sm font-light text-slate-700 lg:text-base hover:text-black duration-75"
          >
            login
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 flex z-50 lg:inset-2"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-64 bg-gray-800 text-white p-6 relative rounded-e-lg shadow-lg backdrop-blur-md bg-opacity-45 lg:rounded-md lg:flex lg:flex-col lg:justify-between lg:w-80"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <IoMdClose size={24} />
              </button>
              <ul className="space-y-4 mt-8 lg:mt-24 lg:space-y-8 flex flex-col justify-center items-start">
                <li className="text-white text-lg font-light lg:text-xl lg:font-normal hover:scale-95 duration-150 ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="text-white text-lg font-light lg:text-xl lg:font-normal hover:scale-95 duration-150 ease-in-out cursor-pointer">
                  Store
                </li>
                <li className="text-white text-lg font-light lg:text-xl lg:font-normal hover:scale-95 duration-150 ease-in-out cursor-pointer">
                  Search
                </li>
                <li className="text-white text-lg font-light lg:text-xl lg:font-normal hover:scale-95 duration-150 ease-in-out cursor-pointer">
                  Account
                </li>
              </ul>
              <p className="mt-8 text-sm text-gray-300 lg:text-center lg:text-gray-200">
                © 2025 Threebond. All rights reserved.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarComponent;

"use client";
import React, { useState } from "react";
import { links } from "../../../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { menuVariantsType } from "../../../types";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMenu = () => {
    setOpen((prevState) => !prevState);
  };
  // const menuVariants: any = {
  //   initial: {
  //     scaleX: -0,
  //   },
  //   animate: {
  //     scaleX: 1,
  //     transition: {
  //       duration: 0.4,
  //       ease: [0.12, 0, 0.39, 0],
  //     },
  //   },
  //   exit: {
  //     scaleX: -0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };
  return (
    <>
      {/* basic reload spring animation */}
      <motion.div
        className="flex p-4 border-b-[2px]  border-black items-center justify-between"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className=" p-4 border-neutral-100 items-center justify-between">
          <div className="text-xl font-mono font-semibold tracking-wide">
            <AnimatePresence>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                initial={{
                  x: -300,
                  opacity: 0,
                }}
                animate={{ x: 0, scale: 3, opacity: 1 }}
                exit={{ scale: 3, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </motion.svg>
            </AnimatePresence>
          </div>
        </div>

        <nav className="px-2 gap-2 text-lg">
          <div className="hidden md:flex lg:flex">
            {links.map((link) => (
              <Link key={link.source} href={link.source}>
                <ul className="px-3 py-1 mr-1 transition-all duration-300 hover:bg-gray-700 rounded-md hover:text-white cursor-pointer">
                  {link.name}
                </ul>
              </Link>
            ))}
          </div>
          <div className="-mr-0 flex md:hidden lg:hidden xl:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="items-center border-black border-[2px] p-2 transition-all duration-400 hover:bg-gray-700 hover:text-white"
            >
              {open ? <TfiClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="py-1 origin-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{
              y: -50,
              opacity: -1,
              transition: { duration: 0.1 },
            }}
            // variants={menuVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          >
            {links.map((link) => (
              <Link key={link.source} href={link.source} onClick={handleMenu}>
                <motion.ul
                  className="py-1 text-md md:hidden lg:hidden flex justify-center px-8 transition-all duration-300 hover:text-white cursor-pointer hover:bg-gray-700"
                  layout
                >
                  {link.name}
                </motion.ul>
              </Link>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;

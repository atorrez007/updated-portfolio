"use client";
import React, { useState } from "react";
import { links } from "../../../lib/data";
import { motion, AnimatePresence, delay } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { menuVariantsType } from "../../../types";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMenu = () => {
    setOpen((prevState) => !prevState);
  };
  // const menuVariants: menuVariantsType = {
  //   initial: {
  //     scaleX: -0,
  //   },
  //   animate: {
  //     scaleX: 1,
  //     transition: {
  //       duration: 0.4,
  //       // ease: [0.12, 0, 0.39, 0],
  //     },
  //   },
  //   exit: {
  //     scaleX: -0,
  //   },
  // };
  return (
    <>
      {/* basic reload spring animation */}
      <motion.div
        className="flex p-4 border-b-[2px]  border-black items-center justify-between"

        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
      >
        <div className=" p-4 border-neutral-100 items-center justify-between">
          <div className="text-xl font-mono font-semibold tracking-wide">
            Logo
          </div>
        </div>

        <nav className="px-2 gap-2 text-lg">
          <div className="hidden md:flex lg:flex">
            {links.map((link) => (
              <ul
                className="px-3 py-1 mr-1 transition-all duration-300 hover:bg-gray-700 rounded-md hover:text-white cursor-pointer"
                key={link.source}
              >
                {link.name}
              </ul>
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
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit={{ x: 0, opacity: 0 }}
            // variants={menuVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
          >
            {links.map((link) => (
              <motion.ul
                key={link.name}
                className="py-1 text-md md:hidden lg:hidden flex justify-center px-8 transition-all duration-300 hover:text-white cursor-pointer hover:bg-gray-700"
                layout
              >
                {link.name}
              </motion.ul>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;

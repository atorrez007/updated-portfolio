"use client";
import React, { useState } from "react";
import { links } from "../../../lib/data";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handleMenu = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <motion.div
      className="flex p-4 border-b-[1px] border-neutral-100 items-center justify-between"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className=" p-4  border-neutral-100 items-center justify-between">
        <div className="text-xl font-mono font-semibold tracking-wide">
          Logo
        </div>
      </div>
      <nav className="px-2 gap-2 text-lg">
        <div className="hidden  md:flex lg:flex">
          {links.map((link) => (
            <motion.ul
              className="px-3 py-1 transition-all duration-300 hover:text-white cursor-pointer"
              key={link.hash}
            >
              {link.name}
            </motion.ul>
          ))}
        </div>
        <div className="-mr-0 flex  md:hidden lg:hidden xl:hidden">
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
  );
}

export default Header;

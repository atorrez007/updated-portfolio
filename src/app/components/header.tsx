"use client";
import React from "react";
import { links } from "../../../lib/data";
import { motion } from "framer-motion";

function Header() {
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
      <nav className="hidden sm:flex px-2 gap-2 text-lg">
        <div className="flex">
          {links.map((link) => (
            <motion.ul className="px-2 py-1" key={link.hash}>
              {link.name}
            </motion.ul>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}

export default Header;

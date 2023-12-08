"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../components/card";
export default function Projects() {
  return (
    <motion.section
      className="px-5 flex flex-col "
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 flex xs:justify-center md:justify-start">
        These are projects that I am currently working on.
      </div>
      <div>
        <div className="mt-10 flex justify-center">
          <Card />
        </div>
      </div>
    </motion.section>
  );
}

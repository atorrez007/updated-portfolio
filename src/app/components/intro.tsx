"use client";
import Image from "next/image";
import React from "react";
import image2 from "../assets/porftolio-image2.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <motion.div
        className="flex px-5 mt-[7rem] justify-center 
        xs:flex-col-reverse xs:justify-center xs:items-center 
        md:flex-row md:justify-between"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-5">Testing</div>
        <div>
          <Image
            className="rounded-xl shadow-xl"
            height={350}
            width={350}
            alt="armando-portrait"
            src={image2}
            quality={100}
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import image2 from "../assets/porftolio-image2.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <motion.div
        className="flex mt-[7rem] justify-center xs:justify-center sm:justify-center md:justify-end"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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

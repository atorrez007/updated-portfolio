"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import image2 from "../assets/porftolio-image2.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  const [dark, setDark] = useState<boolean>(true);
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 0.9,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  return (
    <section>
      <motion.div
        className="flex px-5 mt-12  justify-center 
        xs:flex-col-reverse xs:justify-center xs:items-center 
        md:flex-row md:justify-between"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="text-center md:text-left">
            <h1 className="group my-4 text-3xl font-semibold dark:text-terminalGreen">
              Hey, I&apos;m Armando
              {dark ? (
                <motion.span variants={cursorVariants} animate="blinking">
                  _
                </motion.span>
              ) : (
                <motion.span>.</motion.span>
              )}
            </h1>
          </div>
          <h1 className="my-3  text-lg text-center md:text-left pr-6">
            I&apos;m a software developer located in the sunny, SoCal area.
            I&apos;m currently building full-stack web and mobile applications.
          </h1>
          <h1 className="my-3 text-lg text-center md:text-left pr-6">
            I&apos;m also interested in contributing to open-source projects. If
            you&apos;re interested in collaborating or want some help, please
            reach out! 👇🏻
          </h1>
        </div>
        <div className="flex">
          <Image
            className="rounded-xl shadow-xl"
            height={350}
            width={350}
            alt="armando-portrait"
            src={image2}
            quality={100}
            priority={true}
          />
        </div>
      </motion.div>
    </section>
  );
}

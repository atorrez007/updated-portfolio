"use client";
import React from "react";
import { motion } from "framer-motion";
import { testProjectData } from "../../../lib/data";
import Card from "../components/card";

export default function Projects() {
  return (
    <motion.section
      className="px-5 flex flex-col mb-10"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-10 my-8 text-lg flex xs:justify-center md:justify-center lg:justify-start">
        These are projects that I am currently working on.
      </div>

      <div className="mt-2 w-auto container m-auto grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
        {/* {projectData.map((data) => {
            return <Card key={data.id} {...data} />;
          })} */}
        {testProjectData.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </motion.section>
  );
}

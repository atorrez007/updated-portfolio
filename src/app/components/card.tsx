import React from "react";
import { motion } from "framer-motion";

function Card({ title, description, tags }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      // create shadow delay
      className="max-w-md shadow-md shadow-slate900 hover:shadow-md   dark:hover:shadow-md dark:hover:shadow-terminalGreen
      dark:border-terminalGreen border-2"
    >
      <div className="px-6 py-4 w-auto">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="">{description}</p>
        <div className="grid grid-cols-5 gap-1">
          {tags.map((skill: any) => {
            return (
              <span key={skill} className="mt-10 bg-gray-200 font-semibold ">
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;

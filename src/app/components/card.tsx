import React from "react";
import { motion } from "framer-motion";

function Card({ title, description, tags }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="max-w-md shadow-md shadow-slate-900 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-terminalGreen dark:border-terminalGreen border-slate-800 border-2"
    >
      <div className="flex flex-col h-full">
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="flex-grow">{description}</p>
        </div>
        <div className="flex w-auto">
          {tags.map((skill: any) => (
            <span
              key={skill}
              className="flex justify-center items-center font-semibold px-6 py-3"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;

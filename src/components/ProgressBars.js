import React from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const ProgressBars = () => {
  const languages = [
    { name: "JavaScript", value: 80 },
    { name: "Python", value: 60 },
    { name: "C/C++", value: 60 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 70 },
    { name: "ReactJS", value: 80 },
    { name: "NodeJS", value: 60 },
    { name: "ExpressJS", value: 60 },
    { name: "MongoDB", value: 40 },
    { name: "PHP", value: 40 },
    { name: "SQL", value: 40 },
  ];

  return (
    <section className="lg:section min-h-[85vh] lg:min-h-[78vh] flex items-center pt-60 lg:pt-80 ">
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto"
        id="progressbars"
      >
        <h1 className="font-semibold text-2xl mb-4 mt-60 lg:mt-0 md:mt-0">
          Programming Language Knowledge
        </h1>
        <div className="w-full">
          {languages.map((language) => (
            <div key={language.name} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">{language.name}</span>
                <span className="text-white-600 text-xs">
                  {language.value}%
                </span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                  <div
                    style={{ width: `${language.value}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgressBars;

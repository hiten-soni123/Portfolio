import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section min-h-[85vh] lg:min-h-[78vh] flex items-center mb-80 lg:mb-32  " id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="lg:flex flex-col gap-y-10  lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen "
        >
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[400px] 
          mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 text-justify">
            I completed my B.E. in Computer Science and Engineering at the Acharya Institute of Technology, Bangalore, in the year 2023.
            </h3>
            <p className="mb-6 text-justify">
            In the realm of technology, I possess expertise in a range of programming languages, including JavaScript, C++, Python and C. My proficiency extends to a spectrum of front-end tools, encompassing HTML/CSS, Bootstrap, Tailwind CSS and ReactJS. On the backend, I show proficiency in SQL, Node.js, MongoDB and ExpressJS. My thorough understanding of computer science fundamentals has allowed me to hone my skills in data structures, database management systems, artificial intelligence and machine learning.
            </p>
            <p className="mb-6 text-justify">I'm thrilled to have you here. While I may be a fresh graduate, my journey into the world of coding started four years ago and I've been on an exciting learning adventure ever since.</p>
            {/* starts */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12  hidden sm:inline-flex  md:inline-flex">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project
                  <br />
                  Completed
                </div>
              </div>
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied
                  <br />
                  Clients
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-4 items-center">
              <a href="https://drive.google.com/file/d/1tpgdhgluiaKjXvrApBPT3OsgWvjvtpSA/view?usp=sharing">
              <button className="btn btn-lg">Download CV</button></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

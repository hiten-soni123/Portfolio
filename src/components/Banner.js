import React from "react";
// images
import Image from "../assets/avatar.svg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
// type of animation
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:mb-40"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] mx-auto "
            >
              <span className="text-gradient font-secondary  uppercase leading-[0.8] ">
                Hiten
              </span>{" "}
              <span className="font-secondary font-semibold uppercase leading-[0.8] ">
                Patadiya
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full-stack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a  href="mailto:hitenpatdiya1234@gmail.com"> <button className="btn btn-lg" >Contact me</button></a>
             
              <a href="#" className="text-gradient btn-link">
                Download CV
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-7 max-w-max mx-auto lg:mx-4"
            >
              <a href="https://www.instagram.com/hiten__soni/">
                <FaInstagram />
              </a>
              <a href="mailto:hitenpatdiya1234@gmail.com">
                <MdOutlineMailOutline />
              </a>
              <a href="https://github.com/hiten-soni123">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hiten-patadiya-4bb0a5202/">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          {/* text */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

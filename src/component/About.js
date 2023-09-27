import React from "react";
import { motion } from "framer-motion";
import image2 from "../assests/imran.jpeg";

const About = () => {
  return (
    <div className="container-fluid tw-bg-blue-950" id="About">
      <div className="container">
        <div className="">
          <h6 className="text-center tw-text-slate-400 tw-pt-20">
            Get To Know Me
          </h6>
          <h3 className="tw-text-center tw-text-blue-600">About</h3>
        </div>
        <br />
        <div>
          <h5 className="tw-text-center tw-text-slate-400">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h5>
          <br />
        </div>
        <br />
        <div className="row">
          <div className="col-sm-6 tw-flex tw-justify-center">
            <div className="tw-bg-blue-800 tw-p-2 sm:tw-w-72 sm:tw-h-[310px] tw-w-44 tw-h-44  tw-rounded-lg tw-shadow-sm">
              <motion.img
                initial = {{
                  x:-300,
                  opacity:1

                }}
                whileInView={{
                  x:0,
                  opacity:1,
                  rotate:360,
                  }}
                  transition={{
                    stiffness:50,
                    duration:0.8,
                    ease:"easeOut"

                  }}
                src={image2}
                className="tw-shadow-md sm:tw-w-72 sm:tw-h-72 tw-w-44 tw-h-44 tw-rounded-xl tw-object-contain tw-opacity-[0.4]"
                alt=""
              />
            </div>
          </div>
          <div className="col-6 mb-5">
            <h3 className="text-start head1 m-sm-1 tw-text-slate-400">
              Get to know me!{" "}
            </h3>
            <br />
            <p className="text-white tw-w-4/5 tw-shadow-lg tw-rounded-lg tw-text-lg tw-tracking-wide tw-bg-blue-900 tw-p-4">
              <i class="fa-solid fa-arrow-right tw-text-violet-600"></i> &nbsp;
              Currently I am Student and I am pursuing Bachelor of Technology
              from IILM College Of Engineering and Technology. I have
              proficiency in Html, CSS , Javascript,C++, SQL,I have experience
              with javascript library such as React and database such as MySQL.
            </p>
            <br />
        

            <p className="text-white tw-w-3/5 tw-shadow-xl tw-rounded-xl tw-text-lg tw-bg-blue-900 tw-p-4 tw-tracking-wide">
              {" "}
              <i class="fa-solid fa-arrow-right tw-text-violet-600"></i>{" "}
              &nbsp;I'm open to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to contact me.{" "}
            </p>
            <br />
            <motion.a
              initial={{
                y: -100,
                opacity: 1,
              }}
              whileInView={{
                ys: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              href="#Contact"
              className="tw-w-32 tw-px-3 tw-py-3 tw-border tw-border-blue-600 tw-rounded-lg tw-bg-blue-600 tw-text-slate-300 tw-no-underline hover:tw-text-white"
            >
              Contact
            </motion.a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Music from "../assests/music.png";
import Momix from "../assests/momix.png";
import Quiz from "../assests/Quiz.png";
import pg from "../assests/pglife.png";
import todo from "../assests/todo.png";
import bussiness from "../assests/bussiness.png";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="container-fluid tw-bg-blue-950" id="Projects">
      <div className="container-sm">
        <div className="row-sm">
          <h6 className="tw-text-gray-400 text-center">My Recent Work</h6>
          <h3 className="tw-text-blue-400 tw-text-center">Projects</h3>
          <motion.div
            initial={{ y: 100, opacity: -4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
            className="col-sm-12 tw-flex tw-gap-14 tw-flex-wrap tw-p-4 tw-justify-around mt-5 pb-5"
          >
            <div className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2">
              <motion.img
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={Music}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">Music Player</h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  target="_blank"
                  transition={{ ease: "linear", duration: 0.5 }}
                  href="https://github.com/Ir786921"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://mannumania.netlify.app/"
                  target="_blank"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                >
                  View
                </motion.a>
              </div>
            </div>
            <motion.div
              initial={{ y: 100, opacity: -4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2 tw-shadow-lg"
            >
              <motion.img
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={Momix}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">Video Player App</h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  target="_blank"
                  transition={{ ease: "linear", duration: 0.5 }}
                  href="https://github.com/Ir786921/Momix"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://momixapp.netlify.app/"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  target="_blank"
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                >
                  View
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: -4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2"
            >
              <motion.img
                src={Quiz}
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">Simple Quiz App</h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  target="_blank"
                  transition={{ ease: "linear", duration: 0.5 }}
                  href="https://github.com/Ir786921/simpleQuizapp"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://ir786921.github.io/simpleQuizapp/"
                  target="_blank"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                >
                  View
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: -4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2 tw-pb-3"
            >
              <motion.img
                src={pg}
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">Pg Life</h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  target="_blank"
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  href="https://github.com/Ir786921/pglife"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://ir786921.github.io/pglife/"
                  target="_blank"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                >
                  View
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: -4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2 tw-pb-3"
            >
              <motion.img
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={todo}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">Todo List</h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  target="_blank"
                  href="https://github.com/Ir786921/TODOjavascript"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://ir786921.github.io/TODOjavascript/"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                  target="_blank"
                >
                  View
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: -4 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
              className="tw-w-96 tw-rounded-2xl tw-bg-blue-900 tw-flex tw-justify-center tw-flex-col tw-p-2 tw-pb-3"
            >
              <motion.img
                initial={{
                  x: 0,
                  y: 0,
                }}
                whileHover={{
                  scale: 0.8,
                }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={bussiness}
                alt=""
                className="tw-rounded-lg"
              />
              <br />
              <h4 className="text-center tw-text-gray-400">
                Bussiness Directory
              </h4>
              <br />
              <div className="tw-flex tw-gap-10 tw-justify-center tw-mb-3">
                <motion.a
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  href="https://github.com/Ir786921"
                  className="tw-p-2 tw-rounded-lg tw-bg-blue-600 tw-no-underline tw-text-xl tw-text-black"
                  target="_blank"
                >
                  Github
                </motion.a>
                <motion.a
                  href="https://mannumania.netlify.app/"
                  target="_blank"
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ ease: "linear", duration: 0.5 }}
                  className="tw-px-4 tw-py-2 tw-no-underline tw-rounded-lg tw-bg-blue-600 tw-text-xl tw-text-black"
                >
                  View
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;

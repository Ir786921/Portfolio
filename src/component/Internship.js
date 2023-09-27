import React from "react";
import Image1 from "../assests/saleforce.png";
import { motion } from "framer-motion";

const Internship = () => {
  return (
    <div className="container-fluid tw-bg-blue-950 tw-text-slate-300 " id="Internship">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6 className="mt-5 tw-text-center tw-text-gray-400">what skill i have</h6>
            <h3 className=" mt-0 text-center tw-text-blue-600">Internship</h3>
            <br />
            <br />
            <div className="row">
              <motion.div className="col-sm-5 tw-bg-blue-900 tw-rounded-xl tw-p-2 mb-5" initial={{y:100,opacity:-4}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", duration:0.6}} >
                <div className="mt-3">
                  <h4 className="text-center">Frontend Skills</h4>
                </div>
                <br />

                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; HTML
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Experienced</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; CSS
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>
                </div>
                <br />

                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; Javascript
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; Bootstrap
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>
                </div>
                <br />

                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; Tailwind
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; React
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>
                </div>
              </motion.div>

              <motion.div className="offset-sm-2 col-sm-5 tw-bg-blue-900 tw-rounded-xl tw-p-2 mb-5" initial={{y:100,opacity:-4}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", duration:0.6}}>
                <div className="mt-3">
                  <h4 className="text-center">Other Skill</h4>
                </div>
                <br />

                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; C
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Experienced</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; C++
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>
                </div>
                <br />

                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; SQL
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp;Github
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Intermediate</span>
                  </p>
                </div>
                <br />
                <div className="d-flex justify-content-around">
                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp; Nodejs
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Beginner</span>
                  </p>

                  <p className="sm:tw-text-xl tw-text-md">
                    <i class="fa-solid fa-circle-check tw-text-blue-600 sm:tw-text-lg tw-text-sm"></i>
                    &nbsp;Mongodb
                    <br />
                    <span className="tw-ml-7 tw-text-sm">Beginner</span>
                  </p>
                </div>
              </motion.div>
            </div>
            <br />
            <br />

            <motion.div className="row-sm tw-mb-10 tw-pb-5" initial={{y:100,opacity:-4}} whileInView={{y:0 , opacity:1}} transition={{ease:"easeIn", duration:0.6}}>
              <div className="offset-sm-1 col-sm-10 tw-bg-blue-900 tw-p-2 tw-rounded-xl">
                <h4 className="text-center tw-mt-4">Interrnships</h4>
                <br />
                <br />
                <div class="tw-flex tw-h-full tw-pl-4">
                  <div class="tw-bg-blue-700 tw-w-1"></div>
                  <div class="tw-pl-[20px] tw-relative">
                    <p className='before:tw-content-[""] before:tw-rounded-full before:tw-flex before:tw-justify-center before::tw-m-3 before:tw-bg-black before:tw-h-6 before:tw-w-6 before:tw-absolute before:tw-top-22 before:tw-left-[-12]'>
                      <h5>Saleforce Developer Catalyst</h5>
                      <span className="tw-text-lg">05/2022 - 07/2022</span>
                      <p className="tw-text-lg">
                       worked on industrial guided projects to gain a additional hand on experience
                      </p>
                    </p>
                    <br />
                    <p className='before:tw-content-[""] before:tw-rounded-full before:tw-flex before:tw-justify-center before::tw-m-3 before:tw-bg-black before:tw-h-6 before:tw-w-6 before:tw-absolute before:tw-top-22 before:tw-left-[-12]'>
                      <h5>CodingRaja Technologies</h5>
                      <span className="tw-text-lg">08/2022 - 09/2022</span>
                      <p  className="tw-text-lg">
                        As a intern i was assigned task of building music player
                        using html Javascript and css and i have build it which
                        i have showcase in project section
                      </p>
                    </p>
                    <br />
                    <p className='before:tw-content-[""] before:tw-rounded-full before:tw-flex before:tw-justify-center before::tw-m-3 before:tw-bg-black before:tw-h-6 before:tw-w-6 before:tw-absolute before:tw-top-22 before:tw-left-[-12]'>
                      <h5>Celebal Technologies</h5>
                      <span className="tw-text-lg">06/2022 - 08/2022</span>
                      <p className="tw-text-lg">
                        learn Javascript library React and its importance concept such as hooks router lazy loading and apply these concept by building todo list app 
                      </p>
                    </p>
                    <br />
                    <p className='before:tw-content-[""] before:tw-rounded-full before:tw-flex before:tw-justify-center before::tw-m-3 before:tw-bg-black before:tw-h-6 before:tw-w-6 before:tw-absolute before:tw-top-22 before:tw-left-[-12]'>
                      <h5>Microsoft Future Ready Talent</h5>
                      <span className="tw-text-lg">04/2022 - 06/2022</span>
                      <p className="tw-text-lg">
                        learn how to deploy website on microsoft azure and also about various web technology and Azurebot and github 
                      </p>
                    </p>
                  </div>
                </div>
             
                  {/* <p className='before:tw-content-["."] before:tw-rounded-full before:tw-flex before:tw-justify-center before::tw-m-3 before:tw-bg-black before:tw-h-full before:tw-w-3'></p> */}
                  
                 
                  
                
               
                
               
               
               
              </div>
              <div className="offset-sm-1"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
